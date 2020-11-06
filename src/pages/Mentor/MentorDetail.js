import React, {useState, useEffect} from 'react'
import "./mentors.css"
import { Link } from "react-router-dom"
import firebase from 'firebase'

const findTrainess = "Find Your Mentee"


export default function MentorsDetail() {
    const [mentorDetailData, set_mentorDetailData]=useState([])
    const db = firebase.firestore()
    const auth = firebase.auth()
    const docRef = db.collection("users").doc(auth.currentUser.uid)



    useEffect(() => {
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              set_mentorDetailData(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
    
        console.log('1',docRef);
      }, []);




    return (
        <div id="mentor-container">
          mentor page
            <p className="welcome-text">welcome back lili</p>
            <section className="profile-info">
                <img src={mentorDetailData.user_image} className="bio-img" alt="profile" />
                <div className="intro-container">
                    <h3>{mentorDetailData.user_name}</h3>
                    <p>{mentorDetailData.user_credentials} </p>
                </div>
            </section>
            <Link to="/mentee">
                <button>
                    {findTrainess}
                </button>
            </Link>
        </div>
    )
}
