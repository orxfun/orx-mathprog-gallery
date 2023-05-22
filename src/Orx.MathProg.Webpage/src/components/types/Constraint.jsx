export default function Constraint() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-constraint.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>
                    A constraint is mainly composed of two things:
                    (i) a <code>forall</code> expression defining the constraint expansion and
                    (ii) a constraint expression which is nothing but:
                </p>
                <ul>
                    <li>an expression on the left hand side,</li>
                    <li>the relation which is either == or &lt;= or &gt;=</li>
                    <li>and an expression on the right hand side.</li>
                </ul>
                <p>
                    <code>forall</code> expression is omitted if there is no expansion, such as in budget constraints,
                    eg, <code>sum(over(...), ...) &lt;= B</code>.
                    Optionally, a <code>key</code> and a definition can be given to the constraint for documentation.
                </p>
                <div className="list">
                    <p>
                        No rules on the orientation;
                        any of them can be constant or both can have expressions including variables.
                        Choice depends on better readability of the constraint.
                    </p>
                    <p>
                        Correctness of set dependencies is checked right upon construction without creating a model or running a solver.
                        The constraint <code>forall(i) | x[i, j] &lt;= b[i]</code>, for instance, will throw right at this line.
                    </p>
                </div>
            </div>
        </div>
    )
}
