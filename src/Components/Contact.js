import React from 'react'
import "../Css/Contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {motion} from "framer-motion"
export default function Contact() {
    return (
        <div className="contact initial" id="contact">
            <div className='container custom-container text-center'>
                <h4>Get in touch</h4>
                <p className="fs-6 gray">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            </div>

            <div className="container">
                <div className="row">
                
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{  duration:0.5}}>
                        <h4 className="fw-bold fs-3">Lets talk about the project</h4>
                        <p className="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam unde repellendus delectus facilis quia consequatur maxime perferendis! Sequi, modi consequatur.</p>
                        <div>
                            <ul className="restyle p-0 gray">
                                <li><FontAwesomeIcon className="px-2" icon="location-dot" /> Elizabeth St, Melbourne, Australia</li>
                                <li><FontAwesomeIcon className="px-2" icon="phone" /> Elizabeth St, Melbourne, Australia</li>
                                <li><FontAwesomeIcon className="px-2" icon="envelope" /> Elizabeth St, Melbourne, Australia</li>
                            </ul>

                        </div>
                    </motion.div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{ duration:0.5}}>

                        <form>
                            <div className="mb-3">
                                <label className="form-label ">Name</label>
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <label className="form-label">Email</label>
                            <div className="input-group">
                                <textarea className="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="mt-4 btn btn1 ">Submit</button>
                        </form>
                    </motion.div>
                    </div>
                </div>
            </div>


        </div>
    )
}
