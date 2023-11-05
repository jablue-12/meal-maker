import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { get } from '../../api';
import { MEAL_DETAIL_ENDPOINT } from '../../constants/endpoints';
import { CATEGORY_OPTION, INGREDIENT_OPTION } from '../../constants/options';
import { StickyButton } from '../common/StickyButton';
import { GeneratedMeals } from '../meals/GeneratedMeals';
import { MealPagination } from '../meals/MealPagination';

export const DisplayMeals = (props) => {
	const { meals, optionType } = props;
	const [generatedMeals, setGeneratedMeals] = useState([]);

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	// Function to get a slice of meals for the current page
	const getCurrentPageMeals = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return generatedMeals.slice(startIndex, endIndex);
	};

	// Update the current page when the user clicks on a page number
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

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
			.catch((error) => console.error(`${error}`))
			.finally(() => {
				setCurrentPage(1);
			});
	};

	useEffect(() => {
		if (meals) {
			if (optionType === INGREDIENT_OPTION || CATEGORY_OPTION) {
				// Update the list to contain the detailed meal info
				getDetailedMeals(meals);
			} else {
				// optionType is NAME_OPTION which already consists the detailed meals
				setGeneratedMeals((prevMeals) => [...prevMeals, ...meals]);
				setCurrentPage(1);
			}
		}
	}, [meals, optionType]);

	return (
		<>
			{meals
				? (
					<>
						{ meals.length > 0
							? (
								<>
									<GeneratedMeals meals={getCurrentPageMeals()}/>
									<Row>
										<MealPagination
											currentPage={currentPage}
											itemsPerPage={itemsPerPage}
											totalItems={generatedMeals.length}
											onPageChange={handlePageChange}/>
									</Row>
									<StickyButton/>
								</>
							)
							: 'No results found...'}
					</>
				)
				: null}
		</>
	);
};
