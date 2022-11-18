import React from 'react'
import "../Css/Subscribe.css"

export default function Subscribe() {
    return (
        <div className="subscribe initial">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12col-sm-12 col-md-5 col-lg-5 col-lg-5">
                        <h3 >Get latest updates!</h3>
                        <p className="lh-lg">We never spam your email</p>
                    </div>

                    <div className="col-xs-12col-sm-12 col-md-7 col-lg-7 col-lg-7">
                        <div className="text-center border">
                            <div className="input-group input-group-lg ">
                                <input type="text" className="form-control border-0" placeholder="Enter your email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                <button className="input-group-text btn1" id="inputGroup-sizing-lg">SUBSCRIBE</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
