import React from 'react';
import { Card } from 'react-bootstrap';

export const Meal = () => {
	return (
		<Card className="border-dark mb-3">
			<Card.Body>
				<Card.Img src="https://via.placeholder.com/150" alt="placeholder" className="mb-2"/>
				<Card.Title className="fw-bold ">
					Meal Item 1
				</Card.Title>
				<Card.Text className="fst-italic">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro!
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
