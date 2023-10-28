import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

export const MealDetailAccordion = (props) => {
	const { instructions, ingredients } = props;
	return (
		<Accordion defaultActiveKey={['0']} alwaysOpen>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Instructions</Accordion.Header>
				<Accordion.Body>
					<pre style={{ whiteSpace: 'pre-wrap' }} className=" overflow-hidden">
						{instructions}
					</pre>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Ingredients</Accordion.Header>
				<Accordion.Body>
					{ ingredients.length > 0
						? (
							<div className="text-center ">
								<Row className="fw-bolder">
									<Col>
										Ingredients
									</Col>
									<Col>
										Measurements
									</Col>
								</Row>
								{
									ingredients.map((ingredient, index) => (
										<Row key={`ingredient-measurement-${ingredient}-${index}`} className=" nav-underline ">
											<Col>
												{ingredient.ingredientName}
											</Col>
											<Col>
												{ingredient.ingredientMeasure}
											</Col>
										</Row>
									))
								}
							</div>
						)
						: null
					}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
