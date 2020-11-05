import React, { useState } from "react";

export default function CustomLesson() {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");

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

  console.log(video);

  return (
    <>
      <div className="custom-lesson">
        <h1>Custom Lesson</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload a Video"
          onChange={uploadVideo}
        />

        {loading ? (
          <h3>Loading ...</h3>
        ) : (
          <video controls src={video} style={{ width: "500px" }} />
        )}
      </div>
    </>
  );
}