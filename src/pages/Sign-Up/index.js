import React, {useState} from "react"
import firebase from "firebase"


export default function SignUp(){
    const [name, set_Name] = useState("")
    const [email, set_Email] = useState("")
    const [userImage, set_UserImage] = useState("")
    const [status, set_Status] = useState("")
    const [password, set_Password] = useState("")
    const [currentUser, set_CurrentUser] = useState(null)

    function sendDatabase(){
            const database = firebase.firestore()
        
            console.log(firebase.auth())
            console.log(firebase.auth().currentUser.uid)
            console.log(currentUser)

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

        console.log(`Credentials: ${status} ${name}`)

        sendDatabase()
    } catch(error){
        console.log(error)
    }
}

    return (
        <div>
            <h1>
                Sign-Up
            </h1>
            <form>
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
                <label>
                    Profile Photo:
                </label>
                <input
                    type="file"
                    value={userImage}
                    onChange={(e) => set_UserImage(e.target.value)}
                />
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
                <label>
                    Password:
                </label>
                <input
                    type="text"
                    value={password}
                    required
                    onChange={(e) => set_Password(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={sendNewData}>
                    Submit
                </button>
            </form>
        </div>
    )
}