import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

function SignUpComponent(){
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
    const firstNameContainer = React.useRef(null)
    const lastNameContainer = React.useRef(null)
    const PhoneNumberContainer = React.useRef(null)

    async function handleLogin(){
        const email = emailContainer.current.value
        const password = passwordContainer.current.value
        const firstName  = firstNameContainer.current.value;
        const lastName = lastNameContainer.current.value;
        const phoneNumber = PhoneNumberContainer.current.value ; 
        
        if (!email.includes('@') || !email.includes('.')){
            setError([true , "Invalid Email" , {
            border : "1px solid red"
            }])
        }else if(password.length < 6){
            setError([true , "Minimum Password Length is 6" , {
            border : "1px solid red"
            }])
        }else{
            try {
                const response = await axios.post("api/auth/register" , {firstName , lastName , email , phoneNumber , password})
                setError([true , response.data.message , style])
                navigate("/")
            } catch (error) {
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
            <h3>Sign up</h3>
            <p>Become a member - don't miss out on deals, offers, discounts and bonus vouchers.</p>

            <div className="LoginForm">
                <div className="segment">
                    <p>First Name  <span className="red">*</span> </p>
                    <input  style={error[2]} ref ={firstNameContainer} type="text"  required ></input>
                </div>
                <div className="segment">
                    <p>Last Name  <span className="red">*</span> </p>
                    <input style={error[2]} ref ={lastNameContainer} type="text"  required ></input>
                </div>
                <div className="segment">
                    <p>Email  <span className="red">*</span> </p>
                    <input style={error[2]} ref ={emailContainer} type="text"  required ></input>
                </div>
                <div className="segment">
                    <p>Phone Number  <span className="red">*</span> </p>
                    <input style={error[2]} ref ={PhoneNumberContainer} type="text"  required ></input>
                </div>

                <div className="segment">
                    <p>Create Password <span className="red">*</span></p>
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
                    <p>Already registered?</p>
                    <Link to="/login">Login</Link>
                </div>
                { error[0] &&   
                    <div className="error_area">
                        <p>{error[1]}</p>
                    </div>
                }
                <div className="segment row space-between">
                    <button onClick={handleLogin} className="sign-in-btn" >Sign up</button>
                </div>

            </div>
        </div>
    )
}

export default SignUpComponent