import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props) {
    const { code, className, tight } = props;
    let codeAndSpaces = tight ? code : '\r\n' + code + '\r\n';
    return (
        <SyntaxHighlighter language="csharp" style={irBlack} className={className}>
            {codeAndSpaces}
        </SyntaxHighlighter>
    );
}
