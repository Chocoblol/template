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

// мемоизации с очищением кэша

const memoize = (fn, length) => {
	let cache = new Map();
	return (...args) => {
		let key = generateKey(...args);
		if (cache.has(key)) return cache.get(key);
		let res = fn(...args);
		if (cache.size() >= length) {
			let firstKey = cache.keys().next().value;
			console.log(`delete key ${firstKey}`);
			cache.delete(key);
		};
		cache.set(key, res);
		return res;
	};
};