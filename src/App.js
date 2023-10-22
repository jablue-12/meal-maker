import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { IngredientForm } from './components/form/IngredientForm';
import { Header } from './components/navbar/Header';
import { GeneratedMeals } from './components/views/GeneratedMeals';
import './App.css';

function App () {
	const [mealsByIngredients, setMealsByIngredients] = useState([]);
	const generateMeals = (ingredients) => {
		setMealsByIngredients(ingredients);
	};

	return (
		<>
			<Header/>
			<Container>
				<Row>
					<IngredientForm onGenerateMealsClick={generateMeals}/>
				</Row>
				<GeneratedMeals meals={mealsByIngredients}/>
			</Container>
		</>
	);
}

export default App;
