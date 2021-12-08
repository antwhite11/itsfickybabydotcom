import React from "react"
import "./contact.css"
import fick from "./fick.JPG"
import  Slide from "react-reveal/Slide"





function Contactficky (){

return(


<div className="container topmarg">
<div className= "row rowmarg justify-content-center">
<div className="col-md-6 p-0 colmarg text-center">
<Slide right><div className="contactmarg">
Contact Ficky
</div></Slide>
<div className="emailmarg"><a className="emailtext" href="mailto:itsfickybaby@gmail.com">itsfickybaby@gmail.com</a></div>






</div>

<div className="col-md-6 p-0  text-center">
<div className="photocontainer">



<img className="photosize" src={fick} alt="ficky"></img>

</div>

</div>













</div>









</div>






)










}



export default Contactficky




