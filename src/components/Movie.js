import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Movie.css'

class Movie extends Component {

    changeStatus = () => {
        this.props.isRented(this.props.catalog.id)
        console.log("movie selected: ", this.props.catalog)
    }

    render() {
        const ctlg = this.props.catalog
        return (
            <div key={ctlg.id} className="imageButtonContainer" >
                <p onClick={this.changeStatus}>{ctlg.isRented ? <button>-</button> : <button>+</button>}</p>
                <Link to={`/movie/${ctlg.id}`}>
                    {<div id="movie" >
                        <img src={ctlg.img} alt={ctlg.title} width="200" height="200"></img>
                    </div>}</Link>
            </div>)
    }
}

export default Movie