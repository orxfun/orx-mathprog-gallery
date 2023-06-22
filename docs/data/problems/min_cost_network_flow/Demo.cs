using Orx.MathProg.Solvers;

namespace Orx.MathProg.Gallery.MinCostNetworkFlowProblem;

public static class Demo
{
    public static async Task RunExample()
    {
        // adjacency-list is one of the input variants that the model is generic over
        int n = 4;
        int source = 0;
        int sink = 3;
        double demand = 100;
        var nodes = Enumerable.Range(0, n);

        var adjacencyList = new (int Head, double Capacity, double Weight)[n][];
        adjacencyList[0] = new (int, double, double)[2] { (1, 50.0, 3.0), (2, 60.0, 2.0) };
        adjacencyList[1] = new (int, double, double)[2] { (2, 60.0, 1.0), (3, 70.0, 4.0) };
        adjacencyList[2] = new (int, double, double)[1] { (3, 80.0, 2.0) };
        adjacencyList[3] = new (int, double, double)[0];

        var tails = nodes
            .Select(j =>
            {
                return adjacencyList.Select((x, i) => (x, i))
                    .Where(xi => xi.x.Any(y => y.Head == j))
                    .Select(y => y.i)
                    .ToArray();
            })
            .ToArray();
        var heads = (int i) => adjacencyList[i].Select(x => x.Head);

        Dictionary<int, int>[] outIndexOfHead = nodes
            .Select(i =>
            {
                return adjacencyList[i].Select((x, index) => (x, index))
                    .ToDictionary(x => x.x.Head, x => x.index);
            })
            .ToArray();
        var weights = (int i, int j) =>
        {
            int indexOfJ = outIndexOfHead[i][j];
            return adjacencyList[i][indexOfJ].Weight;
        };
        var edgeCapacities = (int i, int j) =>
        {
            int indexOfJ = outIndexOfHead[i][j];
            return adjacencyList[i][indexOfJ].Capacity;
        };

        Input input = new(n, tails, heads, weights, edgeCapacities, demand, source, sink);

        // use the model to document
        var model = new Model(input);
        model.MathModel.LogToConsole();
        model.MathModel.WriteModelHtml("model.html");
        model.MathModel.WriteModelLaTeX("model.tex");
        model.MathModel.WriteModelMarkdown("model.md");


        // solve with the desired solver
        var result = await model.Run(new Cplex());
        // or
        result = await model.Run(new Scip());
        // etc.


        // process output
        if (result.IsNone)
            Console.WriteLine("Cannot transport the demand.");
        else
        {
            var output = result.Unwrap();
            Console.WriteLine("total cost = {0}", output.TotalCost);
            foreach (var flow in output.Flows)
            {
                Console.WriteLine("* flow on edge ({0}, {1}) = {2}",
                    flow.Key.i, flow.Key.j, flow.Value);
            }
        }
    }
}
