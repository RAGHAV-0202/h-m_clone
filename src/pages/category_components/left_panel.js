import React from "react";
import "./left_panel.css"

function Aside(props){

    // console.log(props)

    return (
        <div className="aside">
                <h4>Shop by Product</h4>
                    {props.buttons.map((each)=>(
                        <Button
                            name = {each.name}
                            value = {each.value}
                            setData = {props.setData}
                            originalData = {props.originalData}
                        />
                    ))}
        </div>
    )
}

function Button(props){

    

    function handleClick(value){
        if(value === "any"){
            props.setData(props.originalData)
        }else{
            props.setData(props.originalData.filter(item => {
                // console.log(item.category)
                // console.log(value)
                return(item.category.includes(value))
            }))
        }
    }

    return(
    <button onClick={()=>handleClick(props.value)} >{props.name}</button>
    )
}

export default Aside