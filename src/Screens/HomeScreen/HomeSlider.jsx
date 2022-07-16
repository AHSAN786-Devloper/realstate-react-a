import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const HomeSlider = () => {
	return (
		<>
			<header
				id="header"
				className="full-header transparent-header"
				data-sticky-className="not-dark"
			>
				<div id="header-wrap">
					<div className="container">
						<div className="header-row header-flex">
							<div className="d-flex">
								<div id="logo">
									<a
										href="/"
										className="standard-logo"
										data-dark-logo="images/logo/logo-white.png"
									>
										<img
											src="images/logo/logo-white.png"
											className="img-fluid"
											alt="Canvas Logo"
										/>
									</a>
									<a
										href="/"
										className="retina-logo"
										data-dark-logo="images/logo/logo-white.png"
									>
										<img
											src="images/logo/logo-white.png"
											className="img-fluid"
											alt="Canvas Logo"
										/>
									</a>
								</div>
								<nav className="primary-menu">
									<ul className="menu-container">
										<li className="menu-item">
											<a className="menu-link d-flex" href="/">
												<div>Noida </div>{" "}
												<i className="fa fa-caret-down" aria-hidden="true"></i>{" "}
												|
											</a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="#">
														<div>Noida 1</div>
													</a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="#">
														<div>Noida 2</div>
													</a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="#">
														<div>Noida 3</div>
													</a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="#">
												<div>Buy</div>
											</a>
										</li>
										<li className="menu-item mega-menu">
											<a className="menu-link" href="#">
												<div>Projects</div>
											</a>
										</li>
										<li className="menu-item mega-menu">
											<a className="menu-link" href="#">
												<div>Agent</div>
											</a>
										</li>
										<li className="menu-item mega-menu">
											<a className="menu-link" href="#">
												<div>Property Services</div>
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="login d-flex">
								<div className="login-title">
									<Link className="menu-link list-free" to="/listing">
										<div>
											<h6> List for Free</h6>
										</div>
									</Link>
								</div>
								<div className="login-btn">
									<button
										className="btn w-100 btn-success red red-btn"
										style={{ padding: "0.375rem 1.75rem" }}
										type="submit"
									>
										Log In
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* <section id="slider" className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">
                <div className="slider-inner"> */}

			{/* </div> */}
			{/* </section> */}
		</>
	);
};

export default HomeSlider;
