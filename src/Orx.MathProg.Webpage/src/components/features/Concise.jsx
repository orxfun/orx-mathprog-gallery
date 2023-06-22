import Code from "../Code";

export default function Concise() {

    const codeShort = `    var j = Set("j").HasElementsUntil(n);
    var i = Set("i").DependsOn(j).HasElements(j => tails[j]);
    var k = Set("k").DependsOn(j).HasElements(j => heads[j]);

    var x = Variable("x").HasIndices(i, j).IsContinuous().WithBounds(0.0, edgeCapacities);

    var w = Parameter("w").HasIndices(i, j).HasValues(weights);
    var b = Parameter("b").HasIndices(i).HasValues(new(getB));

    var flowBalance = forall(j) | sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == b[j];
    var minDist = minimize | sum(over(j, k), w[j, k] * x[j, k]);

    var spp = MathModel.New().WithObjective(minDist).HasConstraints(flowBalance);
`;

    return (
        <div>
            <img src='./img/concise.png'></img>

            <div className="centered">
                <p>
                    Mathematical programs are concise, often require less than a page to  express a real life problem.
                </p>

                <div>
                    <p>
                        ❶ Easy to read and understand, all context in one place.
                    </p>
                    <p>
                        ❷ Less room for errors.
                    </p>
                </div>

                <hr />
                <p>
                    Below is a model of the shortest path problem
                    aiming to avoid writing anything other than the mathematical program.
                </p>

            </div>
            <Code code={codeShort} className={'code-block'} />
        </div>
    )
}
