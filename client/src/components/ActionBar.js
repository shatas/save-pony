import React from 'react';

class ActionBar extends React.Component {
    handleCreateMaze = (e) => {
        e.preventDefault();
        this.props.handleCreateMaze();
    };
    render() {
        return (
            <div className="action-bar">
                <button  className="btn" disabled={this.props.state !== ""} onClick={this.handleCreateMaze}>Create</button>
            </div>
        );
    }
}

export default ActionBar;
