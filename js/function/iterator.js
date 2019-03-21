'use strict';

// пример своего итератора

class Counter {
	constructor(begin, end, step = 1) {
		this.begin = begin;
		this.end = end;
		this.step = step;
	};
	[Symbol.iterator]() {
		let end = this.end;
		let i = this.begin;
		let iterator = {
			next() {
				return {
					velue: i++,
					done: i > end,
				};
			},
		};
		return iterator;
	};
};

let iterable = new Counter(1,10,2);
let iterator = iterable[Symbol.iterator]();
let it1 = iterator.next();

// пример с массивом

let arr = [1,2,3,4];

let iterator = arr[Symbol.iterator]();
let it1 = iterator.next();

// пример генератора

let gen = function* () {
	let i = 0;
	while(true) {
		if (i>=3) return;
		yield i++;
	};
};

