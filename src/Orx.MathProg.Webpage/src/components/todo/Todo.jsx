import { Table } from 'react-bootstrap';
import './todo.css'

export default function Todo(props) {
    const { todo } = props;
    const list = todo.val();

    return (
        <div className='todo'>
            <p>
                Plans keep on changing.
                Feedback to help planning is appreciated
                <a href="mailto:orx.ugur.arikan@gmail.com" title="orx.ugur.arikan@gmail.com">🖂</a>.
            </p>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>label</th>
                        <th>definition</th>
                        <th>done</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((x, i) => {
                            const done = x.version.length > 0;
                            const trClass = done ? 'done' : '';
                            return (
                                <tr key={i} className={trClass}>
                                    <td>orx-mp-{i + 1}</td>
                                    <td>{x.label}</td>
                                    <td>{x.definition}</td>
                                    <td>{x.version}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
