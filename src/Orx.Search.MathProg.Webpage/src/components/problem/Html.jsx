export default function Html(props) {
    const { problem } = props;
    const file = `data/problems/${problem}/model.html`;
    return (
        <div className="problem-page problem-page-2 fade-in" >
            <div>
                <p>Another way to document the model is to create an html file by calling:</p>
                <p><code>Model.MathModel.WriteModelHtml("path.html")</code></p>
            </div>
            <div className="embed">
                <iframe src={file}></iframe>
            </div>
        </div>
    );
}
