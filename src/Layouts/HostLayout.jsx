import React from "react";
import { Link, Outlet } from 'react-router-dom'
// import Host from '../Components/Host/Host'
import '../Components/Host/Host.css'

export default function HostLayout (){
    return (
        <div className="host-layout">
            <div className="host-page">
                <Link to=".">Dashboard</Link>
                <Link to="income">Income</Link>
                <Link to="vans">Vans</Link>
                <Link to="reviews">Reviews</Link>
            </div>
            <Outlet />
        </div>
    )
}