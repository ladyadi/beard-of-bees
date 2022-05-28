import React, { useState } from 'react';
import { send } from 'emailjs-com';
import foodTruckRally from '../../assets/food-truck-rally.jpg';
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';
import "./Contact.css";


const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_SERVICE,
            process.env.REACT_APP_TEMPLATE,
            toSend,
            process.env.REACT_APP_KEY
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact">
            <h1>Contact</h1>
            <div className="contact-form">
                <img src={foodTruckRally} alt="Band Contact Image" width="45%" />
                <form onSubmit={onSubmit}>
                    <div className="social-container">
                        <a href="https://www.facebook.com/beardbeesband/" target="_blank">
                            <FaFacebookSquare className='social-icon' />
                        </a>
                        <a href="https://www.youtube.com/channel/UCcbTMQjpoYMk8yj4vP4BnyQ" target="_blank">
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
                        />
                    </div>
                    <div className="form-item">
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <textarea
                            type='text'
                            name='message'
                            placeholder='Message'
                            value={toSend.message}
                            onChange={handleChange}
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