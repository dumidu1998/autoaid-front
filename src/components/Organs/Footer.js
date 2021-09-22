import { Link } from '@material-ui/core'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div>
            <div className="w-screen flex flex-col items-center justify-center p-10" style={{backgroundColor:"#333232"}}>
                

                <div className="w-10/12 flex md:justify-center my-10 font-primary items-start space-x-5 ">
                    <div className="md:flex md:w-1/2 justify-around ">
                        <img src="/imgs/logo.png" alt=""  className="h-20 mr-10 md:mr-0 mb-5 md:mb-0"/>
                    
                        <div className="space-y-3">
                            <h1 className="font-primary font-semibold text-white text-lg">Get in touch</h1>
                            <p className="text-sm text-white font-thin leading-relaxed">8.00 am - 6.00 pm <br />
                                Mon - Sat <br />
                                Autoaid@gmail.com<br />
                                Ph:0712405386</p>
                        </div>
                    </div>

                    <div className="md:flex md:w-1/2 space-y-4 md:space-y-0  justify-around  ">
                        <div className="space-y-3">
                            <h1 className="font-primary font-semibold text-white text-lg">Sitemap</h1>
                            <Link to="/services" ><a className="text-sm text-white font-thin block">Services</a></Link>
                            <Link to="/aboutus" ><a className="text-sm text-white font-thin block">why us</a></Link>
                            <Link to="/Ourwork" ><a className="text-sm text-white font-thin block">How we Work</a></Link>
                            <Link to="/testimonials" ><a className="text-sm text-white font-thin block">Testimonials</a></Link>
                            <Link to="/contactus" ><a className="text-sm text-white font-thin block">Contact Us</a></Link>
                        </div>
                        <div className="space-y-3">
                            <h1 className="font-primary font-semibold text-white text-lg">Services</h1>
                            <Link to="/services" ><a className="text-sm text-white font-thin block">General Repair</a></Link>
                            <Link to="/services" ><a className="text-sm text-white font-thin block">Service</a></Link>
                            <Link to="/services" ><a className="text-sm text-white font-thin block">Wheel Allignment</a></Link>
                        </div>                           

                    </div>

                    
                </div>
                
            </div>
        </div>
        </div>
    )
}
