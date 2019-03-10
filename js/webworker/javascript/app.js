document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let worker = new Worker('javascript/worker.js');
	let btn = document.getElementById('starter');
	let ipt = document.getElementById('input');
	let val = 0;

	ipt.addEventListener('input', (e) => {
		val = e.target.value;
		// console.log(val)
	});

	btn.addEventListener('click', (e) => {
		console.log(val)
		worker.onmessage = function(evt) {
			document.getElementById('result').textContent += ', ' + evt.data;
		};
		worker.postMessage(val); 
	});

});

