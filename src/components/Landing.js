import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Landing.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { user: "Jovan", id: 1, img: "https://bit.ly/2OFTzmW" },
                { user: "Ame", id: 2, img: "https://bit.ly/2B45H9i" },
                { user: "Mary", id: 3, img: "https://bit.ly/33oBoGs" },
                { user: "Nietos", id: 4, img: "https://bit.ly/2B4KyeU" }]
        }
    }

    render() {
        return (
            <div>
                {this.state.users.map(u =>
                    <div key={u.id} className="user">
                        <Link to="/catalog">{
                            <div id="user" ><img src={u.img} alt={u.user} width="200" height="200"></img><p>{u.user}</p></div>}</Link>
                    </div>)}
            </div>)
    }
}

export default Landing
