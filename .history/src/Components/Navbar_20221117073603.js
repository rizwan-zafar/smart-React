import React from 'react'
import "../Css/Navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Navbar() {
    const [hamburgerIcon,setHamburgerIcon]=React.useState(true)
    const handleHumBurger=
    console.log("test",hamburgerIcon)
    return ( 
        <div className="NavContainer">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid" src="Images/logo.png" alt="not found" />
                    </a>
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="bars" onClick={()=>{setHamburgerIcon(!hamburgerIcon)}}/>
                    </div>
                    <div className="collapse navbar-collapse navSetting" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">PORTFOLIO</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">PRICING</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">CLIENTS</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
