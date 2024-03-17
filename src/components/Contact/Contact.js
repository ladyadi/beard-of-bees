import React, { useState } from 'react';
import { send } from 'emailjs-com';
import foodTruckRally from '../../assets/food-truck-rally.jpg';
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';
import "./Contact.css";


const Contact = () => {
    const [responseMsg, setResponseMsg] = useState('');
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(toSend)
        send(
            process.env.REACT_APP_SERVICE,
            process.env.REACT_APP_TEMPLATE,
            toSend,
            process.env.REACT_APP_KEY
        )
            .then((response) => {
                setResponseMsg(`Message Successfully Sent!`)
            })
            .catch((err) => {
                setResponseMsg(`Message Failed to send. Please reach out directly to thebeardofbeesmgmt@gmail.com.`)
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact">
            <h1>Contact</h1>
            <div className="contact-form">
                <img src={foodTruckRally} alt="Band Image" width="45%" />
                <form onSubmit={onSubmit}>
                    <div className='response'>{responseMsg}</div>
                    <div className="social-container">
                        <a href="https://www.facebook.com/beardbeesband/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare className='social-icon' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCcbTMQjpoYMk8yj4vP4BnyQ" target="_blank" rel="noopener noreferrer">
                            <FaYoutubeSquare className='social-icon' />
                        </a>
                    </div>
                    <div className="form-item">
                        <input
                            type='text'
                            name='from_name'
                            placeholder='Name'
                            value={toSend.from_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <textarea
                            type='text'
                            name='message'
                            placeholder='Message'
                            value={toSend.message}
                            onChange={handleChange}
                            required
                        >
                        </textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;