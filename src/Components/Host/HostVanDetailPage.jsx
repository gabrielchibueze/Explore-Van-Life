import React, { useEffect, useState } from "react"
import {Link, NavLink, useLocation, useParams, Outlet} from 'react-router-dom'
import { getVans } from "../../Database"
import { IoArrowBack } from "react-icons/io5";


import './Host.css'

export default function HostVanDetailsPage (){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [hostVanDetails, setHostVanDetails] = useState([])
    const {id} = useParams()

   useEffect(()=>{
        async function loadHostVanDetails (id){
            setLoading(true)
            try {
                const data = await getVans()
                setHostVanDetails(data.filter((datum)=>datum.id === id))
            }
            catch (err){
                setError(prevError => ("There was an error loading the van detail"))
            }
            setLoading(false)
        }

        loadHostVanDetails(id)
   }, [id])

   const HostvanElements = hostVanDetails.map((hostVanDetail)=>{
    return (
        <div className="host-van-detail">
                    <img src={hostVanDetail.imageUrl} className="host-van-detail-image"/>
                    <div>
                    <h2 className={`host-van-detail-type ${hostVanDetail.type.toLowerCase()}`}>{hostVanDetail.type}</h2>
                        <h2 className="host-van-detail-name">{hostVanDetail.name}</h2>
                        <p className="host-van-detail-price">£{hostVanDetail.price}/day</p>
                    </div>
                </div>
    )
   })

   const isActiveLink = {
    fontSize: "1.25rem",
    textDecoration: "underline"
   }

    return (
        <div className="host-van-page">
            <Link to="../" relative="path">
                <div className="back-to-vans">
                        <h3><IoArrowBack className="back-arrow"/></h3>
                        <h3>back to host vans</h3>
                </div>
            </Link>
            
            <div className="host-van-Details-page">
                {HostvanElements}
                <div className="host-van-others">
                    <NavLink to="." end style={({isActive}) => isActive ? isActiveLink : null}>Details</NavLink>
                    <NavLink to="price" style={({isActive})=> isActive ? isActiveLink : null}>Price</NavLink>
                    <NavLink to="photos" style={({isActive})=> isActive ? isActiveLink : null}>Photos</NavLink>
                </div>
                <Outlet context={{hostVanDetails}}/>
            </div>

        </div>
   
    )
}