import React from 'react'
import "./navigations.css"
import firebase from 'firebase'
import {useHistory} from 'react-router-dom'

export default function Navigation() {

    const auth = firebase.auth()
    const history= useHistory()
    auth.signOut()
    .then(function(){
        console.log("user signedout success")
        history.push('/login')
    })
    
    function cancleSignIn(){
        auth.signOut()
        .then(function(){
            console.log("user signedout success")
        })
    }


    return (
        // <nav>
        <ul id="navigation-bar">
            <li> <a href="/">Mentor</a></li>
            <li><a href="/">Mentee</a></li>
            <li>< a href="/teacher">Teacher</a></li>
            <li><a href="/student">Student</a></li>
            <li> <a href="/signout"onClick={()=>cancleSignIn()}>sign out</a></li>
        </ul>
        // {/* </nav> */}
    )
}
