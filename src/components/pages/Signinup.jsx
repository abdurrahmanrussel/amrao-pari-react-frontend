import React from 'react';
import { SignInOutContainer } from "../common/containers";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export const Signinup = () => {
    const navigate= useNavigate()
    return( 

        <div>

        <Button onClick={()=> navigate("/") } type="submit"  variant="contained" color="primary">
           Home 
          </Button>

            {/* Render SignInOutContainer component */}
            <SignInOutContainer />
            
        </div>

    );
};