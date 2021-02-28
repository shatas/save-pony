import React from 'react';
import './App.css';
import NewGame from "./components/createNewGame"


class App extends React.Component {

    render() {
        return (
            <div className="app">
            <header className="app-header">
            <h1>Save The Pony!</h1>
                <NewGame />


        </header>
        </div>);
    }
}

export default App;
