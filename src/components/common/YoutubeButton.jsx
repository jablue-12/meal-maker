import React from 'react';

export const YoutubeButton = (props) => {
	const { link, className } = props;
	return (
		<a
			href={link}
			target="_blank" rel="noopener noreferrer"
			className={`btn btn-secondary ${className || ''}`}>
				Youtube Tutorial
		</a>
	);
};
