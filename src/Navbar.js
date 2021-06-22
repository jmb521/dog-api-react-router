import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

    const link = {
        color: "fuchsia",
        marginRight: "10px",
        backgroundColor: "blue"
    }

    return(
    <div>
        <NavLink 
        exact
        to="/" 
        activeStyle={{backgroundColor: "purple"}} 
        style={link}>
            Home
        </NavLink>

        <NavLink 
        exact
        to="/dogs" 
        activeStyle={{backgroundColor: "purple"}} 
        style={link}>
            Dogs
        </NavLink>
    </div>
    )


}

export default Navbar