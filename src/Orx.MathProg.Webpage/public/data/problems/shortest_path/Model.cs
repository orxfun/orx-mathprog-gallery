namespace Orx.MathProg.Gallery.ShortestPathProblem;

public class Model
{
    readonly Input Input;
    readonly VarD2 x;
    public readonly MathModel MathModel;

    public Model(Input input)
    {
        Input = input;
        var (n, tails, heads, weights, s, t) = input;
        double getB(int nodeIndex)
        {
            if (nodeIndex == s) return 1.0;
            if (nodeIndex == t) return -1.0;
            return 0.0;
        }

        // Concise Version
        {
            Set j = Set("j").HasElementsUntil(n);
            Set i = Set("i").DependsOn(j).HasElements(j => tails[j]);
            Set k = Set("k").DependsOn(j).HasElements(j => heads[j]);

            ParD2 w = Parameter("w").HasIndices(i, j).HasValues(weights);
            ParD1 b = Parameter("b").HasIndices(i).HasValues(new(getB));

            VarD2 x = Variable("x").HasIndices(i, j).IsContinuous().IsNonnegative();

            Constraint flowBalance = forall(j) | sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == b[j];
            Objective minDist = minimize | sum(over(j, k), w[j, k] * x[j, k]);

            MathModel = MathModel.New().WithObjective(minDist).HasConstraints(flowBalance);
        }

        // Documented Version
        {
            // sets
            Set j = Set("j").HasElementsUntil(n);
            Set i = Set("i").DependsOn(j).HasElements(j => tails[j]);
            Set k = Set("k").DependsOn(j).HasElements(j => heads[j]);

            // variables
            x = Variable("x").Represents("1 if (i,j) is on the shortest path; 0 o/w")
                .HasIndices(i, j).IsContinuous().IsNonnegative();

            // parameters
            ParD2 w = Parameter("w").Represents("weight of arc (i,j)").HasIndices(i, j).HasValues(weights);
            ParD1 b = Parameter("b").Represents("node balance").HasIndices(i).HasValues(new(getB), "1 if i=s; -1 if i=t; 0 o/w");

            // model
            Constraint flowBalance = key("flowbal") | "flow balance constraints"
                | forall(j)
                | sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == b[j];

            Objective minDist = key("dist") | "minimize total path distance"
                | minimize
                | sum(over(j, k), w[j, k] * x[j, k]);

            MathModel = MathModel.New("SPP")
                .WithObjective(minDist)
                .HasConstraints(flowBalance);
        }
    }

    // generic over solvers
    public async Task<Opt<Output>> Run(ISolver solver)
    {
        var result = await solver.Solve(MathModel);
        var solution = result.Unwrap();
        return SomeIf(solution.IsFeasible,
            () => new Output(solution, x, Input.Source, Input.Sink));
    }
}
