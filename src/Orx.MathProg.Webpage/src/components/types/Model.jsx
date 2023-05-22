export default function Model() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-model.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>
                    A mathematical model is simply the combination of
                </p>
                <ul>
                    <li>an objective function and</li>
                    <li>a set of constraints.</li>
                </ul>
                <p>
                    As well as the constraint set can be empty,
                    the objective function can be <code>minimize | 0</code>;
                    we can minimize zero in an unconstrained problem ツ
                </p>
                <p>
                    A name can optionally be given to the model in the <code>New</code> function;
                    and further, a definition of the problem can be provided using <code>Represents</code> function of the builder
                    for auto generated documentations.
                </p>
            </div>
        </div>
    )
}
