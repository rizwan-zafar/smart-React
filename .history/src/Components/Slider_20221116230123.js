import React from 'react'
import "../Css/Slider.css"

export default function Slider() {
    return (
        <div className="sliderContainer">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active bg-cover slide-image1">
                        <div className="carousel-caption">
                            <p> If not now, then when?</p>
                            <div>
                                <button className="btn btn1">Get Start</button>
                                <button className="btn btn2">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active bg-cover slide-image2">
                        <div className="carousel-caption">
                            <p>What does your joy look like today?</p>
                            <div>
                                <button className="btn btn1">Get Start</button>
                                <button className="btn btn2">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active bg-cover slide-image3">
                        <div className="carousel-caption">
                            <p>Where do you find inspiration?</p>
                            <div>
                                <button className="btn btn1">Get Start</button>
                                <button className="btn btn2">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
