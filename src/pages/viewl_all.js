import React from "react";
import '../index.css';
import Navbar from "./navbar";
import Footer from "./footer";

function ViewAll(){
    return(
        <div className="home_page">
            <Navbar/>
            <p style={{ textAlign : "center" , padding : "100px"}}>View ALL</p>
            <Footer/>
        </div>
    )
}

export default ViewAll