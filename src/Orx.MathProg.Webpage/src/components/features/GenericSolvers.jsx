export default function GenericSolvers() {
    return (
        <div>
            <img src='./img/engine.gif'></img>
            <div className="centered">
                <p>
                    Nothing special here.
                </p>
                <p>
                    We don't think about the solver to be used while modeling a real life problem.
                </p>
                <p>
                    Likewise, a <code>MathModel</code> does not have solver specific terms or syntax.
                </p>
                <p>
                    Although not all solvers are supported right now,
                    the design allows adding them.
                    Available solvers will grow in time (see todos).
                </p>
            </div>
        </div>
    )
}
