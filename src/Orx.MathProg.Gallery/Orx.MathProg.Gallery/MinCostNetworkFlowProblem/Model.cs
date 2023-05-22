namespace Orx.Search.MathProg.Gallery.MinCostNetworkFlowProblem;

public class Model
{
    readonly Input input;
    readonly VarD2 x;
    public readonly MathModel MathModel;

    // generic over inputs
    public Model(Input input)
    {
        // init
        this.input = input;
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
            .HasIndices(i, j).IsContinuous().WithBounds(0.0, edgeCapacities);

        // parameters
        ParD0 d = Parameter("d").Represents("demand").HasValue(demand);
        ParD2 w = Parameter("w").Represents("weight of arc (i,j)").HasIndices(i, j).HasValues(weights);
        ParD1 b = Parameter("b").Represents("node balance").HasIndices(i).HasValues(new(getB), "demand if i=s; -demand if i=t; 0 o/w");

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
