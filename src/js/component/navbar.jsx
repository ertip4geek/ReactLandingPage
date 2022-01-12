import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
	return (
		<>
			<Container>
				<Navbar bg="dark" variant="dark">
					<Nav className="me-auto" activeKey="/home">
						<Nav.Item>
							<Nav.Link href="startbootstrap">
								Start Bootstrap
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<Nav className="justify-content-end">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar>
			</Container>
		</>
	);
};

export default NavBar;
