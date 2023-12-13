import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from 'react-router-dom'
import { getVans } from "../../Database";
import { IoArrowBack } from "react-icons/io5";

export default function VanDetails (){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [van, setVan] = useState([])
    const {id} = useParams()
    const location = useLocation()
    
    const search = location.state?.search || ""
    const type = location.state?. type || "all"


 useEffect(()=>{
    async function vanElement (){
            setLoading(true)
            const data = await getVans()
            setVan(data.filter(datum => datum.id === id))
    }
    vanElement()
 }, [])

 console.log(van)

const vanDetails = van.map((van) =>{
    return (
        <div className="van-detail-list">
            <img src={van.imageUrl} className="van-detail-image"/>
            <div className="van-detail-title">
                <h1 className="van-detail-name">{van.name}</h1>
                <div className="van-detail-type">
                    <p className="bold">Van type:</p>
                    <p >{van.type}</p>
                </div>
                <div className="van-detail-price">
                    <p className="bold">Price:</p>
                    <p>£{van.price}/day</p>
                    </div>
                <div className="van-detail-description">
                    <span><h2>Description</h2></span> {van.description}
                </div>
                <button className="van-detial-rent-btn">Rent this Van</button>
            </div>
        </div>
    )
}) 
    return (
        <div className="van-details-page">
            <Link to={`..${search}`} relative="path">
                <div className="back-to-vans">
                        <h3><IoArrowBack className="back-arrow" /></h3>
                        <h3>back to {type} vans</h3>
                </div>
            </Link>

            {vanDetails}
        </div>
    )
}