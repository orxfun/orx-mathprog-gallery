import React from 'react'
import { Button } from 'react-bootstrap';
import './sidenav.css'

function getVariantPage(page, key) {
    return page.val() === key
        ? 'dark'
        : 'light';
}
function getVariantProblem(problem, prob) {
    return problem.val() === prob
        ? 'outline-success'
        : 'outline-secondary';
}
export default function SideNav(props) {
    const { page, pages, problems, problem } = props;
    return (
        <div className='sidenav'>
            <div className='sidenav-pages'>
                {
                    Object.keys(pages).map(key => {
                        return (
                            <Button
                                key={key}
                                variant={getVariantPage(page, key)}
                                onClick={_ => page.set(key)}>
                                {pages[key].name}
                            </Button>
                        );
                    })
                }
            </div>
            <div className='sidenav-problems-section'>
                <div className='sidenav-problems'>
                    {
                        problems.val().map((prob, i) => {
                            return (
                                <Button
                                    key={i}
                                    variant={getVariantProblem(problem, prob)}
                                    onClick={_ => {
                                        page.set('gallery');
                                        problem.set(prob);
                                    }}>
                                    {prob.dir.replaceAll('_', ' ')}
                                </Button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
