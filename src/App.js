import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MealCard } from './components/card/MealCard';
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
						<MealCard/>
					</Col>
					<Col>
						<MealCard/>
					</Col>
					<Col>
						<MealCard/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
