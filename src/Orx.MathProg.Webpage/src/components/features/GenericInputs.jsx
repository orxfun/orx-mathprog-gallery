import Code from "../Code";

export default function GenericInputs() {
    const codeParDef = `    ParD2 w = Parameter("w").Represents("weight of arc (i,j)").HasIndices(i, j).HasValues(weights);
`;
    const codeComplete = `    double[][] completeWeightsMatrix = ...;
    var weights = new FunVec2<double>(completeWeightsMatrix);
`;
    const codeLazy = `    double computeWeightBetweenNodes(int i, int j) = ...;
    var weights = new FunVec2<double>(computeWeightBetweenNodes);
`;
    const codeUnit = `    var weights = new FunVec2<double>(1);
`;
    const codeOftenZero = `    double getEdgeWeight(int i, int j) => (i == t && j == s) ? -1 : 0;
    var weights = new FunVec2<double>(getEdgeWeight);
`;

    return (
        <div>
            <img src='./img/morphism.png' title='lego by Pham Duy Phuong Hung from <a href="https://thenounproject.com/browse/icons/term/lego/" target="_blank" title="lego Icons">Noun Project</a>'></img>

            <div className="centered">
                <p>
                    We often decide on which graph representation to use.
                    Although this decision is to be made, not necessarily while modeling.
                </p>
                <p>
                    Further, mathematical programming provides abstraction in the form of special cases.
                    One model can represent many real life problems.
                </p>
                <p>
                    Can we use the same model for different data representations or special cases?
                </p>

                <hr />
                <p>
                    Consider the minimum cost network flow (mcnf) problem.
                </p>
                <div className="list">
                    <p>
                        mcnf reduces to the shortest path problem with infinite capacities and unit edge costs.
                    </p>
                    <p>
                        We can set all edge weights to 0,
                        and add an edge t to s with a weight of -1
                        to convert it into the maximum flow problem.
                    </p>
                    <p>
                        With the graph being a bipartition,
                        it can represent the assignment problem.
                    </p>
                </div>

                <p>
                    We can mathematically define various real life problems as the mcnf problem.
                </p>
                <p>
                    <code>Orx.MathProg</code> models allow achieving this abstraction
                    via <a href="https://github.com/orxfun/orx-fun-funvec" target="blank">functional definitions</a> of sets and parameters; i.e., inputs.
                </p>
            </div>

            <div className="generic-inputs-examples">
                <div>
                    <p>
                        In many cases, we might have an in-memory complete weights matrix.
                    </p>
                    <Code code={codeComplete} className={'code-block'} />
                </div>

                <div>
                    <p>
                        Or we might be lazy if if we don't want to allocate memory.
                    </p>
                    <Code code={codeLazy} className={'code-block'} />
                </div>

                <div>
                    <p>
                        If we want to minimize the number of edges in a shortest path problem, all we need is unit edge weights.
                    </p>
                    <Code code={codeUnit} className={'code-block'} />
                </div>

                <div>
                    <p>
                        In a max-flow problem, we need 0 weights except for one special edge (t, s).
                    </p>
                    <Code code={codeOftenZero} className={'code-block'} />
                </div>

            </div>

            <div className="centered">
                <p>
                    We can represent all these variants as a <code>FunVec2&lt;double&gt;</code>
                    which can construct our parameter <code>w</code>.
                    One model can conveniently represent many problems.
                </p>
            </div>
            <Code code={codeParDef} className={'code-block'} />

        </div>
    )
}
