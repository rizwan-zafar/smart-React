import React from 'react'
import "../Css/Pricing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const pricingPlaneArray = [
    {
        image: "pricing.svg",
        category: "Basic",
        price: "199",
        benefits: [
            "Carefully crafted components",
            "Amazing page examples"
        ]
    },
    {
        image: "pricing.svg",
        category: "Pro",
        price: "399",
        benefits: [
            "Carefully crafted components",
            "Amazing page examples"
        ]
    },
    {
        image: "pricing.svg",
        category: "Enterprise",
        price: "699",
        benefits: [
            "Carefully crafted components",
            "Amazing page examples"
        ]
    },
]
export default function Pricing() {
    return (
        <div className="pricing initial">
            <div className='container custom-container text-center'>
                <h4>Pricing Plan</h4>
                <p className="fs-6">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
            {/* card */}
            <div className="container">
                <div className="row row-cols-1 text-center">

                    {pricingPlaneArray ? pricingPlaneArray.map((item, index) => {
                        return (
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={index}>
                                <div className="card h-100 shadow "  >
                                    <div className="pt-4">
                                        <img src={`Images/${item.image}`} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body mt-3 pb-4">
                                        <h6 className="fw-bold">{item.category}</h6>
                                        <h2 className="card-title fw-bold">$ {item.price}/<span className="fs-5 fw-normal">month</span></h2>
                                        <div className="inner-item">
                                            <ul>
                                                {item.benefits ? item.benefits.map((item,index) => {
                                                    return (<li className="pt-3" key={index}><FontAwesomeIcon className="tick" icon="circle-check" /><span>{item}</span></li>
                                                    )
                                                }) : ""}
                                            </ul>
                                        </div>
                                        <button className="btn btn1">Get Start</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ''}

                </div>
            </div>
            {/* card end */}



        </div>
    )
}
