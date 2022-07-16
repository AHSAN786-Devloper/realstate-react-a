import React from "react";
import img01 from "../../assets/images/Artboard 1.svg";
import "./home.css";

const HomeSliderSlider = () => {
	return (
		<>
			<div
				id="carouselExampleSlidesOnly"
				class="carousel slide home-slider"
				data-ride="carousel"
				style={{ marginTop: "calc(-100px - 2px)" }}
			>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							class="d-block w-100 home-slider-img"
							src={img01}
							alt="First slide"
						/>
						<div class="carousel-caption d-none d-md-block">
							<div className="row">
								<div className="d-flex header-search">
									<input
										type="email"
										id="widget-subscribe-form-email"
										className="form-control not-dark required header-input"
										placeholder="Search City, locality, project, landmarks"
									/>

									<button
										className="btn btn-success red red-btn search-btn-1"
										type="submit"
									>
										Send
									</button>
								</div>
								<div className="plus_icon">
									<h6>
										<i class="ri-add-line"></i>
									</h6>
								</div>
								<h3 className="mb-0 mt-2 d-flex pt-4">
									Let Us Help You Choose The Best
								</h3>
								<p className="mb-3 mt-1 hrader-para">
									Lorem ipsum dolor sit amet Lorem ipsum dolor sit..
								</p>
								<div className="">
									<button
										className="btn btn-success red header-search-btn"
										type="submit"
									>
										Ask Us
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeSliderSlider;
