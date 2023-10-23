import React, { useEffect, useState } from 'react';
import { Accordion, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { get } from '../../api/api';
import { IngredientCard } from '../card/IngredientCard';

const ingredientEndpoint = 'filter.php?i=';

export const IngredientForm = (props) => {
	const { onGenerateMealsClick } = props;
	const [ingredient, setIngredient] = useState('');
	const [ingredientList, setIngredientList] = useState([]);
	const [mealsByIngredients, setMealsByIngredients] = useState([]);
	const [activeKey, setActiveKey] = useState('0');

	const [response, setResponse] = useState({
		data: null,
		loading: true,
		error: null
	});

	const addIngredient = async (newIngredient) => {
		if (newIngredient) {
			get(`${ingredientEndpoint}${newIngredient}`).then((apiResponse) => {
				setResponse(apiResponse);
			});

			setIngredientList([...ingredientList, newIngredient]);
			setIngredient('');
		}
	};

	const handleAccordion = () => {
		if (activeKey) {
			setActiveKey(null);
		} else {
			setActiveKey('0');
		}
	};

	const generateMeals = () => {
		// Send to parent component
		onGenerateMealsClick(mealsByIngredients);

		// Reset state
		setActiveKey(null);
		setIngredientList([]);
		setMealsByIngredients([]);
	};

	const deleteIngredient = (ingredientName) => {
		console.log(`Deleting ingredient "${ingredientName}" from the list`);
		const updatedIngredientList = ingredientList.filter(
			(item) => item !== ingredientName
		);
		setIngredientList(updatedIngredientList);
	};

	useEffect(() => {
		if (response.data && response.data.meals) {
			setMealsByIngredients([...mealsByIngredients, ...response.data.meals]);
		}
	}, [response.data]);

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
								addIngredient(ingredient);
							}}
						>
							<Row className="mb-3">
								<Col>
									<Form.Control
										type="name"
										placeholder="Enter your ingredient"
										value={ingredient}
										onChange={(e) => setIngredient(e.target.value)}
									/>
								</Col>
								<Col className="flex-grow-0">
									<Button
										variant="primary"
										disabled={ingredient.length === 0}
										onClick={() => addIngredient(ingredient)}
									>
										Add
									</Button>
								</Col>
							</Row>
							<Row xs={1} md={2} lg="auto" className="justify-content-center">
								{ingredientList.map((addedIngredient, index) => (
									<Col key={index}>
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
									Generate meals!
								</Button>
							</Row>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Card>
		</Accordion>
	);
};
