import _ from 'lodash';
import printMe from './print.js';

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');

	element.innerHTML = _.join(['Hello', ' ', '<mark>Webpack</mark>', '<br>'], '');
	button.innerHTML = 'Click me and check console!';
	button.onclick = printMe;

	element.appendChild(button);

	return element;
}

document.body.appendChild(component());
