import React from "react";
import "./listing.css";
import img from "../../assets/images/arrow.png";
import imgsvg from "../../assets/images/Artboard 3.svg";

const ListingProperty = () => {
	return (
		<>
			<div className="pt-5"></div>

			<div className="discover_text">
				<h2>Discover Most Suitable Property</h2>
			</div>
			<section id="listingproperty" className="">
				<div className="container">
					<div className="row mt-4" style={{ height: "50vh" }}>
						<img src={imgsvg} alt="image" />
					</div>

					<div className="col-lg-12">
						<div className="container ">
							<div className="row">
								<div className="col-6 ">
									<h3>Advance Information</h3>
								</div>
								<div className="col-lg-6 ">
									<button
										className="btn dropdown-toggle m-3"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Default sorting
									</button>
									<button
										className="btn dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Per Page:12
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="sidebar">
									<div className="top">
										<h4>Property Type</h4>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" defaultChecked />
												<label htmlFor="check">House</label>
											</div>
											<div className="filter-price">
												<h6>3,678</h6>
											</div>
										</div>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" />
												<label htmlFor="check">Single Family</label>
											</div>
											<div className="filter-price">
												<h6>3,100</h6>
											</div>
										</div>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" />
												<label htmlFor="check">Double Family</label>
											</div>
											<div className="filter-price">
												<h6>2500</h6>
											</div>
										</div>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" />
												<label htmlFor="check">Office Villa</label>
											</div>
											<div className="filter-price">
												<h6>2100</h6>
											</div>
										</div>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" />
												<label htmlFor="check">Luxary Home</label>
											</div>
											<div className="filter-price">
												<h6>1900</h6>
											</div>
										</div>
										<div className="filter">
											<div className="cekbox">
												<input type="checkbox" id="check" />
												<label htmlFor="check">Studio</label>
											</div>
											<div className="filter-price">
												<h6>1600</h6>
											</div>
										</div>
									</div>
									<hr />
									<div className="range">
										<h4>Filter By Price</h4>
										<div className="range-filter">
											<p>Submit</p>
											<p>15-1500</p>
										</div>
										<input type="range" />
									</div>
									<hr />
									<h4>Bed/Bath</h4>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" defaultChecked />
											<label htmlFor="check">Single</label>
										</div>
										<div className="filter-price">
											<h6>3,678</h6>
										</div>
									</div>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" />
											<label htmlFor="check">Double</label>
										</div>
										<div className="filter-price">
											<h6>3,178</h6>
										</div>
									</div>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" />
											<label htmlFor="check">Up To 3</label>
										</div>
										<div className="filter-price">
											<h6>2,578</h6>
										</div>
									</div>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" />
											<label htmlFor="check">Up To 5</label>
										</div>
										<div className="filter-price">
											<h6>2,100</h6>
										</div>
									</div>
									<hr />
									<h4>Category</h4>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" defaultChecked />
											<label htmlFor="check">Buying</label>
										</div>
										<div className="filter-price">
											<h6>2,100</h6>
										</div>
									</div>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" />
											<label htmlFor="check">Selling</label>
										</div>
										<div className="filter-price">
											<h6>1900</h6>
										</div>
									</div>
									<div className="filter">
										<div className="cekbox">
											<input type="checkbox" id="check" />
											<label htmlFor="check">Renting</label>
										</div>
										<div className="filter-price">
											<h6>1,700</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="search-box">
									<div className="location-input">
										<span>
											<i className="ri-search-line icon">
												<input
													type="text"
													placeholder="Search,city,landmark?"
												/>
											</i>
										</span>
									</div>

									<button type="submit">Search</button>
								</div>
								<div className="row">
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/image1.webp" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (1).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (2).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (3).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (4).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (5).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (4).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (4).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 p-2">
										<div className="latest-post">
											<div className="latest-post-img">
												<img src="images/property/1 (4).png" alt="" />
											</div>
											<div className="latest-post-price d-flex justify-content-between mt-3">
												<h5 className="mb-0">₹ 22,999</h5>
												<img src="images/home-small-icon/sell.png" alt="rent" />
											</div>
											<div className="latest-post-name">
												<h5 className="m-0">Nainagiri apartment</h5>
											</div>
											<div className="latest-post-location d-flex">
												<p className="m-0">Lashkar, Gwalior</p>
											</div>
											<div className="latest-post-extra d-flex">
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (1).png"
															alt=""
														/>
													</span>{" "}
													5
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (2).png"
															alt=""
														/>
													</span>{" "}
													3
												</p>
												<p className="m-0">
													<span>
														<img
															src="images/home-small-icon/1 (3).png"
															alt=""
														/>
													</span>{" "}
													2500
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="pagination">
								<img src={img} />
								<span className="current">1</span>
								<span className="second">2</span>
								<span className="second">3</span>
								<span className="second">4</span>
								<span className="second">5</span>
								<span>&middot; &middot; &middot;</span>
								<span className="second">20</span>
								<img src={img} className="right-arrow" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ListingProperty;
