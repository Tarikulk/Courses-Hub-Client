import React from 'react';
import "./Footer.css"
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta"> 
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} className="img-fluid rounded-circle w-25 h-25" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p>Take your desired course. Best wishes from Course-Hub</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to="/"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="/"><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to="/"><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">about</Link></li>
                                <li><Link to="/">services</Link></li>
                                <li><Link to="/">portfolio</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/">About us</Link></li>
                                <li><Link to="/">Our Services</Link></li>
                                <li><Link to="/">Expert Team</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                                <li><Link to="/">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </footer>
    )
};

export default Footer;