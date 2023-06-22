using System.Diagnostics;

namespace Orx.MathProg.Gallery.KnapsackProblem;

public class Model
{
    readonly Input Input;
    public readonly MathModel MathModel;
    readonly VarD1 x;


    public Model(Input input)
    {
        Input = input;
        var (numItems, values, weights, capacity) = input;


        // Concise Version
        {
            Set i = Set("i").HasElementsUntil(numItems);

            ParD1 w = Parameter("w").HasIndices(i).HasValues(weights);
            ParD1 v = Parameter("v").HasIndices(i).HasValues(values);
            ParD0 C = Parameter("C").HasValue(capacity);

            VarD1 x = Variable("x").HasIndices(i).IsBinary();

            Constraint knapsackCapacity = sum(over(i), w[i] * x[i]) <= C;
            Objective maxValue = maximize | sum(over(i), v[i] * x[i]);

            MathModel = MathModel.New().WithObjective(maxValue).HasConstraints(knapsackCapacity);
        }


        // Documented Version
        {
            // sets
            Set i = Set("i").Represents("available items").HasElementsUntil(numItems);

            // variables
            x = Variable("x").Represents("1 if item i is packed in the knapsack; 0 otherwise")
                .HasIndices(i)
                .IsBinary();

            // parameters
            ParD1 w = Parameter("w").Represents("weight of item i")
                .HasIndices(i)
                .HasValues(weights);

            ParD1 v = Parameter("v").Represents("value of packing item i")
                .HasIndices(i)
                .HasValues(values);


            ParD0 C = Parameter("C").Represents("total capacity of the knapsack")
                .HasValue(capacity);

            // model
            Constraint knapsackCapacity = key("knapsack_capacity")
                | "total weight of packed items cannot exceed the knapsack capacity"
                | sum(over(i), w[i] * x[i]) <= C;

            Objective maxValue = key("knapsack_value")
                | "maximize total value of packed items in the knapsack"
                | maximize
                | sum(over(i), v[i] * x[i]);

            MathModel = MathModel.New("KP - Knapsack Problem")
                .WithObjective(maxValue)
                .HasConstraints(knapsackCapacity);
        }
    }


    // generic over solvers
    public async Task<Opt<Output>> Run(ISolver solver)
    {
        var result = await solver.Solve(MathModel);

        if (result.IsErr || !result.Unwrap().IsFeasible)
            return None<Output>();

        var solution = result.Unwrap();
        var packedItems = solution.VarIndicesAndValuesOf(x).Unwrap()
            .Where(kv => kv.Value > 0.99999)
            .Select(kv => kv.Key)
            .ToHashSet();

        var totalValue = solution.ObjectiveValue.Unwrap();
        Debug.Assert(Math.Abs(totalValue - packedItems.Select(i => Input.Values[i]).Sum()) < 1e-10);

        var totalWeight = packedItems.Select(i => Input.Weights[i]).Sum();
        Debug.Assert(totalWeight <= Input.Capacity);

        return Some(new Output(totalValue, totalWeight, packedItems));
    }
}
