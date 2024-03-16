import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import Logo from "./Wix.jpg"

const NavBar = () => {
  return (
    <>
    <nav className='navContainer'>
        <aside className='logoBlock'>
        <img src={Logo} alt="" height="60px" width="70px" />
        </aside>
        <aside className='listBlock'>
            <ul>
                <NavLink to="/">
                    <li className='list'>
                        <span>HOME</span>
                        <span><FaHome /></span>
                    </li>
                </NavLink>
                <NavLink to="/view">
                    <li className='list'>
                        <span>VIEW-ALL</span>
                        <span>  <LuView /></span>
                    </li>
                </NavLink>
                
                
                
            </ul>
        </aside>

    </nav>
    </>
  )
}

export default NavBar