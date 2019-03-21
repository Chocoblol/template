'use strict';

const LOOP_COUNT = 10000;

const speedTest = (name, fn, args, count) => {
	const tmp = [];
	const start = new Date().getTime();
	for (let i = 0; i < count; i++) {
		tmp.push(fn(...args));
	};
	const time = new Date().getTime() - start;
	console.log(`${name} : ${LOOP_COUNT} : ${time}`);
};