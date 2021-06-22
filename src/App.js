import './App.css';
import React, {Component} from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import DogContainer from './DogContainer'
import DogShow from './DogShow'
class App extends Component {

  state = {
    dogs: []
  }

  getDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
    .then(response => response.json())
    .then(response => {
      this.setState({
        dogs: response.message
      })
    })
  }

  componentDidMount() {
    this.getDogs()
  }

  render() {
    console.log("this.state", this.state)
    return (
      <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/dogs/:id" render={(routerProps) => <DogShow {...routerProps} dogs={this.state.dogs}/>}/>
          
          
        <Route exact path="/dogs" render={(routerProps) => <DogContainer {...routerProps} dogs={this.state.dogs} />}/>
        <Route path="/">
          <Home />
        </Route> 
          
        
        
      </Switch>

      </Router>
    </div>
  );
}
}

export default App;
