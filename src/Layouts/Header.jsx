import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci"
import { MdCloseFullscreen  } from "react-icons/md"
// import VanLifeImg from './images/van-life-icon.jpeg'
export default function Header (){
    const [mobile, setMobile] = useState(false)
    const [menuClick, setMenuClick] = useState(false)
    
    // responsive mobile view fuction
    useEffect(()=>{
        function adjustWindowSize (){
            if (window.outerWidth <= 499){
                setMobile(true)
            }
            else {
                setMobile(false)
            }
        }
        window.addEventListener("resize", adjustWindowSize)
        adjustWindowSize()
        return ()=>window.removeEventListener("resize", adjustWindowSize)
    }, [])

    function showMenu (){

    }
    const menuItems = [
        {
            link: "vans",
            name: "Vans"
        },
        {
            link: "about",
            name: "About us"
        },
        {
            link: "host",
            name: "Host"
        },
        {
            link: "signin",
            name: "Sign in"
        }
    ]
    const menu = menuItems.map(menu =>{
        return <Link to={menu.link}>{menu.name}</Link>
    })
    console.log(menuClick)
    return (
        <header >
            <div className='header-left'  onClick={()=>setMenuClick(false)} >
                {/* <img className='van-life-icon' src='../van-life-icon.jpeg'/> */}
                <Link to="/" className='van-life-title' >Explore <br/><span className='vanlife-span'>Van Life</span></Link>
            </div>

            {mobile ? 
            <div className='mobile-mode' onClick={()=>setMenuClick(prevValue => !prevValue)}>
                  {menuClick && <div className='header-menu'>
                        {menu}
                    </div>}
                {menuClick ? <MdCloseFullscreen className='menu-close' /> : <CiMenuBurger className='menu-open'/>}
            </div> :
            <div className='header-right'>
                {menu}
            </div>}
        </header>
    )
}