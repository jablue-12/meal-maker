import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/navbar/Header';
import { AboutUsPage } from './components/views/AboutUsPage';
import { ErrorPage } from './components/views/ErrorPage';
import { HomePage } from './components/views/HomePage';
import { RandomMealPage } from './components/views/RandomMealPage';

function App () {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/random-meal" element={<RandomMealPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
