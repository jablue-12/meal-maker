import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { IngredientContext } from '../ingredients/IngredientProvider';

export const MealDetailAccordion = (props) => {
	const { recipe } = props;
	const { globalIngredients } = useContext(IngredientContext);

	const [ingredients, setIngredients] = useState([]);

	const providedIngredient = (ingredientName) => {
		if (globalIngredients) {
			return globalIngredients.some((globalIngredient) => globalIngredient.toLowerCase().trim() === ingredientName.toLowerCase().trim());
		}
		return false;
	};

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
	}, [recipe]);

	return (
		<Accordion defaultActiveKey={['0']} alwaysOpen>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Instructions</Accordion.Header>
				<Accordion.Body>
					<pre style={{ whiteSpace: 'pre-wrap' }} className=" overflow-hidden">
						{recipe.strInstructions}
					</pre>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Ingredients</Accordion.Header>
				<Accordion.Body>
					{ ingredients.length > 0
						? (
							<div className="text-center ">
								<Row className="fw-bolder">
									<Col>
										Ingredients
									</Col>
									<Col>
										Measurements
									</Col>
								</Row>
								{
									ingredients.map((ingredient, index) => (
										<Row key={`ingredient-measurement-${ingredient}-${index}`} className={providedIngredient(ingredient.ingredientName) ? 'bg-warning' : null }>
											<Col>
												{ingredient.ingredientName}
											</Col>
											<Col>
												{ingredient.ingredientMeasure}
											</Col>
										</Row>
									))
								}
							</div>
						)
						: null
					}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
