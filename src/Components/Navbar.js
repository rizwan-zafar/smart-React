import React from 'react'
import "../Css/Navbar.css"
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Navbar() {
    const [hamburgerIcon, setHamburgerIcon] = React.useState('bars')
    const [rotateIcon, setRotateIcon] = React.useState('')
    const [mobileMenuClose,setMobileMenuClose]=React.useState("visible")
    const handleHumBurger = (hamburgerIcon) => {
        if (hamburgerIcon === 'bars') {
           
            setRotateIcon('icon-rotate')
            setHamburgerIcon('plus')
         } else {
            setRotateIcon('anti-icon-rotate')
            setHamburgerIcon("bars")
        }
       
    }
     return (
        <div className="NavContainer">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid" src="Images/logo.png" alt="not found" />
                    </a>
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse"     onClick={() => {setMobileMenuClose();  handleHumBurger(hamburgerIcon) }} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon  className={rotateIcon} icon={hamburgerIcon}  />
                    </div>
                    <div className={`collapse navbar-collapse  ${mobileMenuClose}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="portfolio" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>PORTFOLIO</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="pricing" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>PRICING</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="clients" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>CLIENTS</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="contact" onClick={()=>{handleHumBurger(''); setMobileMenuClose("setVisible")}}>CONTACT</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
