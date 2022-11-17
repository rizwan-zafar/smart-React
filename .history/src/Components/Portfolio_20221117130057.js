import React from 'react'
import "../Css/Portfolio.css"

export default function Portfolio() {
    const portfolio=[
        {
            image:"/Images/icon-1.png",
            title:"Branding Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        },
        {
            image:"/Images/icon-1.png",
            title:"Marketing Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'marketing'
        },
        {
            image:"/Images/icon-1.png",
            title:"Graphics Branding",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        },
        {
            image:"/Images/icon-1.png",
            title:"Graphics Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'planning'
        },
        {
            image:"/Images/icon-1.png",
            title:"Graphics Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        },
        {
            image:"/Images/icon-1.png",
            title:"Graphics Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        },
        {
            image:"/Images/icon-1.png",
            title:"Graphics Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        }, 
          {
            image:"/Images/icon-1.png",
            title:"Graphics Designing",
            description:"Short description for the ones who look for something new. Awesome!",
            type:'branding'
        }

    ]
    return (
        <div className='portfolio'>
            <div className='container custom-container text-center'>
                <h4>Our Portfolio</h4>
                <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
            <div className="container">
                {/* tabs bar */}
                <ul className=" nav  nav-fill">
                    <li className="nav-item active" aria-current="page">
                    All Work
                     </li>
                    <li className="nav-item">
                    Branding                    </li>
                    <li className="nav-item">
                    Marketing                    </li>
                    <li className="nav-item">
                    Planning
                    </li>
                    <li className="nav-item">
                    Research
                    </li>
                    
                </ul>


                {/* data of tab bar */}



            </div>



        </div>
    )
}
