import React, { useState, useEffect } from "react"
import ReactPlayer from "react-player/youtube"
import firebase from "firebase"
import "./math.css"

export default function MathLesson(){
    const db = firebase.firestore()
    const [videos, set_Videos] = useState([])
    const [videoWatcher, set_VideoWatcher] = useState("")
    const [videosWatched, set_VideosWatched] = useState([])

    const docRef = db.collection("regular_lessons").doc("numbers")

    useEffect(() => {
        if(videos.length === 0){
            docRef.get()
            .then(function(doc){
                if(doc.exists){
                    const vids = doc.data().video_url
                    set_VideoWatcher(vids.shift()) 
                    set_Videos(vids)
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
        videos.push(videoWatcher)
        set_VideoWatcher(videos.shift())
        console.log("Add top", videoWatcher)
        
        videosWatched.push(videoWatcher)
        console.log("Add end", videosWatched)
    }
    
    function lastVideo(){
        videos.unshift(videoWatcher)
        console.log("Subtract top", videos)
        const video = videosWatched.pop()
        console.log("Subtract middle", video)
        set_VideoWatcher(video)

        videos.unshift(video)
        console.log("Subtract bottom", videos)
    }

    return (
        <div
            className="player_container">
            <h4>
                Learning Numbers
            </h4>
            <ReactPlayer
                className="react-player"
                url={videoWatcher}
                width="400px"
                volume={1}
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