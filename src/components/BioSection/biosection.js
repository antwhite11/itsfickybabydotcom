import React from "react";
import "./biosection.css";
import dope from "./dope.JPG"
import { Slide } from "react-reveal";




function Biosection () {

return (


    <div className="container">
        <div className="row">

        <div className="col-md-12 text-center biomarg">

       <Slide left><img className="fickypic" src= {dope} alt="dope">
       
       
       
       
       
       
       </img></Slide>

  
        




        </div>









        </div>


        <div className = "row">
    <div className = "col-md-12 colpad">

    <Slide right exit={true}><div className = "text-center biotext mt-5">


    New to the scene, Atlanta-based rapper Ficky shows up with veteran flows. His unpredictable cadence paired with witty lyrics over ear-catching melodies deliver a new sound to the South. A native of a small town in Indiana, Ficky is anything but ordinary. From his unforgettable voice to vibrant style, Ficky is going to have you waiting for more. 



</div>
</Slide>








    </div>







        </div>



    </div>









)








}


export default Biosection