import React from 'react';

const TeamCount = (props) => {
    const {team}=props
    return (
      <div>
        <h3 className="header-style w-100">Selected Member</h3>
        <div className="my-card-2 w-75 d-flex align-items-center justify-content-center">
          <h1>{team.length}</h1>
        </div>
      </div>
    );
};

export default TeamCount;