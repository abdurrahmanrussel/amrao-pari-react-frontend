import React from "react";
import './Contact.css';
import contact_img from "./contactus.json"
import Lottie from "lottie-react";

export const Contact = () => {
    return( 
        <>
        <div className="hero">

            <div className="container2"> 
                <div className="lottie-container-contact">
                     <Lottie animationData={contact_img} />   
                </div>
            </div>

            <div className="container">
                <div className="header">
                    <div className="text">Any Queston?</div>
                    <div className="underline"></div>
                <div className="text2">Contact Us</div>
                </div>

                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="input">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="inputmsg">
                        <input type="message" placeholder="Write your message here"/>
                    </div>
                </div>
                    <div className="submit-container">
                        <button className="submit">Send</button>
                    </div>
                </div>

        </div>

        </>
    )
};