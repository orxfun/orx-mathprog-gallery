import CodeFromFile from "../CodeFromFile";

export default function Model(props) {
    const { problem } = props;
    const codefile = `data/problems/${problem}/Model.cs`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div className="list">
                <p>
                    We define the <code>Model</code> of the problem holding the mathematical model
                    as well as the variables necessary to create the output.
                </p>
                <p>
                    The primary goal of this library is
                    to resemble the mathematical programming code
                    as much as possible to the hand-written version.
                </p>
            </div>
            <CodeFromFile codefile={codefile} className={'code-block'} />
        </div>
    );
}
