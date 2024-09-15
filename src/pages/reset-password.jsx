import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/login_page.css"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    }

    return (
        <div style={styles} className="MainContentBanner">
            <p>HM.com / View All / <span style={{ color: "red", fontSize: "15px", paddingLeft: "5px", fontWeight: "600" }} className="red">{props.page}</span> </p>
        </div>
    )
}

function ForgotComponent({token}){
    const navigate = useNavigate();
    console.log(token.token)
    let style = {
        border : "1px solid gray"
    }

    const [error , setError] = React.useState([false , "" , style])

    const passwordContainer = React.useRef(null)

    async function handleLogin() {
        const password = passwordContainer.current.value;

        if (password.length < 6) {
            setError([true, 'Minimum password length is 6', { border: '1px solid red' }]);
        } else {
            try {
                const response = await axios.post(`${baseUrl}api/auth/reset-password/${token.token}`, { password });

                let countdown = 3;
                const intervalId = setInterval(() => {
                    setError([true, `${response.data.message} - Redirecting in ${countdown}...`, style]);
                    countdown--;

                    if (countdown < 0) {
                        clearInterval(intervalId);
                        navigate("/login"); // Redirect after countdown
                    }
                }, 1000); // Update message every 1 second

            } catch (error) {
                console.error("Error while resetting password:", error.response?.data?.message || error.message);
                setError([true, error.response?.data?.message || "An error occurred", { border: '1px solid red' }]);
            }
        }
    }


    return(
        <div className="LoginComponent">
            <h3>Reset Password</h3>
            <p>Please enter your new password.</p>
          
                <div className="LoginForm">
                    <div className="segment">
                        <p>New Password  <span className="red">*</span> </p>
                        <input style={error[2]} ref ={passwordContainer} type="text"  required ></input>
                    </div>
                    { error[0] &&   
                        <div className="error_area">
                            <p>{error[1]}</p>
                        </div>
                    }
                    <div className="segment row space-between">
                        <button onClick={handleLogin} className="sign-in-btn" >Submit</button>
                    </div>
                </div>

        </div>
    )
}

function ResetPassword(){
    const token = useParams() ;
    // console.log(token)
    return(
        <div className="home_page LoginPageSize">
            <Navbar/>
            <div className="content_div LoginPageContentDIv">
                <MainContentBanner
                    page = "Forgot Password"
                />
                <ForgotComponent
                    token = {token}
                />
            </div>
            <Footer/>

        </div>
    )
}

export default ResetPassword