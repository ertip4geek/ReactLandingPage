import React from "react";
import Card from "react-bootstrap/Card";

const CardLanding = (props) => {
	return (
		<Card>
			<Card.Img variant="top" src={props.thumbnail} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.cardcontent}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">{props.date}</small>
			</Card.Footer>
		</Card>
	);
};

// // Cards.props = {};
export default CardLanding;
