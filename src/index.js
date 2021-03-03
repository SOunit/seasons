import { React, Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  // initialize function
  constructor(props) {
    // super refers to constructor of parent class
    super(props);

    // THIS IS THE ONLY TIME we ddo direct assignment
    // to this.state
    this.state = { latitude: null, errorMessage: '' };
  }

  // this method is for initialize component
  // same with constructor, but this is recommended
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          Latitude: {this.state.latitude} <br />
        </div>
      );
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
