import React from "react"
import Footer from "./footer";
import Navbar from "./navbar";
import "../css/profilePage.css"
import baseUrl from "../base_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UserProfile({name}){
    return(
        <div className="userProfile">
            <div className="welcomeUser">
                <p>Hello <span className="userName">{name}</span></p>
                <p className="smallerText">Hope you are doing Fine !!!</p>
            </div>
        </div>
    )
}

function Offer({image , heading ,type, details}){
    return(
        <div className="offer">
            <div className="offer_img">
                <img src={image} alt="offer_image"></img>
            </div>
            <div className="offer_details">
                <h5>{heading}</h5>
                <p>{type}</p>
                <p>{details}</p>
            </div>
        </div>
    )
}

function SectionOne({userData}){
    return(
        <div className="SectionOne">
            <div className="UserProfileArea">
                <UserProfile
                    name = {userData.firstName}
                />
            </div>
            <div className="UserOffers">
                <span><h4>My Offers</h4></span>
                <span className="row offers_area">
                    <Offer
                        image = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/Hm_Member_and_Loyalty/seasonal-images-loyalty/6010/6010_110_3x2.jpg]&scale=size[150]&sink=format[jpeg],quality[80]" 
                        heading = "10% off your entire purchase"
                        type = "Welcome Offer"
                        details = "Valid Till : 25/12/25"
                    />
                    <Offer
                        image = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/Hm_Member_and_Loyalty/percentage-images/8103-Member-Percent-20-3x2-01.jpg]&scale=size[150]&sink=format[jpeg],quality[80]" 
                        heading = "20% off Home purchases"
                        type = "Voucher"
                        details = "Valid Till : 1/1/25"
                    />
                    <Offer
                        image = "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/Hm_Member_and_Loyalty/cms/2024/october/spotifypremium_reward_3x2.jpg]&scale=size[150]&sink=format[jpeg],quality[80]" 
                        heading = "For Members who Love Music"
                        type = "Promotion"
                        details = "Valid Till : 4/10/25"
                    />

                </span>
            </div>
        </div>
    )
}

const SettingOption  = (props)=>{

    function handleClick(){
        props.setStep(props.step)
    }

    return(
        <div onClick={handleClick} className="settingsSetting">
            <i class={props.iconClass}></i>
            <p>{props.Setting}</p>
            <i class="fa-solid fa-chevron-right"></i>
        </div>   
    )
}

function Orders(){
    return(
        <div className="SettingAreaDiv OrdersDiv">
            <h5>All purchases</h5>
            <Link to="/orders">View All Purchases <i class="fa-light fa-arrow-right-from-bracket"></i></Link>
        </div>
    )
}
function AccountSettings({userData}){

    return(
        <div className="SettingAreaDiv AccountSettingsDiv">
            <h2>Account Settings</h2>
            <p>You can manage your account and subscriptions here</p>
            <div className="account_settings_user_info">
                <h4>My details</h4>

                <span>
                    <p>My email</p>
                    <p className="userData">{userData?.email}</p>                    
                </span>

                <span>
                    <p>First Name</p>
                    <p className="userData">{userData?.firstName}</p>                    
                </span>
    
                <span>
                    <p>Last Name</p>
                    <p className="userData">{userData?.lastName}</p>                        
                </span>

                <span>
                    <p>Phone Number</p>
                    <p className="userData">{userData?.phoneNumber}</p>                       
                </span>


            </div>
        </div>
    )
}

function Logout(){
    const Navigate = useNavigate();
    async function handleLogout(){
        try{
            const response = await axios.post(`${baseUrl}api/auth/logout` , {} , {withCredentials : true});
            // console.log(response)

            Navigate("/")
        }catch(error){
            console.log("error while logging out")
            console.log(error)
        }
    }
    return(
        <div className="SettingAreaDiv OrdersDiv">
            <h5>Sign out</h5>
            <button onClick={handleLogout}>Click to Sign out<i class="fa-light fa-arrow-right-from-bracket"></i></button>
        </div>
    )
}



function SectionTwo({userData}){
    const [step , setStep ] = React.useState(null)

    return(
        <div className="SectionTwo">
            <div className="SettingsOptions">

                <SettingOption
                    Setting = "Orders"
                    iconClass = "fa-light fa-box"
                    step = {0}
                    setStep = {setStep}
                />
                <SettingOption
                    Setting = "Account Settings"
                    iconClass = "fa-light fa-gear"
                    step = {1}
                    setStep = {setStep}
                    userData = {userData}
                    
                />
                <SettingOption
                    Setting = "Sign-out"
                    iconClass = "fa-light fa-arrow-right-from-bracket"
                    step = {2}
                    setStep = {setStep}
                />

            </div>
            <div className="SettingsArea">
                {step === 0 &&<Orders/>}
                {step === 1 &&<AccountSettings
                    userData={userData}
                />}
                {step === 2 &&<Logout/>}
            </div>
        </div>
    )
}

function ProfilePage(){

    const Navigate = useNavigate()
        React.useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                await axios.get(`${baseUrl}api/auth/IsLoggedIn` , { withCredentials: true });
            } catch (err) {
                console.error("Error while checking login status:", err.response?.data || err.message);
                Navigate("/")
            }
        };
        checkLoginStatus();
    }, []);

    const [userData , setUserData] = React.useState({})

    React.useEffect(()=>{
        const getUserData = async()=>{
            try{

                const response = await axios.get(`${baseUrl}api/user/profile` , { withCredentials: true });

                // console.log(response?.data?.data); 
                setUserData(response?.data?.data)

            } catch (err) {
                console.error("Error while retreiving user data :", err.response?.data || err.message);
                Navigate("/")
            }
         }

         getUserData();

    } , [])

    // console.log(userData)



    return (
        <div className="profilePageDiv">
            <Navbar/>
            <div className="profilePageCenterDiv">
                <SectionOne userData = {userData}/>
                <SectionTwo userData = {userData} />
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage ;