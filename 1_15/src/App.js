import React, {Component} from 'react';

class App extends Component {
  render() {
    const greeting = 'Haaai!';
    return (
      <React.Fragment>
        <h1>{greeting}</h1>
        <input type="text" onClick={() => {console.log('maa');}} />
      </React.Fragment>
    );
  }
}

export default App;
