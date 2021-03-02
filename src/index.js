import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  // initialize function
  constructor(props) {
    // super refers to constructor of parent class
    super(props);

    // THIS IS THE ONLY TIME we ddo direct assignment
    // to this.state
    this.state = { latitude: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.latitude}
        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
