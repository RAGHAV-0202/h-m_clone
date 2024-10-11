import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import baseUrl from "../../base_url";
import Loader from "../home_components/loader";

function LoginComponent(){
    const [loginLoading , setLoginLoading] = React.useState(false);
    const navigate = useNavigate()

    const [showPassword , setShowPassword] = React.useState(false)   

    let style = {
        border : "1px solid gray"
    }

    const [error , setError] = React.useState([false , "" , style])
    let text = "Show"
    let type = "password"


    if(showPassword){
        text = "Hide" ;
        type = 'text';
    }else{
        text = "Show"
        type = "password"     
    }

    const emailContainer = React.useRef(null)
    const passwordContainer = React.useRef(null)

    async function handleLogin(){
        setLoginLoading(true)
        const login = emailContainer.current.value
        const password = passwordContainer.current.value
        
        if (!login.includes('@') || !login.includes('.')){
            setError([true , "Invalid Email" , {
            border : "1px solid red"
            }])
            setLoginLoading(false)
        }else if(password.length < 6){
            setError([true , "Minimum Password Length is 6" , {
            border : "1px solid red"
            }])
            setLoginLoading(false)
        }else{
            try {
                setLoginLoading(false)
                const response = await axios.post(baseUrl+"api/auth/login" , {login , password} , { withCredentials: true })
                setError([true , response.data.message , style])
                navigate("/")
            } catch (error) {
                setLoginLoading(false)
                console.log("error while logging in")
                console.log(error.response.data.message)
                setError([true , error.response.data.message , style])
            }
        }            
    }

    

    function handlePasswordDisplay(){
        setShowPassword(prev=>!prev)
    }

    

    return(
        <div className="LoginComponent">
            <h3>Sign in</h3>
            <p>Become a member - don't miss out on deals, offers, discounts and bonus vouchers.</p>

            <div className="LoginForm">
                <div className="segment">
                    <p>Email  <span className="red">*</span> </p>
                    <input style={error[2]} ref ={emailContainer} type="text"  required ></input>
                </div>
                <div className="segment">
                    <p>Password <span className="red">*</span></p>
                    <div className="password_container">
                        <input style={error[2]} ref={passwordContainer}  type={type} required ></input>
                        <button style={error[2]} onClick={handlePasswordDisplay} >{text}</button>
                    </div>
                </div>

                <div className="segment row space-between">
                    <div className="segment_left_area">
                        <input type="checkbox" defaultChecked></input>
                        <p>Remember me</p>
                    </div>
                    <div className="segment_left_area">
                        <Link to="/Forgot-password">Forgot Password ? </Link>
                    </div>
                </div>
                <div className="segment_left_area not-reg">
                    <p>Not registered yet?</p>
                    <Link to="/signup">Sign Up</Link>
                </div>
                { error[0] &&   
                    <div className="error_area">
                        <p>{error[1]}</p>
                    </div>
                }
                <div className="segment row space-between">
                    {
                        <>
                            {!loginLoading && <button onClick={handleLogin} className="sign-in-btn" >Sign in</button>}
                            {loginLoading && <button className="sign-in-btn"><Loader/></button> }  
                        </>
                        
                    }
                </div>

            </div>
        </div>
    )
}

export default LoginComponent