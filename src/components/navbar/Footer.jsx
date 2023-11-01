import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
	return (
		<footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
			<Container fluid className="text-center bg-dark text-bg-dark">
				<Row >
					<Col>
						&copy; Meal Maker
						<br/>
						All rights reserved.
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
