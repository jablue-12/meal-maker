import React from 'react';
import { Accordion, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { IngredientCard } from '../card/IngredientCard';

export const IngredientForm = () => {
	return (
		<Accordion defaultActiveKey="0" className="mb-3" >
			<Card className="border-black border-1">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Toggle to add ingredients</Accordion.Header>
					<Accordion.Body>
						<Form>
							<Row className="mb-3">
								<Col>
									<Form.Control type="name" placeholder="Enter your ingredient"/>
								</Col>
								<Col className="flex-grow-0">
									<Button variant="primary">
										Add
									</Button>
								</Col>
							</Row>
							<Row xs={1} md={2} lg="auto" className="justify-content-center mb-3">
								<Col>
									<IngredientCard/>
								</Col>
								<Col>
									<IngredientCard/>
								</Col>
								<Col>
									<IngredientCard/>
								</Col>
								<Col>
									<IngredientCard/>
								</Col>
							</Row>
							<Row className="p-2">
								<Button variant="info" type="submit">
									Generate meals!
								</Button>
							</Row>
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Card>
		</Accordion>
	);
};
