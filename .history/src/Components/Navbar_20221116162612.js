import React from 'react'
// D:\MERN\project\smart-React\src\Images\logo.png
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="Images/logo.png" alt="not found"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                            <a className="nav-link" href="/">PORTFOLIO</a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link" href="/">PORTFOLIO</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}