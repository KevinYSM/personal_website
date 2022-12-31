import React from 'react'
import "./navbar.css"
import Logo from "../../../assets/logo/kevinsm_clear_white.png"
import Menu from "../../../assets/icons/SVG/menu.svg"
import Close from "../../../assets/icons/SVG/close.svg"

function navbar() {
        function navbarClick(){
                let dropdownMenu = document.getElementById("dropdown_menu");
               
                /**if (dropdownMenu.style.display ==="none" | dropdownMenu.style.display===""){
                        dropdownMenu.style.display="block";
                        document.getElementById("menu_icon").src="close.svg";
                }
                else{
                        dropdownMenu.style.display="none";
                        document.getElementById("menu_icon").src="menu.svg";
                }
                */

                if (dropdownMenu.classList.contains("remove_this")){
                        dropdownMenu.classList.remove("remove_this");
                        dropdownMenu.classList.add("add_this");
                        document.getElementById("navbar_container").classList.add("dropdown_menu_active");      
                        document.getElementById("navbar_container").classList.remove("dropdown_menu_inactive");                       
                        document.getElementById("menu_icon").src="close.svg";
                }
                else{
                        dropdownMenu.classList.add("remove_this");
                        dropdownMenu.classList.remove("add_this");
                        
                        document.getElementById("navbar_container").classList.add("dropdown_menu_inactive");
                        //document.getElementById("navbar_container").classList.remove("dropdown_menu_active");   
                        document.getElementById("menu_icon").src="menu.svg";
                        
                }
                

                
                
        }
  return (
        <>
       
    <div id="navbar_container" className="dropdown_menu_inactive">
    
        <div id="navbar_logo" className="logo" ><img src={Logo}></img></div>
        
        <div id="menu_icon_container" className="center" onClick={navbarClick}><img id="menu_icon" src={Menu}></img></div>

        
    </div>

        <div id="dropdown_menu" className="remove_this"></div>
        </>
  )
}

export default navbar