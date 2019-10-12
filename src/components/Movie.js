import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Movie.css'

class Movie extends Component {
    render() {
        return (this.props.catalog.map(c =>
                    <div key={c.id} className="movie">
                        <Link to={`/movie/${c.id}`}>{
                            <div id="movie" ><img src={c.img} alt={c.title} width="300" height="300"></img><h4>{c.title}</h4></div>}</Link>
                    </div>)
            )
    }
}

export default Movie