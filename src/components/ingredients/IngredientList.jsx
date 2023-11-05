import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { IngredientContext } from './IngredientProvider';

export const IngredientList = () => {
	const { globalIngredients } = useContext(IngredientContext);

	return (
		<>
			{globalIngredients && globalIngredients.length > 0
				? (
					<>
						<h5>Your ingredients:</h5>
						<ListGroup className="mb-3 overflow-x-auto" horizontal>
							{globalIngredients.map((ingredientName, index) => (
								<ListGroup.Item
									key={`item-${ingredientName}-${index}`}
									variant="danger">
									{ingredientName}
								</ListGroup.Item>
							))}
						</ListGroup>
					</>
				)
				: null}
		</>
	);
};
