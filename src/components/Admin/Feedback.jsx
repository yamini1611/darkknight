import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/Feedback.css';
import { Link } from "react-router-dom";
const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchdetails();
    }, []);

    const fetchdetails = async () => {
        try {
            const response = await axios.get('http://localhost:4000/Feedback');
            const display = response.data;
            setFeedback(display);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div  id='ro' className="min-vh-100">
                  <Link to='/Homepage' className='quick-sand text-white p-2 ' style={{ textDecoration: "none", fontSize: 23 }}><i class="fa-solid fa-backward"></i> back</Link>

            <h2>Feedbacks</h2>
            <div className="row" >
                {feedback.map((feed) => (
                    <div className="col-4" id='colf'>
                        <div className="card " id='cardfeedback' key={feed.id}>
                            <h3>{feed.feedbackMessage}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feedback;