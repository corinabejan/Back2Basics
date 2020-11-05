import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const mentors = [{
    id: 1,
    name: "Lily",
    cridential: "BA in Business Admin",
    mentorshipArea: ["Education", "business"],
    imgUrl: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    id: 2,
    name: "Test",
    cridential: "BA in web-development",
    mentorshipArea: ["Education", "business"],
    imgUrl: "sdfsdfs"

},
{
    id: 3, name: "Emnet",
    cridential: "MA in communications",
    mentorshipArea: ["personal-development", "education", "mind-set-shift"],
    imgUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

}]
export default function MentorList() {
    return (
        <div>
            <h2>
                mentors
                </h2>
            {mentors.map(mentor => {
                return (
                    <div>
                        <p>{mentor.name}</p>
                        <p>{mentor.mentorshipArea.map(area => {
                            return (
                                <span style={{ padding: "20" }}>{area}</span>
                            )
                        })}</p>
                        <Link to={`/mentors/${mentor.id}`}>
                            <button>
                                See Detail
                            </button>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}
