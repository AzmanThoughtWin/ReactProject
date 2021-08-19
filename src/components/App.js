import React, { Component } from 'react';
import './App.css';
import Inline from './Inline';
// import Stylesheet from './Stylesheet';
// import NameList from './NameList';
// import UserGreeting from './UserGreeting';
// import ParentComponent from './ParentComponent';
// import { Greet } from './Greet';
// import Welcome from './Welcome';
// import Message from './message';
// import Counter from './counter';
// import FunctionClick from './FunctionClick';
// import ClassClick from './ClassClick';
// import EventBind from './EventBind';
import '../appStyles.css';
import styles from '../appStyles.module.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className="error">Error</h1>
        <h1 className={styles.Success}>Success</h1>
        <Inline/>
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList/> */}
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
