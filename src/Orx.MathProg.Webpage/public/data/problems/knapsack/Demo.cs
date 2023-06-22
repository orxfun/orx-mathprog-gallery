using Orx.MathProg.Solvers;

namespace Orx.MathProg.Gallery.KnapsackProblem;

public static class Demo
{
    public static async Task RunExample()
    {
        // prepare demo input
        var values = new double[6]
        {
            1, 4, 7, 2, 6, 3
        };
        var weights = new List<double>(6)
        {
            3, 2, 9, 4, 7, 1
        };
        double capacity = 18;

        Input input = new(values.Length, values, weights, capacity);


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
        result.MatchDo(
            whenNone: () => Console.WriteLine("Something went wrong, we do not expect an infeasibility here."),
            whenSome: output => output.LogToConsole());
    }
}
