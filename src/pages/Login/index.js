import React, { useState } from 'react'
import firebase from 'firebase'
import "./login.css"
import { Link } from "react-router-dom"

export default function LoginScreen() {
    const [email, set_Email] = useState("")
    const [password, set_Password] = useState("")

    function sendEmail(e) {
        e.preventDefault()

        console.log("Event test", email, password)

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (e) {
            var errorCode = e.code;
            var errorMessage = e.message;
            console.log(`Error, ${errorCode}, ${errorMessage}`)
        })
        set_Password("")
        set_Email("")

    }


    return (
        <div id="login-container">
            <h1>
                Login
            </h1>
            <form>
                <label>
                    Email: {" "}
                    <input
                        type="email"
                        id="user_email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => set_Email(e.target.value)}
                    />
                </label>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        id="user_password"
                        value={password}
                        onChange={(e) => set_Password(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    onClick={sendEmail}
                >Login</button>
                <Link to="/signup">
                    <p>sign up here</p>
                </Link>
            </form>
        </div>
    )
}
