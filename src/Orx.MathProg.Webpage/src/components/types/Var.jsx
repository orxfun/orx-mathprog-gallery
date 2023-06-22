import Code from "../Code";

const codeGood = `x[i, j + 1]
x[a[i], i * a[i + j]]  // indices can be any constant
x[i, j] * a[i]
x[i, j] / a[i]`;
const codeBad = `x[i]                   // wrong dimension
x[i, x[i, j]]          // indices cannot be variables
x[i, j] * x[i, j]      // nonlinear (quadratic in todos)
a[i] / x[i, j]         // nonlinear`;

export default function Var() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-var.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>Decision variables of the problem,
                    such as
                    amount of flow on an edge,
                    whether a facility will be opened or not.

                    Similar to parameters, there are concrete variable types for
                    different dimensions, such as <code>VarD0</code>, <code>VarD1</code>, <code>VarD2</code>, etc.
                </p>
                <p>
                    All variables can be created using a builder that is initialized by the <code>Variable</code> function.
                    Similar to parameters, <code>Represents</code> adds a definition and <code>HasIndices</code> defines the dimension.
                    Next, we need to define two more things.
                    If the variable <code>IsBinary</code>, both of them are defined at once.
                    Otherwise:
                </p>
                <div className="list">
                    <p>
                        First, we define whether the variable <code>IsContinuous</code> or <code>IsInteger</code>.
                    </p>
                    <p>
                        Second, the variable bounds.
                        We can use shorthands <code>IsNonnegative</code>, <code>IsUnbounded</code>, <code>IsNonpositive</code>, <code>IsBetweenZeroAndOne</code> for common bounds;
                        or define explicit bounds with <code>WithBounds</code> method.
                        In order to provide abstraction over inputs,
                        this method takes a <a href="https://github.com/orxfun/orx-fun-funvec">functional vector</a> of the corresponding dimension.
                    </p>
                </div>
                <p>
                    Consider a variable <code>VarD2 x</code>, a parameter <code>ParD1 a</code> and sets <code>i</code> and <code>j</code>.
                    Type safety prevents wrong expressions on the right to compile.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1em' }}>
                    <Code code={codeGood} className={'code-block good'} tight={true} />
                    <Code code={codeBad} className={'code-block bad'} tight={true} />
                </div>
            </div>
        </div>
    )
}
