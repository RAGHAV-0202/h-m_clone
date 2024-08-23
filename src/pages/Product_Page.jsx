import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import '../index.css';
import "../css/product_page.css"
import { useParams } from 'react-router-dom';
// import combined_data from "../data/combined_data"
import "../css/product_page.css"
import ItemCrousel from "./home_components/ItemCrousel";
// import accessories from "../data/accessories";

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
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">{props.name}</span> </p>
        </div>
    )
}

function Color(props) {
    const styles = {
        backgroundColor: `${props.color}`,
        border: props.selected ? "2px solid black" : "none",
    }

    function handleClick() {
        props.setColorRef(props.colorname);
    }

    return (
        <div onClick={handleClick} style={styles} className="product_page_color_div"></div>
    )
}

// 51 to 74 , 172 to 184

function Product() {
    const { num } = useParams();

    // State for product fetched from API
    const [product, setProduct] = React.useState(null);
    const [productForCrousel, setProductForCrousel] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    console.log(product)
    console.log(productForCrousel)

    // Fetch product data from API
    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                let response = await fetch(`https://e-commerce-backend-production-bffa.up.railway.app/api/products/data/item/${num}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let item_Data = await response.json();
                

                response  = await fetch(`/api/products/data/new-arrival`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await response.json();
                setProduct(item_Data.data);
                setProductForCrousel(data.data);                

                setLoading(false);



            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [num]);
    

    // const product = React.useMemo(() => combined_data.find(p => p.articleCode === num), [num]);


    // Always call hooks at the top level
    const colorRef = React.useRef('');
    const sizeRef = React.useRef("M");

    const [selected, setSelected] = React.useState({
        code: '',
        color: '',
        size: sizeRef.current
    });

    React.useEffect(() => {
        if (product) {
            colorRef.current = product.swatches[0].colorName;
            setSelected({
                code: product.articleCode,
                color: colorRef.current,
                size: sizeRef.current
            });
        }
    }, [product]);

    function handleSize(e) {
        sizeRef.current = e.target.value;
        setSelected(prev => ({ ...prev, size: sizeRef.current }));
    }

    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);

    React.useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const [added, setAdded] = React.useState(false);

    function AddtoCart() {
        const newItem = {
            code: product.articleCode,
            color: colorRef.current,
            size: sizeRef.current
        };

        // Check if the item is already in the cart
        const isItemInCart = cart.some(item =>
            item.code === newItem.code &&
            item.color === newItem.color &&
            item.size === newItem.size
        );

        if (isItemInCart) {
            alert("Item is already in the cart.");
            return;
        }

        setCart(prev => [...prev, newItem]);
        alert("Added to cart");
        setAdded(true);
    }

    const [extend, setExtended] = React.useState(false);
    const styles = extend ? { maxHeight: "400px" } : { maxHeight: "50px" };
    function handleExtend() {
        setExtended(prev => !prev);
    }

    // const [startingIndex, setStartingIndex] = React.useState(900);
    // const [endingIndex, setEndingIndex] = React.useState(930);

    // React.useEffect(() => {
    //     const randomNumber = Math.floor(Math.random() * 601);
    //     setStartingIndex(randomNumber || 900);
    // }, []); 

    // React.useEffect(() => {
    //     setEndingIndex(startingIndex + 30);
    // }, [startingIndex]); 

    const [size, setSize] = React.useState('largest');

    React.useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth < 768 ? 'smaller' : 'largest');
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading) return <>
        <Navbar/>
        <p>Loading...</p>;
        <Footer/>
    </>
    

    if (error) return <>
        <Navbar/>
        <h1>Error loading product.</h1>;
        <Footer/>
    </>
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="product_page">
            <Navbar />

            <MainContentBanner name={product.title} />

            <div className="ProductPageDIV">
                <div className="ProductPageleft">
                    <img src={product.image[0].src} alt={product.image[0].alt}></img>
                    <img src={product.image[0].dataAltImage} alt={product.image[0].dataAltText}></img>
                </div>
                <div className="ProductPageRight">
                    <h4>{product.title}</h4>
                    <p className="MRP_TEXT">MRP inclusive of all taxes</p>
                    <p className="MRP">{product.price}</p>

                    <span className="ProducctPagecolors">
                        {product.swatches.map(swatch => (
                            <Color
                                key={swatch.colorCode}
                                color={swatch.colorCode}
                                colorname={swatch.colorName}
                                selected={swatch.colorName === colorRef.current}
                                setColorRef={color => {
                                    colorRef.current = color;
                                    setSelected(prev => ({ ...prev, color: colorRef.current }));
                                }}
                            />
                        ))}
                    </span>

                    <div className="sizes_div">
                        <p>Sizes</p>
                        <div className="sizes">
                            {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
                                <button
                                    key={size}
                                    value={size}
                                    onClick={handleSize}
                                    className="size"
                                    style={{
                                        backgroundColor: size === sizeRef.current ? "black" : "white",
                                        color: size === sizeRef.current ? "white" : "black"
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {!added && <button className="ATC" onClick={AddtoCart}>Add to Cart</button>}
                    {added && <a className="ATC" href="/cart">Go to Cart</a>}

                    <p className="infoParagraph"><i className="fa-duotone fa-solid fa-store"></i> Not available in stores</p>
                    <p className="infoParagraph"><i className="fa-duotone fa-solid fa-circle-info"></i>Delivery Time: 2-7 days</p>

                    <div style={styles} className="Guide" onClick={handleExtend}>
                        <h5>Care guide {extend && <i className="fa-sharp-duotone fa-solid fa-up"></i>} {!extend && <i className="fa-sharp-duotone fa-solid fa-down"></i>} </h5>
                        <p>You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled.</p><br></br>
                        <h6>Care instructions</h6>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Use a laundry bag</p>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Line dry</p>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Only non-chlorine bleach when needed</p>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Machine wash at 40°</p>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Medium iron</p>
                        <p className="careInstructionP"><i className="fa-regular fa-circle-dot"></i>Can be dry cleaned</p>
                    </div>

                </div>
            </div>

            {/* <ItemCrousel
                data={combined_data.slice(startingIndex, endingIndex)}
                label={"Others also bought"}
                size={size}
            /> */}
            
            <ItemCrousel
                data={productForCrousel}
                label={"Others also bought"}
                size={size}
            />

            <Footer />
        </div>
    );
}

export default Product;
