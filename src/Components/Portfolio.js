import React from 'react'
import "../Css/Portfolio.css"
import { motion } from "framer-motion"

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
    const [isAllWorkActive, setAllWorkActive] = React.useState('active')
    const [isBrandingActive, setBrandingActive] = React.useState('')
    const [isMarketingActive, setMarketingActive] = React.useState('')
    const [isPlanningActive, setPlanningActive] = React.useState('')
    const [isResearchActive, setResearchActive] = React.useState('')
    const Tabs = [
        {
            title: "All Work",
            active: isAllWorkActive,
            value: ''
        },
        {
            title: "Branding",
            active: isBrandingActive,
            value: 'branding'
        },
        {
            title: "Marketing",
            active: isMarketingActive,
            value: 'marketing'
        },
        {
            title: "Planning",
            active: isPlanningActive,
            value: 'planning'
        },
        {
            title: "Research",
            active: isResearchActive,
            value: 'research'
        }
    ]

    const[scaler,setScale]=React.useState(0);
    /*
     * Active Tab
     @ params string
    */
    const manageActiveTab = (value) => {
        switch (value) {
            case 'branding':
                setAllWorkActive('')
                setBrandingActive('active')
                setMarketingActive('')
                setPlanningActive('')
                setResearchActive('')
                break;
            case 'marketing':
                setAllWorkActive('')
                setBrandingActive('')
                setMarketingActive('active')
                setPlanningActive('')
                setResearchActive('')
                break;
            case 'planning':
                setAllWorkActive('')
                setBrandingActive('')
                setMarketingActive('')
                setPlanningActive('active')
                setResearchActive('')
                break;
            case 'research':
                setAllWorkActive('')
                setBrandingActive('')
                setMarketingActive('')
                setPlanningActive('')
                setResearchActive('active')

                break
            default:
                setAllWorkActive('active')
                setBrandingActive('')
                setMarketingActive('')
                setPlanningActive('')
                setResearchActive('')
        }
    }


    /*
     * Filter Array
     @ params string
    */
    const handleFilter = (value) => {
        manageActiveTab(value)
       
        if (value === '') {
            setPortfolio(portfolioArray);
        }
        else {
            const data = portfolioArray.filter(item => item.type === value)
            setPortfolio(data)
        }
         
    }
    return (
        <div className='portfolio initial' id="portfolio" >
            <div className='container custom-container text-center'>
                <h4>Our Portfolio</h4>
                <p className="fs-6">Stop wasting time and money designing and managing a website that doesn???t get results. Happiness guaranteed!</p>
            </div>
            <div className="container">


                {/* tabs bar */}
                <ul className=" nav  nav-fill">
                    {Tabs ? Tabs.map((item, index) => {
                        return (
                            <li key={index} className={`nav-item ${item.active}`} aria-current="page" onClick={() => { handleFilter(item.value); setScale(1)}}>
                                {item.title}
                            </li>
                        )
                    }) : "loading"}
                </ul>

 
                {/* data of tab bar */}
                <div className="row row-cols-1  "> 
                    {portfolio ? portfolio.map((item, key) => {
                      
                        return (
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={key}>
                            <div className="card h-100">
                            <motion.div whileHover={{scale:1.05}} animate={{scale:scaler?scaler:1}} initial={{scale:0}} transition={{duration:0.5}}>
                                <img src={item.image} className="card-img-top" alt="..." />
                            </motion.div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="fs-6">{item.description}</p>
                                </div>

                            </div>
                            
                        </div>); 
                        
                    }) : "loading"}
                </div>
                    


            </div>



        </div>
    )
}
