import React, { useContext, useState } from 'react';
import { Accordion, Card, Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { get } from '../../api';
import { INGREDIENT_ENDPOINT } from '../../constants/endpoints';
import { INGREDIENT_OPTION } from '../../constants/options';
import { IngredientCard } from './IngredientCard';
import { IngredientContext } from './IngredientProvider';

export const IngredientForm = (props) => {
	const { onGenerateMealsClick } = props;
	const { setGlobalIngredients } = useContext(IngredientContext);

	const [formValue, setFormValue] = useState('');
	const [validationError, setValidationError] = useState(null);
	const [ingredientList, setIngredientList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [activeKey, setActiveKey] = useState('0');

	const handleAccordion = () => {
		if (activeKey) {
			setActiveKey(null);
		} else {
			setActiveKey('0');
		}
	};

	const addIngredient = (newIngredient) => {
		if (newIngredient.trim() === '') {
			return;
		}

		if (ingredientList.includes(newIngredient.trim())) {
			// Handle duplicate ingredient
			setValidationError(`${newIngredient} has already been added.`);
			return;
		}

		setIngredientList([...ingredientList, newIngredient.trim()]);
		setFormValue('');
		setValidationError(null);
	};

	const deleteIngredient = (ingredientName) => {
		console.log(`Deleting ingredient "${ingredientName}" from the list`);
		const updatedIngredientList = ingredientList.filter(
			(item) => item !== ingredientName
		);
		setIngredientList(updatedIngredientList);
	};

	const containOnlySpaces = () => {
		return /^\s*$/.test(formValue);
	};

	const removeDuplicateMeals = (meals) => {
		const uniqueIds = new Set();

		// Filter out duplicates based on the 'idMeal' property
		const filteredMeals = meals.filter((meal) => {
			if (!uniqueIds.has(meal.idMeal)) {
				uniqueIds.add(meal.idMeal);
				return true;
			}
			return false;
		});

		return filteredMeals;
	};

	const generateMeals = () => {
		setIsLoading(true);
		const mealPromises = ingredientList.map((ingredient) => {
			return get(`${INGREDIENT_ENDPOINT}${ingredient}`);
		});

		// Use Promise.all to wait for all the requests to complete
		Promise.all(mealPromises)
			.then((responses) => {
				const meals = responses
					.filter((apiResponse) => apiResponse.data.meals)
					.map((apiResponse) => apiResponse.data.meals)
					.flat();

				// Pass unqiue data to parent
				const uniqueMeals = removeDuplicateMeals(meals);
				onGenerateMealsClick(uniqueMeals, INGREDIENT_OPTION);
			})
			.catch((error) => console.error(`IngredientForm: ${error}`))
			.finally(() => {
				setGlobalIngredients(ingredientList);
				setIsLoading(false);
				setActiveKey(null);
				setIngredientList([]);
				setFormValue('');
				setValidationError(null);
			});
	};

	return (
		<Accordion activeKey={activeKey} className="mb-3">
			<Card className="border-black border-1">
				<Accordion.Item eventKey="0">
					<Accordion.Header
						onClick={() => {
							handleAccordion();
						}}
					>
						Toggle to add ingredients
					</Accordion.Header>
					<Accordion.Body>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								if (!containOnlySpaces()) {
									addIngredient(formValue);
								}
							}}
						>
							<Row className="mb-3">
								<Form.Group as={Col}>
									<Form.Control
										type="name"
										placeholder="Enter your ingredient"
										value={formValue}
										onChange={(e) => setFormValue(e.target.value)}
										required
										isInvalid={validationError !== null}
									/>
									<Form.Control.Feedback type="invalid">
										{validationError}
									</Form.Control.Feedback>
								</Form.Group>
								<Col className="flex-grow-0">
									<Button
										variant="primary"
										disabled={formValue.length === 0 || containOnlySpaces()}
										onClick={() => addIngredient(formValue)}
									>
										<Plus title="Add Ingredient" size={28}/>
									</Button>
								</Col>
							</Row>
							<Row className="justify-content-center">
								{ingredientList.map((addedIngredient, index) => (
									<Col key={index} xs="auto">
										<IngredientCard
											ingredientName={addedIngredient}
											onButtonClick={deleteIngredient}
										/>
									</Col>
								))}
							</Row>
							<Row className="p-2">
								<Button
									variant="info"
									disabled={ingredientList.length === 0}
									onClick={() => {
										generateMeals();
									}}
								>
									{isLoading
										? (
											<Spinner animation="border" role="status">
												<span className="visually-hidden">Loading...</span>
											</Spinner>
										)
										: 'Generate meals!'}
								</Button>
							</Row>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Card>
		</Accordion>
	);
};
