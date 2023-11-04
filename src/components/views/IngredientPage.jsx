import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { INGREDIENT_OPTION } from '../../constants/options';
import { IngredientForm } from '../ingredients/IngredientForm';
import { DisplayMeals } from '../meals/DisplayMeals';

export const IngredientPage = () => {
	const [mealList, setMealList] = useState(null);
	const generateMealsClick = (meals) => {
		setMealList(meals);
	};

	return (
		<Container>
			<Row>
				<IngredientForm onGenerateMealsClick={generateMealsClick}/>
			</Row>
			<DisplayMeals meals={mealList} optionType={INGREDIENT_OPTION}/>
		</Container>
	);
};
