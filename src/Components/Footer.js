import React from 'react'
import "../Css/Footer.css"

export default function Footer() {
    return (
        <div className="footer initial">
            <div className="container ">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <p className="fw-bold gray">Company</p>
                        <ul className="restyle p-0">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Profile</a></li>

                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <p className="fw-bold gray">Solutions</p>
                        <ul className="restyle p-0">
                            <li><a href="/">Facilities Services</a></li>
                            <li><a href="/">Workplace Staffing</a></li>
                            <li><a href="/">Project Management</a></li>

                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <p className="fw-bold gray">Product & Services</p>
                        <ul className="restyle p-0">
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Business</a></li>
                            <li><a href="/">Developer</a></li>

                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        <p className="fw-bold gray">Help & Suuport</p>
                        <ul className="restyle p-0">
                            <li><a href="/">Support Center</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Terms & Conditions</a></li>

                        </ul>
                    </div>
                </div>


                <div className="row copyright">
                    <div className="col-lg-5">Crafted by <span>UIdeck </span> and UI Elements from<a href="/www.mayonity.com"><span> Mayonity.com</span></a></div>
                    <div className="col-lg-2 text-center"><img src="/Images/logo-2.svg" alt="footer logo"/></div>
                    <div className="col-lg-5 social">
                        <img src="/Images/square-whatsapp.svg"   alt="footer logo"/>
                        <img src="/Images/linkedin.svg" alt="footer logo"/>
                        <img src="/Images/square-instagram.svg" alt="footer logo"/>
                        <img src="/Images/square-twitter.svg" alt="footer logo"/>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
