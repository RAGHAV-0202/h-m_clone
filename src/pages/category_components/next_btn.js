import react from "react"

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


export default NextBTN