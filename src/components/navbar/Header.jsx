import React, { useState } from 'react';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TutorialCanvas } from '../common/TutorialCanvas';

export const Header = () => {
	const [expanded, setExpanded] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const toggleNavbar = () => {
		setExpanded(!expanded);
	};

	return (
		<header>
			<Navbar expanded={expanded} expand="md" bg="dark" data-bs-theme="dark" className="mb-3">
				<Container fluid>
					<NavbarBrand onClick={handleShow} style={{ cursor: 'pointer' }}>Meal Maker</NavbarBrand>
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
			<TutorialCanvas show={show} handleClose={handleClose}/>
		</header>
	);
};
