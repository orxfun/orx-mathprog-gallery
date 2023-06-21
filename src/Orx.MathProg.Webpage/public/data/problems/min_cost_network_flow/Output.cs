namespace Orx.MathProg.Gallery.MinCostNetworkFlowProblem;

public record Output(double TotalCost, Dictionary<(int i, int j), double> Flows);
