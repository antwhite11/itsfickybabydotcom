import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import trentimg from "./Fickpan.png"
import Zoom from "react-reveal"
import HeadShake from 'react-reveal/HeadShake';
import "./header.css"
import { NavDropdown } from "react-bootstrap";
import {Nav} from "react-bootstrap"




function Header (props){


    const [isNavCollapsed, setIsNavCollapsed] =useState(true);
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
return(
<div className="container-fluid m-0 p-0">
<div className= "row">

<nav class="navbar navbar-expand-md headercolor navbar-light">
<a class="navbar-brand" href="#"><img src={trentimg} className="trentcss nonmobilemarg" alt="trent"></img></a>
  
  <button class="navbar-toggler buttmarg" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNav">
<ul class="navbar-nav listitemscent ">
<Zoom> 
  
<li class="nav-item">
        <Link class="nav-link listfont" to="/">Home</Link>
      </li>
  
  
  <li class="nav-item active zsetting">
       <NavDropdown className= "listfont " title= "Music" id= "nav-dropdown">
        <NavDropdown.Item href="https://open.spotify.com/artist/2T6LmzsyEfG4Gm6GREttZg" target="_blank">

        Spotify

        </NavDropdown.Item>

        <NavDropdown.Item href="https://music.apple.com/us/artist/ficky/1222109909" target="_blank">

       Apple Music


        </NavDropdown.Item>

       
         
       </NavDropdown>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link listfont" to="/bio">Bio</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link listfont" to="/contact">Contact</Link>
      </li> </Zoom>
    </ul> 
  </div>
</nav>







    






</div>








</div>



)



}



export default Header