import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MealCard } from './MealCard';

export const GeneratedMeals = (props) => {
	const { meals } = props;

	return (
		<>
			<Row xs={1} sm={2} md={2} lg={3}>
				{
					meals.map((meal, index) => (
						<Col key={`${meal.idMeal}-${index}`} className="d-flex">
							<MealCard meal={meal}/>
						</Col>
					))
				}
			</Row>
		</>
	);
};
