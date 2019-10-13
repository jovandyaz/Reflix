import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

import '../styles/Movie.css'

class Movie extends Component {
    
    changeStatus = () => {
        this.props.isRented(this.props.catalog.id)
        console.log("(id)", this.props.catalog)
    }

    //{c.isRented ? <FontAwesomeIcon icon={faMinusCircle} /> : <FontAwesomeIcon icon={faPlusCircle} />}
    render() {
        const ctlg = this.props.catalog
        return (
            <div key={ctlg.id} className="movie" >
                <p onClick={this.changeStatus}><FontAwesomeIcon icon={faPlusCircle} /></p>
                <Link to={`/movie/${ctlg.id}`}>{
                    <div id="movie" ><img src={ctlg.img} alt={ctlg.title} width="200" height="200"></img><h4>{ctlg.title}</h4></div>}</Link>
            </div>)
    }
}

export default Movie