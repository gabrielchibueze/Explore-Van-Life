import React from "react";
import {useOutletContext} from 'react-router-dom'

export default function HostVanPrice (){
    const {hostVanDetails} = useOutletContext()
    const HostVanPrice = hostVanDetails.map((van)=>{
        return (
            <div><span className="span">Price:</span> £{van.price}/day</div>
        )
    })
    return (
        <div>{HostVanPrice}</div>
    )
}