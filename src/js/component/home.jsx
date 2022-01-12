import React from "react";
import NavBar from "./navbar.jsx";
import CarouseL from "./carousel.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<CarouseL></CarouseL>
			<Footer></Footer>
		</div>
	);
};

export default Home;
