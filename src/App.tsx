import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends React.Component {
  child1: any;
  child2: any;

  constructor(props: any) {
    super(props);

    this.child1 = React.createRef();
    this.child2 = React.createRef();
  }

  componentDidMount() {
    this.child1.current.registerParent(this);
    this.child2.current.registerParent(this);
  }

  render() {
    return (
      <div>
        <Child1 ref={this.child1}/>
        <Child2 ref={this.child2}/>
      </div>
    );
  }
}

export default App;
