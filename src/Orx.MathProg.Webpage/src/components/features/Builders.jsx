export default function Builders() {
    return (
        <div>
            <img src='./img/builder.png'></img>

            <div className="centered">
                <p>
                    dot notation <strong>&</strong> ide auto-completion
                </p>
                <p>
                    <strong>&&</strong> type-safe builder pattern
                </p>
                <p>
                    let us avoid complex constructors
                    and provide easy to read & write definitions.
                </p>

                <p>
                    Just initialize the builder with the corresponding function
                    and keep picking from possible options
                    as the builder guides through.
                </p>
            </div>

            <img className="gif" src='./img/builder-pattern.gif'></img>
        </div>
    )
}
