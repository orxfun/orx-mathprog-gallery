export default function Definition(props) {
    const { problem } = props;
    const file = `data/problems/${problem}/definition.html`;
    return (
        <iframe src={file} className="problem-page fade-in" ></iframe>
    );
}
