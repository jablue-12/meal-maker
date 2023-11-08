import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Filter, Search } from 'react-bootstrap-icons';

export const TestForm = () => {
	return (
		<Form as={Row}>
			<Col>
				<Form.Control type="email" placeholder="Enter emailasdsad" className=""/>
			</Col>
			<Col className="flex-grow-0 mx-1 px-0">
				<Button><Filter title="Filter by" size={24}/></Button>
			</Col>
			<Col className="flex-grow-0" style={{ paddingLeft: 0 }}>
				<Button variant="info"><Search title="Filter by" size={24}/></Button>
			</Col>
		</Form>
	);
};
