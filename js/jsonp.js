'use strict';
const CALLBACK_NAME = '__jsonpTestRequest';

window[CALLBACK_NAME] = (data) => {
	// let res = JSON.parse(data);
	document.write(data);
};
function getData() {
	let script = document.createElement('script');
	script.src = 'https://jsonplaceholder.typicode.com/posts/1' + '?callback' + CALLBACK_NAME;
	document.body.appendChild(script);
};
getData();