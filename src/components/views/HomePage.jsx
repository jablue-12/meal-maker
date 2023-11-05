import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { IngredientContext } from '../ingredients/IngredientProvider';
import { DisplayMeals } from '../meals/DisplayMeals';
import { MealForm } from '../meals/MealForm';

export const HomePage = () => {
	const { setGlobalIngredients } = useContext(IngredientContext);
	const [mealList, setMealList] = useState(null);
	const [type, setType] = useState(null);

	const generateMealsClick = (meals, optionType) => {
		setMealList(meals);
		setType(optionType);
	};

	useEffect(() => {
		// Reset global ingredients since we don't want to highlight the ingredients from this page
		setGlobalIngredients([]);
	}, []);

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
