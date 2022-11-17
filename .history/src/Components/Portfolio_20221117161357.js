import React from 'react'
import "../Css/Portfolio.css"

export default function Portfolio() {
    const portfolioArray = [
        {
            image: "/Images/portfolio-1.png",
            title: "Branding Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'branding'
        },
        {
            image: "/Images/portfolio-2.png",
            title: "Marketing Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'marketing'
        },
        {
            image: "/Images/portfolio-3.png",
            title: "Graphics Branding",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'branding'
        },
        {
            image: "/Images/portfolio-4.png",
            title: "Planning Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'planning'
        },
        {
            image: "/Images/portfolio-5.png",
            title: "Graphics Planning",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'planning'
        },
        {
            image: "/Images/portfolio-6.png",
            title: "Research Designing",
            description: "Short description for the ones who look for something new. Awesome!",
            type: 'research'
        },
         

    ]
    const [portfolio, setPortfolio] = React.useState(portfolioArray)
    const [isAllWorkActive,setAllWorkActive]=React.useState('active')
    const [isBrandingActive,setBrandingActive]=React.useState('')
    const [isMarketingActive,setMarketingActive]=React.useState('')
    const [isPlanningActive,setPlanningActive]=React.useState('')
    const [isResearchActive,setResearchActive]=React.useState('')
    /*
     * Filer Array
     @ params string
    */
    const handleFilter = (value) => {
        if(value==="branding")
        {
            setAllWorkActive('')
            setBrandingActive('active')
            setMarketingActive('')
            setPlanningActive('')
            setResearchActive('')
        }
        else if(value==="marketing")
        {
            setAllWorkActive('')
            setBrandingActive('')
            setMarketingActive('active')
            setPlanningActive('')
            setResearchActive('')
        }
        else if(value==="planning")
        {
            setAllWorkActive('')
            setBrandingActive('')
            setMarketingActive('')
            setPlanningActive('active')
            setResearchActive('')
        }
        else if(value==="research")
        {
            setAllWorkActive('')
            setBrandingActive('')
            setMarketingActive('')
            setPlanningActive('')
            setResearchActive('active')
        }
        else{
            setAllWorkActive('active')
            setBrandingActive('')
            setMarketingActive('')
            setPlanningActive('')
            setResearchActive('')
        }
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
                    <li className={`nav-item ${isAllWorkActive}`} aria-current="page" onClick={() => { setPortfolio(portfolioArray) }}>
                        All Work 
                     </li>
                    <li className={`nav-item ${isBrandingActive}`} onClick={() => { handleFilter("branding") }}>
                        Branding                    </li>
                    <li className={`nav-item ${isMarketingActive}`}onClick={() => { handleFilter("marketing") }}>
                        Marketing                    </li>
                    <li className={`nav-item ${isPlanningActive}`} onClick={() => { handleFilter("planning") }}>
                        Planning
                    </li>
                    <li className={`nav-item ${isResearchActive}`} onClick={() => { handleFilter("research") }}>
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
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="fs-6">{item.description}</p>
                                </div>

                            </div>
                        </div>)
                    }) : "loading"}



                </div>


            </div>



        </div>
    )
}
