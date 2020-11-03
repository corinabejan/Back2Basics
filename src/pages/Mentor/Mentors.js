import React from 'react'
import "./mentors.css"

const findTrainess = "Find Your Mentee"


export default function Mentors() {
    return (
        <div>
            <img className="profile-img" src = "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="profile">
            </img>
            <div className="intro-container">
                <p>Credientials: BA in budiness Admin</p>
                <p>Intor Text: </p>
            </div>
            <button>
                {findTrainess}
            </button>

        </div>
    )
}
