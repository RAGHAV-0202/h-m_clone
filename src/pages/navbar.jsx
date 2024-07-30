import React from "react";
import "../css/navbar.css"



function Navbar(){
    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);
    const len = cart.length
    return(
        <div className="navbar">

            <div className="nav_top">
                <div className="nav_top_left">
                    <a href="/customer_service">Customer Service</a>
                    <a href="/newsletter">Neweletter</a>
                    <a href="/find_stores">Find a store</a>
                </div>
                <div className="nav_top_middle">
                    <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1n8MdAYvQMMDlpTRkvdYosPoxKbmX-4gUw&s" alt="H&M"></img></a> 
                </div>
                <div className="nav_top_right">
                    <a href="/login">
                        <i class="fa-light fa-user"></i>
                        <p>Sign in</p>
                    </a>
                    <a href="/favourites">
                        <i class="fa-light fa-heart"></i>
                        <p>Favourites</p>
                    </a>
                    <a href="/cart">
                        <i class="fa-light fa-bag-shopping"></i>
                        <p>Shopping bag ({len})</p>
                    </a>
                </div>
            </div>
            <div className="nav_bottom">

                <a href="/ladies">Ladies</a>
                <a href="/men">Men</a>
                <a href="/baby">Baby</a>
                <a href="/kids">Kids</a>
                <a href="/home">H&M HOME</a>
                <a href="/sport">Sport</a>
                <a href="/sale">Sale</a>
                <a href="/sustainability">Sustainability</a>

            </div>

        </div>
    )
}

export default Navbar