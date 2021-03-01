import React from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = (props) => {
    const { players, handleSelectPlayer } = props;
  return (
    <div className="row mb-5">
      <h3 className="header-style mr-5">All 15 Players of Draft</h3>
      {players.map((player) => {
        return (
          <Player
            player={player}
            handleSelectPlayer={handleSelectPlayer}
          ></Player>
        );
      })}
    </div>
  );
};

export default Players;
