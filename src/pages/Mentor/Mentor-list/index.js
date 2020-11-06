import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'


export default function MentorList() {
    const[mentorData, set_mentorData] = useState([])
    const db = firebase.firestore()
    const auth = firebase.auth()
    const docRef = db.collection("users")



    useEffect(() => {
            docRef.onSnapshot(function(querySnapshot){
                querySnapshot.exists
                ? console.log('document', querySnapshot.data())
                : console.log("No Document found")
            })
        console.log(mentorData)
    }, [docRef, mentorData])
    console.log('doc', mentorData)
    return (
        <div>
            <h2>
                mentors
                </h2>
            {mentorData.map((mentor,index) => {
                return (
                    <div key={index}>
                        <p>{mentor.user_name}</p>
                        <img src={mentor.use_image}/>
                        <p>{mentor.mentorshipArea.map(area => {
                            return (
                                <span style={{ padding: "20" }}>{area}</span>
                            )
                        })}</p>
                        <Link to={`/mentors/${mentor.user_name}`}>
                            <button className='mentor-btn'>
                                See Detail
                            </button>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}
