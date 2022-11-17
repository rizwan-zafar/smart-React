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
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-xs-12 col-sm12">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* cards end */}

        </div>
    )
}
