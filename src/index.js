import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  // // initialize function
  // constructor(props) {
  //   // super refers to constructor of parent class
  //   super(props);

  //   // THIS IS THE ONLY TIME we ddo direct assignment
  //   // to this.state
  //   this.state = { latitude: null, errorMessage: '' };
  // }

  // new, better sysntax
  // babel compile them to constructor syntax
  state = { latitude: null, errorMessage: '' };

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
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
