import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className='section'>
                <div>
                    <h2>what?</h2>
                    <p>
                        <code>Orx.Search.MathProg</code> is a strongly typed mathematical modeling library in
                        <img className='img-inline' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1280px-C_Sharp_wordmark.svg.png' alt='C#'></img>
                        which aims to get as close as possible to the mathematical programming style that
                        we are used to with paper and pen,
                    </p>
                    <p>
                        with a clean syntax avoiding
                        boilerplate,
                        verbose expressions,
                        complex constructors
                        and mutability
                        while providing the separation between model and data.
                    </p>
                </div>
                <img src='./img/book-and-pen.png' title='<a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Freepik - Flaticon</a>'></img>
            </div>

            <div className='section'>
                <img src='./img/variable-x.png'></img>
                <div>
                    <h2>for whom?</h2>

                    <p>
                        A mathematical programmer
                        who agrees with these design choices,
                    </p>
                    <p>
                        and possibly with strongly typed preferences.
                    </p>
                </div>
            </div>

            <div className='section'>
                <div>
                    <h2>why?</h2>
                    <br />
                    <div className='list'>
                        <p>
                            Concise, mostly one page/file models.
                        </p>
                        <p>
                            Simple, no more complex than mathematical programming.
                        </p>
                        <p>
                            Reusable & immutable model elements.
                        </p>
                        <p>
                            Generic over inputs,
                            one model to represent a problem together with its special cases.
                        </p>
                        <p>
                            Generic over solvers.
                        </p>
                        <p>
                            Builder pattern to conveniently build
                            model constructs.
                        </p>

                        <hr />
                        <p>
                            Auto generated html/LaTeX/markdown files
                            for documentation and communication.
                        </p>

                        <hr />
                        <div><p>All together, to allow for</p></div>
                        <p>
                            efficient and fun mathematical programming,
                        </p>
                        <p>
                            with less room for errors.
                        </p>

                    </div>
                </div>
                <img src='./img/checklist.png'></img>
            </div>
        </div>
    )
}
