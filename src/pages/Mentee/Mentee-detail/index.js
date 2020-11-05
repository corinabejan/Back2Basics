
import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import FindMentorForm from './FindMentorForm'


export default function MenteeDetail() {

    const [menteeDetail, set_menteeDetailData]=useState([])
    const db = firebase.firestore()
    const auth = firebase.auth()
    const docRef = db.collection("users").doc(auth.currentUser.uid)



    useEffect(() => {
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              set_menteeDetailData(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
    
        console.log('1',docRef);
      }, []);



    const SlideForm = document.getElementById('slide')
    
    const toggle = document.getElementsByClassName('toggle')
console.log('toggle', SlideForm)
    // toggle.addEventListener('click', ()=> SlideForm.classList.add('slide-active'))
    //     toggle.addEventListener('click', ()=> SlideForm.classList.remove('slide-active'))


    return (
        <div className='menteeDetail-container'>
            <div className='menteeDetail-bio'>
                <p>
                {menteeDetail.user_name}
                </p>
                <img src={menteeDetail.user_image} />
            </div>
            <div id='slide'>
                <button className='toggle' > Add mentor search </button>
                <FindMentorForm />
            </div> 
        </div>
    )
}
