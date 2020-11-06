import React from 'react'
import "./navigations.css"

export default function Navigation() {
    return (
        // <nav>
        <ul id="navigation-bar">
            <li> <a href="/mentors">Mentor</a></li>
            <li><a href="/mentee">Mentee</a></li>
            <li>< a href="/teacher">Teacher</a></li>
            <li><a href="/student">Student</a></li>
        </ul>
        // {/* </nav> */}
    )
}
