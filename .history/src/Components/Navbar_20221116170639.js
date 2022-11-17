 import React from 'react'
 
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="Images/logo.png" alt="not found"/></a>
                <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon="bar" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
    )
}
