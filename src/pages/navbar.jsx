import React from "react";
import "../css/navbar.css"
import axios from "axios"
import baseUrl from "../base_url.js"

function Navbar(){
    // const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);
    // const len = cart.length

    const [loggedIn , setLoggedIn] = React.useState(false)
    const [cartLen , setCartLen] = React.useState(0);



    React.useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                let response = await axios.get(`${baseUrl}api/auth/IsLoggedIn` , { withCredentials: true });
                console.log(response.data); 
                setLoggedIn(true);

                response = await axios.get(`${baseUrl}api/cart/get-cart` , { withCredentials: true });
                setCartLen(response?.data?.data?.cart?.length || 0)
            } catch (err) {
                console.error("Error while checking login status:", err.response?.data || err.message);
            }
        };

        checkLoginStatus();
    }, []);


    const cartText = React.useMemo(() => {
        return loggedIn ? `Shopping bag (${cartLen})` : "Shopping bag (0)";
    }, [loggedIn, cartLen]);



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
                    { !loggedIn && 
                        <a href="/login">
                            <i class="fa-light fa-user"></i>
                            <p>Sign in</p>
                        </a>
                    }
                    { loggedIn && 
                        <a href="/profile">
                            <i class="fa-light fa-user"></i>
                            <p>Profile</p>
                        </a>
                    }
                    <a href="/favourites">
                        <i class="fa-light fa-heart"></i>
                        <p>Favourites</p>
                    </a>
                    <a href="/cart">
                        <i class="fa-light fa-bag-shopping"></i>
                         <p>{cartText}</p>
                        
                    </a>
                </div>
            </div>
            <div className="nav_bottom">

                <a href="/store/ladies">Ladies</a>
                <a href="/store/men">Men</a>
                <a href="/store/baby">Baby</a>
                <a href="/store/kids">Kids</a>
                <a href="/store/home">H&M HOME</a>
                <a href="/store/sport">Sport</a>
                <a href="/sale">Sale</a>
                <a href="/sustainability">Sustainability</a>

            </div>

        </div>
    )
}

export default Navbar