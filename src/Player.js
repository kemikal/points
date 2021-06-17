import React from "react";

class Player extends React.Component {
    
    incScore = (evt) => {
        console.log(evt.target.name);
        this.props.updateScore(Number(this.props.score + 1), evt.target.id)
    }

    decScore = (evt) => {
        console.log(evt.target.name);
        this.props.updateScore(Number(this.props.score - 1), evt.target.id)
    }
    
    render() {

        return (
            <h4>{this.props.pName} | Score: {this.props.score} [ <button id={this.props.id} onClick={this.incScore}>+</button> <button id={this.props.id} onClick={this.decScore}>-</button> ]</h4>
        )
    }
}

export default Player;