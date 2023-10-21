import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Meal } from './components/card/MealCard';
import { IngredientForm } from './components/form/IngredientForm';
import { Header } from './components/navbar/Header';
import './App.css';

function App () {
	return (
		<>
			<Header/>
			<Container>
				<Row>
					<IngredientForm/>
				</Row>
				<Row xs={1} sm={2} md={2} lg={3}>
					<Col>
						<Meal/>
					</Col>
					<Col>
						<Meal/>
					</Col>
					<Col>
						<Meal/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
