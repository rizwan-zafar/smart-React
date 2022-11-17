import React from 'react'
import "../Css/Portfolio.css"

export default function Portfolio() {
    const portfolioArray = [
        {
            image: "/Images/icon-1.png",
            title: "Branding Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'branding'
        },
        {
            image: "/Images/icon-1.png",
            title: "Marketing Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'marketing'
        },
        {
            image: "/Images/icon-1.png",
            title: "Graphics Branding",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'branding'
        },
        {
            image: "/Images/icon-1.png",
            title: "Planning Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'planning'
        },
        {
            image: "/Images/icon-1.png",
            title: "Graphics Planning",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'planning'
        },
        {
            image: "/Images/icon-1.png",
            title: "Research Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'research'
        },
        {
            image: "/Images/icon-1.png",
            title: "Graphics Research",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'research'
        },
        {
            image: "/Images/icon-1.png",
            title: "Graphics Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'branding'
        }

    ]
    const [portfolio, setPortfolio] = React.useState(portfolioArray)

    /*
     * Filer Array
     @ parms
    */
    const handleFilter = (value) => {
        const data = portfolioArray.filter(item => item.type === value)
        setPortfolio(data)
    }
    return (
        <div className='portfolio'>
            <div className='container custom-container text-center'>
                <h4>Our Portfolio</h4>
                <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>
            <div className="container">
                {/* tabs bar */}
                <ul className=" nav  nav-fill">
                    <li className="nav-item active" aria-current="page" onClick={() => { setPortfolio(portfolioArray) }}>
                        All Work
                     </li>
                    <li className="nav-item" onClick={() => { handleFilter("branding") }}>
                        Branding                    </li>
                    <li className="nav-item" onClick={() => { handleFilter("marketing") }}>
                        Marketing                    </li>
                    <li className="nav-item" onClick={() => { handleFilter("planning") }}>
                        Planning
                    </li>
                    <li className="nav-item" onClick={() => { handleFilter("research") }}>
                        Research
                    </li>

                </ul>


                {/* data of tab bar */}
                <div className="row row-cols-1  ">
                    {portfolio ? portfolio.map((item, key) => {
                        return (<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={key}>
                            <div className="card h-100" >
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>

                            </div>
                        </div>)
                    }) : "loading"}



                </div>


            </div>



        </div>
    )
}
