'use strict';

const LOOP_COUNT = 10000;

const speedTest = (name, fn, args, LOOP_COUNT) => {
	const tmp = [];
	const start = new Date().getTime();
	for (let i = 0 ; i < LOOP_COUNT; i++) {
		tmp.push(fn(...args));
	};
	const time = new Date().getTime() - start;
	console.log(`${name} : ${LOOP_COUNT} : ${time}`);
};