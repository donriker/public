import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Turns out I was getting the Fibonacci Sequence mixed up with something else.
// After the call and I googled it (which I should of done on the side during the call to confirm) I almost fell through the floor
// with how off I was!!!

function fibThing(userNum){
  if(!isNaN(userNum)){
    var x=1;
    var y=1;
    var z;
    var endString='1,';
    for(var i=0;i<userNum;i++){
        z=x+y;
        x=y;
        y=z;
        endString=endString+z+',';
    }
    endString=endString.substr(0,endString.length-1);
    return(endString);
  }else{
    return 'Not a number'
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '',value2:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event){
    var x=fibThing(this.state.value);
    this.setState({value2: x});
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        
        <form onSubmit={this.handleSubmit}>
          <label>Enter Number: 
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <div>{this.state.value2}</div>
      </div>
    );
  }
}

export default App;

