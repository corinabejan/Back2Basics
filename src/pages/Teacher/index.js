import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Badge from "react-bootstrap/Badge";

const skillsArray = [
  "Math",
  "Reading",
  "Writing",
  "Social Studies",
  "Enviromental",
  "Creative Arts",
  "Technology",
];

export default function Teacher() {
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [teacherData, set_TeacherData] = useState({});
  const [language, set_Language] = useState("");
  const [skills, set_Skills] = useState([]);

  const docRef = db.collection("users").doc(auth.currentUser.uid);

  useEffect(() => {
    if (!teacherData.teacher_skills) {
      docRef.onSnapshot(function (document) {
        document.exists
          ? set_TeacherData(document.data())
          : console.log("No Document found");
      });
    }
    console.log(teacherData);
  }, [docRef, teacherData]);

  function infoAdder(e) {
    e.preventDefault();

    console.log("skills", skills);
    console.log("language", language);

    const auth = firebase.auth();
    const db = firebase.firestore();

    const docRef = db.collection("users").doc(auth.currentUser.uid);

    docRef
      .set(
        {
          teacher_skills: skills,
          teacher_language: language,
        },
        { merge: true }
      )
      .then(function () {
        console.log("Success");
      })
      .catch(function (e) {
        console.log("Error", e);
      });
  }

  function skillsAdder(e) {
    const thisAny = skills.find((skill) => {
      return skill === e.target.value;
    });

    console.log("TEST", thisAny);

    thisAny === e.target.value
      ? set_Skills(
          skills.filter((skill) => {
            return skill !== e.target.value;
          })
        )
      : skills.push(e.target.value);
  }

  const optionSetter = skillsArray.map((skill) => {
    return (
      <option
        key={skill}
        value={skill}
        onClick={(e) => {
          console.log("Skill test", skills);
          skillsAdder(e);
        }}
      >
        {skill}
      </option>
    );
  });

  return (
    <div>
      <h1>Teacher Page</h1>
      <h2>{teacherData.user_name}</h2>
      <img
        src={teacherData.user_image}
        alt="Profile"
        width="50px"
        height="50px"
      />
      {teacherData.teacher_language ? (
        <div>
          <h5>Language & Skills:</h5>
          <Badge
            style={{
              width: "fit-content",
              height: "20px",
              background: "hotpink",
            }}
            pill
          >
            {teacherData.teacher_language}
          </Badge>
        </div>
      ) : (
        <br />
      )}
      {teacherData.teacher_skills !== undefined ? (
        teacherData.teacher_skills.map((skill) => {
          return (
            <div key={skill}>
              <Badge
                style={{
                  width: "fit-content",
                  height: "20px",
                  background: "hotpink",
                }}
                pill
              >
                {skill}
              </Badge>
            </div>
          );
        })
      ) : (
        <br />
      )}

      <form>
        <label>Skills:</label>
        <select multiple>{optionSetter}</select>
        <label>Prefered Language:</label>
        <input
          type="text"
          value={language}
          onChange={(e) => set_Language(e.target.value)}
        />
        <button type="submit" onClick={(e) => infoAdder(e)}>
          Add Info
        </button>
      </form>
      <Link to="/">Add a Regular Lesson</Link>
      <br />
      <Link to="/login">Schedule a Live Stream</Link>
      <br />
      <Link to="/signup">Add a Custom Lesson</Link>
    </div>
  );
}
