import React from "react";
import "./pd.css";
import imgsvg from "../../assets/images/Artboard 3.svg";
const PdImage = () => {
	return (
		<>
			<div className=" property ">
				<h3 className="mb-1">3BHK Apartments for Rent</h3>
				<h4 className="mb-1">Harrison Group in Jaipur</h4>
			</div>
			<section id="image">
				<div className="container">
					<div className="row mt-6">
						<div className="title" style={{ height: "40vh" }}>
							<img src={imgsvg} alt="" />
						</div>
					</div>
					<div className="col-lg-12">
						<div className="row">
							<div className="pd-image">
								<img src="images/pd.png" alt="product image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PdImage;
