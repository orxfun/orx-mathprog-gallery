import ConciseModel from './ConciseModel';
import './about.css'

export default function About({ conciseModels }) {

    const conciseModel = <ConciseModel conciseModels={conciseModels} />;

    return (
        <div className='about'>
            <div className='section'>
                <div>
                    <h2>what?</h2>
                    <p>
                        <code>Orx.MathProg</code> is a strongly typed mathematical modeling library in
                        <img className='img-inline' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1280px-C_Sharp_wordmark.svg.png' alt='C#'></img>
                        which aims to get as close as possible to writing the mathematical program with paper and pen.
                    </p>
                    <p>
                        In order to do so, it avoids boilerplate, verbose expressions, complex constructors and mutability
                    </p>
                    <p>
                        Finally, it emphasizes the separation of data from the model.
                    </p>
                </div>
                <img src='./img/book-and-pen.png' title='<a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Freepik - Flaticon</a>'></img>
            </div>

            <div className='section models'>
                {conciseModel}
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
                            Generic over inputs and generic over solvers.
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

            <div className='section'>
                <a
                    href="./img/orx_model_building_knapsack.gif"
                    target='_blank'
                    style={{ width: "540px", height: "100%" }}
                >
                    <img
                        style={{ width: "560px", height: "100%", border: "10px solid black", borderRadius: '8px' }}
                        src={`./img/orx_model_building_knapsack-540w.gif`}
                        alt={"building & solving knapsack problem in ~7minutes"}
                        title={"building & solving knapsack problem in ~7minutes"}
                    />
                </a>
                <div>
                    <h2>in action</h2>
                    <br />
                    <p>
                        Building the traditional <a href='https://en.wikipedia.org/wiki/Knapsack_problem' target="_blank">knapsack</a> problem from scratch
                    </p>
                    <p>
                        from importing the library into an empty console app
                    </p>
                    <p>
                        to modeling the problem, creating html and LaTex documentations
                    </p>
                    <p>
                        and finally to solving an example instance
                    </p>
                    <p>
                        in ~7 minutes.
                    </p>
                    <p>
                        <i style={{ color: 'rgb(100,100,100)' }}>(click the gif to zoom in)</i>
                    </p>
                </div>
            </div>
        </div>
    )
}
