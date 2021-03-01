import React from "react";

const Salary = (props) => {
  const { team } = props;
  console.log(team);
  return (
    <div>
      <h3 className="header-style w-100 mt-2">Total Sallery</h3>
      <div className="my-card-2 w-75 d-flex align-items-center justify-content-center">
        <h1 className="sallery">
          $
          {team.reduce((sallery, player) => {
            sallery += Number(player.sallery);
            return sallery;
          }, 0)}
        </h1>
      </div>
    </div>
  );
};

export default Salary;
