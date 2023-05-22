export default function Latex(props) {
    const { problem } = props;
    const file = `data/problems/${problem}/model.pdf`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div>
                <p>Alternatively, a LaTeX file describing the model can be created by calling:</p>
                <p><code>Model.MathModel.WriteModelLaTeX("path.tex")</code></p>
            </div>
            <div className="embed">
                <iframe src={file} ></iframe>
            </div>
        </div>
    );
}
