using Orx.MathProg;
using static Orx.MathProg.MathProgExtensions;

// input - draft
int numNodes = 10;
var weights = new FunVec2<double>(1);
var capacities = new FunVec2<double>(1000);

// model
Set i = Set("i").Represents("nodes").HasElementsUntil(numNodes);
Set j = i.Alias("j");

ParD2 w = Parameter("w").Represents("weight of arc (i,j)").HasIndices(i, j).HasValues(weights);

VarD2 x = Variable("x").Represents("flow on edge (i,j)").HasIndices(i, j)
    .IsContinuous()
    .WithBounds(0, capacities);
