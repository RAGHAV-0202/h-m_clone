import React from "react";

function Banner(props){

    if(props.position === "center"){
        var styles = {
            left : "50%" ,
            transform: "translateX(-50%)",
            alignItems: "center",
        }
    }else if (props.position === "left"){
        styles = {
            left : "10%",
        }
    }

    return(
        <div className={`banner ${props.className}`}>
            <img src={props.src} alt="banner_img"></img>
            <div style={{...styles , color : props.color
            }} className="promotion">
                {props.heading_above && <h1>{props.heading}</h1>}
                <p>{props.support_text}</p>
                {!props.heading_above && <h1>{props.heading}</h1>}
                <a style={{backgroundColor : props.color , color : props.color === "black" ? "white" : "black"}} href={props.link}>Shop now</a>
            </div>
        </div>
    )
}

export default Banner