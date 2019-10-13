import React, { Component } from 'react'
import Movie from './Movie'

import '../styles/Catalog.css'

class Catalog extends Component {

    isRented = (id) => {
        const ctlg = this.props.catalog
        let newCtlg = [...ctlg]
        newCtlg.find(m => m.id === id).isRented = true
        console.log(`isRented(${id})`)
        this.setState({ newCtlg }, () => console.log(this.props.catalog))
    }

    render() {
        const catalog = this.props.catalog
        return (
            <div>
                <input type="text" placeholder="Search" /><p>Budget</p>
                <div>Rented</div>
                <div className="movies">
                    {catalog
                        .filter(r => r.isRented === true)
                        .map(m => <Movie catalog={m} isRented={this.isRented} />)}
                </div>
                <div>Catalog</div>
                <div className="movies">
                    {catalog
                        .filter(r => !r.isRented)
                        .map(m => <Movie catalog={m} isRented={this.isRented} />)}
                </div>
            </div>)
    }
}

export default Catalog