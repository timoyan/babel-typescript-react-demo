import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

class App extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
