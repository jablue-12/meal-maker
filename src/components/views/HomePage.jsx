import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { DisplayMeals } from '../meals/DisplayMeals';
import { MealForm } from '../meals/MealForm';

export const HomePage = () => {
	const [mealList, setMealList] = useState(null);
	const [type, setType] = useState(null);

	const generateMealsClick = (meals, optionType) => {
		setMealList(meals);
		setType(optionType);
	};

	return (
		<>
			<Container>
				<Row>
					<MealForm onGenerateMealsClick={generateMealsClick} />
				</Row>
				<DisplayMeals meals={mealList} optionType={type}/>
			</Container>
		</>
	);
};
