import Problem from "./problem/Problem";

export default function Problems(props) {

    const { problem, problemView } = props;

    return (
        <Problem problem={problem.val()} problemView={problemView} />
    );
}
