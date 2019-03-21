'use strict';

// примеры с fetch

const controller = new AbortController();
const signal = controller.signal; 

const config = {
	// body: JSON.stringify(data),
	headers: new Headers({
		'Content-Type': 'Application/json',
	}),
	signal: signal,
};

async function getData(data) {
	let res =  await fetch('http://jsonplaceholder.typicode.com/photos', config)
	// .then( data => {controller.abort(); return data})
	.then( res => res.json())
	.then( data => {
		// console.log(data);
		(async() => {
			for await (let key of data) {
				console.log(key)
			};
		})();
	});
	if (!res.ok) console.error('fail loading');
};

getData();