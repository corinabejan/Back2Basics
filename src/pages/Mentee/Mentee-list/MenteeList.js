import React,{useEffect, useState} from 'react'
import firebase from 'firebase'
import '../mentee.css'
import { Link } from "react-router-dom"


const findMentors = "Find a Mentor"


export default function MenteeList() {
    const[menteeData, set_menteeData] = useState([])
    const db = firebase.firestore()
    const auth = firebase.auth()
    const docRef = db.collection("users").where('user_credentials', "==" , "men-tee")



    useEffect(() => {
        docRef
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                set_menteeData(doc.data())
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
    
        console.log(docRef);
      }, []);
    
    return (
        <div id='mentee-container'>
            <Link to="/mentors">
                <button>
                    {findMentors}
                </button>
            </Link>
            <div>
                <h1>Our Mentees</h1>
            </div>
            {menteeData.map((mentee, index) => {
                return (
                    <div className="mentee-bio-wrap-1"key={index}>

                        <div className='stick'>
                            <img src={mentee.user_imgUrl} alt="img" />
                        </div>
                        <div>
                            <h3>{mentee.user_name}</h3>
                        </div>
                        <Link to={`/mentee/${mentee.user_name}`}>
                            <button>See Detail</button>
                        </Link>
                    </div>
                )
            })} 
        </div> 
    )
}
