'use strict';
// абстрактный пример паттерна стратегия
let module = (() => {
	let strategy = {};

	return {
		exec: () => {
			strategy.exec()
		},
		setStrategy: (s) => {
			strategy = s;
		},
	};
})();

// какая-то стратегия
function Strategy() {};
Strategy.prototype.exec = () => {};
// еще какая-то стратегия
function Strategy2() {};
Strategy2.prototype = Object.create(Strategy.prototype);
Strategy2.prototype.exec = () => {console.log('второе поведение')};
// и еще одна стратегия
function Strategy3() {};
Strategy3.prototype = Object.create(Strategy.prototype);
Strategy3.prototype.exec = ()=> {console.log('третье поведение')};

// пример сортировка каталога товаров:
 let Catalog = (() => {
 	let strategy,
 		catalog = [
 			{name:'телефон', price: 6000, rating: 1},
 			{name:'телевизор', price: 16000, rating: 3},
 			{name:'фотоаппарат', price: 70000, rating: 5},
 			{name:'дрон', price: 123000, rating: 4},
 		];

 	return {
 		sort: () => {
 			strategy.sort(catalog)
 		},
 		showData: () => {
 			console.log(catalog);
 		},
 		setStrategy: (s) => {
 			strategy = s;
 		},
 	};
 })();
 function sortStrategy() {};
 sortStrategy.prototype.sort = () => {};
 // сортировка по имени
 function NameSort() {};
 NameSort.prototype = Object.create(sortStrategy.prototype);
 NameSort.prototype.sort = (data) => {
 	return data.sort((a,b) => {return a.name - b.name})
 };
 // сортировка по цене
 function PriceSort() {};
 PriceSort.prototype = Object.create(sortStrategy.prototype);
 PriceSort.prototype.sort = (data) => {
 	return data.sort((a,b) => {return a.price - b.price})
 };
 // сортировка по рейтингу
 function RatingSort() {};
 RatingSort.prototype = Object.create(sortStrategy.prototype);
 RatingSort.prototype.sort = (data) => {
 	return data.sort((a,b) => {return a.rating - b.rating})
 };

// селект для выбора сортировки
 // document.querySelector('.catalog-list').change((evt) => {
 // 	let val = evt.target.value;
 // 	if (val === 'name') Catalog.setStrategy(new nameSort());
 // 	else if (val === 'price') Catalog.setStrategy(new priceSort());
 // 	else if (val === 'rating') Catalog.setStrategy(new ratingSort());
 // });
 // document.querySelector('.sort__btn').click(() => {
 // 	Catalog.sort();
 // });

  Catalog.setStrategy(new NameSort());
  Catalog.sort();
  Catalog.showData();