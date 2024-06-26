import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'; 


export const MaybeShowNAvbar= ({children}) => {
    
    const location=  useLocation();
    const [showNavbar, setshowNavbar] = useState(false)

    useEffect(() => {
        console.log('This is location: ', location)
        if(location.pathname==='/signinup' ) {
            setshowNavbar(false)
        }

        else {
            setshowNavbar(true)
        }

    }, [location])


    return ( 
    <div>{ showNavbar && children}</div>
    )
}