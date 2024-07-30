import "../css/sustainability.css";
import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";

import "../css/top_banner.css"

function MainContentBanner(props) {
    const styles = {
        width: "100%",
        minWidth: "100%",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: 500,
    }

    return (
        <div style={styles} className="MainContentBanner">
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">Sustainability</span> </p>
        </div>
    )
}


function MainContent(){
    return(
        <div className="page">
            <MainContentBanner/>
            <div className="main_content_sus">
                    <h1>Sustainability</h1>
            </div>
        </div>
    )
}


function Sustainability(){
    return(
        <div className="sale_page">
            <Navbar/>
                <MainContent/>
            <Footer/>
        </div>
    )
}

export default Sustainability