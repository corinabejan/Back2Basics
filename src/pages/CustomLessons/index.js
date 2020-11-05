import React, { useState } from "react";
import firebase from "firebase"
import "./index.css"

const skillsArray = ["Math", "Reading", "Writing", 
        "Social Studies", "Enviromental", "Creative Arts", "Technology"]

export default function CustomLesson() {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");
  const [educationType, set_EducationType] = useState("")
  const db = firebase.firestore()
  const auth = firebase.auth()

  const uploadVideo = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "customcourses");
    setLoading(true);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/corinabejan/video/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await response.json();

    console.log(file);

    setVideo(file.secure_url);
    setLoading(false);
  };

  function sendData(e){
      e.preventDefault()
    db.collection("custom_lessons").doc(`Custom: ${auth.currentUser.uid}`)
    .set({
        lesson_type: educationType,
        video_url: video
    })
    .then(function(){
        var popUp = document.getElementById("myPopup")
        popUp.classList.toggle("show")
        console.log("success")
    })
    .catch(function(error){
        console.log("Error", error)
    })
  }

  const optionSetter = skillsArray.map(skill => {
                        return (
                            <option
                                key={skill}
                                value={skill}
                                onClick={(e) => {
                                    set_EducationType(e.target.value)}
                                }
                            >{skill}</option>
                            )
                        })

  console.log(video);

  return (
    <>
      <div className="custom-lesson">
        <h1>Custom Lesson</h1>
        {loading ? (
          <h3>Loading ...</h3>
        ) : (
          <video controls src={video} style={{ width: "500px" }} />
        )}
        <form>
            <input
            type="file"
            name="file"
            placeholder="Upload a Video"
            onChange={uploadVideo}
            />
            <label>
                Education Type:
            </label>
            <select>
                <option>--Choose-Skill--</option>
                {optionSetter}
            </select>
            <button
                type="submit"
                onClick={(e) => sendData(e)}
            >
                Create Lesson
            </button>
        </form>
        <div class="popup" onClick="showPop()">Click me!
            <span class="popuptext" id="myPopup">Lesson Added</span>
        </div> 
      </div>
    </>
  );
}