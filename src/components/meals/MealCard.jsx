import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { get } from '../../api/api';
import { PlaceholderCard } from '../common/PlaceholderCard';
import { MealModal } from './MealModal';

const endpoint = 'lookup.php?i=';

export const MealCard = (props) => {
	const { meal } = props;
	const [show, setShow] = useState(false);

	const [response, setResponse] = useState({
		data: null,
		loading: true,
		error: null
	});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (meal) {
			get((`${endpoint}${meal.idMeal}`))
				.then((apiResponse) => {
					setResponse(apiResponse);
				});
		}
	}, []);

	return (
		<>
			{response.loading ? <PlaceholderCard/> : null }
			{response.error ? <p>Error: {response.error.message}</p> : null}
			{response.data
				// eslint-disable-next-line multiline-ternary
				? (
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
						<MealModal show={show} handleClose={handleClose} recipe={response.data.meals[0]}/>
					</>
				)
				: null}
		</>
	);
};
