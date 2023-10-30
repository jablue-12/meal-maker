import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { MealModal } from './MealModal';

export const MealCard = (props) => {
	const { meal } = props;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card
				className="border-dark mb-3 text-center"
				style={{ cursor: 'pointer' }}
				onClick={() => handleShow()}>
				<Card.Body>
					<Card.Img
						variant="top"
						src={meal.strMealThumb ? meal.strMealThumb : 'https://via.placeholder.com/150' }
						alt="placeholder"
						className="mb-2 object-fit-fill"/>
					<Card.Title className="fw-bolder">
						{meal.strMeal}
					</Card.Title>
					{/* <Card.Text className="fst-italic text-truncate">
						Explore Details
					</Card.Text> */}
				</Card.Body>
			</Card>
			<MealModal show={show} handleClose={handleClose} recipe={meal}/>
		</>
	);
};
