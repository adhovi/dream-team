import React from "react";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { image, name, sallery } = props.player;
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
          onClick={() => props.handleSelectPlayer(props.player)}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Select
        </button>
      </div>
    </div>
  );
};

export default Player;
