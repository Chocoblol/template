'use strict';
// одиночное использование функции
const once = (fn) => (...args) => {
	if (!fn) return;
	let res = fn(...args);
	fn = null;
	return res;
};

// лимитированное использование функции
const limit = (count, fn) => {
	let counter = 0;
	return (...args) => {
		if (counter === count) {
			return;
		};
		counter++;
		fn(...args);
	};
};

// обнуление функции
const canceleble = fn => {
	const wrapper = (...args) => {
		if (fn) return fn(...args);
	};
	wrapper.cancel = () => fn = null;
	return wrapper;
};

// универсальная обетка
const wrap = fn => {
	let limit = 0;
	let counter = 0;

	const wrapper = (...args) => {
		if (limit && counter === limit) return wrapper.cancel();
		if (fn) {
			let res = fn(...args);
			counter++;
			return res;
		};
	};
	wrapper.cancel = () => {
		fn = null;
		return wrapper;
	};
	wrapper.timeout = msec => {
		setTimeout(() => {
			wrapper.cancel();
		}, msec);
		return wrapper;
	};
	wrapper.limit = clount => {
		limit = count;
		return wrapper;
	};
	return wrapper;
};