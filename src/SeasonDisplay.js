import React from 'react';

const getSeason = (latitude, month) => {
  if (2 < month && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text =
    season === 'winter' ? 'Burr, it is chilly' : "Let's hit the beach";
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
