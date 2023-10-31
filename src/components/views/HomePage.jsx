import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { get } from '../../api';
import { MEAL_DETAIL_ENDPOINT } from '../../constants/endpoints';
import { CATEGORY_OPTION, INGREDIENT_OPTION } from '../../constants/options';
import { GeneratedMeals } from '../meals/GeneratedMeals';
import { MealForm } from '../meals/MealForm';

export const HomePage = () => {
	const [generatedMeals, setGeneratedMeals] = useState([]);
	const [hasGenerateMeals, setHasGenerateMeals] = useState(false);

	const getDetailedMeals = (mealList) => {
		const mealPromises = mealList.map((meal) => {
			// Note that the response.data will consist of a list of one detailed meal due to the structure of the public API
			return get(`${MEAL_DETAIL_ENDPOINT}${meal.idMeal}`);
		});

		// Use Promise.all to wait for all the requests to complete
		Promise.all(mealPromises)
			.then((responses) => {
				setGeneratedMeals([]);
				const detailedMeals = responses
					.filter((apiResponse) => apiResponse.data.meals[0])
					.map((apiResponse) => apiResponse.data.meals[0]);

				setGeneratedMeals((prevMeals) => [...prevMeals, ...detailedMeals]);
			})
			.finally(() => setHasGenerateMeals(true));
	};

	const generateMealsClick = (mealList, OPTION_TYPE) => {
		if (OPTION_TYPE === INGREDIENT_OPTION || CATEGORY_OPTION) {
			// Update the list to contain the detailed meal info
			getDetailedMeals(mealList);
		} else {
			// OPTION_TYPE is NAME_OPTION which already consists the detailed meals
			setGeneratedMeals((prevMeals) => [...prevMeals, ...mealList]);
			setHasGenerateMeals(true);
		}
	};

	return (
		<>
			<Container>
				<Row>
					<MealForm onGenerateMealsClick={generateMealsClick} />
				</Row>
				{ hasGenerateMeals && <GeneratedMeals meals={generatedMeals}/>}
			</Container>
		</>
	);
};
