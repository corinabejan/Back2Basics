import React from "react"
import { Link } from "react-router-dom"
import firebase from "firebase"


export default function Teacher(){
    const db = firebase.firestore()

    
    return(
        <div>
            <h1>
                Teacher Page
            </h1>
            <h2>
                Teacher Name
            </h2>
            <p>
                Image as avatar
            </p>
            <Link to="/">Add a Regular Lesson</Link>
            <br />
            <Link to="/login">Schedule a Live Stream</Link>
            <br />
            <Link to="/signup">Add a Custom Lesson</Link>
        </div>
    )
}