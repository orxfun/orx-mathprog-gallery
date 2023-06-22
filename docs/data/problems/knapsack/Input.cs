namespace Orx.MathProg.Gallery.KnapsackProblem;

public record Input(
    int NumAvailableItems,
    FunVec1<double> Values,
    FunVec1<double> Weights,
    double Capacity);
