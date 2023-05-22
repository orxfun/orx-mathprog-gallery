import CodeFromFile from "../CodeFromFile";

export default function Output(props) {
    const { problem } = props;
    const codefile = `data/problems/${problem}/Output.cs`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div className="list">
                <p>
                    Similar to the input,
                    we define the <code>Output</code> of the problem only as a readonly data.
                </p>
                <p>
                    A <code>record</code> is again convenient.
                </p>
                <p>
                    Or a regular <code>class</code> with readonly fields
                    together with a constructor from the mathematical model solution would be handy.
                </p>
            </div>
            <CodeFromFile codefile={codefile} className={'code-block'} />
        </div>
    )
}
