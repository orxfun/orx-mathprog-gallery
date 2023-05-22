import { useState } from "react";
import Input from "./Input";
import Model from "./Model";
import Output from "./Output";
import Html from "./Html";
import Latex from "./Latex";
import Demo from "./Demo";
import Console from "./Console";
import Navi from "./Navi";
import Definition from "./Definition";
import './problem.css';

function getView(problem, problemView) {
    if (problemView === 'problem') return <Definition problem={problem} />;
    if (problemView === 'input') return <Input problem={problem} />;
    if (problemView === 'output') return <Output problem={problem} />;
    if (problemView === 'model') return <Model problem={problem} />;
    if (problemView === 'console') return <Console problem={problem} />;
    if (problemView === 'html') return <Html problem={problem} />;
    if (problemView === 'latex') return <Latex problem={problem} />;
    if (problemView === 'demo') return <Demo problem={problem} />;
}
export default function Problem(props) {
    const { problem, problemView } = props;
    const { dir, galleryClass } = problem;

    return (
        <div className="problem">
            <Navi problem={problem} problemView={problemView} />
            {getView(dir, problemView.val())}
        </div>
    )
}
