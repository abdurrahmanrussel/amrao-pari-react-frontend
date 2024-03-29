import React from 'react'
import "./home.css"
import home_bg from "./home_bg.json"
import Lottie from 'lottie-react'


export const Home = () => {
    return (
    
     <>
     <section className="hero">
        <div className="containerflexsB">
            <div className="row">
                <div className="col">
                    <h1>
                        WELCOME TO AMRAO PARI
                    </h1>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW 
                    </button>

                    <button className="primary-btn course">
                        VIEW COURSE 
                    </button>
                </div>
                </div>

                <div className="col">
                <div className="lottie-container">
                     <Lottie animationData={home_bg} />   
                </div>
                </div>

               
              
                
            </div>
        </div>
     </section>
     <div className="margin"></div>
     </>   
    )
    
};