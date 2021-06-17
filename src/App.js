import React from "react";
import Player from "./Player";
import NewPlayer from "./NewPlayer";

class App extends React.Component {

  state = {
    players: [
      {id: 1, pName: "Janne", score: 15},
      {id: 2, pName: "Kalle", score: 3},
      {id: 3, pName: "Pelle", score: 10},
      {id: 4, pName: "Anna", score: 0}
    ]
  }

  updateScore = (newScore, id) => {
    const newState = this.state.players;
    newState[id].score = newScore;
    
    this.setState({
      players: newState
    })
  
  }

  saveNewPlayer = (newPlayer) => {
    const newPlayerList = this.state.players;
    newPlayerList.push(newPlayer);
    this.setState({players: newPlayerList})
  }

  render() {

    const playerList = this.state.players;
    playerList.sort((a, b) => b.score - a.score);

    return (
      <div className="App">
       <h1>Game score</h1>
       {playerList.map((item, i) => 
         <Player key={playerList[i].id} id={i} pName={playerList[i].pName} score={this.state.players[i].score} updateScore={this.updateScore} />
        )}
        <NewPlayer players={this.state.players} saveNewPlayer={this.saveNewPlayer}/>
      </div>
    );
  } 
}

export default App;
