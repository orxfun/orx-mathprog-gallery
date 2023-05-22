using Orx.MathProg.Solvers;

namespace Orx.MathProg.Gallery.NetworkFlow.ShortestPathProblem;

public class Output
{
    public readonly List<int> Path;
    public readonly double ShortestDistance;

    // output from feasible solution
    public Output(MathModelSolution solution, VarD2 x, int source, int sink)
    {
        // shortest distance
        ShortestDistance = solution.ObjectiveValue.Unwrap();

        // shortest path
        var solnX = solution.VarIndicesAndValuesOf(x).Unwrap();
        Path = new();
        int current = sink;
        Path.Add(current);
        while (current != source)
        {
            int previous = solnX.First(x => x.Key.Item2 == current && x.Value > .99).Key.Item1;
            Path.Add(previous);
            current = previous;
        }
        Path.Reverse();
    }
}
