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
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"  >All Word</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Much longer nav link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  >Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  >Link</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
