import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";

function Error(){
    return(
        <div className="error_page">
            <Navbar/>
            <p style={{ textAlign : "center" , padding : "100px"}}>Error 404 , Not found</p>
            <Footer/>
        </div>
    )
}

export default Error