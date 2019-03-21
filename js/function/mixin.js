'use strict';

// пример mixin

let g1 = {};
let g2 = {};
let g3 = {
	area: 300,
};

g2.area = 200;

const mixinCalculateCost = obj => {
	obj.area = obj.area || 0;
	obj.calculateCost = function(price) {
		return this.area * price;
	};
};

[g1,g2,g3].forEach((i) => {
	i.calculateCost()
});

// еще пример

// const extend = (obj, mixin) => {
// 	for (let key in mixin) {
// 		if(mixin.hasOwnProperty(key)) {
// 			obj[key] = mixin[key];
// 		};
// 	};
// 	return obj;
// };

const extend = (obj, mixin) => {
	Object.keys(mixin).forEach( key => obj[key] = mixin[key]);
	return obj;
};

let person = {
	name: 'Marcus Aurelius',
	city: 'Rome',
	born: '121-04-26',
};

const mix1 = {
	toString() {
		return `${this.name} was born at ${this.born}`
	},
	age() {
		const year = new Date().getFullYear();
		const born = new Date(this.born).getFullYear();
		return year - born;
		return
	}, 
};

let mixx = extend(mix1, mixin);
