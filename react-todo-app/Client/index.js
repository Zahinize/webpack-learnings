import printMe from './print.js';
import './style.css';

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');

	element.innerHTML = 'Hello <mark>World!</mark><br>';
	button.innerHTML = 'Click me and check console!';
	button.onclick = printMe;

	element.appendChild(button);

	return element;
}

document.body.appendChild(component());
