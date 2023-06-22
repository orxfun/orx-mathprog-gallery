namespace Orx.MathProg.Gallery.KnapsackProblem;

public record Output(double TotalValue, double TotalWeight, HashSet<int> PackedItems)
{
    public void LogToConsole()
    {
        var fc = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Green;

        Console.WriteLine($"-- {nameof(KnapsackProblem)} Output --");
        Console.WriteLine($"Number of packed items = {PackedItems.Count}");
        Console.WriteLine($"Packed items           = {{{string.Join(", ", PackedItems)}}}");
        Console.WriteLine($"Total knapsack weight  = {TotalWeight}");
        Console.WriteLine($"Total knapsack value   = {TotalValue}");


        Console.ForegroundColor = fc;
    }
}
