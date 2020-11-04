import React, { useState } from "react"
import firebase from "firebase"
import "./signup.css"


export default function SignUp() {
    const [name, set_Name] = useState("")
    const [email, set_Email] = useState("")
    const [userImage, set_UserImage] = useState("")
    const [status, set_Status] = useState("")
    const [password, set_Password] = useState("")

    function sendDatabase() {
        const database = firebase.firestore()

        database.collection("users").doc(name).set({
            user_name: name,
            user_image: userImage,
            user_credentials: status,
            user_password: password,
        })
            .then(function () {
                console.log("Document successly stored")
            })
            .catch(function (e) {
                console.log("Error", e)
            })
    }

    function sendNewData(e) {
        e.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (e) {
            var errorCode = e.code;
            var errorMessage = e.message;
            console.log(`Error, ${errorCode}, ${errorMessage}`)
        })

        console.log(`Credentials: ${status} ${name}`)

        sendDatabase()

        set_Name("")
        set_Email("")
        set_UserImage("")
        set_Status("")
        set_Password("")

    }

    return (
        <div id="signup-container">
            <h1>
                Sign-Up
            </h1>
            <form className="signup-form">
                <div>

                    <label>
                        Name:
                </label>

                    <input
                        type="text"
                        value={name}
                        placeholder="Jeff"
                        required
                        onChange={(e) => set_Name(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Email:
                </label>
                    <input
                        type="email"
                        value={email}
                        placeholder="example@gmail.com"
                        required
                        onChange={(e) => set_Email(e.target.value)}
                    />
                </div>
                <div>

                    <label>
                        Profile Photo: 
                    </label>
                    <input
                        type="file"
                        value={userImage}
                        onChange={(e) => set_UserImage(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Classified as:
                    </label>
                    <select
                        id="status"
                        required
                    >
                        <option
                            value="student"
                            onClick={(e) => set_Status(e.target.value)}>
                            Student
                    </option>
                        <option
                            value="Teacher"
                            onClick={(e) => set_Status(e.target.value)}
                        >
                            Teacher
                    </option>
                        <option
                            value="men-tee"
                            onClick={(e) => set_Status(e.target.value)}
                        >
                            Men-Tee
                    </option>
                        <option
                            value="Mentor"
                            onClick={(e) => set_Status(e.target.value)}
                        >
                            Mentor
                    </option>
                    </select>
                </div>
                <div>

                    <label>Password:</label>
                    <input
                        type="text"
                        value={password}
                        required
                        onChange={(e) => set_Password(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    onClick={sendNewData}>
                    Submit
                </button>
            </form>
        </div >
    )
}