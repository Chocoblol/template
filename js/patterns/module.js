'use strict';

// Пример модуля. Есть приватные данные и публичные методы для работы с ними
let basket = (() =>{
	let sum = 0,
		goods = [];

	return {
		addProduct: (product) => {
			sum+= product.price;
			goods.push(product)
		},
		printPoducts: () => {
			for (let i = 0; i < goods.length;i++) {
				console.log(goods[i].name + ', ' + goods[i].price);
			}
		},
	};
})();

let soult = {
	name:'soult',
	price: '32 ruble'
};

basket.addProduct(soult);
basket.printPoducts();

console.log(basket)