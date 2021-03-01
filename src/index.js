import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <div>
      <p>test</p>
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
