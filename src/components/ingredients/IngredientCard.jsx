import React from 'react';
import { Container, Card, Col, Row, CloseButton } from 'react-bootstrap';

// TODO: Fix IngredientCard styling with the X button being far away from the name
export const IngredientCard = (props) => {
	const { onButtonClick, ingredientName } = props;
	const deleteIngredient = () => {
		onButtonClick(`${ingredientName}`);
	};

	return (
		<Card className="bg-secondary border-1 text-white mb-2">
			<Container>
				<Row className="p-1">
					<Col>
						{ingredientName}
					</Col>
					<Col xs="auto">
						<CloseButton onClick={deleteIngredient}/>
					</Col>
				</Row>
			</Container>
		</Card>
	);
};
