import CodeFromFile from "../CodeFromFile";

export default function Input(props) {
    const { problem } = props;
    const codefile = `data/problems/${problem}/Input.cs`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div className="list">
                <p>
                    We define the <code>Input</code> of the problem.
                    Note that inputs of the problem are nothing but data and better when not mixed with the output.
                </p>
                <p>
                    A <code>record</code> is ideal for this purpose.
                    Further, <code>Deconstruct</code> method is often handy while building the model.
                </p>
                <p>
                    To allow using one model to represent multiple problems,
                    we make use of <a href="https://github.com/orxfun/orx-fun-funvec" target="blank">functional collections</a>.
                </p>
            </div>
            <CodeFromFile codefile={codefile} className={'code-block'} />
        </div>
    );
}
