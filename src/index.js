import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import header from './components/header/header';


class App extends React.Component{
    render(){

    let content=(
            <main id="body">
                <header/>
            </main>

    );
    return content;
    }




}












ReactDOM.render(<App />, document.getElementById('root'));

