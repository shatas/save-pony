import React from 'react';

const Maze = (props) => (
    <div className="maze-container">
        <div className="maze">
            <pre>{props.maze}</pre>
        </div>
        <p>P = Ponny</p>
        <p>D = Domokun</p>
        <p>E = End/Exit</p>
        <p>Click "Create" button to start</p>
    </div>
);


export default Maze;
