import React from 'react'
import "./mentors.css"
import profile from "./profile.jpg"
import { Link } from "react-router-dom"

const findTrainess = "Find Your Mentee"


export default function Mentors() {
    return (
        <div id="mentor-container">
            <p className="welcome-text">welcome back lili</p>
            <section className="profile-info">
                <img src={profile} className="bio-img" alt="profile" />
                <div className="intro-container">
                    <h3>Lili Jonson: BA in business Adminstration</h3>
                    <p>Intor Text: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                </div>

            </section>
            <Link to="/mentee">
                <button>
                    {findTrainess}
                </button>
            </Link>
        </div>
    )
}
