import React, {useState} from 'react'
import '../findMentor-form.css'

export default function FindMentorForm() {
    const [interests, set_interests] = useState([])
    const [MentorshipArea, set_MentorshipArea] = useState([])
    const [gender, set_gender] = useState("")

function handleSubmit(e){
e.preventDefault()
}

    return (
        <div id="findMentor-form-container">
            <form >
                <h3>Fill in this form with your requests</h3>
                <div>
                    <label>
                        Interests:
                    </label>
                    <input
                        type="email"
                        id="user_email"
                        placeholder="Write your interests"
                        value={interests}
                        onChange={(e) => set_interests(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        Area of mentorship:
                    </label>
                    <input
                        type="text"
                        value={MentorshipArea}
                        placeholder="What areas do you need mentorship for?"
                        onChange={(e) => set_MentorshipArea(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        prefered mentor gender:
                    </label>
                    <select
                        id="status"
                        required
                    >
                        <option
                            value={gender}
                            onClick={(e) => set_gender(e.target.value)}>
                            female
                        </option>
                        <option
                            value={gender}
                            onClick={(e) => set_gender(e.target.value)}
                        >
                            male
                        </option>
                    </select>
                </div>
                <button type='submit'onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
