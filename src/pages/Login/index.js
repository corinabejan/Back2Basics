import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import firebase from 'firebase'

export default function LoginScreen(){
    const history = useHistory()
    const [email, set_Email] = useState("")
    const [password, set_Password] =useState("")

    function sendEmail(e){
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(e){
            var errorCode = e.code;
            var errorMessage = e.message;
            console.log(`Error, ${errorCode}, ${errorMessage}`)
        })
        set_Password("")
        set_Email("")

        //push to specific dashboard when possible

        history.push("/teacher")
        
    }


    return(
        <div>
            <h1>
                Login Screen
            </h1>
            <form>
                <label
                    >
                    Email:
                </label>
                <input
                    type="email"
                    id="user_email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => set_Email(e.target.value)}
                />
                <label>
                    Password:
                </label>
                <input
                    type="password"
                    id="user_password"
                    value={password}
                    onChange={(e) => set_Password(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={sendEmail}
                >Submit</button>
            </form>
        </div>
    )
}
