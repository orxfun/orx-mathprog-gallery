export default function Simple() {
    return (
        <div>
            <img src='./img/cookbook.png' title='Cookbook by IGraphics from <a href="https://thenounproject.com/browse/icons/term/cookbook/" target="_blank" title="Cookbook Icons">Noun Project</a>'></img>

            <div className='centered'>
                <p>
                    The objective is to make coding a model not more complex than writing it on a paper.
                </p>

                <hr />
                <div className="list">
                    <p>
                        Need to know three types to build a
                        model <code>Set</code>, <code>Par</code> and <code>Var</code>.
                    </p>
                    <p>
                        And three more keywords <code>forall</code>, <code>sum</code> and <code>over</code>.
                    </p>
                    <p>
                        Then, write type checked mathematical expressions to create <code>Constraint</code>s and <code>Objective</code>s.
                    </p>
                    <p>
                        Compose them to build a <code>MathModel</code>.
                    </p>
                </div>
                <p>
                    That's it.
                </p>
            </div>
        </div>
    )
}
