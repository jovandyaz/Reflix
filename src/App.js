import React, { Component } from 'react'
import logo from './Reflix_logo.png'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import Movie from './components/Movie'
import MovieDetail from './components/MovieDetail'

import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background">
            <img src={logo} height="100" width="200" alt="Reflix Logo" />
          </div>
          <div id="main-links">
            <Link to="/" >Home </Link>
            <Link to="/catalog"> Catalog</Link>
            <Redirect to="/" />
          </div>
          <Route path="/" exact component={Landing} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/movie/:id" exact render={({ match }) => <MovieDetail match={match} catalog={Catalog}/> } />

        </div></Router>
    )
  }
}

export default App;