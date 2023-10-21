import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
	return (
		<Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="mb-3">
			<Container fluid>
				<Navbar.Brand href="#home">Meal Maker</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about-us">About Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
