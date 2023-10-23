import axios from 'axios';

// Base URL for the API which is found here: https://www.themealdb.com/api.php
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Function to make a generic GET request
export const get = async (endpoint) => {
	const result = {
		data: null,
		loading: true,
		error: null
	};

	try {
		const response = await axios.get(BASE_URL + endpoint);
		result.data = response.data;
	} catch (error) {
		console.error('API request error:', error);
		result.error = error;
	} finally {
		result.loading = false;
	}

	return result;
};
