import React from "react";
import {useOutletContext} from 'react-router-dom'

export default function HostVanPhotos (){
    const {hostVanDetails} = useOutletContext()
    const HostVanPhotos = hostVanDetails.map((van)=>{
        return (
            <div>
                <img src={van.imageUrl} className="host-van-photo"/>
            </div>
        )
    })

    return (
        <div>{HostVanPhotos}</div>
    )
}