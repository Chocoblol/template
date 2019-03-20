'use strict';
// создает один и тот же экземпляр
let Singleton = (() => {
	let instance;
	let SERVER = 'localhost';

	function Singleton() {
		if (instance) return instance;
		instance = this;
	};


	Singleton.prototype.connect = () => {
		console.log('connect to ' + SERVER);
	};

	return Singleton;
})();

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1);
// не можем к экземпляру добавить какой либо метод
// т.к. this всегда родительский
s1.prototype.sayHi = () => {
	console.log('hi')
};
s1.sayHi();

s1.connect();