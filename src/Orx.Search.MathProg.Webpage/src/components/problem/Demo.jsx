import CodeFromFile from "../CodeFromFile";

export default function Demo(props) {
    const { problem } = props;
    const codefile = `data/problems/${problem}/Demo.cs`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div className="list">
                <p>
                    The example method below demonstrates the complete flow:
                </p>
                <p>
                    Firstly an <code>Input</code> is created and the corresponding <code>Model</code> is built.
                    This model is then used for creating html, LaTeX and markdown documents.
                </p>
                <p>
                    Finally, the model is solved with various solvers which can be initialized with their specific parameters.
                </p>
            </div>
            <CodeFromFile codefile={codefile} className={'code-block'} />
        </div>
    );
}
