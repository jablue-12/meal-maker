import React, { useState } from 'react';
import { Accordion, Card, Form, Row, Col, Button, Dropdown, InputGroup, Spinner } from 'react-bootstrap';
import { Filter } from 'react-bootstrap-icons';
import { get } from '../../api';
import { INGREDIENT_ENDPOINT, NAME_ENDPOINT, CATEGORY_ENDPOINT } from '../../constants/endpoints';
import { INGREDIENT_OPTION, NAME_OPTION, CATEGORY_OPTION } from '../../constants/options';

export const MealForm = (props) => {
	const { onGenerateMealsClick } = props;

	const options = [
		INGREDIENT_OPTION,
		NAME_OPTION,
		CATEGORY_OPTION
	];

	const [formValue, setFormValue] = useState('');
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [activeKey, setActiveKey] = useState('0');
	const [isGenerateMealBtnClicked, setIsGenerateMealBtnClicked] = useState(false);

	const [response, setResponse] = useState({
		data: null,
		loading: true,
		error: null
	});

	const handleAccordion = () => {
		if (activeKey) {
			setActiveKey(null);
		} else {
			setActiveKey('0');
		}
	};

	const containOnlySpaces = () => {
		return /^\s*$/.test(formValue);
	};

	const retrievePlaceholder = () => {
		let placeholder;
		switch (selectedOption) {
		case INGREDIENT_OPTION:
			placeholder = 'e.g. basil';
			break;
		case NAME_OPTION:
			placeholder = 'e.g. spaghetti';
			break;
		case CATEGORY_OPTION:
			placeholder = 'e.g. beef';
			break;
		default: // Ingredient by default
			placeholder = 'e.g. basil';
		}
		return placeholder;
	};

	const generateMeals = () => {
		// Send to parent component
		setIsGenerateMealBtnClicked(true);

		let endpoint;
		switch (selectedOption) {
		case INGREDIENT_OPTION:
			endpoint = INGREDIENT_ENDPOINT;
			break;
		case NAME_OPTION:
			endpoint = NAME_ENDPOINT;
			break;
		case CATEGORY_OPTION:
			endpoint = CATEGORY_ENDPOINT;
			break;
		default: // Ingredient by default
			endpoint = INGREDIENT_ENDPOINT;
		}

		// API Call
		get(`${endpoint}${formValue}`).then((apiResponse) => {
			setResponse(apiResponse);

			if (apiResponse.error) {
				onGenerateMealsClick([], selectedOption, null);
			} else {
				if (apiResponse.data) {
					onGenerateMealsClick(apiResponse.data.meals ? apiResponse.data.meals : [], selectedOption, formValue);
				} else {
					onGenerateMealsClick([], selectedOption, formValue);
				}
			}
		}).finally(() => {
			// Reset states
			setIsGenerateMealBtnClicked(false);
			setActiveKey(null);
			setFormValue('');
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
						Toggle to generate meals
					</Accordion.Header>
					<Accordion.Body>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								if (!containOnlySpaces()) {
									generateMeals();
								}
							}}
						>
							<Row className="mb-3">
								<Col>
									<InputGroup>
										<InputGroup.Text id="basic-addon1">{selectedOption}</InputGroup.Text>
										<Form.Control
											type="name"
											placeholder={retrievePlaceholder()}
											value={formValue}
											onChange={(e) => setFormValue(e.target.value)}
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please provide a valid {selectedOption}
										</Form.Control.Feedback>
									</InputGroup>
								</Col>
								<Col className="flex-grow-0">
									<Dropdown>
										<Dropdown.Toggle variant="primary">
											<Filter title="Filter By" size={28}/>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item onClick={() => setSelectedOption(options[0])} active={selectedOption === INGREDIENT_OPTION}>Ingredient</Dropdown.Item>
											<Dropdown.Item onClick={() => setSelectedOption(options[1])} active={selectedOption === NAME_OPTION}>Name</Dropdown.Item>
											<Dropdown.Item onClick={() => setSelectedOption(options[2])} active={selectedOption === CATEGORY_OPTION}>Food Category</Dropdown.Item>
										</Dropdown.Menu>

									</Dropdown>
								</Col>
							</Row>
							<Row className="p-2">
								<Button
									variant="info"
									disabled={formValue.length === 0 || containOnlySpaces()}
									onClick={() => {
										generateMeals();
									}}
								>
									{isGenerateMealBtnClicked && response.loading
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
