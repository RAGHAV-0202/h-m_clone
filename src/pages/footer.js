import react from "react"
import "../css/footer.css"

function Footer(){
    const arrow = "->"


    const [isExtendedCol1 , setExtendedCol1] = react.useState(true)
    const [isExtendedCol2 , setExtendedCol2] = react.useState(true)
    const [isExtendedCol3 , setExtendedCol3] = react.useState(true)

    function handleClick1(){
        setExtendedCol1(prev=>!prev)
    }
    function handleClick2(){
        setExtendedCol2(prev=>!prev)
    }

    function handleClick3(){
         setExtendedCol3(prev=>!prev)
    }




    return(
        <div className="Footer">
                <div className="max_width_footer">
                    <div className="row row1">
                        <div className="col1 col">
                            <h4 onClick={handleClick1}>SHOP</h4>

                            {isExtendedCol1 && 
                            <span>
                                <a href="/ladies">Ladies</a>
                                <a href="/men">Men</a>
                                <a href="/baby">Baby</a>
                                <a href="/kids">Kids</a>
                                <a href="/home">H&M HOME</a>
                                <a href="/sport">Sport</a>
                                <a href="/magazine">Magazine</a>
                            </span>}

                        </div>
                        <div className="col2 col">
                            <h4  onClick={handleClick2}>CORPORATE INFO</h4>
                            {   isExtendedCol2 &&                       
                             <span>

                                <a href="ladies">Career at H&M</a>
                                <a href="https://hmgroup.com/about-us/">About H&M group</a>
                                <a href="bahttps://hmgroup.com/sustainability/by">Sustainability H&M Group</a>
                                <a href="https://about.hm.com/">Press</a>
                                <a href="https://hmgroup.com/investors/">Investor relations</a>
                                <a href="https://hmgroup.com/about-us/corporate-governance/">Corporate governance</a>

                            </span>}

                        </div>
                        <div className="col3 col">
                            <h4  onClick={handleClick3}>HELP</h4>
{ isExtendedCol3 &&                            <span>
                            <a href="ladies">Customer Service</a>
                                <a href="men">My H&M</a>
                                <a href="findstore">Find a store</a>
                                <a href="kids">Legal & Privacy</a>
                                <a href="home">Contact</a>
                                <a href="sport">Report a scam</a>
                                <a href="magazine">Cookie Notice</a>                                
                            </span>}
  
                            {/* <a className="smol" href="magazine">Cookie Settings</a> */}
                        </div>
                        <div className="col4 col">
                            <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                            <a href="https://www2.hm.com/en_in/customer-service/newsletter.html">Read more {arrow}</a>
                        </div>
                    </div>
                    <div className="row row2">
                        <span>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-tiktok"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-pinterest"></i>
                                <i class="fa-brands fa-facebook"></i>
                        </span>
                        <p>
                            The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.
                        </p>
                    </div>
                    <div className="row row3">
                        <img src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/697b276d-c669-4d88-b115-dd9e6cae3fae/28a9d5ed-4776-4fe0-9e19-007e8ed817a9/709px-H&M-Logo.svg.png" alt="H&M"></img>
                        <p>INDIA | Rs.</p>
                    </div>

                </div>
        </div>
    )
}

export default Footer