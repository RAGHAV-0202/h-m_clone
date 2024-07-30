
import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";
import Product from "./category_components/product";
import Aside from "./category_components/left_panel"; 
import SmolBanner from "./home_components/SmolBanner"

import  baby_products from "../data/baby_products"

import "../css/category_products.css"
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
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">Baby</span> </p>
        </div>
    )
}

function MainContentLeft({passedFN , originalData}){
    return(
        <div className="main_content_left">
            <Aside
             buttons = {[
                {name : "View all" , value : "any"},
                {name : "Girls" , value : "girl"},
                {name : "Boys" , value : "boy"},
                {name : "Shirts" , value : "shirts"},
                {name : "Sportswear" , value : "sports" },
                // {name : "" , value : ""},
                // {name : "" , value : ""},
                // {name : "" , value : ""},

             ]}
             
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

function NextBTN(props){

    function handleClick(){
        if(props.size - props.number >= 25){
            props.setNumber((prev)=>prev+25)
        }else{
            let toIncrease = props.size - props.number ; 
             props.setNumber((prev)=>prev+toIncrease)
        }
        
    }

    return(
        <div className="next_area">
            <p>Showing {props.number} products out of {props.size}</p>
            {props.number < props.size && <button onClick={handleClick} className="next">Load more products</button>}
            {props.number === props.size && <button  className="next">Reached End of the Page</button>}
        </div>

    )
}


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
                        [{href : "ladies" , text : "Ladies"} , {href : "men" , text : "Men"}  , {href : "kids" , text : "Kids & baby"}]
                    }
                    maxWidth = {"100%"}
                />

                <h1>VIEW ALL</h1>
                
                <Settings/>

                <div className="product_div_area">
                    {data.slice(0,number).map((item)=>(
                        <Product
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
function MainContent(){
     const [data , setData] = React.useState(baby_products)
    return(
        <div className="page">
            <MainContentBanner/>
            <div className="main_content">
                <MainContentLeft originalData = {baby_products} passedFN={setData}/>
                <MainContentRight data = {data}/>
            </div>
        </div>
    )
}


function Baby(){
    return(
        <div className="error_page">
            <Navbar/>
                <MainContent/>
            <Footer/>
        </div>
    )
}

export default Baby