import React from "react";
import DreamTeam from "../DreamTeam/DreamTeam";
import Salary from "../Salary/Salary";
import TeamCount from "../TeamCount/TeamCount";
import './Team.css'
const Team = (props) => {
  const { team } = props;
  return (
    <div>
          <TeamCount team={team}></TeamCount>
          <Salary team={team}></Salary>
          <DreamTeam team={team}></DreamTeam>
    </div>
  );
};

export default Team;
