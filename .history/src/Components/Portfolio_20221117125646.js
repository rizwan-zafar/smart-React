import React from 'react'
import "../Css/Portfolio.css"

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='container custom-container text-center'>
                <h4>Our Portfolio</h4>
                <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
            <div className="container">
                <ul className=" nav  nav-fill">
                    <li className="nav-item active" aria-current="page">
                    All Work
                     </li>
                    <li className="nav-item">
                    Branding                    </li>
                    <li className="nav-item">
                    Marketing                    </li>
                    <li className="nav-item">
                    Planning
                    </li>
                    <li className="nav-item">
                    Research
                    </li>
                    
                </ul>



                
            </div>



        </div>
    )
}
