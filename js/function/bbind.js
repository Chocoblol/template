'use strict';

// свой bind

Function.prototype.bbind = function(context, ...args) {
	return (...rest) => {
		this.apply(context, [...args, ...rest]);
	};
};

// bind без call или apply

Function.prototype.BigBind = function(context, ...args) {
	let obj = {...context};
	let sym = Symbol('target');
	obj[sym] = this;
	return (...rest) => {
		obj[sym](...args, ...rest);
	};
};