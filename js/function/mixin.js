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