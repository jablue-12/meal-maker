import React from 'react';
import { Pagination } from 'react-bootstrap';

export const MealPagination = (props) => {
	const { currentPage, itemsPerPage, totalItems, onPageChange } = props;
	const numPages = Math.ceil(totalItems / itemsPerPage);

	const handleClick = (newPage) => {
		onPageChange(newPage);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		totalItems > itemsPerPage && (
			<Pagination className="justify-content-end">
				<Pagination.First
					onClick={() => handleClick(1)}
					disabled={currentPage === 1}
				/>
				<Pagination.Prev
					onClick={() => handleClick(currentPage - 1)}
					disabled={currentPage === 1}
				>
					{currentPage - 1}
				</Pagination.Prev>
				<Pagination.Item disabled>{currentPage}</Pagination.Item>
				<Pagination.Next
					onClick={() => handleClick(currentPage + 1)}
					disabled={currentPage === numPages}
				>
					{currentPage + 1}
				</Pagination.Next>
				<Pagination.Last
					onClick={() => handleClick(numPages)}
					disabled={currentPage === numPages}
				/>
			</Pagination>
		)
	);
};
