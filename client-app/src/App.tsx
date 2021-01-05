import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state={
    values:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/Values')
    .then((response) => {
      console.log(response);
      this.setState({
        values: response.data
      });
    })
  }
  render(){
    return (
      <ul>
        {this.state.values.map((value: any) => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
    );
  }
  
}

export default App;
