import React from "react";
import '../index.css';
import "../css/home.css"
import Navbar from "./navbar";
import Footer from "./footer";
import sample from "../data/sample";

import Banner from "./home_components/banner";
import Features from "./home_components/Features"
import SmolBanner from "./home_components/SmolBanner"
import ItemCrousel from "./home_components/ItemCrousel";

let apiBaseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://e-commerce-backend-production-0c3d.up.railway.app/' 
  : '';


function HomePageContent(){

    const [ladies_products , set_ladies_products] = React.useState(sample) ;
    const [newArrival , setNewArrival] = React.useState(sample)

    React.useEffect(()=>{   
        const fetchData = async () => {
            try {
                let response = await fetch(`${apiBaseUrl}/api/products/data/new-arrival`);
                let data = await response.json(); 
                setNewArrival(data.data)

                const randomNumber = Math.floor(Math.random() * 6) + 1;
                console.log(randomNumber)
                response = await fetch(`${apiBaseUrl}/api/products/data/ladies?limit=30`);
                data = await response.json()
                set_ladies_products(data.data)

            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();
        
    } , [])

    // console.log(ladies_products)

    return(
        <div className="home_page_content">

            <Features/>
            {/* <Banner
                heading_above = {true}
                heading = {"Seasonal switch-up"}
                support_text = {"New arrivals"}
                position = {"center"}
                src="https://image.hm.com/content/dam/global_campaigns/season_09/ladies/ws30fd/WS30FD-3x2.jpg?imwidth=1536"
                link={"/store/ladies"}
                color = {"white"}
                className = {"red_banner"}
            /> */}
            <Banner
                heading_above = {true}
                heading = {"The 2024 Festive Edit"}
                support_text = {"An exclusive holiday edit"}
                position = {"center"}
                src="https://image.hm.com/content/dam/hm/TOOLBOX/PRE_SEASON/2024/diwali-festival-new-set/IN_HM_teaser_6030_103_367_3x2%20_620x1080.jpg.jpg?imwidth=1536"
                link={"/store/ladies"}
                color = {"white"}
                className = {"red_banner"}
            />
            <SmolBanner
                bg_src = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/regional-local-activities/seu/master-mcf/2023-season-7/ladies/summer-acc/tcl_summeracc_3x1_2.png]&scale=size[960]&sink=format[png],quality[80]"
                color = {"black"}
                heading = {"The T-shirt shop starting $399"}
                support_text = {"From bold graphics to basics: new trending tees for a fashionable update"}
                buttons = {
                    [{href : "store/ladies" , text : "Ladies"} , {href : "store/men" , text : "Men"}  , {href : "store/kids" , text : "Kids & baby"}]
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
                link = {"/store/men"}
                color = {"white"}
                className =  {"denim_white"}
            />

            <Banner 
                heading_above = {true}
                heading = {"The denim roundup"}
                // support_text = {"Up your jeans wardrobe"}
                position = {"center"}
                src={"https://image.hm.com/content/dam/global_campaigns/season_00/kids/4140d/4140D-3x2-Denim-young-boys.jpg?imwidth=1536"}
                link = {"/store/men"}
                className =  {"denim_kid"}
            />
            
            <ItemCrousel
                data = {newArrival}
                label = {"New Arrivals"}
                size = {"larger"}
            />

            <Banner
                heading_above = {true}
                heading = {"Luxe athleisure"}
                // support_text = {"Casual apparel with a sporty approach."}
                position = {"left"}
                src= {"https://image.hm.com/content/dam/global_campaigns/season_00/men/mp40nae/MP40NAE-athleisure-3x2.jpg?imwidth=1536"}
                link = {"/store/men"}
                color = {"white"}
                className =  {"move"}
            />

            <Banner
                heading_above = {true}
                heading = {"Dreamy dress edit"}
                support_text = {"Dreamy dress edit"}
                position = {"center"}
                src= {"https://image.hm.com/content/dam/regional-local-activities/seu/master-mcf/2024-season-9/ladies/TCL_ladies_whiteddress_3x2.png?imwidth=1536"}
                link = {"/store/ladies"}
                color = {"white"}
                className =  {"dreamy"}
            />

            <SmolBanner
                bg_src = {"https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_00/home/7000a/7000A-2x1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]"}
                color = {"white"}
                heading = {"Home: New Arrivals"}
                support_text = {"Selection of most loved pieces!"}
                buttons = {
                    [{href : "/store/home" , text : "Shop now"}]
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
