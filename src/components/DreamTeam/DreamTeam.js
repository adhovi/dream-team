import React from "react";
import "./DreamTeam.css";
const DreamTeam = (props) => {
  const { team } = props;
  return (
    <div>
      <h3 className="header-style w-100 mt-2">Dream Team</h3>

      {team.map((player) => {
        return (
          <div className="my-card-2 w-75 d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-around teamPlayer align-items-center">
              <div className="playerImage">
                <img src={player.image} alt="" />
              </div>
              <div className="text-start ms-4 flex-grow-1">
                <h5>{player.name}</h5>
                <h5 className="sallery">${player.sallery}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DreamTeam;
