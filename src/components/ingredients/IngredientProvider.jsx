import React, { createContext, useState } from 'react';

// Create a context
const IngredientContext = createContext();

const IngredientProvider = ({ children }) => {
	const [globalIngredients, setGlobalIngredients] = useState([]);
	return (
		<IngredientContext.Provider value={{ globalIngredients, setGlobalIngredients }}>
			{children}
		</IngredientContext.Provider>
	);
};

export { IngredientProvider, IngredientContext };
