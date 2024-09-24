import React from "react";
import '../index.css';
import Navbar from "./navbar";
import Footer from "./footer";
import Features from "./home_components/Features";
import SmolBanner from "./home_components/SmolBanner";
import "../css/cart.css";
import "../css/top_banner.css";
import axios from "axios";
import baseUrl from "../base_url";

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
    };

    return (
        <div style={styles} className="MainContentBanner">
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">Cart</span> </p>
        </div>
    );
}

function CartLeft(props) {
    return (
        <div className="cart_info_left">
            {props.items.map((item) => (
                <ProductInCart
                    key={item._id}
                    name={item.title}
                    price={item.price}
                    img={item.image}
                    productId={item.productId}
                    size={item.size}
                    setCart={props.setCart}
                    setItem={props.setItem}
                    cart={props.cart}
                />
            ))}
        </div>
    );
}

function CartRight({ totalPrice }) {
    return (
        <div className="cart_info_right">
            <div className="proceed">
                <div className="proceed_abv">
                    <span>
                        <p>Order value</p>
                        <p>Rs. {totalPrice}</p>
                    </span>
                    <span>
                        <p>Delivery</p>
                        <p>FREE</p>
                    </span>
                </div>
                <div className="proceed_btm">
                    <span>
                        <p>Total</p>
                        <p>Rs. {totalPrice}</p>
                    </span>
                    <a href={`/checkout/${totalPrice}`}> Continue to checkout </a>
                </div>
                <div className="checkout_info">
                    <p>We accept</p>
                    <div className="payment_infos">
                        {/* Payment icons */}
                    </div>
                    <p className="disclaimer_p">Prices and delivery costs are not confirmed until you've reached the checkout.
                        15 days free returns. Read more about return and refund policy.
                        Customers would receive an SMS/WhatsApp notification regarding deliveries on the registered phone number.</p>
                </div>
            </div>
        </div>
    );
}

function ProductInCart(props) {
    async function handleDelete(productId) {
        try {
            // Make sure to use DELETE instead of POST
            const response = await axios.post(`${baseUrl}api/cart/remove/${productId}`,  { withCredentials: true });
            console.log(response)
            const updatedCart = props.cart.filter(item => item.productId !== productId);
            props.setCart(updatedCart);
        } catch (error) {
            console.error("Error removing item from cart:", error.response?.data || error.message);
        }
    }

    return (
        <div className="CartProduct">
            <div className="CartProductLeft">
                <img width={"120px"} src={props.img} alt="" />
            </div>
            <div className="CartProductRight">
                <span className="abcdfe">
                    <p>{props.name}</p>
                    <button onClick={() => handleDelete(props.productId)}>
                        <i className="fa-duotone fa-solid fa-trash"></i>
                    </button>
                </span>
                <p className="price_p">Rs. {props.price}</p>
                <p className="smol_p_cart"><span className="fixed_width">Art.no.</span><span className="pad_right">{props.productId}</span></p>
                <p className="smol_p_cart"><span className="fixed_width">Total: </span> <span className="pad_right">Rs. {props.price}</span></p>
                <p className="smol_p_cart"><span className="fixed_width">Size: </span> <span className="pad_right">{props.size}</span></p>
                <div className="Cart_buttons_Area">
                    <button className="Favt"><i className="fa-light fa-heart"></i></button>
                    <input value={1} type="number" className="quantity" readOnly />
                </div>
            </div>
        </div>
    );
}

function CenteredDiv() {
    const [cart, setCart] = React.useState([]);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        async function fetchCart() {
            try {
                const response = await axios.get(`${baseUrl}api/cart/get-cart`, { withCredentials: true });
                const cartData = response.data.data.cart;
                setCart(cartData);
                setItems(cartData);  // Items are directly set from the cart data
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        }

        fetchCart();
    }, []);

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <div className="cart_page">
            <div className="centedDivCart">
                <h1>Shopping bag</h1>
                <div className="Cart_info">
                    {items.length >= 1 && <CartLeft items={items} setItem={setItems} setCart={setCart} cart={cart} />}
                    {items.length >= 1 && <CartRight totalPrice={totalPrice} />}
                    {items.length < 1 && <h1>Oops... Your cart is empty</h1>}
                </div>
            </div>
        </div>
    );
}

function CartPage() {
    return (
        <div className="home_page">
            <Navbar />
            <MainContentBanner />
            <Features />
            <CenteredDiv />
            <Footer />
        </div>
    );
}

export default CartPage;
