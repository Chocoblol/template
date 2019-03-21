'use strict';

// пример мемоизации

// генерация ключей для поиска
const argKey = arg =>  arg.toString() + ':' + typeof arg;
const generateKey = args => args.map(argKey).join('|');

// пример мемоизации
const memo = fn => {
	let cache = {};
	return (...args) => {
		let key = generateKey(...args);
		let val = cache[key];
		if (val) return val;
		let res = fn(...args);
		cache[key] = res;
		return res;
	};
};