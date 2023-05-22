export default function Builders() {
    return (
        <div>
            <img src='./img/builder.png'></img>

            <div className="centered">
                <p>
                    Never noticed until a scala developer defending the dot notation
                    mentioned the significance of an ide's auto-completion in this preference.
                </p>

                <p>
                    Together with type-safe builder pattern,
                    it lets us avoid complex constructors
                    and provides easy to read & write definitions.
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
