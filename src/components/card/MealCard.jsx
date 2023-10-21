import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { MealModal } from '../modal/MealModal';

export const MealCard = () => {
	const [show, setShow] = useState(false);
	const [meal, setMeal] = useState({ name: '', details: '' });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const sampleMeal = {
			name: 'Meal 1',
			details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officiis aspernatur atque consequuntur consequatur illum eaque modi. Quos, accusantium aspernatur.'
		};

		setMeal(sampleMeal);
	}, []);

	return (
		<>
			<Card
				className="border-dark mb-3"
				style={{ cursor: 'pointer' }}
				onClick={() => handleShow()}>
				<Card.Body>
					<Card.Img
						src="https://via.placeholder.com/150"
						alt="placeholder"
						className="mb-2"/>
					<Card.Title className="fw-bold ">
						{meal.name}
					</Card.Title>
					<Card.Text className="fst-italic">
						{meal.details}
					</Card.Text>
				</Card.Body>
			</Card>
			<MealModal show={show} handleClose={handleClose} recipe={ meal}/>
		</>
	);
};
