import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/navbar/Header';
import { AboutUsPage } from './components/views/AboutUsPage';
import { ErrorPage } from './components/views/ErrorPage';
import { HomePage } from './components/views/HomePage';

function App () {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				{/* Use the catch-all route to handle errors */}
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
