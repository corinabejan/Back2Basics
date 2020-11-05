import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./index.css";
// import { BigWhiteboard } from "react-component-whiteboard";
import RegularLessons from "../RegularLessons/alphabet";
import MathLessons from "../RegularLessons/math"

export default function Student() {
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [studentData, setStudentData] = useState({});
  const [video, setVideo] = useState({});

  const docRef = db.collection("users").doc(auth.currentUser.uid);
  const vidRef = db.collection("custom_lessons").doc('Custom')

  console.log(vidRef)

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

  useEffect(() => {
    vidRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setVideo(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  console.log(video.lessons)

  const videoJSX = video.lessons ? (video.lessons.map((vid, index) => (
    <div key={index}>
      <p>{vid.education_type}</p>
      <video controls src={vid.video_url} style={{ width: "500px" }}/>
    </div>
  ))) : "Loading"


  return (
    <>
      <h1>
        <em>
          <bold>Welcome,</bold>
        </em>{" "}
        <span>{studentData.user_name}</span>
      </h1>
      <br />
      <img src={studentData.user_image} />
      <br />
      <RegularLessons />
      <div className="math">
      <MathLessons className="math"/>
      </div>
      {videoJSX}
      {/* <div className="board">
        <BigWhiteboard />
      </div> */}
    </>
  );
}
