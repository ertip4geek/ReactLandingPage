import React from "react";
import { Carousel } from "react-bootstrap";

const CarouseL = () => {
	return (
		<>
			<Carousel variant="dark">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h5>First slide label</h5>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default CarouseL;
