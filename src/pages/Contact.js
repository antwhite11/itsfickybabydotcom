import React from "react";
import Header from "../components/Header/header";
import Wrapper from "../components/Wrapper/wrapper";
import Contactficky from "../components/Contact/contactficky";
import Footer from "../components/Footer/footer";
import "./contact.css"





function Contact (){


    return(
<Wrapper>
<Header></Header>
<Contactficky></Contactficky>
<div className="footermarg2">
<Footer></Footer>
</div>
</Wrapper>




    )




}


export default Contact