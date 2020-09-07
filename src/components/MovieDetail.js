import React, { Component } from 'react'

import '../styles/MovieDetail.css'

class MovieDetail extends Component {

    render() {
        const matchID = this.props.match.params.id
        const catalog = this.props.catalog[matchID]
        
        return (
            <div className="movies">
                <h3>{catalog.title} ({catalog.year})</h3>
                <img src={catalog.img} alt={catalog.title} width="200" height="300" />
                <p>{catalog.descrShort}</p>
            </div>
        )
    }
}

export default MovieDetail