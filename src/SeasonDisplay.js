import React from 'react';

const getSeason = (latitude, month) => {
  if (2 < month && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  return (
    <div>
      {getSeason(props.latitude, new Date().getMonth())} <br />
      Season Display
    </div>
  );
};

export default SeasonDisplay;
