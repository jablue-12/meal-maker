import React from 'react';
import { Container, Card, Col, Row, CloseButton } from 'react-bootstrap';

export const IngredientCard = () => {
	return (
		<Card className="bg-secondary border-1 text-white mb-2">
			<Container>
				<Row className="p-1">
					<Col>
						LIngre3dient
					</Col>
					<Col className="flex-grow-0">
						<CloseButton/>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};
