import React from 'react'
import '../mentee.css'
import { Link } from "react-router-dom"

const discription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. hi. It has survived not only five centuries,"
const findMentors = "Find a Mentor"
const mentees = [{
    id: 1,
    name: "John Doe",
    imgUrl: "https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70&w=70",
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. hi. It has survived not only five centuries,"
},
{
    id: 2,
    name: "Adorable bare",
    imgUrl: "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=2&h=70&w=70",
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. hi. It has survived not only five centuries,"

},
{
    id: 3,
    name: "Men-tee",
    imgUrl: "https://images.pexels.com/photos/4783536/pexels-photo-4783536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70&w=70",
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. hi. It has survived not only five centuries,"
},
{
    id: 4,
    name: "Test-tee",
    imgUrl: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70&w=70",
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. hi. It has survived not only five centuries,"
}
]

export default function Mentee() {
    return (
        <div id='mentee-container'>
            <Link to="/mentors">
                <button>
                    {findMentors}
                </button>
            </Link>
            <div>
                <h1>Our Mentees</h1>
            </div>
            {mentees.map(mentee => {
                return (
                    <div className="mentee-bio-wrap-1">

                        <div className='stick'>
                            <img src={mentee.imgUrl} alt="img" />
                        </div>
                        <div>
                            <h3>{mentee.name}</h3>
                            <p>{mentee.discription}</p>
                        </div>
                        <Link to={`/mentee/${mentee.id}`}>
                            <button>See Detail</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
