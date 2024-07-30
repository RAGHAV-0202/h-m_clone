import React from "react";
import "../category_components/product.css"

function Product(props){
    return(
        <a href={`productpage/${props.code}`} className="product_div">
            <div className="image_area">
                <img src={props.src} alt="img"></img>
            </div>
            <div className="info_area">
            <p>{props.name}</p>
            <p className="smol">{props.price}</p>
                <span className="colors">
                    {props.swatches.map((swatch)=>(
                        <Color
                            color = {swatch.colorCode}
                        />
                    ))}
                </span>
            </div>
        </a>
    )
}
function Color(props){
    var styles = {
        backgroundColor : `${props.color}` 
    }
    return(
        <div style={styles} className="color_div">

        </div>
    )
}

export default Product