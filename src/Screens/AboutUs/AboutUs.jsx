import React from "react";
import FooterScreen from "../../CommonScreens/Footer/FooterScreen";
import "./about.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import HomeQuestion from "../HomeScreen/HomeQuestion";
import HomeSlider from "../HomeScreen/HomeSlider";
import imgsvg from "../../assets/images/Artboard 3.svg";
import Slider from "react-slick";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutUs = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<HomeSlider></HomeSlider>
			<div className="pt-5"></div>
			<div className="About_text">
				<h2>About Us</h2>
			</div>
			<section id="home-latest " className="pb-5 grey-bg pt-2">
				<div className="container ">
					<div className="row mt-3">
						<div className="title" style={{ height: "40vh" }}>
							<img src={imgsvg} alt="" />
						</div>
					</div>

					<div className="col-lg-12 ">
						<div className="row main_title">
							<div className="col-lg-6">
								<div className="about-left">
									<div className="about-img col-lg-10">
										<img src="images/about.jpg" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row mt-3">
									<div className="about-title">
										<h3>The Leading Real Estate Rental Market Place</h3>
									</div>
									<div className="about-para">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Nulla eos voluptate sunt reprehenderit eius, iusto
											laborum, quas laudantium doloremque fugiat iure quis,
											totam magni provident. Aliquam nemo accusantium fuga sit!
										</p>
									</div>
									<div className="col-lg-6 d-flex align-items-center">
										<div className="right-img">
											<img src="images/aboutus/1 (1).png" alt="" />
										</div>
										<div className="right-title">
											<h5 className="mb-0 mt-2">7+ Years Experience</h5>
										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center">
										<div className="right-img">
											<img src="images/aboutus/1 (1).png" alt="" />
										</div>
										<div className="right-title">
											<h5 className="mb-0 mt-2">7+ Years Experience</h5>
										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center mt-3">
										<div className="right-img">
											<img src="images/aboutus/1 (1).png" alt="" />
										</div>
										<div className="right-title">
											<h5 className="mb-0 mt-2">7+ Years Experience</h5>
										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center mt-3">
										<div className="right-img">
											<img src="images/aboutus/1 (1).png" alt="" />
										</div>
										<div className="right-title">
											<h5 className="mb-0 mt-2">7+ Years Experience</h5>
										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center mt-3">
										<div className="right-img">
											<img src="images/aboutus/1 (1).png" alt="" />
										</div>
										<div className="right-title">
											<h5 className="mb-0 mt-2">7+ Years Experience</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-12 mt-5">
						<div className="title">
							<h5 className="text-center m-0 ">Services</h5>
							<h2 className="text-center">Our Main Focus</h2>
						</div>
						<div className="container">
							<div className="col-lg-12">
								<div className="row mx-auto d-flex justify-content-evenly">
									<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 bg-white rounded m-3">
										<img
											src="/images/about/11 (1).png"
											alt=""
											height="80"
											width="80"
										/>
										<h3 className="m-0">Our Mission</h3>
										<p className="text-center">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Debitis totam nesciunt illo amet consequatur itaque,
											deserunt ipsum recusandae veniam facere laborum maiores.
										</p>
										<span>
											<i class="fa fa-arrow-right" aria-hidden="true"></i>
										</span>
									</div>
									<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 bg-white rounded m-3">
										<img
											src="/images/about/11 (2).png"
											alt=""
											height="80"
											width="80"
										/>
										<h3 className="m-0">Our Visson</h3>
										<p className="text-center">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Debitis totam nesciunt illo amet consequatur itaque,
											deserunt ipsum recusandae veniam facere laborum maiores.
										</p>
										<span>
											<i class="fa fa-arrow-right" aria-hidden="true"></i>
										</span>
									</div>
									<div className="col-lg-3 padding-2 d-flex flex-column align-items-center justify-content-center shadow-sm p-3 bg-white rounded m-3">
										<img
											src="/images/about/11 (3).png"
											alt=""
											height="80"
											width="80"
										/>
										<h3 className="m-0">Our Approch</h3>
										<p className="text-center">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Debitis totam nesciunt illo amet consequatur itaque,
											deserunt ipsum recusandae veniam facere laborum maiores.
										</p>
										<span>
											<i class="fa fa-arrow-right" aria-hidden="true"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="col-lg-12 mt-5">
							<div className="title">
								<h5 className="text-center m-0">Team</h5>
								<h2 className="text-center">Our Strength</h2>
							</div>
							<div className="row">
								<Slider {...settings}>
									<div className="col-lg-3 shadow-sm pt-3 pb-3 bg-white rounded d-flex flex-column align-items-center justify-content-center">
										<img src="images/home-testi/Group 45.png" alt="" />
										<h3 className="mb-0 mt-4">Diana Lansdovne</h3>
										<p className="mb-0">CEO of Themeyou</p>
									</div>
									<div className="col-lg-3 shadow-sm pt-3 pb-3 bg-white rounded d-flex flex-column align-items-center justify-content-center">
										<img src="images/home-testi/Group 45.png" alt="" />
										<h3 className="mb-0 mt-4">Diana Lansdovne</h3>
										<p className="mb-0">CEO of Themeyou</p>
									</div>
									<div className="col-lg-3 shadow-sm pt-3 pb-3 bg-white rounded d-flex flex-column align-items-center justify-content-center">
										<img src="images/home-testi/Group 45.png" alt="" />
										<h3 className="mb-0 mt-4">Diana Lansdovne</h3>
										<p className="mb-0">CEO of Themeyou</p>
									</div>
									<div className="col-lg-3 shadow-sm pt-3 pb-3 bg-white rounded d-flex flex-column align-items-center justify-content-center">
										<img src="images/home-testi/Group 45.png" alt="" />
										<h3 className="mb-0 mt-4">Diana Lansdovne</h3>
										<p className="mb-0">CEO of Themeyou</p>
									</div>
									<div className="col-lg-3 shadow-sm pt-3 pb-3 bg-white rounded d-flex flex-column align-items-center justify-content-center">
										<img src="images/home-testi/Group 45.png" alt="" />
										<h3 className="mb-0 mt-4">Diana Lansdovne</h3>
										<p className="mb-0">CEO of Themeyou</p>
									</div>
								</Slider>
							</div>
						</div>
					</div>

					<div className="col-lg-12 mt-5">
						<div className="row">
							<div className="title">
								<h5 className="text-center m-0 ">Awards</h5>
								<h2 className="text-center">Achivements</h2>
							</div>
							<div className="col-lg-6">
								<div className="row mt-3">
									<div className="about-title">
										<h3>
											What Results Are What Matter Most, We Belive awardsBring
											Value
										</h3>
									</div>
									<div className="about-para">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Nulla eos voluptate sunt reprehenderit eius, iusto
											laborum, quas laudantium doloremque fugiat iure quis,
											totam magni provident. Aliquam nemo accusantium fuga sit!
										</p>
									</div>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="about-left row">
									<div className="about-img col-lg-6">
										<img src="images/about/12 (1).png" alt="" />
									</div>
									<div className="about-img col-lg-6">
										<img src="images/about/12 (2).png" alt="" />
									</div>
								</div>
								<div className="about-left row mt-3">
									<div className="about-img col-lg-6">
										<img src="images/about/12 (3).png" alt="" />
									</div>
									<div className="about-img col-lg-6">
										<img src="images/about/12 (4).png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<HomeQuestion></HomeQuestion>
			<FooterScreen />
		</>
	);
};

export default AboutUs;
