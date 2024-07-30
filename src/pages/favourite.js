import React from "react";
import '../index.css';
import Navbar from "./navbar";
import "../css/favourites.css"
import Footer from "./footer";


function Favourites(){
    
    const [favourite , setFavourite] = React.useState([])

    return(
        <>
            <Navbar/>
            <div className="fav">
{favourite.length < 1 &&
                <div className="empty">
                    <div className="content">
                        <h1>Favourites</h1>
                        <h3>SAVE YOUR FAVOURITE ITEMS</h3>
                        <p>Want to save the items that you love? Just click on the <br></br>heart symbol beside the item and it will show up here.</p>      
                        <a href="/">Browse now</a>
                    </div>        

                </div>}
  
            </div>

            <Footer/>
        </>
    )
}

export default Favourites