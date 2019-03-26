'use strict';

// вид func(1)(2);

const curry = (a,b) => {
	if (!b) {
		return (c) => {
			return a + c; 
		};
	};
	return a + b;
};

// вид func(1)(2)(2);

const curry = (a) => {
	let sum = a;
	return (c) => {
		if ( c !== 'undefined') {
			return curry(sum + c);
		};
	};
	return sum; 
};

// вид func(1)(2)(3)();

const curry = (a) => {
	let sum = a;
	function add(val = 0) {
		sum += val;
		return add;
	};
	add.toString = add.valueOf = function() {

	};
	return sum;
};