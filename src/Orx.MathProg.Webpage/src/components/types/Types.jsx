import { Button } from 'react-bootstrap'
import './types.css'
import Model from './Model';
import Set from './Set';
import Objective from './Objective';
import Constraint from './Constraint';
import Var from './Var';
import Par from './Par';

const types = [
    {
        name: 'Set',
        view: <Set />
    },
    {
        name: 'Par',
        view: <Par />
    },
    {
        name: 'Var',
        view: <Var />
    },
    {
        name: 'Constraint',
        view: <Constraint />
    },
    {
        name: 'Objective',
        view: <Objective />
    },
    {
        name: 'MathModel',
        view: <Model />
    },
];
function getType(typesActive) {
    return types.filter(x => x.name === typesActive.val())[0];
}
function getVariant(typesActive, key) {
    return typesActive.val() === key
        ? 'dark'
        : 'outline-dark';
}
export default function Types(props) {

    const { typesActive } = props;

    return (
        <div className="types">
            <div className='types-intro centered'>
                <h2>Strongly but Simply Typed</h2>
                <p>
                    <code>Orx.MathProg</code> allows strongly typed mathematical programming with 6 simple types.
                </p>
                <div className='types-list'>
                    {
                        types.map(t => {
                            return (
                                <Button
                                    key={t.name}
                                    variant={getVariant(typesActive, t.name)}
                                    onClick={_ => typesActive.set(t.name)}
                                >
                                    <code>{t.name}</code>
                                </Button>
                            );
                        })
                    }
                </div>
            </div>
            <div className='types-content'>
                {getType(typesActive).view}
            </div>
        </div>
    )
}
