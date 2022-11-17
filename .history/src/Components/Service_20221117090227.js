import React from 'react'
import "../Css/Services.css"
export default function Service() {
    return (
        <div className="services">
            <div className="text-center">
                <img class="img-fluid" src="/Images/services.png" alt="Services" />
                <div className='container custom-container'>
                    <h4>The future of designing starts here</h4>
                    <p>An open platform for presentations and content collaboration. Sign up to get early access.</p>
                </div>
            </div>
            {/* style={{max-width: 540px;}} */}
            <div className="container text-center">
                <div className="row">
                    <div className="cocol-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div class="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/Images/services.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-sm-12">
                        <img class="img-fluid" src="/Images/services.png" alt="Services" />

                    </div>

                </div>
            </div>

        </div>
    )
}
