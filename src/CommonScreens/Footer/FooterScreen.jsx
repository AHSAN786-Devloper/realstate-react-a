import React from 'react'
import { Link } from 'react-router-dom'

const FooterScreen = () => {
    return (
        <>
            <footer id="footer" className="dark border-top-0 pt-5">

                <div className="container">

                    <div className="footer-widgets-wrap">


                        <div className="col-lg-12">

                            <div className="row clearfix">

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Forums</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Forums</a></li>
                                    </ul>
                                </div>

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Corporate</a></li>
                                        <li><a href="#">Agency</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Personal</a></li>
                                        <li><a href="#">OnePage</a></li>
                                        <li><a href="#">Corporate</a></li>
                                        <li><a href="#">Agency</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Personal</a></li>
                                        <li><a href="#">OnePage</a></li>
                                    </ul>
                                </div>

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Forums</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Forums</a></li>
                                    </ul>
                                </div>

                                <div className="col-2 widget_links">
                                    <ul>
                                        <li><a href="#">Corporate</a></li>
                                        <li><a href="#">Agency</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Personal</a></li>
                                        <li><a href="#">OnePage</a></li>
                                        <li><a href="#">Corporate</a></li>
                                        <li><a href="#">Agency</a></li>
                                        <li><a href="#">eCommerce</a></li>
                                        <li><a href="#">Personal</a></li>
                                        <li><a href="#">OnePage</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className="line"></div>

                    </div>

                    <div className="footer-widgets-wrap">

                        <div className="row clearfix">

                            <div className="col-lg-6">

                                <div className="widget subscribe-widget clearfix">
                                    <h4>Subscribe to Our Newsletter</h4>
                                    <p>Get Important Offers and Deals directly to your Email Inbox. <br />
                                        <em>We never send spam!</em></p>
                                    <div className="widget-subscribe-form-result"></div>

                                    <div class="clearfix" data-class-xl="float-end" data-class-lg="float-end" data-class-md="float-end" data-class-sm="" data-class-xs="">
                                        <a href="#" class="social-icon si-rounded si-small si-colored si-facebook">
                                            <i class="icon-facebook"></i>
                                            <i class="icon-facebook"></i>
                                        </a>

                                        <a href="#" class="social-icon si-rounded si-small si-colored si-twitter">
                                            <i class="icon-twitter"></i>
                                            <i class="icon-twitter"></i>
                                        </a>

                                        <a href="#" class="social-icon si-rounded si-small si-colored si-linkedin">
                                            <i class="icon-linkedin"></i>
                                            <i class="icon-linkedin"></i>
                                        </a>

                                        <a href="#" class="social-icon si-rounded si-small si-colored si-instagram">
                                            <i class="icon-instagram"></i>
                                            <i class="icon-instagram"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="widget clearfix">
                                    <div className="row">

                                        <div className="col-4 widget_links">
                                            <ul>
                                                <li><span className='links-title'>Contact</span></li>
                                                <li><a href="#">Home</a></li>
                                                <li><Link to="/about-us">About</Link></li>
                                                <li><a href="#">FAQs</a></li>
                                                <li><a href="#">Support</a></li>
                                                <li><Link to="/contact-us">Contact</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-4 widget_links">
                                            <ul>
                                                <li><span className='links-title'>Company</span></li>
                                                <li><a href="#">Shop</a></li>
                                                <li><a href="#">Portfolio</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">Forums</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-4 widget_links">
                                            <ul>
                                                <li><span className='links-title'>Legal</span></li>
                                                <li><a href="#">Corporate</a></li>
                                                <li><a href="#">Agency</a></li>
                                                <li><a href="#">eCommerce</a></li>
                                                <li><a href="#">Personal</a></li>
                                                <li><a href="#">OnePage</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="d-none d-md-block d-lg-none bottommargin-sm"></div>

                            </div>

                        </div>

                        <div className="line"></div>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default FooterScreen