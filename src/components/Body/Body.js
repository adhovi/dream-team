import React, { useEffect, useState } from "react";
import Players from "../Players/Players";
import playerData from "../Data/playerData.json";
import Team from "../Team/Team";
import "./Body.css";
const Body = () => {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [title, setTitle] = useState("Select 11 player to make your dream team");
  useEffect(() => {
    setPlayers(playerData);
  }, []);

  const handleSelectPlayer = (player) => {
    if (team.indexOf(player) === -1 && team.length < 11) {
      let newTeam = [...team, player];
      setTeam(newTeam);
      setTitle(
        "Select more " +
          (11 - Number(newTeam.length)) +
          " player to make your dream team"
      );
    } else if (team.length >= 11) {
      setTitle("11 players team limit reached.");
    } else if (team.indexOf(player) >= 0) {
      setTitle("Don't select a player twice");
    }
  };
  return (
    <div className="container body-style">
      <h2 className="sallery text-center mb-3">{title}</h2>
      <div className="row d-flex">
        <div className="col-md-4 order-md-1">
          <Team team={team}></Team>
        </div>
        <div className="col-md-8 order-md-0">
          <Players
            team={team}
            handleSelectPlayer={handleSelectPlayer}
            players={players}
            team={team}
          ></Players>
        </div>
      </div>
    </div>
  );
};

export default Body;
