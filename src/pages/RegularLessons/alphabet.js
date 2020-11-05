import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import firebase from "firebase"
import "./alphabet.css"


export default function RegularLessons(){
    const db = firebase.firestore()
    const [videos, set_Videos] = useState([])
    const [videoWatcher, set_VideoWatcher] = useState("")
    const [videosWatched, set_VideosWatched] = useState([])

    const docRef = db.collection("regular_lessons").doc("words")

    useEffect(() => {
        if(videos.length === 0){
            docRef.get()
            .then(function(doc){
                if(doc.exists){
                    set_VideoWatcher(doc.data().video_url.shift()) 
                    set_Videos(doc.data().video_url)
                } else {
                    console.log("No videos found!")
                }
            })
            .catch(function(error){
                console.log("Error:", error)
            })
        }
    }, [videos, videos.length, docRef])

    function videoAdder(){
        set_VideoWatcher(videos.shift())
        
        videosWatched.push(videoWatcher)
    }
    
    function lastVideo(){
        videos.unshift(videoWatcher)
        const video = videosWatched.pop()
        set_VideoWatcher(video)

        videos.unshift(video)
    }

    return (
        <div
            className="player_container">
            <h4>
                Learning the Alphabet
            </h4>
            <ReactPlayer
                className="react-player"
                url={videoWatcher}
                width="400px"
            />
            <button
                type="button"
                onClick={() => videoAdder()}>
                Next Video
            </button>
            <button
                onClick={() => lastVideo()}>
                Previous Video
            </button>
        </div>
    )
}