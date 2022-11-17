import React from 'react'
import Navbar from "../Components/Navbar"
import Slider from "../Components/Slider"
import Service from "../Components/Service";
import Portfolio from "../Components/Portfolio"
export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Service />
            <Portfolio />
        </div>
    )
}
