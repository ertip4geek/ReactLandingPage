import React from "react";
import NavBar from "./navbar.jsx";
import CarouseL from "./carousel.jsx";
import Footer from "./footer.jsx";
import Cards from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>
			<CarouseL></CarouseL>
			<Cards></Cards>
			<Footer></Footer>
		</div>
	);
};

export default Home;
