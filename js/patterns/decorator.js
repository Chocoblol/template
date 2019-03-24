'use strict';

// пример паттерна decorator
// К примеру есть какой-то класс A 
// и мы хотим дополнить его методами дугой класс Б, а еще класс В и т.д...

function A() {
	this.get = () => {
		console.log('я класс А');
	};
};
// первый декоратор
function Decorator(obj) {
	this._obj = obj;
};
Decorator.prototype = Object.create(A.prototype);
Decorator.prototype.constructor = Decorator;

// второй декоратор
function DecoratorB(obj) {
	Decorator.call(this, obj)
	this.get = () => {
		this._obj.get();
		console.log(' а я тоже класс, но лучше');
	};
};
DecoratorB.prototype = Object.create(Decorator.prototype);
DecoratorB.prototype.constructor = DecoratorB;

// третий декоратор
function DecoratorC(obj) {
	Decorator.call(this, obj);
	this.get = () => {
		this._obj.get();
		console.log(' а я так, вообще самый крутой класс');
	};
};
DecoratorC.prototype = Object.create(Decorator.prototype);
DecoratorC.prototype.constructor = DecoratorC;

let obj = new A(),
	obj2 = new DecoratorB(new A()),
	obj3 = new DecoratorC(new A()),
	obj4 = new DecoratorB(new DecoratorC(new A()));

obj.get();
console.log('___________________' , obj);
obj2.get();
console.log('___________________', obj2);
obj3.get();
console.log('___________________', obj3);
obj4.get();
console.log('___________________', obj4);


// еще пример декоратора

const Player = (config) => {
	this.name = config.name;
	this.type = config.type; 
}; 
Player.prototype.greet = function() {
	console.log(`Hello, my name is ${this.name} and i'm a ${this.type}`);
};

const Mage = (obj, param) => {
	this._obj = obj;
	this.param = param;
};
Mage.prototype = {
	constructor: Mage,
	greet: () => {
		this._obj.greet();
		console.log(`I have a ${this.param} health`)
	};
};

const p1 = new Mage(new Player({name:'dd', type:'firemage'}),150);
p1.greet();