import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';

export const StickyButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Add an event listener to check if the user has scrolled enough to display the button.
	const handleScroll = () => {
		if (window.scrollY > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Attach the event listener when the component mounts.
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Function to scroll to the top of the page.
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const buttonStyle = {
		position: 'fixed',
		bottom: '20px',
		left: '20px',
		display: isVisible ? 'block' : 'none'
	};

	return (
		<Button
			variant="primary"
			style={buttonStyle}
			onClick={scrollToTop}
		>
			<ArrowUp/>
		</Button>
	);
};
