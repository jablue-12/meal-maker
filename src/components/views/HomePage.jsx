import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IngredientContext } from '../ingredients/IngredientProvider';
import { DisplayMeals } from '../meals/DisplayMeals';
import { MealForm } from '../meals/MealForm';

export const HomePage = () => {
	const { setGlobalIngredients } = useContext(IngredientContext);
	const [mealList, setMealList] = useState(null);
	const [type, setType] = useState(null);
	const [formValue, setFormValue] = useState(null);

	const generateMealsClick = (meals, optionType, formValue) => {
		setMealList(meals);
		setType(optionType);
		setFormValue(formValue);
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
				{formValue && <Row className="mb-3">
					<Col>
						<h5>Results for {formValue}</h5>
					</Col>
				</Row>}
				<DisplayMeals meals={mealList} optionType={type}/>
			</Container>
		</>
	);
};
