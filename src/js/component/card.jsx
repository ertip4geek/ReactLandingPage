import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Cards = () => {
	return (
		<>
			<CardGroup>
				<Card>
					<Card.Img
						variant="top"
						src="https://dummyimage.com/180x100/f5f5f5/0011ff.png"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 1 min ago
						</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://dummyimage.com/180x100/f5f5f5/0011ff.png"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural
							lead-in to additional content.{" "}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 2 mins ago
						</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img
						variant="top"
						src="https://dummyimage.com/180x100/f5f5f5/0011ff.png"
					/>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</Card.Footer>
				</Card>
			</CardGroup>
		</>
	);
};

// // Cards.props = {};
export default Cards;
