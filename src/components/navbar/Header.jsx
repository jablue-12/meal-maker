import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="mb-3">
				<Container fluid>
					<Link to="/" className="navbar-brand">Meal Maker</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav>
							<Link to="/" className="nav-link">Home</Link>
							<Link to="/about-us" className="nav-link">About Us</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
