import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import firebase from 'firebase'
import "./login.css"
import { Link } from "react-router-dom"

export default function LoginScreen(){
    const history = useHistory()
    const [email, set_Email] = useState("")
    const [password, set_Password] = useState("")

    function sendEmail(e) {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (e) {
            var errorCode = e.code;
            var errorMessage = e.message;
            console.log(`Error, ${errorCode}, ${errorMessage}`)
        })
        set_Password("")
        set_Email("")

        //push to specific dashboard when possible
        history.push("/")
    }


    return (
        <div id="login-container">
            <h1>
                Login
            </h1>
            <form className="login-form">
                <div>
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="user_email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => set_Email(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="user_password"
                        value={password}
                        onChange={(e) => set_Password(e.target.value)}
                    />
                </div>
                    <button
                        type="submit"
                        onClick={sendEmail}
                    >Login
                    </button>
                    <Link to="/signup">
                        <p>sign up here</p>
                    </Link>
            </form>
        </div>
    )
}
