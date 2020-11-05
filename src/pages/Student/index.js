import React, { useState, useEffect } from "react";
import firebase from "firebase";
import './index.css'
import RegularLessons from "../RegularLessons/alphabet";

export default function Student() {
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [studentData, setStudentData] = useState({});

  const docRef = db.collection("users").doc(auth.currentUser.uid);

  useEffect(() => {
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setStudentData(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    console.log(docRef);
  }, []);

  return (
    <>
      <h1><em><bold>Welcome,</bold></em> <span>{studentData.user_name}</span></h1>
      <br/>
      <img src={studentData.user_image} />
      <br/>
      <RegularLessons />
    </>
  );
}
