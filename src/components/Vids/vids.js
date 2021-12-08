import React from "react";
import "./vids.css"
import Pulse from "react-reveal/Pulse"



function Vids(){

return(
<div className="container wholethang">

<div className="row justify-content-center">

<div className="col-md-3 border-top border-dark"></div>



</div>


<div className="row mt-5">
<div className="col-md-6 vidcenter">


<Pulse><iframe className="vids" width="520" height="314" src="https://www.youtube.com/embed/CYvN0N0sIG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Pulse>






</div>

<div className="col-md-6 vidcenter2">


<Pulse><iframe className="vids2" width="520" height="314" src="https://www.youtube.com/embed/bHObdzpcEO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Pulse>




</div>






</div>









</div>







)







}



export default Vids