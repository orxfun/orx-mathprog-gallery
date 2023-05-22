import CodeFromFile from "../CodeFromFile";

export default function Console(props) {
    const { problem } = props;
    const file = `data/problems/${problem}/model.png`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div>
                Once the mathematical model is defined, there are several ways to document it.
                The following can be created by simply calling:
                <p>
                    <code>Model.MathModel.LogToConsole()</code>
                </p>
            </div>
            <div className="img"><img src={file} /></div>
        </div>
    );
}
