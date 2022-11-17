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
            <div className="row ">
                    {/* col first */}
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3">
                                    <img src="/Images/icon-1.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body text-start">
                                        <h5 className="card-title fw-bold">Powerful templates</h5>
                                        <p className="card-text fs-6">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                                        <p className="card-text fs-6"><small className="text-muted">Last updated 5 days ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* cards end */}

        </div>
    )
}
