namespace Orx.MathProg.Gallery.NetworkFlow.ShortestPathProblem;

public static class Toys
{
    public static Model GetModelAdjacencyMatrix()
    {
        double inf = 10000;
        int n = 4;
        int source = 0;
        int sink = 3;

        // adjacency matrix
        var adjMatWeights = new double[][]
        {
                new double[] { inf, 3, 2, inf },
                new double[] { inf, inf, 1, 4 },
                new double[] { inf, inf, inf, 2 },
                new double[] { inf, inf, inf, inf },
        };
        var tails = (int j) => Enumerable.Range(0, n);
        var heads = tails;
        var input = new Input(n, tails, heads, adjMatWeights, source, sink);

        return new Model(input);
    }
    public static async Task RunWithAdjacencyMatrix(ISolver solver)
    {
        Console.WriteLine("Solving for input type: adjacency-matrix");

        double inf = 10000;
        var model = GetModelAdjacencyMatrix();
        
        var result = await model.Run(solver);
        if (result.IsNone || result.Unwrap().ShortestDistance >= inf)
            Console.WriteLine("Not reachable.");
        else
        {
            var output = result.Unwrap();
            Console.WriteLine("shortest path: {0} with distance {1}",
                string.Join("->", output.Path), output.ShortestDistance);
        }
        Console.WriteLine();
    }
    
    public static Model GetModelEdgesList()
    {
        int n = 4;
        int source = 0;
        int sink = 3;

        var edges = new Dictionary<(int Tail, int Head), double>
            {
                { (0, 1), 3 },
                { (0, 2), 2 },
                { (1, 2), 1 },
                { (1, 3), 4 },
                { (2, 3), 2 },
            };
        var tails = Enumerable.Range(0, n)
            .Select(j => edges.Keys.Where(e => e.Head == j).Select(e => e.Tail).ToArray())
            .ToArray();
        var heads = Enumerable.Range(0, n)
            .Select(i => edges.Keys.Where(e => e.Tail == i).Select(e => e.Head).ToArray())
            .ToArray();
        var weights = (int i, int j) => edges[(i, j)];
        var input = new Input(n, tails, heads, weights, source, sink);

        return new Model(input);
    }
    public static async Task RunWithEdgesList(ISolver solver)
    {
        Console.WriteLine("Solving for input type: edges-list");

        var model = GetModelEdgesList();

        var result = await model.Run(solver);
        if (result.IsNone)
            Console.WriteLine("Not reachable.");
        else
        {
            var output = result.Unwrap();
            Console.WriteLine("shortest path: {0} with distance {1}",
                string.Join("->", output.Path), output.ShortestDistance);
        }
        Console.WriteLine();
    }
}
