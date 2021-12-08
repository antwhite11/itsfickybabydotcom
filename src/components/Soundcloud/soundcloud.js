import React from "react"
import "./soundcloud.css"
import Zoom from "react-reveal/Zoom"




function Soundcloud (props) {


return (

<div className="container-fluid contmarg">


   <div className= "row justify-content-center">
       
       <div className="col-md-4 border-top border-dark"></div>
       
       
       </div> 
    <div className="row margrow mt-3 ">

    <div className="col-md-12 mt-5">
   
    <div className="text-center pos">

    

    <img  className="picstats mobsize divpos" src={props.pic} alt="pic"></img>


    <Zoom><a href="https://soundcloud.com/itsfickybaby" target="_blank" rel="noreferrer" alt="soundcloud" className="textstats2 divpos">{props.phrase}</a></Zoom>

    </div>

  

   












    </div>




    </div>





</div>


















)








}


export default Soundcloud