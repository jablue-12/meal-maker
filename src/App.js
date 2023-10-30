import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { IngredientForm } from './components/ingredients/IngredientForm';
import { Header } from './components/navbar/Header';
import { GeneratedMeals } from './components/views/GeneratedMeals';
import './App.css';

function App () {
	const [mealsByIngredients, setMealsByIngredients] = useState([]);
	const [hasGenerateMeals, setHasGenerateMeals] = useState(false);

	const generateMeals = (ingredients) => {
		setMealsByIngredients(ingredients);
		setHasGenerateMeals(true);
	};

	return (
		<>
			<Header/>
			<Container>
				<Row>
					<IngredientForm onGenerateMealsClick={generateMeals}/>
				</Row>
				{ hasGenerateMeals && <GeneratedMeals meals={mealsByIngredients}/>}
			</Container>
		</>
	);
}

export default App;
