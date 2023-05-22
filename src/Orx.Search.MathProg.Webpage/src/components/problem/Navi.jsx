import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const pages = [
    'problem',
    'input',
    'output',
    'model',
    'console',
    'html',
    'latex',
    'demo',
]

function getVariant(active, item) {
    return item == active.val() ? 'dark' : 'light';
}
function getButton(active, item) {
    return <Button key={'navbtn_' + item} variant={getVariant(active, item)} onClick={_ => active.set(item)}>{item}</Button>;
}
function getLeftButton(active) {
    const currentIndex = pages.indexOf(active.val());
    const nextIndex = Math.max(currentIndex - 1, 0);
    const nextPage = pages[nextIndex];
    return <Button variant={'secondary'} onClick={_ => active.set(nextPage)}>{'⮜'}</Button>;
}
function getRightButton(active) {
    const currentIndex = pages.indexOf(active.val());
    const nextIndex = Math.min(currentIndex + 1, pages.length - 1);
    const nextPage = pages[nextIndex];
    return <Button variant={'secondary'} onClick={_ => active.set(nextPage)}>{'⮞'}</Button>;
}

function getProblemLink(dir, galleryClass) {
    const url = `https://github.com/orxfun/orx-search-mathprog-gallery/tree/main/src/Orx.Search.MathProg.Gallery/Orx.Search.MathProg.Gallery/${galleryClass}`;
    return <a href={url} target='blank'>{dir?.replaceAll('_', ' ')}</a>;
}

export default function Navi(props) {
    const { problem, problemView } = props;
    const { dir, galleryClass } = problem;

    return (
        <Navbar className='problem-navi' bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {getLeftButton(problemView)}
                        <span style={{ width: '1em' }}></span>
                        {pages.map(p => getButton(problemView, p))}
                        <span style={{ width: '1em' }}></span>
                        {getRightButton(problemView)}
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand>
                    {getProblemLink(dir, galleryClass)}
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
