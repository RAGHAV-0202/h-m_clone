import "../css/sale.css";
import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";

function MainContentBanner(){

    const styles = {
        width: "100%",
        minWidth: "100%",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "rgb(38, 255, 0)",
        fontSize: "12px",
        fontWeight: 500,    
        paddingBottom : "28px"
    }

    return(
        <div style={styles} className="MainContentBanner">
            <p>HM.com / Sale</p>
        </div>
    )
}

function MainContent(){
    return(
        <div className="page">
            <MainContentBanner/>
            <div className="main_content">
                <div className="Saleleft">

                    <a href="/store/ladies">Ladies</a>
                    <a href="/store/men">Men</a>
                    <a href="/store/kids">Kids</a>
                    <a href="/store/baby">Baby</a>
                    <a href="/store/home">Home</a>
                    <a href="/store/sport">Sports</a>

                </div>
                <div className="Saleright">
                    <div className="right_centered">
                        <div className="sale_div">
                            <h1>SALE</h1>
                            <div className="links">
                                <a href="/store/ladies">Ladies</a>
                                <a href="/store/men">Men</a>
                                <a href="/store/kids">Kids</a>
                                <a href="/store/baby">Baby</a>
                                <a href="/store/home">Home</a>
                                <a href="/store/sport">Sports</a>
                            </div>
                        </div>
                        <div className="sale_div2">
                            <h1>H&M SALE</h1>
                            <p>Shop the sale online at H&M and stock up on lots of great deals! Discover latest styles for less from all our departments. 

</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Sale(){
    return(
        <div className="sale_page">
            <Navbar/>
                <MainContent/>
            <Footer/>
        </div>
    )
}

export default Sale