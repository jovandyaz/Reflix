import React, { Component } from 'react'
import Movie from './Movie'

import '../styles/Catalog.css'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            id: "",
            searchM: []
        }
    }

    isRented = (id) => {
        const ctlg = this.props.catalog
        let newCtlg = [...ctlg]
        let findId = newCtlg.find(m => m.id === id)
        findId.isRented ? findId.isRented = false : findId.isRented = true
        this.setState({ newCtlg }, () => console.log(this.props.catalog))
    }

    searchMovie = event => this.setState({ [event.target.name]: event.target.value },
        function () {
            let ctlg = this.props.catalog
            let sM = this.state.searchM.toLowerCase()
            console.log(sM)
            let found = ctlg.filter(m => m.title.toLowerCase().includes(sM))
            this.props.foundM(found)
        }
    )

    render() {
        const catalog = this.props.catalog
        const sCtlg = this.props.sCtlg
        return (
            <div className="catalog-container">

                <div> <h5>Budget: $</h5></div>
                <input type="text" placeholder="Search a movie" name="searchM" value={this.state.name} onChange={this.searchMovie} />

                {/* {catalog.find(r => r.sCtlg) ? <h4>Found: </h4> : console.log("Nada")} */}

                <div className="movies">
                    {sCtlg.length > 0
                        ? sCtlg.map(m => <Movie catalog={m} isRented={this.isRented} />)
                        : null}

                </div>

                {catalog.find(r => r.isRented === true) ? <h4>Rented</h4> : null}

                <div className="movies">
                    {catalog
                        .filter(r => r.isRented === true)
                        .map(m => <Movie catalog={m} isRented={this.isRented} />)}
                </div>

                <h4>Catalog</h4>
                <div className="movies">
                    {catalog
                        .filter(r => !r.isRented)
                        .map(m => <Movie catalog={m} isRented={this.isRented} />)}
                </div>
            </div>)
    }
}

export default Catalog