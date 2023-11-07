import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="mb-3">
				<Container fluid>
					<a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer" className="navbar-brand">Meal Maker</a>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<Link to="/" className="nav-link">Home</Link>
							<Link to="/ingredients" className="nav-link">Ingredients</Link>
							<Link to="/random-meal" className="nav-link">Random Meal</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
