using Playground;

var demos = new Demo[]
{
    Demo.New(Orx.MathProg.Gallery.KnapsackProblem.Demo.RunExample),
    Demo.New(Orx.MathProg.Gallery.MinCostNetworkFlowProblem.Demo.RunExample),
    Demo.New(Orx.MathProg.Gallery.ShortestPathProblem.Demo.RunExample),
};


var fc = Console.ForegroundColor;
var writeLn = (string txt) => Console.WriteLine(txt);
var write = (string txt) => Console.Write(txt);
var readLn = () => Console.ReadLine();
var resetColor = () => Console.ForegroundColor = fc;
var setYellow = () => Console.ForegroundColor = ConsoleColor.Yellow;
var setRed = () => Console.ForegroundColor = ConsoleColor.Red;

while (true)
{
    setYellow();
    writeLn("Available demos:");
    foreach (var (demo, i) in demos.Select((demo, i) => (demo, i)))
        Console.WriteLine($"{i}\t{demo.ShortName()}");

    write("\nEnter the number of the demo to execute: ");
    resetColor();

    string? input = readLn();
    if (int.TryParse(input, out int number) && number >= 0 && number < demos.Length)
        await demos[number].DemoFunction();
    else
    {
        setRed();
        writeLn("Invalid demo number.");
        resetColor();
    }
    writeLn("\n\n-----------------------------------------------------------\n");
}
