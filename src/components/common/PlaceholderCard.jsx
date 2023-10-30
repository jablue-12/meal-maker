import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

export const PlaceholderCard = () => {
	return (
		<Card className="border-dark mb-3 text-center w-100">
			<Card.Body>
				<Card.Img variant="top" src="https://via.placeholder.com/150" />
				<Placeholder as={Card.Title} animation="glow">
					<Placeholder xs={6} />
				</Placeholder>
				<Placeholder as={Card.Text} animation="glow">
					<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
					<Placeholder xs={6} /> <Placeholder xs={8} />
				</Placeholder>
			</Card.Body>
		</Card>
	);
};
