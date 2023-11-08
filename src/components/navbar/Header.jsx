import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded(!expanded);
	};

	return (
		<header>
			<Navbar expanded={expanded} expand="md" bg="dark" data-bs-theme="dark" className="mb-3">
				<Container fluid>
					<Link to="/" className="navbar-brand">Meal Maker</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar}/>
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<Link to="/" className="nav-link" onClick={toggleNavbar}>Home</Link>
							<Link to="/ingredients" className="nav-link" onClick={toggleNavbar}>Ingredients</Link>
							<Link to="/random-meal" className="nav-link" onClick={toggleNavbar}>Random Meal</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
