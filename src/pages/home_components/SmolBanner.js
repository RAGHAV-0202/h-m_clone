import React from "react";
import "./smolBanner.css"

function SmolBanner(props){

    const styles = {
        background: `url(${props.bg_src})`,
        backgroundPosition : "center" , 
        color : props.color ,
        backgroundSize : "cover"
    }

    return(
            <div style={{...styles , maxWidth  : props.maxWidth }} className="smol_banner">
                <h4>{props.heading}</h4>
                <p>{props.support_text}</p>
                <div>
                    {props.buttons.map((button)=>(
                        <a href={button.href}>{button.text}</a>
                    ))}
                </div>
            </div>
    )
}

export default SmolBanner