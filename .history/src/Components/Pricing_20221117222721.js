import React from 'react'
import "../Css/Pricing.css"

export default function Pricing() {
    return (
        <div className="pricing initial">
            <div className='container custom-container text-center'>
                <h4>Pricing Plan</h4>
                <p className="fs-6">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>

            {/* cards */}
            {/* col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 */}
            <div className="row text-center">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card h-100">
                        
                        <img src="Images/pricing.svg" className="card-img-top" alt="..." />
                         
                        <div className="card-body">
                            <h5 className="sub-title">Subtitle</h5>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards end */}

        </div>
    )
}
