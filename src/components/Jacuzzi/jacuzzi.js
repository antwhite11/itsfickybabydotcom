import React from "react";
import "./jacuzzi.css"
import jacuzzipic from "./jacuzzicover.jpeg"
import  { Fade } from "react-reveal";





function Jacuzzi(){


return (

<div className="container-fluid contcss  p-0 mx-0 mt-5 mb-3">

<div className= "row mb-3 justify-content-center">

<div className="col-md-4 wordsmarg">

<Fade left><div className="jacuzzifont">

JACUZZI

</div> </Fade>

<div className="outnowmarg outitalics">

New Single Out <a className="jacuzzilink" href="https://open.spotify.com/track/5RX0Iu802PtF7UL2Z2LUyD?si=215aa888ec9146c8" target="_blank" rel="noreferrer">Now.</a>

</div>

</div>

<Fade right><div className="col-md-4 picmarg">


<img className="covercss" src={jacuzzipic} alt="jacuzzi"></img>


</div>


</Fade>









</div>








</div>








)







}


export default Jacuzzi