import React from 'react'
import { Link } from 'react-router-dom'
import { GiSurferVan } from "react-icons/gi";

export default function Footer (){
    return (
        <footer>          
            <div className='footer-left'>
                <Link to="vans">Vans</Link>
                <Link to="about">About us</Link>
                <Link to="host">Host</Link>
                <Link to="signin">Sign in</Link>
            </div>
            <div className='footer-right'>
               <Link to="/" className='footer-icon'> 
                <h3><GiSurferVan /></h3>
               </Link>
                <p className='footer-title'>Explore Van Life is here to give you 
                the best experience with your voyage and tourism adventures</p>
            </div>
        </footer>
    )
}