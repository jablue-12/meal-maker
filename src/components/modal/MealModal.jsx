import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const MealModal = (props) => {
	const { show, handleClose, recipe } = props;
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{recipe.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{recipe.details}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
