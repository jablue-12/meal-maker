import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const ErrorPage = () => {
	return (
		<>
			<Container>
				<Row className="d-flex align-items-center justify-content-center">
					<div className="text-center">
						<h1>Oops!</h1>
						<p>Sorry, an unexpected error has occurred.</p>
						<p>
							<i>Page Not Found</i>
						</p>
					</div>
				</Row>
			</Container>
		</>
	);
};
