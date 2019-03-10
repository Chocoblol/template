'use strict';

self.addEventListener('message', (e) => {
	let data = e.data;
	let total = 0;

	if (!e) {
		self.postMessage(0);
		self.close();
	};

	for (let i = 0; i <= data; i++) {
		total+=i;
	};

	console.log(total);

	self.postMessage(total);
	total = 0;
}, false);