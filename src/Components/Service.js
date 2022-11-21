import React from 'react'
import "../Css/Services.css"
import { motion } from "framer-motion"
export default function Service() {
    return (
        <div className="services initial" id="about">

            <div className="text-center">
                <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ duration: 0.5, delay: 0 }}>
                    <img className="custom-image" src="/Images/services.png" alt="Services" />
                </motion.div>
                <div className='container custom-container'>
                    <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ duration: 1, delay: 0 }}>

                        <h4>The future of designing starts here</h4>
                    </motion.div>

                    <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ duration: 1, delay: 0 }}>

                        <p>An open platform for presentations and content collaboration. Sign up to get early access.</p>
                    </motion.div>

                </div>
            </div>
            <div className="container text-center">

                <div className="row ">
                    {/* col first */}

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <motion.div whileInView={{ y: 1 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="/Images/icon-1.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-start">
                                            <h5 className="card-title fw-bold">Powerful templates</h5>
                                            <p className="card-text fs-6">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                                            <p className="card-text fs-6"><small className="text-muted">Last updated 5 days ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* col second */}
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <motion.div whileInView={{ y: 1 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>

                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="/Images/icon-2.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-start">
                                            <h5 className="card-title fw-bold">Designed for everyone</h5>
                                            <p className="card-text fs-6">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 weeks ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    {/* col third */}

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <motion.div whileInView={{ y: 1 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="/Images/icon-3.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-start">
                                            <h5 className="card-title fw-bold">Work anywhere</h5>
                                            <p className="card-text fs-6">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 1 month ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* col four */}
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <motion.div whileInView={{ y: 1 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="/Images/icon-4.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body text-start">
                                            <h5 className="card-title fw-bold">Updated in real time</h5>
                                            <p className="card-text fs-6">Poorly designed presentations are a thing of the past. Create beautiful and high-quality content that is aligned.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 2 days ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}
