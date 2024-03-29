import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate= useNavigate()
    return ( 
    <div>
        <h1>Hello Home Page</h1>
        <button onClick={()=> navigate("/signinup") }>Start Here</button>
    </div>
     
    )
}; 