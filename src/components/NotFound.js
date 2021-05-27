import React from 'react'
import sad from "./sad.png"
import "../styles/notfound.css"

export default function NotFound() {
    return (
        <div className="notfound-container">
            <img className="image" src={sad}/>
            <h1>Not Found!</h1>
        </div>
    )
}
