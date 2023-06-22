using System.Runtime.CompilerServices;

namespace Playground;

public record Demo(Func<Task> DemoFunction, string Name)
{
    public static Demo New(Func<Task> demoFunction, [CallerArgumentExpression("demoFunction")] string name = "")
        => new(demoFunction, name);

    public string ShortName()
    {
        return Name
            .Replace(nameof(Orx), string.Empty)
            .Replace(nameof(Orx.MathProg), string.Empty)
            .Replace(nameof(Orx.MathProg.Gallery), string.Empty)
            .Replace(nameof(Orx.MathProg.Gallery.ShortestPathProblem.Demo), string.Empty)
            .Replace(nameof(Orx.MathProg.Gallery.ShortestPathProblem.Demo.RunExample), string.Empty)
            .Replace(".", string.Empty);
    }
}
