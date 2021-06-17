import React from "react";

class NewPlayer extends React.Component {

    state={
        newPlayerName: "",
    }

    handleChange = (evt) => {
        console.log("name change");
        this.setState({newPlayerName: evt.target.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
     
        const newPlayer = {id: Object.keys(this.props.players).length + 1, pName: this.state.newPlayerName, score: 0}
        this.props.saveNewPlayer(newPlayer);
     }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h3>Add new player</h3>
                <input type="text" value={this.state.newPlayerName} onChange={this.handleChange} />
                <button type="submit">Spara</button>
            </form>
        )
    }
}

export default NewPlayer;