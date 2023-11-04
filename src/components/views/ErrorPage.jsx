import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const ErrorPage = () => {
	return (
		<>
			<Container>
				<Row className="d-flex align-items-center justify-content-center">
					<div className="text-center">
						<h1>Oops!</h1>
						<p><i>Sorry, Page Not Found</i></p>
					</div>
				</Row>
			</Container>
		</>
	);
};
