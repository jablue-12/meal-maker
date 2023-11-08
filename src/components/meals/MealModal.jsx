import React from 'react';
import { Modal } from 'react-bootstrap';
import { YoutubeButton } from '../common/YoutubeButton';
import { MealDetailAccordion } from './MealDetailAccordion';

export const MealModal = (props) => {
	const { show, handleClose, recipe } = props;

	return (
		<Modal show={show} onHide={handleClose} centered fullscreen>
			<Modal.Header closeButton>
				<Modal.Title>{recipe.strMeal}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<MealDetailAccordion recipe={recipe}/>
			</Modal.Body>
			<Modal.Footer>
				{ recipe.strYoutube &&
				<YoutubeButton link={recipe.strYoutube}/>
				}
			</Modal.Footer>
		</Modal>
	);
};
