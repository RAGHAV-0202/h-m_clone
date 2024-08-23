import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";
import Product from "./category_components/product";
import Aside from "./category_components/left_panel"; 
import SmolBanner from "./home_components/SmolBanner"
import NextBTN from "./category_components/next_btn";
import { useParams } from 'react-router-dom';
// import  kids_products from "../data/kids_products"
// import men_products from "../data/men_products";
// import ladies_products from "../data/ladies_products";
// import baby_products from "../data/baby_products";
// import sports_products from "../data/sports";

import "../css/category_products.css"
import "../css/top_banner.css"
import Loader from "./home_components/loader";
// import home_products from "../data/home_products";

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
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">Kids</span> </p>
        </div>
    )
}


function MainContentLeft({passedFN , originalData}){

    const { id } = useParams()

    var button_els = [
            {name : "View all" , value : "any"},  
            {name : "Jeans" , value : "jeans"},
            {name : "T-Shirts" , value : "tshirt"},
            {name : "trousers" , value : "trouser"},
            {name : "Hoodies" , value : "hood"},
            {name : "Sweatshirts" , value : "sweat"},
            {name : "Jackets" , value : "jacket"},
            {name : "Shirts" , value : "shirts"},
            {name : "" , value : ""},
            ]

    if (id === "ladies"){
        button_els = [
                {name : "View all" , value : "any"},
                {name : "Jeans" , value : "jeans"},
                {name : "Tops" , value : "tops"},
                {name : "Shirts" , value : "shirts"},
                {name : "trousers" , value : "trouser"},
                {name : "Cardigans" , value : "cardigans" },
                {name : "Hoodies & Sweatshirts" , value : "sweats"},
                {name : "Night Wear" , value : "night"},
                {name : "Night" , value : "linge"},
                {name : "" , value : ""},

             ]
    }else if (id === "kids"){
        button_els = [
                {name : "View all" , value : "any"},
                {name : "Jeans" , value : "jeans"},
                {name : "T-Shirts" , value : "tshirt"},
                {name : "trousers" , value : "trouser"},
                {name : "Cardigans" , value : "cardigans" },
                {name : "Hoodies & Sweatshirts" , value : "hoodies"},
                {name : "Jackets" , value : "jacket"},
                {name : "Shirts" , value : "shirts"},
                
                {name : "" , value : ""},
                {name : "" , value : ""},

             ]
    }else if (id === "home"){
        button_els = [
                {name : "View all" , value : "any"},
                {name : "Cooking" , value : "cooking"},
                {name : "Nightwear" , value : "night"},
                {name : "Decor" , value : "decor"},
                {name : "Kitchen" , value : "kitchen"},
                {name : "Accessories" , value : "accessories" },

             ]
    }else if (id === "baby"){
        button_els = [
                {name : "View all" , value : "any"},
                {name : "Girls" , value : "girl"},
                {name : "Boys" , value : "boy"},
                {name : "Shirts" , value : "shirts"},
                {name : "Sportswear" , value : "sports" },
                // {name : "" , value : ""},
                // {name : "" , value : ""},
                // {name : "" , value : ""},

             ]
    }




    return(
        <div className="main_content_left">
            <Aside
                buttons = {button_els}
                setData = {passedFN} 
                originalData = {originalData}
            />
        </div>
    )
}

function Settings(){
    return(
        <div className="settings">
           <div className="left">
                <button>SORT BY <i class="fa-solid fa-sort"></i> </button>
                <button>FILTER & SORT  <i class="fa-sharp-duotone fa-solid fa-filters"></i></button>
           </div>
           <div className="right">
                
           </div>
        </div>
    )
}

<NextBTN/>

function MainContentRight({data , setData}){

    const [number , setNumber] = React.useState(+25);
    
    return(
            <div className="main_content_right">
                <SmolBanner
                    bg_src = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/regional-local-activities/seu/master-mcf/2023-season-7/ladies/summer-acc/tcl_summeracc_3x1_2.png]&scale=size[960]&sink=format[png],quality[80]"
                    color = {"black"}
                    heading = {"The T-shirt shop starting $399"}
                    support_text = {"From bold graphics to basics: new trending tees for a fashionable update"}
                    buttons = {
                        [{href : "/store/ladies" , text : "Ladies"} , {href : "/store/kids" , text : "Kids"}  , {href : "/store/baby" , text : "Kids & baby"}]
                    }
                    maxWidth = {"100%"}
                />

                <h1>VIEW ALL</h1>
                
                <Settings/>

                <div className="product_div_area">
                    {data.slice(0,number).map((item)=>(
                        <Product
                            _id = {item._id}
                            src = {item.image[0].src}
                            name  = {item.title}
                            catrgory = {item.category}
                            price = {item.price}
                            swatches = {item.swatches}
                            code = {item.articleCode}
                        />
                    ))}
                </div>
                    <NextBTN
                        number = {number}
                        setNumber = {setNumber}
                        size = {data.length}
                    />

            </div>
    )
}
function MainContent() {
    const { id } = useParams();

    //let assets = ""; 
    
    // assets = id === "men" ? men_products : assets
    // assets = id === "ladies" ? ladies_products : assets
    // assets = id === "sport" ? sports_products : assets
    // assets = id === "kids" ? kids_products : assets
    // assets = id === "baby" ? baby_products : assets
    // assets = id === "home" ? home_products : assets

    // const [data , setData] = React.useState(assets)

    let category = ""; 

    category = id === "men" ? "men" : category;
    category = id === "ladies" ? "ladies" : category;
    category = id === "sport" ? "sports" : category;
    category = id === "kids" ? "kids" : category;
    category = id === "baby" ? "baby" : category;
    category = id === "home" ? "home" : category;

    const [assets, setAssets] = React.useState([]);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://e-commerce-backend-production-bffa.up.railway.app/api/products/data/${category}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(res => {
                setAssets(res.data || []);
                setData(res.data || []);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setAssets([]);
            });
    }, [category]);

    return (
        <div className="page">
            <MainContentBanner />

            { assets.length > 0 ? 
                <div className="main_content">
                    <MainContentLeft originalData={assets} passedFN={setData} />
                    <MainContentRight data={data} />
                </div>
            : 
                <>
                    <Loader />
                    <p style={{ textAlign: "center", padding: "100px" }}>Error 404, Not found</p>
                </>
            }
        </div>
    );
}



function CommonCategory(){
    return(
        <div className="error_page">
            <Navbar/>
                <MainContent/>
            <Footer/>
        </div>
    )
}

export default CommonCategory