import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";

function Ordered(){
    return(
        <div className="error_page">
            <Navbar/>
            <p style={{ textAlign : "center" , padding : "100px"}}>Ordered Successfully <br></br>Thankyou for shopping with us<br></br>
            </p>
            <Footer/>
        </div>
    )
}

export default Ordered