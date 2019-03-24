'use strict';

// пример шаблона фабрика

const Player = function() {
	return {
		warrior: function(param) {
			console.log(`i'm a warrior, my strange is ${param}`);
		},
		mage : function(param) {
			console.log(`i'm a mage, my intalligance is ${param}`);
		},
		archer: function(param) {
			console.log(`i'm a archer , my agility is ${param}`);
		},
	};
};

const MakePlayer = function(param) {
	this.param = param;
};

MakePlayer.prototype = {
	constructor: MakePlayer,
	makeWarrior: function(param) {
		return new Player().warrior(param);
	},
	makeMage: function(param) {
		return new Player().mage(param);
	},
	makeArcher: function(param) {
		return new Player().archer(param);
	},
};