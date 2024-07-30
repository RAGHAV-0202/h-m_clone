import React from "react";
import '../index.css';
import "../css/home.css"
import Navbar from "./navbar";
import Footer from "./footer";
import {nanoid} from "nanoid"
import newArrival from "../data/new_arrival";
import ladies_products from "../data/ladies_products";

import Banner from "./home_components/banner";
import Features from "./home_components/Features"
import SmolBanner from "./home_components/SmolBanner"
import ItemCrousel from "./home_components/ItemCrousel";

function HomePageContent(){
    return(
        <div className="home_page_content">

            <Features/>
            <Banner
                heading_above = {false}
                heading = {"A red moment"}
                support_text = {"New arrivals"}
                position = {"center"}
                src="https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ws40b/WS40B-3x2.jpg?imwidth=1536"
                link={"ladies"}
                color = {"white"}
                className = {"red_banner"}
            />
            <SmolBanner
                bg_src = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/regional-local-activities/seu/master-mcf/2023-season-7/ladies/summer-acc/tcl_summeracc_3x1_2.png]&scale=size[960]&sink=format[png],quality[80]"
                color = {"black"}
                heading = {"The T-shirt shop starting $399"}
                support_text = {"From bold graphics to basics: new trending tees for a fashionable update"}
                buttons = {
                    [{href : "ladies" , text : "Ladies"} , {href : "men" , text : "Men"}  , {href : "kids" , text : "Kids & baby"}]
                }
            />
            <ItemCrousel
                data = {ladies_products}
                label = {"Women's trending bestsellers 🖤"}
                size = {"smaller"}
            />
            <Banner 
                heading_above = {true}
                heading = {"The denim roundup"}
                support_text = {"Up your jeans wardrobe"}
                position = {"left"}
                src={"https://image.hm.com/content/dam/global_campaigns/season_00/men/ms30tnd-denim/MS30TND-Denim-roundup-3x2.jpg?imwidth=1536"}
                link = {"men"}
                color = {"white"}
                className =  {"denim_white"}
            />

            <Banner 
                heading_above = {true}
                heading = {"The denim roundup"}
                // support_text = {"Up your jeans wardrobe"}
                position = {"center"}
                src={"https://image.hm.com/content/dam/global_campaigns/season_00/kids/4140d/4140D-3x2-Denim-young-boys.jpg?imwidth=1536"}
                link = {"men"}
                className =  {"denim_kid"}
            />
            
            <ItemCrousel
                data = {newArrival}
                label = {"New Arrivals"}
                size = {"larger"}
            />

            <Banner
                heading_above = {true}
                heading = {"The leggings edit"}
                // support_text = {""}
                position = {"center"}
                src= {"https://image.hm.com/content/dam/global_campaigns/season_00/move/7400a/7400A-3x2-the-leggings-edit.jpg?imwidth=1536"}
                link = {"ladies"}
                color = {"black"}
                className =  {"move"}
            />

            <Banner
                heading_above = {true}
                heading = {"Dreamy dress edit"}
                support_text = {"Dreamy dress edit"}
                position = {"center"}
                src= {"https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_3x2.png?imwidth=1536"}
                link = {"ladies"}
                color = {"white"}
                className =  {"dreamy"}
            />

            <SmolBanner
                bg_src = {"https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_00/home/7000a/7000A-2x1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]"}
                color = {"white"}
                heading = {"Home: New Arrivals"}
                support_text = {"Selection of most loved pieces!"}
                buttons = {
                    [{href : "home" , text : "Shop now"}]
                }
            />
 

        </div>
    )
}


function HomePage(){
    return(
        <div className="home_page">
            <Navbar/>
            <div className="content_div">
                <HomePageContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage