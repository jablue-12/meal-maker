import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { IngredientProvider } from './components/ingredients/IngredientProvider';
import { Header } from './components/navbar/Header';
import { ErrorPage } from './components/views/ErrorPage';
import { HomePage } from './components/views/HomePage';
import { IngredientPage } from './components/views/IngredientPage';
import { RandomMealPage } from './components/views/RandomMealPage';

function App () {
	return (
		<IngredientProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/random-meal" element={<RandomMealPage />} />
					<Route path="/*" element={<ErrorPage />} />
					<Route path="/ingredients" element={<IngredientPage />} />
				</Routes>
			</Router>
		</IngredientProvider>
	);
}

export default App;
