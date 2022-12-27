import React from 'react'
import "./endcredits.css"


function endcredits() {
  return (
        
    <div id="end_credits_container">
        <div id="made_by_me">
        Made by me using React. © Kevin Shah Mansouri <span id="year">{(new Date().getFullYear())}</span>
        </div>
    </div>
  )
}


export default endcredits