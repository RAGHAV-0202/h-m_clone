import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/login_page.css"
import SignUpComponent from "./components/signup_component";


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
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">{props.page}</span> </p>
        </div>
    )
}


function SignupPage(){
    return(
        <div className="home_page LoginPageSize">
            <Navbar/>
            <div className="content_div LoginPageContentDIv">
                <MainContentBanner
                    page = "SignUp"
                />
                <SignUpComponent/>
            </div>
            <Footer/>

        </div>
    )
}

export default SignupPage