import React, { useState } from "react"
import firebase from "firebase"
import "./signup.css"


export default function SignUp() {
    const [name, set_Name] = useState("")
    const [email, set_Email] = useState("")
    const [userImage, set_UserImage] = useState("")
    const [status, set_Status] = useState("")
    const [password, set_Password] = useState("")
    const [currentUser, set_CurrentUser] = useState(null)

    function sendDatabase(){
            const database = firebase.firestore()

            database.collection("users").doc(firebase.auth().currentUser.uid).set({
                user_name: name,
                user_email: email,
                user_image: userImage,
                user_credentials: status,
            })
            .then(function(){
                console.log("success")
            })
            .catch(function(e){
                console.log("Fail", e)
            })

            set_Name("")
            set_Email("")
            set_UserImage("")
            set_Status("")
            set_Password("")
    }

    async function sendNewData(e){
        try{
        e.preventDefault()

        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            set_CurrentUser(firebase.auth().currentUser)
        })
        .catch(function(e){
            var errorCode = e.code;
            var errorMessage = e.message;
            console.log(`Error, ${errorCode}, ${errorMessage}`)
        })

        sendDatabase()

    } catch(error){
        console.log(error)
    }
}

const uploadImage = async (e) => {
    try{
        e.preventDefault()

        const files = e.target.files

        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "profile_pics")


        const response = await fetch(
            "https://api.cloudinary.com/v1_1/djzjepmnr/image/upload",
            {
                method: "POST",
                body: data
            })

            const file = await response.json();
            set_UserImage(file.secure_url)
            
    }catch(error){
        console.log("Error", error)
    }
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
                        name="file"
                        onChange={uploadImage}
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