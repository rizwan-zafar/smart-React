import React from 'react'
import "../Css/Testimonial.css"
import "../../node_modules/flickity/dist/flickity.min.css"
import Flickity from 'react-flickity-component'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Testimonial() {
    const testimonialArray = [
        {
            image: "author-2.jpg",
            feedback: " Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! ",
            name: "Elan Musk",
            designation: "CEO, SpaceX"
        },
        {
            image: "author-4.jpg",
            feedback: " Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! ",
            name: "Bruce",
            designation: "Lead Designer, SpaceX"
        },
        {
            image: "author-2.jpg",
            feedback: " Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! ",
            name: "Richard",
            designation: "Developer, SpaceX"
        },
        {
            image: "author-4.jpg",
            feedback: " Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! ",
            name: "Peter",
            designation: "Manager, SpaceX"
        },
    ]
    const flickityOptions = {
        initialIndex: 2
    }
    return (
        <div className="testimonial initial container">
            <div className='container custom-container text-center'>
                <h4>Testimonials</h4>
                <p className="fs-6">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
            <div className="row row-cols-1 text-center">
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    {testimonialArray ? testimonialArray.map((item, index) => {
                        return (<div key={index} className="col-xs-6 col-sx-3 col-md-6 col-lg-6 col-xl-6 set-padding">
                            <div className="card shadow">
                                <div>
                                    <img src={`/Images/${item.image}`} className="mt-4 card-img-top" alt="..." />
                                </div>
                                <div className="card-body">

                                    <p className="card-text">
                                        <FontAwesomeIcon icon="quote-left" className="p-3" />  {item.feedback} <FontAwesomeIcon icon="quote-right" className="pt-3" />
                                    </p>
                                    <hr />
                                    <h5 className="card-title pt-3 fw-bold">{item.name}</h5>
                                    <span className="fs-6">{item.designation}</span>
                                </div>
                            </div>
                        </div>)
                    }) : ""}











                </Flickity>
            </div>
        </div>
    )
}
