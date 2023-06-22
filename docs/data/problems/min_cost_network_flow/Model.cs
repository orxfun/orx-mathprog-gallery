namespace Orx.MathProg.Gallery.MinCostNetworkFlowProblem;

public class Model
{
    readonly VarD2 x;
    public readonly MathModel MathModel;

    public Model(Input input)
    {
        // init
        var (n, tails, heads, weights, edgeCapacities, demand, s, t) = input;
        double getB(int nodeIndex)
        {
            if (nodeIndex == s) return demand;
            if (nodeIndex == t) return -demand;
            return 0.0;
        }

        // sets
        Set j = Set("j").HasElementsUntil(n);
        Set i = Set("i").DependsOn(j).HasElements(j => tails[j]);
        Set k = Set("k").DependsOn(j).HasElements(j => heads[j]);

        // variables
        x = Variable("x").Represents("amount of flow on arc (i, j)")
            .HasIndices(i, j).IsContinuous()
            .WithBounds(0.0, edgeCapacities);

        // parameters
        ParD0 d = Parameter("d").Represents("demand").HasValue(demand);
        ParD2 w = Parameter("w").Represents("weight of arc (i,j)").HasIndices(i, j).HasValues(weights);
        ParD1 b = Parameter("b").Represents("node balance").HasIndices(i).HasValues(new(getB), "demand if i=s; -demand if i=t; 0 o/w");

        // model
        Constraint flowBalance = key("flowbal") | "flow balance constraints"
            | forall(j)
            | sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == b[j];

        Objective minCost = key("dist") | "minimize total cost of flow"
            | minimize
            | sum(over(j, k), w[j, k] * x[j, k]);

        MathModel = MathModel.New("MCNF - minimum-cost network flow")
            .WithObjective(minCost)
            .HasConstraints(flowBalance);
    }

    // generic over solvers
    public async Task<Opt<Output>> Run(ISolver solver)
    {
        var result = await solver.Solve(MathModel);

        if (result.IsErr || !result.Unwrap().IsFeasible)
            return None<Output>();

        var solution = result.Unwrap();
        var flows = solution.VarIndicesAndValuesOf(x).Unwrap();
        var totalCost = solution.ObjectiveValue.Unwrap();

        return Some(new Output(totalCost, flows));
    }
}
