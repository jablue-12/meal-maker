import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { get } from '../../api';
import { RANDOM_MEAL_ENDPOINT } from '../../constants/endpoints';
import { MealCard } from '../meals/MealCard';
import { MealDetailAccordion } from '../meals/MealDetailAccordion';

export const RandomMealPage = () => {
	const [response, setResponse] = useState({
		data: null,
		loading: true,
		error: null
	});

	const fetchRandomMeal = () => {
		get(RANDOM_MEAL_ENDPOINT).then((apiResponse) => {
			setResponse(apiResponse);
		});
	};

	useEffect(() => {
		fetchRandomMeal();
	}, []);

	return (
		<Container>
			<Row className="justify-content-center" xs={1} sm={2} md={2} lg={2}>
				{response.loading
					? (
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					)
					: null}
				{response.data && response.data.meals
					? (
						<>
							<Col className="mb-3">
								<Row>
									<Col>
										<MealCard meal={response.data.meals[0]}/>
									</Col>
								</Row>
								<Row>
									<Col className="d-grid gap-2">
										<Button onClick={() => fetchRandomMeal()}>Still undecided? Click me!</Button>
									</Col>
								</Row>
							</Col>
							<Col className="mb-1">
								<MealDetailAccordion recipe={response.data.meals[0]}/>
							</Col>
						</>
					)
					: null}
			</Row>
		</Container>
	);
};