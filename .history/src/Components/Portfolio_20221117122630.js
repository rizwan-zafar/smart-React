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
                <ul className=" nav   ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Much longer nav link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
