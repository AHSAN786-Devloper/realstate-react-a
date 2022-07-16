import React from "react";

const HomeGallery = () => {
	return (
		<>
			<section id="home-latest" className="pb-5">
				<div className="container">
					<div className="title padding-3">
						<h5 className="text-center m-0 green">Gallery</h5>
						<h3 className="text-center m-0">Project Showcase</h3>
						<p className="text-center m-0 grey">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Excepturi eius commodi quibusdam assumenda amet illo.
						</p>
					</div>
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-8">
								<div className="video-responsive">
									<iframe
										style={{ borderRadius: "10px" }}
										width="853"
										height="480"
										autoplay
										src={`https://www.youtube.com/embed/rokGy0huYEA`}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Embedded youtube"
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="video-responsive">
									<iframe
										style={{ borderRadius: "10px" }}
										width="853"
										height="160"
										src={`https://www.youtube.com/embed/rokGy0huYEA`}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Embedded youtube"
									/>
								</div>{" "}
								<div className="video-responsive">
									<iframe
										style={{ borderRadius: "10px" }}
										width="853"
										height="160"
										src={`https://www.youtube.com/embed/rokGy0huYEA`}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Embedded youtube"
									/>
								</div>{" "}
								<div className="video-responsive">
									<iframe
										style={{ borderRadius: "10px" }}
										width="853"
										height="160"
										src={`https://www.youtube.com/embed/rokGy0huYEA`}
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										title="Embedded youtube"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeGallery;
