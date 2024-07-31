import React from "react";
import {nanoid} from "nanoid"
import "./itemCrousel.css"

function ItemCrousel(props){

   const [id, setId] = React.useState(nanoid(5, "abc12"));

  function scrollLeft() {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollBy({ left: -left, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollBy({ left: left, behavior: 'smooth' });
    }
  }
    
    let div_styles, img_styles, item_styles, cloth_area_styles , left;

    if (props.size === "smaller") {
        div_styles = { height: "288px"};
        img_styles = { height: "184px" };
        item_styles = { width: "148px" };
        cloth_area_styles = {};
        left = 400;

    }else if(props.size === "larger"){
        div_styles = { height: "max-content" };
        img_styles = { height: "333px" };
        item_styles = {
            height: "340px",
            width: "222px",
            minWidth: "222px"
        };
        cloth_area_styles = { height: "390px" };
        left = 700
    }else if(props.size === "largest"){
        div_styles = { 
            height: "max-content" ,
            maxWidth : "100%",
            padding : "30px 40px",
            width : "100%"
        };
        img_styles = { height: "417px" };
        item_styles = {
            height: "461px",
            width: "302px",
            minWidth: "302px"
        };
        cloth_area_styles = { height: "470px" };
        left = 500
    }
    
    // const id = nanoid();


    const data = props.data ;





    return(
        <div style={div_styles} className="items_crousel">
            <div className="label">
                <p>{props.label}</p>
            </div>
            <div style={cloth_area_styles} className="cloth_area">
                <button onClick={()=>scrollLeft(id)} className="left arrow"><i class="fa-light fa-arrow-left"></i></button>
                
                 <div id={id} className="items_area">

                    {data.slice(0, 30).map((item)=>(
                        <Item
                            src = {item.image[0].src}
                            styles = {img_styles}
                            name  = {item.title}
                            item_styles = {item_styles}
                            catrgory = {item.category}
                            price = {item.price}
                            swatches = {item.swatches}
                            code = {item.articleCode}
                        />
                    ))}

                </div>

                <button onClick={()=>scrollRight(id)} className="right arrow"><i class="fa-light fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

function Item(props){
    return (
        <a href={`/productpage/${props.code}`} style={props.item_styles} className="item">
            <img style={props.styles} src={props.src} alt=""></img>
            <p>{props.name}</p>
            <p className="smol">{props.price}</p>
            <span className="colors">
                {props.swatches.map((swatch)=>(
                    <Color
                        color = {swatch.colorCode}
                    />
                ))}
            </span>
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

export default ItemCrousel