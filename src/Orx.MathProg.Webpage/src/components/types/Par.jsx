export default function Par() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-par.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>
                    Parameters represent constant numbers of a mathematical model;
                    the symbols which we can multiply a variable with and still have a linear term,
                </p>
                <p>
                    such as edge weights or capacities in a network problem,
                    demand in a transportation problem,
                    benefit of completing a project,
                    utility of a project-student assignment,
                    or the big-M in various problems.
                </p>
                <p>
                    There are actually different concrete parameter types for different dimensions; however, they are the same except for their dimensions:
                </p>
                <ul>
                    <li><code>ParD0 M</code> ➜ <code>x[i, j] ≤ <strong>M</strong> * y[j]</code></li>
                    <li><code>ParD1 b</code> ➜ <code>sum(over(k), x[j, k]) - sum(over(i), x[i, j]) == <strong>b[j]</strong></code></li>
                    <li><code>ParD2 w</code> ➜ <code>sum(over(j, k), <strong>w[j, k]</strong> * x[j, k])</code></li>
                    <li>so on so forth; simply ParD<strong>n</strong> takes n indices to produce a constant scalar.</li>
                </ul>
                <p>
                    All parameters can be created using a builder that is initialized by the <code>Parameter</code> function.
                    A definition can be provided with the optional <code>Represents</code> function of the builder. <code>HasIndices</code> function determines the dimension of the parameter.
                </p>
                <p>
                    Lastly, <code>HasValues</code> function finalizes the builder and creates the parameter.
                    In order to provide abstraction over inputs,
                    this method takes a <a href="https://github.com/orxfun/orx-fun-funvec">functional vector</a> of the corresponding dimension.
                </p>
            </div>
        </div>
    )
}
