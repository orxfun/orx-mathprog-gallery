import React from 'react'
import Code from '../Code';

export default function Reusable() {

    const codePieces = `    var flowbal =
        | forall(j)
        | sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == b[j];

    var capacity =
        | forall(j, k)
        | x[j, k] <= cap[j, k];

    var maxFlow = maximize | sum(over(j, k), x[j, k]);
    var minCost = minimize | sum(over(j, k), w[j, k] * x[j, k]);
    `;

    const codeModels = `    var modMaxFlow = MathModel.New()
        .WithObjective(maxFlow).HasConstraints(flowbal);
    var modMinCost =  MathModel.New()
        .WithObjective(minCost).HasConstraints(flowbal);

    var modCapacitatedMaxFlow = MathModel.New()
        .WithObjective(maxFlow).HasConstraints(flowbal, capacity);
    var modCapacitatedMinCost = MathModel.New()
        .WithObjective(minCost).HasConstraints(flowbal, capacity);

    `;

    return (
        <div>
            <img src='./img/lego.png' title='lego by Pham Duy Phuong Hung from <a href="https://thenounproject.com/browse/icons/term/lego/" target="_blank" title="lego Icons">Noun Project</a>'></img>

            <div className='centered'>
                <p>
                    Every type and expression used to build a <code>MathModel</code> is immutable.
                </p>
                <p>
                    Once defined, it will remain as it is.
                </p>
                <p>
                    This makes reusing pieces of a mathematical model safer and easier.
                </p>
            </div>

            <hr />
            <div className='two-cols'>
                <div>
                    <div className='centered'>
                        <p>Consider the following pairs of constraints and objectives.</p>
                    </div>
                    <Code code={codePieces} className={'code-block'} />
                </div>
                <div>
                    <div className='centered'>
                        <p>We can then simply create the following model variants.</p>
                    </div>
                    <Code code={codeModels} className={'code-block'} />
                </div>
            </div>

        </div>
    )
}
