import React from "react";
import "./footer.css"
import insta from "./instalogo.png";
import twitter from "./twitter.png";
import spotify from "./spotify.png"
import Slide  from "react-reveal/Slide";
import Fade from "react-reveal/Fade"


function Footer (){


return (


<div className="container-fluid mx-0 p-0 followmarg">
<div className="row">

<Slide left><div className="col-md-12 text-center mt-4 followtext">



Follow Ficky








</div></Slide>











</div>

<div className="row">

<div className="col-md-12 mb-4 text-center sibling-fade">
<a href="https://twitter.com/itsfickybaby" target="_blank" rel="noreferrer"><img className="twitter" src={twitter} alt="twitter"/></a>
<a href="https://www.instagram.com/itsfickybaby/" target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="insta"/></a>
<a href="https://open.spotify.com/artist/2T6LmzsyEfG4Gm6GREttZg" target="_blank" rel="noreferrer"><img className="spotify" src={spotify} alt="spotify"></img></a>











</div>











</div>

<div className="row mt-2margerase justify-content-center">
<div className="col-md-4 border-top border-dark text-center">


<div className="linksize mt-2">Ficky LLC; Copyright 2020</div>









</div>













</div>











</div>
















)









}


export default Footer