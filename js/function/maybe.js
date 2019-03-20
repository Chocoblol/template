'use strict';

// Maybe монада (аппликативная)

function Maybe(val) {
	this.val = val;
};

Maybe.prototype.map = function(fn) {
	let res = (this.val && fn) ? fn(this.val) : null;
	return res instanceof Maybe ? res : new Maybe(res);  
};

Maybe.prototype.ap = function(functor) {
	return this.map(val => functor.map(f => f(val)));
};

let a = new Maybe(5);
let func1 = new Maybe(x => x * 2);
let func2 = new Maybe(x => ++x);

a.ap(func1).ap(func2).map(console.log);