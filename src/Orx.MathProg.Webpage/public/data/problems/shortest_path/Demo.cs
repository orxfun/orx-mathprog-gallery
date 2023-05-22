using Orx.MathProg.Solvers;

namespace Orx.MathProg.Gallery.NetworkFlow.ShortestPathProblem;

public static class Demo
{
    public static async Task RunExample()
    {
        // edge-list is one of the input variants that the model is generic over
        int n = 4;
        int source = 0;
        int sink = 3;
        var nodes = Enumerable.Range(0, n);

        var edges = new Dictionary<(int Tail, int Head), double>
            {
                { (0, 1), 3 },
                { (0, 2), 2 },
                { (1, 2), 1 },
                { (1, 3), 4 },
                { (2, 3), 2 },
            };

        var tails = nodes
            .Select(j => edges.Keys.Where(e => e.Head == j).Select(e => e.Tail).ToArray())
            .ToArray();
        var heads = nodes
            .Select(i => edges.Keys.Where(e => e.Tail == i).Select(e => e.Head).ToArray())
            .ToArray();
        var weights = (int i, int j) => edges[(i, j)];
        var input = new Input(n, tails, heads, weights, source, sink);


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
            Console.WriteLine("Not reachable.");
        else
        {
            var output = result.Unwrap();
            Console.WriteLine("shortest path: {0} with distance {1}",
                string.Join("->", output.Path), output.ShortestDistance);
        }
    }
}
