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
            <div className="row row-cols-1 ">
                    
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={key}>
                            <div className="card h-100" >
                                <img src="Images/pricing.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Card Title</h5>
                                    <p className="fs-6">lorem10 </p>
                                </div>

                            </div>
                        </div>
                    
                </div>
            {/* cards end */}

        </div>
    )
}
