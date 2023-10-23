import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MealCard } from '../card/MealCard';

export const GeneratedMeals = (props) => {
	const { meals } = props;

	return (
		<>
			{meals.length > 0
				? (
					<Row xs={1} sm={2} md={2} lg={3}>
						{
							meals.map((meal, index) => (
								<Col key={meal.idMeal + index} className="d-flex">
									<MealCard meal={meal}/>
								</Col>
							))
						}
					</Row>
				)
				: <p>No results found</p> }
		</>
	);
};
