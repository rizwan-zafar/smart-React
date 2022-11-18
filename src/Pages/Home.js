import React from 'react'
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Service from "../Components/Service";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Subscribe from "../Components/Subscribe";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Service />
            <Portfolio />
            <Pricing />
            <Subscribe />
        </div>
    )
}
