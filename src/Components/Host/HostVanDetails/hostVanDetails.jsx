import React from "react"
import {useOutletContext} from 'react-router-dom'

export default function HostVanDescription (){
    const {hostVanDetails} = useOutletContext()
    console.log(hostVanDetails)

    const hostVanDescription = hostVanDetails.map((van)=>{
        return <div className="host-van-description">
            <p><span className="span">Name:</span> {van.name}</p>
            <p> <span className="span">Category:</span> {van.type}</p>
            <p> <span className="span">Description:</span> {van.description}</p>
        </div>
    })

    return (
        <div>{hostVanDescription}</div>
    )
}