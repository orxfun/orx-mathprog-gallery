import { Button } from 'react-bootstrap'
import './topnav.css'

export default function TopNav() {
    return (
        <div className='topnav'>
            <code>
                Orx.MathProg

            </code>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png?20180210215736' alt='csharp' title="csharp"></img>

            <div>
                <a href="mailto:orx.ugur.arikan@gmail.com" title="orx.ugur.arikan@gmail.com">
                    <img src='./img/email.png' title='email' style={{ backgroundColor: 'silver' }}></img>
                </a>
            </div>

            <div className='separator'></div>

            <div>
                <a href='https://github.com/orxfun/' target='blank'>
                    <img src='http://ewsoftware.github.io/XMLCommentsGuide/icons/Sandcastle.jpg' title='documentation'></img>
                </a>
            </div>

            <div>
                <a href='https://github.com/orxfun/' target='blank'>
                    <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' title='repository'></img>
                </a>
            </div>

            <div>
                <a href='https://www.nuget.org/packages/Orx.Fun.Option' target='blank'>
                    <img src='https://www.nuget.org/Content/gallery/img/logo-header.svg' title='nuget package'></img>
                </a>
            </div>

        </div>
    )
}
