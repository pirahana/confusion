import React, { Component } from 'react';
import './App.css';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
    console.log("App component : Constructor called");
  }

  componentDidMount() {
    console.log("App component : Did Mount called");

  }

  componentDidUpdate() {
    console.log("App component : Did Update called")
  }
  render() {
    console.log('App compoent render called');
    return (
      <BrowserRouter>
      <div className="App">
        <Main></Main>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
