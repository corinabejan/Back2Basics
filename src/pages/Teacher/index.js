import React, { useState } from "react"
import { Link } from "react-router-dom"
import firebase from "firebase"


export default function Teacher(){
    const db = firebase.firestore()
    const auth = firebase.auth()
    const [teacherData, set_TeacherData] = useState({})

    const docRef = db.collection("users").doc(auth.currentUser.uid)

    docRef.onSnapshot(function(document){
        document.exists
        ? set_TeacherData(document.data())
        : console.log("No Document found")
    })


    return(
        <div>
            <h1>
                Teacher Page
            </h1>
            <h2>
                {teacherData.user_name}
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