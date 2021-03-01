import React, { useState } from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { image, name, sallery } = props.player;
  const [selectStatus, setSelectStatus] = useState("Select");
  return (
    <div className="col-sm-4 g-2">
      <div
        className="my-card d-flex flex-column
      align-items-center justify-content-center py-5"
      >
        <img src={image} alt="" />
        <br />
        <h5>{name}</h5>
        <h5 className="sallery">${sallery}</h5>

        <button
          className="btn btn-primary my-btn"
          onClick={() => {
            if (props.team.length < 11) {
              setSelectStatus("Selected");
            }
            props.handleSelectPlayer(props.player);
          }}
        >
          <FontAwesomeIcon icon={faUserPlus} /> {selectStatus}
        </button>
      </div>
    </div>
  );
};

export default Player;
