import React from "react";
import { Link } from 'react-router-dom'

export default function PageNotFound (){
    return (
        <div className="page-not-found">
            <h3>The Page you have requested is either not available or 
                has been removed by admin. Contact <Link to="contact" className="contact">admin</Link> for support or 
                go back to home page
            </h3>
            <Link to="/" className="page-not-found-link">Return to home page</Link>
        </div>
    )
}