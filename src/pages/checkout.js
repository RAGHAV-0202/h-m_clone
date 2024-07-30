import React from "react";
import '../index.css';
import Footer from "./footer";
import Navbar from "./navbar";
import "../css/checkout.css";
import "../css/cart.css"
import { useParams } from "react-router-dom";

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
            <p>HM.com / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">Checkout</span> </p>
        </div>
    )
}

function CartRight({step , price}){
    return(
        <div className="cart_info_right rightCheckout">
            <div className="proceed">
                <div className="proceed_abv">
                    <span>
                        <p>Order value</p>
                        <p>Rs. {price}</p>
                    </span>
                    <span>
                        <p>Delivery</p>
                        <p>FREE</p>
                    </span>
                </div>
                <div className="proceed_btm">
                    <span>
                        <p>Total</p>
                        <p>Rs. {price}</p>
                    </span>
                    {step < 4 && <a href={`/checkout/${price}`}> Continue to checkout </a>}
                    {step === 4 && <a href={`/ordered_successfully`}> Order Now </a>}
                </div>
                <div className="checkout_info">
                    <p>We accept</p>
                    <div className="payment_infos">
                        {/* Payment icons */}
                    </div>
                    <p className="disclaimer_p">Prices and delivery costs are not confirmed until you've reached the checkout.
15 days free returns. Read more about return and refund policy.
Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>
                </div>
            </div>
        </div>
    )
}

function MyInfo(props){

    const [myinfo_data , setinfo] = React.useState({
        name : "" ,
        surname : "" ,
        email : ""
    })

    function handleChange(e){
        // console.log(e.target.value)
        setinfo((prev)=>{
            return{
                ...prev ,[ e.target.name] : e.target.value
            }
        })
    }



    var styles = {};
    if(props.step === 1){
        styles = {
            maxHeight : "max-content"
        }
    }else if(props.step > 1 ){
        styles = {
            maxHeight : "120px",
        } 
    }

    function handleClick(){

        if(myinfo_data.email.includes("@")){
            props.setStep((prev)=>prev+1)
            console.log(myinfo_data)
        }else{
            alert("enter valid email")
        }


    }

    return(
            <div style={styles} className="my_info checkout_details_div">

                <p className="checkout_info_labels">My information</p>

{props.step > 1 &&  <span>
                <p className="smol">{myinfo_data.email}</p>
                <p className="smol">{myinfo_data.name} {myinfo_data.surname}</p>
                </span>}

                <p className="label">Email*</p>
                <input onChange={handleChange} name="email" type="text" placeholder=""></input>

                <div className="name_input_area">
                    <span>
                        <p className="label">First Name*</p>
                        <input onChange={handleChange} name="name" type="text" placeholder=""></input>
                    </span>
                    <span>
                        <p className="label">Last Name*</p>
                        <input onChange={handleChange} name="surname" type="text" placeholder=""></input>
                    </span>
                </div>
                <span className="toCenter">
                     <button onClick={handleClick} className="ATC checkout_buttons_in_same_page"  > Save</button>                    
                </span>
            
            </div>
    )
}
function BillingAddress(props){

    const [billing_data , setinfo] = React.useState({
        address : "" ,
        city : "" ,
        pincode : "",
        state : ""
    })

    function handleChange(e){
        // console.log(e.target.value)
        setinfo((prev)=>{
            return{
                ...prev ,[ e.target.name] : e.target.value
            }
        })
    }

    var styles = {};
    if(props.step === 2){
        styles = {
            maxHeight : "max-content"
        }
    }else if(props.step > 2 ){
        styles = {
            maxHeight : "140px",
        } 
    }

    function handleClick(){
        props.setStep((prev)=>prev+1)
    }
    return(
        <div style={styles} className="billing_address checkout_details_div">
            <p className="checkout_info_labels">Billing address</p>

{props.step > 2 &&            <span>
            <p className="smol">{billing_data.address}</p>
            <p className="smol">{billing_data.address} {billing_data.pincode}</p>
            <p className="smol">{billing_data.state}</p>
            </span>}

        
            <p className="label">Address*</p>
            <input onChange={handleChange} name="address" type="text" placeholder=""></input>

            <div className="name_input_area">
                <span>
                    <p className="label">Town/City</p>
                    <input onChange={handleChange}  name="city" type="text" placeholder=""></input>
                </span>
                <span>
                    <p className="label">Pincode</p>
                    <input onChange={handleChange} name="pincode" type="text" placeholder=""></input>
                </span>
            </div>
            <p className="label">State*</p>
            <input onChange={handleChange} name="state" type="text" placeholder=""></input>
            <span className="toCenter">
                    <button onClick={handleClick} className="ATC checkout_buttons_in_same_page"  > Save</button>                    
            </span>

        </div>
    )
}
function Delivery(props){

    const [delivery , setinfo] = React.useState({
        number : "" ,
    })

    function handleChange(e){
        // console.log(e.target.value)
        setinfo((prev)=>{
            return{
                ...prev ,[ e.target.name] : e.target.value
            }
        })
    }

    var styles = {};
    if(props.step === 3){
        styles = {
            maxHeight : "max-content"
        }
    }else if(props.step > 3 ){
        styles = {
            maxHeight : "120px",
        } 
    }
    function handleClick(){
        props.setStep((prev)=>prev+1)
    }

    return(
        <div style={styles} className="delivery checkout_details_div">
            <p className="checkout_info_labels">Delivery</p>

{props.step > 3 &&            <span>
            <p className="smol">Delivery in 2-4 days</p>
            <p className="smol">Phone No. : {delivery.number}</p>
            <br></br>
            </span>}


            <p className="label">Phone No.</p>
            <input onChange={handleChange} name="number" type="text" placeholder=""></input>
            <span className="toCenter">
                    <button onClick={handleClick} className="ATC checkout_buttons_in_same_page"  > Save</button>                    
            </span>

    
        </div>
    )
}

function CartLeft({step , setStep}){

    

    return(
        <div className="cart_info_left leftCheckout">
            <MyInfo step={step} setStep={setStep}/>
            <BillingAddress step={step} setStep={setStep}/>
            <Delivery step={step} setStep={setStep}/>
        </div>
        
    )
}

function Centered(){

    const {price} = useParams();

    console.log(price)

    const [step , setStep] = React.useState(1);

    return(
        <div className="Checkout_div">
            <h1>Checkout</h1>
            <div className="checkout_centered centedDivCart">
                <div className="Cart_info">
                    <CartLeft step={step} setStep={setStep} />
                    <CartRight  step={step} price={price}/>
                </div>
            </div>
        </div>
    )
}

function Checkout(){
    return(
        <div className="error_page">
            <Navbar/>
                <MainContentBanner/>
                <Centered/>
            <Footer/>
        </div>
    )
}

export default Checkout