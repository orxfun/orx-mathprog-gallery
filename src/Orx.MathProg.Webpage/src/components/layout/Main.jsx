import { useEffect, useState } from 'react';
import State from '../../utils/State';
import SideNav from './sidenav/SideNav';
import { fetchJson } from '../../utils/fetchdata';
import About from '../about/About';
import Problems from '../Problems';
import Features from '../features/Features';
import Types from '../types/Types';
import Todo from '../todo/Todo';
import Logo from './logo/Logo';
import TopNav from './topnav/TopNav';
import './layout.css'

export default function Main() {
    const [problemsdummy, _] = useState(1);

    const page = new State(useState('about'));
    const todo = new State(useState([]));
    const problems = new State(useState([]));
    const problem = new State(useState(''));
    const problemView = new State(useState('problem'));
    const typesActive = new State(useState('Set'));
    const featuresActive = new State(useState('Concise'));

    const pages = {
        about: {
            name: 'about',
            view: <About />
        },
        features: {
            name: 'features',
            view: <Features featuresActive={featuresActive} />
        },
        types: {
            name: 'types',
            view: <Types typesActive={typesActive} />
        },
        todo: {
            name: 'todo',
            view: <Todo todo={todo} />
        },
        gallery: {
            name: 'gallery',
            view: <Problems problem={problem} problemView={problemView} />
        }
    };

    useEffect(() => {
        fetchJson('data/problems/problems.json', x => {
            const problemList = x.list;
            problem.set(problemList[0]);
            problems.set(problemList);
        });
        fetchJson('data/todo.json', x => {
            todo.set(x.list);
        });
    }, [problemsdummy]);

    return (
        <div className='main'>
            <Logo />

            <TopNav />

            <SideNav page={page} pages={pages} problems={problems} problem={problem} />

            <div className='content'>
                {pages[page.val()].view}
            </div>
        </div>
    );
}
