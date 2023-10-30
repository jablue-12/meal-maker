import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MealDetailAccordion } from './MealDetailAccordion';

export const MealModal = (props) => {
	const { show, handleClose, recipe } = props;
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		if (recipe) {
			const ingredientKeys = Object.keys(recipe).filter(key => key.startsWith('strIngredient'));
			const measureKeys = Object.keys(recipe).filter(key => key.startsWith('strMeasure'));

			const initIngredients = ingredientKeys.map((ingredientKey, index) => {
				const measureKey = measureKeys[index];
				const ingredientName = recipe[ingredientKey];
				const ingredientMeasure = recipe[measureKey];

				// Check if the ingredient name is not an empty string
				if (ingredientName && ingredientName.trim() !== '') {
					return {
						ingredientName,
						ingredientMeasure
					};
				}

				return null;
			});

			setIngredients(initIngredients.filter(ingredient => ingredient !== null));
		}
	}, []);

	return (
		<Modal show={show} onHide={handleClose} centered fullscreen>
			<Modal.Header closeButton>
				<Modal.Title>{recipe.strMeal}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<MealDetailAccordion instructions={recipe.strInstructions} ingredients={ingredients}/>
			</Modal.Body>
			<Modal.Footer>
				{ recipe.strYoutube &&
				<a
					href={recipe.strYoutube}
					target="_blank" rel="noopener noreferrer"
					className="btn btn-secondary">
						Youtube Tutorial
				</a>}
			</Modal.Footer>
		</Modal>
	);
};
