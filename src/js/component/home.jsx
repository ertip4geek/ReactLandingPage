import React from "react";
import NavBar from "./navbar.jsx";
import CarouseL from "./carousel.jsx";
import FooteR from "./footer.jsx";
import CardLanding from "./cardLanding.jsx";
import { CardGroup, Container } from "react-bootstrap";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<CarouseL />
			<Container>
				<CardGroup>
					<CardLanding
						thumbnail={"https://picsum.photos/id/240/300/200"}
						title="Post 1"
						date={new Date().toDateString()}
						cardcontent="Impedit sit sunt quaerat, odit,
						tenetur error, harum nesciunt ipsum debitis quas aliquid"
					/>
					<CardLanding
						thumbnail={"https://picsum.photos/id/1005/300/200"}
						title="Post 2"
						date={new Date(2021, 11, 21).toDateString()}
						cardcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
					/>
					<CardLanding
						thumbnail={"https://picsum.photos/300/200"}
						title="Post 3"
						date={new Date(2021, 9, 4).toDateString()}
						cardcontent="This is a wider card with supporting text below as a natural
						lead-in to additional content. This content is a little bit
						longer."
					/>
				</CardGroup>
			</Container>
			<FooteR />
		</div>
	);
};

export default Home;
