import React from "react";
import Wrapper from "../components/Wrapper/wrapper";
import Header from "../components/Header/header";
import Biosection from "../components/BioSection/biosection";
import Soundcloud from "../components/Soundcloud/soundcloud";
import Soundcloudpic from "../components/Soundcloud/soundcloud.JPG"
import Footer from "../components/Footer/footer";
import "./bio.css"


function Bio (){

return (
<Wrapper>
<Header></Header>
<Biosection></Biosection>
<Soundcloud pic={Soundcloudpic} phrase="Listen To Ficky On Soundcloud"></Soundcloud>
<div className="footermarg">
<Footer></Footer>
</div>
</Wrapper>



)







}


export default Bio