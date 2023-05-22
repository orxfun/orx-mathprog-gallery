export default function Objective() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-objective.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>
                    Finally, the objective of a model is an addition of two things:
                </p>
                <ul>
                    <li>a direction which is either <code>minimize</code> or <code>maximize</code></li>
                    <li>and a mathematical expression.</li>
                </ul>

                <p>
                    One valid (no) objective is the <code>minimize | 0</code>.
                    The objective in the above example is to minimize distance <code>minimize | sum(over(j, k), w[j, k] * x[j, k])</code>.
                </p>

                <p>
                    A <code>key</code> and a definition can optionally be bound to the objective for documentation.
                </p>
                <div className="list">
                    <p>
                        Similar to constraints, correctness of set dependencies is checked as soon as the objective function is defined.
                        The following objective, for instance, will immediately throw
                        without creating a model or running a solver: <code>maximize | sum(over(j), x[i, j])</code>.
                    </p>
                </div>
            </div>
        </div>
    )
}
