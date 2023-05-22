import { Button } from 'react-bootstrap';
import Builders from './Builders';
import Concise from './Concise';
import GenericInputs from './GenericInputs';
import GenericSolvers from './GenericSolvers';
import Reusable from './Reusable';
import Simple from './Simple';
import './features.css'

const features = [
    { name: 'Concise', view: <Concise /> },
    { name: 'Simple', view: <Simple /> },
    { name: 'Reusable & Immutable', view: <Reusable /> },
    { name: 'Generic over Inputs', view: <GenericInputs /> },
    { name: 'Generic over Solvers', view: <GenericSolvers /> },
    { name: 'Builders', view: <Builders /> },
];
function getFeature(featuresActive) {
    return features.filter(x => x.name === featuresActive.val())[0];
}
function getVariant(featuresActive, key) {
    return featuresActive.val() === key
        ? 'dark'
        : 'outline-dark';
}

export default function Features(props) {

    const { featuresActive } = props;

    return (
        <div className="features">
            <div className='features-intro'>
                <div className='types-list'>
                    {
                        features.map(t => {
                            return (
                                <Button
                                    key={t.name}
                                    variant={getVariant(featuresActive, t.name)}
                                    onClick={_ => featuresActive.set(t.name)}
                                >
                                    <code>{t.name}</code>
                                </Button>
                            );
                        })
                    }
                </div>
            </div>
            <div className='features-content'>
                {getFeature(featuresActive).view}
            </div>
        </div>
    )
}
