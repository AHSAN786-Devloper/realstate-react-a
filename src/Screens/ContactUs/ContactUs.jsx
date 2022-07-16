import React from "react";
import FooterScreen from "../../CommonScreens/Footer/FooterScreen";
import HomeHeatMap from "../HomeScreen/HomeHeatMap";
import HomeQuestion from "../HomeScreen/HomeQuestion";
import HomeSlider from "../HomeScreen/HomeSlider";
import imgsvg from "../../assets/images/Artboard 3.svg";
import "./Contact.css";
const ContactUs = () => {
	return (
		<>
			<HomeSlider></HomeSlider>
			<div className="pt-5"></div>
			<div className="Contact_text">
				<h2>Contact Us</h2>
			</div>
			<div className="container">
				<div className="row">
					<div className="title mt-4" style={{ height: "40vh" }}>
						<img src={imgsvg} alt="" />
					</div>
				</div>
			</div>
			<section id="homepropertyservice" className="grey-bg pb-5">
				<div className="container">
					<div className="container contact">
						<div className="col-lg-12">
							<div className="row mx-auto d-flex justify-content-between contact">
								<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 pt-5 pb-5 bg-white rounded m-3 rounded-5">
									<img
										src="/images/contact/1 (2).png"
										alt=""
										height="80"
										width="80"
									/>
									<h3 className="m-0">Email Address</h3>
									<p>info.@mail.com</p>
								</div>
								<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 pt-5 pb-5 bg-white rounded-5 m-3">
									<img
										src="/images/contact/1 (3).png"
										alt=""
										height="80"
										width="80"
									/>
									<h3 className="m-0">Phone Number</h3>
									<p>987654321</p>
								</div>
								<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 pt-5 pb-5 bg-white rounded-5 m-3">
									<img
										src="/images/contact/1 (1).png"
										alt=""
										height="80"
										width="80"
									/>
									<h3 className="m-0">Official Address</h3>
									<p>Address</p>
								</div>
							</div>
						</div>
					</div>

					<h2 className="mt-5">Get In Touch</h2>
					<div className="container">
						<div className="col-lg-12">
							<div className="row mx-auto d-flex justify-content-center">
								<div className="col-lg-12 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 pt-5 pb-5 bg-white rounded-6 m-3">
									<div className="container">
										<div className="row">
											<div className="col-6">
												<div className="inputContainer">
													<input
														type="email"
														className="form-control rounded-5"
														id="exampleFormControlInput1"
														placeholder="Enter Your Name"
													/>
													<span className="inputIcon">
														<i className="ri-user-fill"></i>
													</span>
												</div>
											</div>
											<div className="col-6">
												<div className="inputContainer">
													<input
														type="email"
														className="form-control rounded-5"
														id="exampleFormControlInput1"
														placeholder="Enter email address"
													/>
													<span className="inputIcon">
														<i class="ri-mail-line"></i>
													</span>
												</div>
											</div>
										</div>
										<div className="row mt-4">
											<div className="col-6">
												<div className="inputContainer">
													<input
														type="email"
														className="form-control rounded-5"
														id="exampleFormControlInput1"
														placeholder="Enter Service Type"
													/>
													<span className="inputIcon">
														<i class="ri-arrow-down-s-line"></i>
													</span>
												</div>
											</div>
											<div className="col-6">
												<div className="inputContainer">
													<input
														type="email"
														className="form-control rounded-5"
														id="exampleFormControlInput1"
														placeholder="Enter Phone No"
													/>
													<span className="inputIcon">
														<i class="ri-phone-fill"></i>
													</span>
												</div>
											</div>
										</div>
										<div className="row mt-4">
											<div className="col-12">
												<textarea
													className="form-control rounded-5"
													id="exampleFormControlInput1"
													rows="10"
													placeholder="Enter Massage"
												></textarea>
											</div>
										</div>
										<button
											className="btn mt-3 btn-success red red-btn"
											type="submit"
										>
											Send
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
							width="600"
							height="450"
							style={{ border: "0" }}
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
				<HomeQuestion />
			</section>
			<FooterScreen />
		</>
	);
};

export default ContactUs;
