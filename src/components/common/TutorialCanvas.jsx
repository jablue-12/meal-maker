import React from 'react';
import { Offcanvas } from 'react-bootstrap';

export const TutorialCanvas = (props) => {
	const { show, handleClose } = props;

	const customStyle = {
		whiteSpace: 'pre-wrap'
	};

	return (
		<Offcanvas show={show} onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>How to use Meal Maker</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<div>
					<h6>Home Page</h6>
					<pre style={customStyle} className=" overflow-hidden">
						The home page welcomes users to explore diverse recipes. Enter your preferred <strong>ingredient</strong>, <strong>meal name</strong>, or <strong>food category</strong> to discover a variety of delightful meals.
					</pre>
				</div>
				<div>
					<h6>Ingredients Page</h6>
					<pre style={customStyle} className=" overflow-hidden">
						On the Ingredients page, you can unleash your creativity by entering <strong>multiple ingredients</strong>. Watch as the app works its magic, generating a selection of scrumptious meals featuring your chosen ingredients.
					</pre>
				</div>
				<div>
					<h6>Random Meal Page</h6>
					<pre style={customStyle} className=" overflow-hidden">
						Indecisive about what to eat? Let the Random Meal page decide for you! With a simple click, it will conjure up a surprise meal, adding an element of excitement to your dining experience!
					</pre>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
};
