import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { getVans } from '../../Database'

import './Host.css'

export default function HostVans (){
    const [hostVans, setHostVans] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
         async function loadHostVans(id){
            setLoading(true)
            try {
                const data =  await getVans()
                setHostVans(data.filter(datum => datum.hostId === id))    
            }
            catch (err){
                setError(prevValue => ("there was an error loading vans"))
            }
            setLoading(false)
        }

        loadHostVans(123)
    }, [])


    const vanData = hostVans.map((hostVan, index)=>{
        return (
           <Link to={hostVan.id}>
                <div className="host-van-list">
                    <h2>#{index+1}</h2>
                    <img src={hostVan.imageUrl} className="host-van-list-image"/>
                    <div>
                        <h2 className="host-van-list-name">{hostVan.name}</h2>
                        <p className="host-van-list-price">£{hostVan.price}/day</p>
                        <h2 className="host-van-list-type">{hostVan.type}</h2>
                    </div>
                </div>
           </Link>
        )
    })
    if (loading){
        return (
            <h1>Loading.....</h1>
        )
    }
    if (error){
        return (
            <h2>{error}</h2>
        )
    }
    return (
        <div className="host-vans-page">
            <h1>Your listed vans</h1>
            <div className="host-vans">
                {vanData}
            </div>
        </div>
    )
}