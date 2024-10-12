import React from "react"
import Footer from "./footer";
import Navbar from "./navbar";
import "../css/profilePage.css"
import baseUrl from "../base_url";
import axios from "axios";
import Loader from "./home_components/loader";
import "../css/orderPage.css"
import { Link } from "react-router-dom";

function ParticularOrder(props){
    return(
            <div className="order_bottom">
                <div className="order_bottom_left">
                    <div className="image_area_for_order">
                        <Link to={`/productpage/${props.productId}`}> <img src={props.img} alt="product"></img></Link>
                    </div>
                </div>
                <div className="order_bottom_right">
                    <h4>{props.name}</h4>

                    <div className="order_bottom_right_details">
                        <p className="price_p">Rs. {props.price}</p>
                        <p className="smol_p_cart"><span className="fixed_width">Art.no.</span><span className="pad_right">{props.productId}</span></p>
                        <p className="smol_p_cart"><span className="fixed_width">Price: </span> <span className="pad_right">Rs. {props.price}</span></p>
                        <p className="smol_p_cart"><span className="fixed_width">Quantity: </span> <span className="pad_right">{props.quantity}</span></p>
                    </div>
                </div>
            </div>
    )
}


function ProductOrdered(props) {
    return (
        <div className="CartProduct Order_div_each">
            <div className="order_top">
                <span>
                    <span>
                        <p className="bolder">Total</p>
                        <p>{props.total}</p>
                    </span>
                    <span>
                        <p className="bolder">Order Status</p>
                        <p>{props.status}</p>
                    </span>                    
                </span>
                <span>
                    <span>
                        <p className="bolder">Order ID</p>
                        <p>{props._id}</p> 
                    </span>
                </span>
            </div>
            {
               props.order.cart.map((item) => (
                    <ParticularOrder
                    key={item._id}
                    name={item.title}
                    price={item.price}
                    img={item.image}
                    productId={item.productId}
                    size={item.size}
                    quantity={item.quantity}
                    status={props.status} // Pass order status here
                    _id = {props._id}
                    total = {props.totalAmount}
                    />
                ))
                }
        </div>
    );
}


function Orders({orders}){

    console.log(orders)

    return(
        <div className="SettingAreaDiv OrdersDiv">
            {
                orders.reverse().map((order) => (
                    <ProductOrdered
                        order = {order}
                        status={order.status} // Pass order status here
                        _id = {order._id}
                        total = {order.totalAmount}
                    />
                ))
            }
        </div>
    )
}

function OrderPage(){
    
    const [orders , setOrders] = React.useState([])
    const [loading , setLoading] = React.useState(true)

    React.useState(()=>{
        async function getOrders(){
            try{
                const response = await axios.post(`${baseUrl}api/orders/get-orders` , {} , {withCredentials : true})

                setOrders(response?.data?.data)
                setLoading(false)
            }catch(err){
                console.log("error fetching orders list")
            }
        }
        getOrders()
    } , [])

    // console.log(orders)

    return(
        <div className="OrdersPage">
            <Navbar/>
            <div className="ordersCenterPage">
                <h1>Your Orders</h1>
            {
                loading && <Loader/>
            }

            {  !loading && orders.length > 0 &&               
                <Orders
                    orders = {orders}
                />
            }
            {
                !loading && orders.length === 0 &&
                <span className="No_Orders">
                    <h3>
                        We're Sorry
                        <br></br>
                    </h3>
                    <p>When you have bought something online you´ll find it here.</p>
                    <Link to="/">Continue Shopping</Link>               
                </span>

            }
            </div>
            <Footer/>
        </div>
    )
}
export default OrderPage