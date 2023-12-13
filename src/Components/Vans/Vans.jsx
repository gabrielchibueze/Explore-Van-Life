import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {getVans} from '../../../src/Database'
import './vans.css'

export default function Vans (){
    const [loading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])
    const [error, setError] = useState(null)
    const typeFilter = searchParams.get("type")

    console.log(typeFilter)

    React.useEffect(() => {

        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])


    const vanElement = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans

    const vanData = vanElement.map((van)=>{
        return (
           <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
             <div className="van-list">
                <img src={van.imageUrl} className="van-list-image"/>
                <h2 className="van-list-name">{van.name}</h2>
                <p className="van-list-price">£{van.price}/day</p>
                <h2 className={`van-list-type ${van.type.toLowerCase()}`}>{van.type}</h2>
            </div>
           </Link>
        )
    })
    function handleFilterVans(key, value){
        setSearchParams(prevParams =>{
            if(value === null){
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    if (loading){
        return (
            <p>Loading.....</p>
        )
    }
    if (error){
        return (
            <h3>There was wan error loading vans</h3>
        )
    }
    return (
        <div className="vans-page">
            <h1 className="top">Explore our van options</h1>
            <div className="van-type-filter">
                <button onClick={()=>handleFilterVans("type", "simple")} className={`van-filter simple ${typeFilter === "simple" ? "selected-simple" : ""}`}>Simple</button>

                <button onClick={()=>handleFilterVans("type", "rugged")} className={`van-filter rugged ${typeFilter === "rugged" ? "selected-rugged" : ""}`}>Rugged</button>

                <button onClick={()=>handleFilterVans("type", "luxury")} className={`van-filter luxury ${typeFilter === "luxury" ? "selected-luxury" : ""}`}>Luxury</button>
                
                {typeFilter ? (<button className="clear-van-filter" onClick={()=>handleFilterVans("type", null)}>Clear filter</button>)
                : null }
            </div>
            <div className="all-van-list">
                {vanData}
            </div>
            
        </div>
    )
}