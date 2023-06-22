namespace Orx.MathProg.Gallery.MinCostNetworkFlowProblem;

// input representation that is a generalization of
// adjacency matrix or edges list
public record Input(
    int N,
    FunVec1<IEnumerable<int>> Tails,
    FunVec1<IEnumerable<int>> Heads,
    FunVec2<double> Weights,
    FunVec2<double> EdgeCapacities,
    double Demand,
    int Source,
    int Sink)
{
    public (
        int N,
        FunVec1<IEnumerable<int>> Tails,
        FunVec1<IEnumerable<int>> Heads,
        FunVec2<double> Weights,
        FunVec2<double> EdgeCapacities,
        double Demand,
        int Source,
        int Sink) Deconstruct()
    {
        return (N, Tails, Heads, Weights, EdgeCapacities, Demand, Source, Sink);
    }
}
