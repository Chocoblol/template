'use strict';

// пример паттерна фасад

function Bank(name) {
	this.check = function (name) {
		return true;
	};
};

class Credit {
	checkCredit (money) {
		money = (money < 1000) ? 'bad credit' :
		(money < 10000 && money >= 1000) ? 'good credit' :
		(money > 10000) ? 'Special credit!!!'; 
		return money;
	};
};

function Facade(name) {
	this.name = name;
};

Facade.prototype.applyFor = function() {
	const check = new Bank('Bob').check();
	const checkMsg = check ? 'Greetings' : 'Hello';
	const credit = new Credit().checkCredit(12442);
	return `${checkMsg}, Mr.(Mrs.) ${this.name}, We have for U ${credit}`
};

let person = new Facade('Bob').applyFor();
console.log(person)