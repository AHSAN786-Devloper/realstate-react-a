import React from 'react'
import { Link } from 'react-router-dom'

const HomeSlider = () => {
    return (
        <>
            <header id="header" class="full-header transparent-header" data-sticky-class="not-dark">
                <div id="header-wrap">
                    <div class="container">
                        <div class="header-row header-flex">
                            <div className='d-flex'>
                                <div id="logo">
                                    <a href="/" class="standard-logo" data-dark-logo="images/logo/logo-white.png">
                                        <img src="images/logo/logo-white.png" className='img-fluid' alt="Canvas Logo" /></a>
                                    <a href="/" class="retina-logo" data-dark-logo="images/logo/logo-white.png"><img src="images/logo/logo-white.png" className='img-fluid' alt="Canvas Logo" /></a>
                                </div>
                                <nav class="primary-menu">

                                    <ul class="menu-container">
                                        <li class="menu-item">
                                            <a class="menu-link d-flex" href="/"><div>Noida </div> <i class="fa fa-caret-down" aria-hidden="true"></i> |</a>
                                            <ul class="sub-menu-container">
												<li class="menu-item">
													<a class="menu-link" href="#"><div>Noida 1</div></a>
												</li>
												<li class="menu-item">
													<a class="menu-link" href="#"><div>Noida 2</div></a>
												</li>
												<li class="menu-item">
													<a class="menu-link" href="#"><div>Noida 3</div></a>
												</li>
											</ul>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link" href="#"><div>Buy</div></a>
                                        </li>
                                        <li class="menu-item mega-menu">
                                            <a class="menu-link" href="#"><div>Projects</div></a>
                                        </li>
                                        <li class="menu-item mega-menu">
                                            <a class="menu-link" href="#"><div>Agent</div></a>

                                        </li>
                                        <li class="menu-item mega-menu">
                                            <a class="menu-link" href="#"><div>Property Services</div></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="login d-flex">
                                <div class="login-title">
                                    <Link class="menu-link list-free" to="/listing"><div>List for Free</div></Link>
                                </div>
                                <div className="login-btn">
                                    <button className="btn w-100 btn-success red red-btn" style={{padding: "0.375rem 1.75rem"}} type="submit">Log In</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/* <section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
                <div class="slider-inner"> */}

            

            {/* </div> */}
            {/* </section> */}
        </>
    )
}

export default HomeSlider