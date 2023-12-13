import React, { useEffect, useState } from "react";
import AboutImage from "../../public/about-van-image.jpeg"
import { Link } from "react-router-dom";

export default function About (){
    const [colorIndex, setColorIndex] = useState(0)
    const colors = ["black", "#f8f9fa", "#003ca6", "#b2f7ef"]
    
    useEffect(()=>{
        let colorIntervals = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length )
        }, 2000);
        return () => clearInterval(colorIntervals)
    }, [colors.length])
    
    return (
        <div className="about-container">
            <img src={AboutImage} className="about-van-image"/>
            <div className="about-page">
                <div className="about-top">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. 
                        Our vans are recertified before each trip to ensure your travel plans can go off 
                        without a hitch. (Hitch costs extra 😉)        
                </p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the 
                        world on 4 wheels.
                </p>
                </div>
                <div className="about-page-caption">
                    <h2 style={{color: colors[colorIndex]}}>Your destination is waiting.<br />Your van is ready.</h2>
                    <Link className="about-link-to-van" to="/vans">Explore our vans</Link>
                </div>
    
            </div>
        </div>
    )
}