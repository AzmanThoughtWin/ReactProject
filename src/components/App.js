import React, { Component } from 'react';
import './App.css';
import { Greet } from './Greet';
import Welcome from './Welcome';
import Message from './message';
import Counter from './counter';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter/>
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props.</p>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman">
          <button>Action</button>
        </Greet>
        <Greet name="Clark" heroName="Superman" />

        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Clark" heroName="Superman" /> */}
      </div>
    );
  }
}

export default App;
