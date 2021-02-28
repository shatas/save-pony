import React, { Component } from 'react';
import axios from "axios";
import ActionBar from './ActionBar';
import Maze from './Maze';
import StatusBar from './StatusBar';
import {keycodeToDirection,errorText} from './keyCode';
import getCurrentState from './getCurrentState';
import makeNextMove from './makeNextMove';

export default class createNewGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            state: '',
            actions: [],
            maze: null,
            mazeId: null,
            stateResult: ''
        };
    }

    isError = (responseBody) => {
        this.setState({ error: null });
        if (!responseBody){
            this.setState({
                error: errorText
            });
            return true;
        }
        return false;
    };

    handleButtonClick = async () => {

         let maze = null;
         await axios.get('/api/maze')
                .then((response) => {
                    maze = (response.data);
                })
            .catch((error) => {
                // handle error
                console.log(error);
            });
            if (maze) {
                this.setState({
                    maze,
                    mazeId: "Maze created",
                    actions: [],
                    stepCount: 0
                });
            }
    };

    handlePonyMove = async (e) => {

        e.preventDefault();

        console.log(e.keyCode)

        // use arrow keys from keyboard
        if (e.keyCode < 37 || e.keyCode > 40){
            return;
        }
        const direction = keycodeToDirection(e.keyCode);

        const response = await makeNextMove(direction);
        if (this.isError(response)){
            return;
        }

        // Move accepted
        if (response.state === "active" && response["state-result"] === "Move accepted"){

            const maze = await getCurrentState(this.state.mazeId);
            const stateResult = response["state-result"];
            this.setState({ maze,
            stateResult: stateResult})
        }

        // Can't walk
        else if (response.state === "active" && response["state-result"] === "Can't walk in there"){

            const maze = await getCurrentState(this.state.mazeId);
            const stateResult = response["state-result"];
            this.setState({
                maze,
                stateResult: stateResult
            })
        }

        // You won
        else if (response.state === "won" && response["state-result"] === "You won. Game ended"){
            const maze = await getCurrentState(this.state.mazeId);
            const stateResult = response["state-result"];
            this.setState({
                maze,
                stateResult: stateResult
            })
        }

        // You lost
        else if (response.state === "over" && response["state-result"] === "You lost. Killed by monster"){
            const maze = await getCurrentState(this.state.mazeId);
            const stateResult = response["state-result"];
            this.setState({
                maze,
                stateResult: stateResult
            });
        }
    }


    async componentDidMount(){

        // listen to keyboard keydown events
        document.addEventListener('keydown', (e) => this.handlePonyMove(e));
    }

    render() {
        return(
            <div>
                <Maze maze={this.state.maze}/>
                <ActionBar
                    state={this.state.state}
                    handleCreateMaze={this.handleButtonClick}
                    handlePonyMove={this.handlePonyMove}
                />
                <StatusBar status={this.state.actions}/>
                <h2>New Game Is Created: {this.state.mazeId}</h2>
                <h2>Current Game Status: {this.state.stateResult}</h2>
                <h3>Use arrow keys from keyboard in order to move P(Pony)</h3>
            </div>
        );
    }

}
