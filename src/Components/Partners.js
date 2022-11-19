import React from 'react'
import "../Css/Partner.css"
import "../../node_modules/flickity/dist/flickity.min.css"
import Flickity from 'react-flickity-component'
export default function Partners() {
    const logoArray = [
        {
            logo: "client_logo_03.png",
        },
        {
            logo: "client_logo_04.png",
        },
        {
            logo: "client_logo_05.png",
        },
        {
            logo: "client_logo_06.png",
        },
        {
            logo: "client_logo_07.png",
        },
        {
            logo: "client_logo_03.png",
        },
        {
            logo: "client_logo_04.png",
        },
        {
            logo: "client_logo_05.png",
        },
        {
            logo: "client_logo_06.png",
        },
        {
            logo: "client_logo_07.png",
        }
    ]
    const flickityOptions = {
        initialIndex: 2
    }
    return (
        <div className="partner initial">
            <div className="container">
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >

                    {logoArray ? logoArray.map((item, index) => {
                        return (
                        
                        <img key={index} src={`/Images/${item.logo}`}  className="img-fluid p-4" alt="client logo" />
                        )
                    }) : ""}
                </Flickity>
            </div>

        </div>
    )
}
