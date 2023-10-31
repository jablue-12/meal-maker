import React from 'react';
import { Pagination } from 'react-bootstrap';

export const MealPagination = (props) => {
	const { currentPage, itemsPerPage, totalItems, onPageChange } = props;

	const numPages = Math.ceil(totalItems / itemsPerPage);
	return (
		<>
			{totalItems > itemsPerPage
				? (
					<Pagination className="justify-content-end">
						<Pagination.First
							onClick={() => { onPageChange(1); }}
							disabled={currentPage === 1}/>
						<Pagination.Prev
							onClick={() => { onPageChange(currentPage - 1); }}
							disabled={currentPage === 1}>
							{currentPage - 1}
						</Pagination.Prev>
						<Pagination.Item disabled>
							{currentPage}
						</Pagination.Item>
						<Pagination.Next
							onClick={() => { onPageChange(currentPage + 1); }}
							disabled={currentPage === numPages}>
							{currentPage + 1}
						</Pagination.Next>
						<Pagination.Last
							onClick={() => { onPageChange(numPages); }}
							disabled={currentPage === numPages} />
					</Pagination>
				)
				: null}
		</>
	);
};
