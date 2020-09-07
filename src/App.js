import React, { Component } from 'react'
import logo from './Reflix_logo.png'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import MovieDetail from './components/MovieDetail'

import './App.css'
class App extends Component {
  constructor() {
    super()
    this.state = {
      catalog: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://bit.ly/2YUeyqm", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://bit.ly/2DeyMmT", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://bit.ly/3baT9y2", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://bit.ly/32aZyUm", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://bit.ly/2EyXkIb", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      sCtlg: []

    }
  }

  foundM = (ids) => {
    let newCtlg = [...this.state.sCtlg]
    newCtlg = ids
    this.setState({ sCtlg: newCtlg }, () => console.log(this.state.sCtlg))
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
          <Route path="/catalog" exact render={() => <Catalog catalog={this.state.catalog} foundM={this.foundM} sCtlg={this.state.sCtlg}/>} />
          <Route path="/movie/:id" exact render={({ match }) => <MovieDetail match={match} catalog={this.state.catalog} />} />

        </div></Router>
    )
  }
}

export default App;