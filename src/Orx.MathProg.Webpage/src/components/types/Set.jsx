export default function Set() {
    return (
        <div>
            <div className="imgdiv">
                <img src='./img/types-set.png'></img>
            </div>
            <div className="types-content-explanation">
                <p>
                    Sets are the building blocks of the mathematical models.
                    They are used:
                </p>
                <ul>
                    <li>in variable and parameter definitions ➜ <code>Variable("x").HasIndices(<strong>i, j</strong>)</code></li>
                    <li>as constant scalars in mathematical expressions ➜ <code><strong>i</strong> * x[i, j]</code></li>
                    <li>as constant scalars in variable and parameter indices ➜ <code>w[<strong>i, j</strong>] * x[<strong>i, j</strong>]</code></li>
                    <li>for expanding constraints ➜ <code>forall(<strong>j</strong>) | x[i, j] ≤ M * y[j]</code></li>
                    <li>for expanding summation expressions ➜ <code>sum(over(<strong>j, k</strong>), w[j, k] * x[j, k])</code></li>
                </ul>
                <p>
                    Sets are created using a builder initialized by the <code>Set</code> function.
                    A definition can be provided with the optional <code>Represents</code> function of the builder.
                </p>
                <p>
                    Elements of the set can be defined
                    by <code>HasElementsUntil</code> ([0, ..., n)), <code>HasElementsIn</code> ([a, ..., b)) shorthands for common cases.
                    Otherwise, elements can explicitly be defined by the <code>HasElements</code> function.
                </p>
                <p>
                    Sets, elements of which depend on value of index of another set or sets can be created using the <code>DependsOn</code> function;
                    in which case, <code>HasElements</code> function becomes a function of the dependant sets.
                </p>
                <p>
                    Lastly, <code>Set j = i.Alias("j")</code> creates the set j as an alias of set i having exactly the same elements.
                </p>
            </div>
        </div>
    )
}
