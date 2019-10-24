import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');

	element.innerHTML = _.join(['Hello', ' ', '<mark>World!</mark>', '<br>'], '');
	button.innerHTML = 'Click me and check console!';
	button.onclick = printMe;

	element.appendChild(button);

	return element;
}

document.body.appendChild(component());

// Webpack HMR code
if (module.hot) {
	module.hot.accept('./print.js', () => {
		console.log('Accepting the updated printMe module!');
		printMe();
	});
}
