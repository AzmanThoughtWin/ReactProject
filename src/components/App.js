import React, { Component } from 'react';
import './App.css';
import NameList from './NameList';
// import UserGreeting from './UserGreeting';
// import ParentComponent from './ParentComponent';
// import { Greet } from './Greet';
// import Welcome from './Welcome';
// import Message from './message';
// import Counter from './counter';
// import FunctionClick from './FunctionClick';
// import ClassClick from './ClassClick';
// import EventBind from './EventBind';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props.</p>
        </Greet>
        
        <Welcome name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Clark" heroName="Superman" /> */}
        {/*         
        <Greet name="Diana" heroName="Wonder Woman">
          <button>Action</button>
        </Greet>
        <Greet name="Clark" heroName="Superman" />
        <Welcome name="Bruce" heroName="Batman"/> */}
      </div>
    );
  }
}

export default App;
