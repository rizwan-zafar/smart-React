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
                    <div className="carousel-item active bg-cover1 slide-image">
                        <div className="carousel-caption">
                            <p>First slide label</p>
                            <div>
                                <button className="btn btn1">Get Start</button>
                                <button className="btn btn2">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active bg-cover2">
                        <div className="carousel-caption">
                            <p>First slide label</p>
                            <div>
                                <button className="btn btn1">Get Start</button>
                                <button className="btn btn2">Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active bg-cover3">
                        <div className="carousel-caption">
                            <p>First slide label</p>
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
