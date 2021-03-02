import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  // initialize function
  constructor(props) {
    // super refers to constructor of parent class
    super(props);

    this.state = { latitude: null };
  }

  render() {
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
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
