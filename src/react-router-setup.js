import React from "react";
import {BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import HomePage from "./pages/homePage";
import Error from "./pages/error"
import CartPage from "./pages/cart";
import ViewAll from "./pages/viewl_all"
import Favourites from "./pages/favourite";
// import Men from "./pages/men"
// import Ladies from "./pages/ladies"
// import Kids from "./pages/kids"
import Sale from "./pages/sale"
// import Sport from "./pages/sports"
// import Home from "./pages/home"
// import Baby from "./pages/baby";
import Sustainability from "./pages/sustainability";
import Product from "./pages/Product_Page";
import Checkout from "./pages/checkout";
import Ordered from "./pages/orderd";
import CommonCategory from "./pages/common_category_page"
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/reset-password";
import ProfilePage from "./pages/profile";


const ReactRouterSetup = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/Forgot-password" element={<ForgotPassword/>}/>
                <Route path="/c03ef05e65659d2a75944d3d72eb71f4f94c6f9b/:token" element={<ResetPassword/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/favourites" element={<Favourites/>}/>
                <Route path="/view_all" element={<ViewAll/>}/>
                {/* <Route path="/ladies" element={<Ladies/>}/> */}
                {/* <Route path="/men" element={<Men/>}/> */}
                {/* <Route path="/kids" element={<Kids/>}/> */}
                {/* <Route path="/baby" element={<Baby/>}/> */}
                {/* <Route path="/home" element={<Home/>}/> */}
                {/* <Route path="/sport" element={<Sport/>}/> */}
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/store/:id" element={<CommonCategory/>}/>
                <Route path="/sustainability" element={<Sustainability/>}/>
                <Route path="/productpage/:num" element={<Product/>}/>
                <Route path="/checkout/:price" element={<Checkout/>}/>
                <Route path="/ordered_successfully" element={<Ordered/>}/>           
                <Route path="*" element = {<Error/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup
