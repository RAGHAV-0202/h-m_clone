import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../css/login_page.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

function ForgotComponent(){
    let style = {
        border : "1px solid gray"
    }

    const [error , setError] = React.useState([false , "" , style])
    const [sent , setSent] = React.useState(false)

    const emailContainer = React.useRef(null)

    async function handleLogin(){
        const email = emailContainer.current.value
        
        if (!email.includes('@') || !email.includes('.')){
            setError([true , "Invalid Email" , {
            border : "1px solid red"
            }])
        }else{
            try {
                const response = await axios.post("api/auth/reset-password-request" , {email})
                setError([true , response.data.message , style])
                // navigate("/")
                console.log(response)

                setSent(true);
            } catch (error) {
                console.log("error while logging in")
                console.log(error.response.data.message)
                setError([true , error.response.data.message , style])
            }
        }
    }

    console.log(sent)

    return(
        <div className="LoginComponent">
            <h3>Forgot Password</h3>
            {!sent && <p>Please enter the email address you used to create your account, and we'll send you a link to reset your password.</p>}

            { !sent &&             
                <div className="LoginForm">
                    <div className="segment">
                        <p>Email  <span className="red">*</span> </p>
                        <input style={error[2]} ref ={emailContainer} type="text"  required ></input>
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
            }
            {sent &&
                <p>Thank you, an email has been sent. Please check spam and junk folders, if no email is received you may not have an account registered with this email address.</p>
            }
        </div>
    )
}

function ForgotPassword(){
    return(
        <div className="home_page LoginPageSize">
            <Navbar/>
            <div className="content_div LoginPageContentDIv">
                <MainContentBanner
                    page = "Forgot Password"
                />
                <ForgotComponent/>
            </div>
            <Footer/>

        </div>
    )
}

export default ForgotPassword