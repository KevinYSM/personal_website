import React from 'react'
import "./navbar.css"
import Logo from "../../assets/logo/kevinsm_clear_white.png"

function navbar() {
  return (
    <div id="navbar_container">

        <div id="navbar_logo" className="logo"><img src={Logo}></img></div>
    </div>
  )
}

export default navbar