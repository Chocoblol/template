'use strict';

// пример шаблона медиатор

const Teacher = function() {};
Teacher.prototype = {
	constructor: Teacher,
	getBook: function {
		if (!library.tryToTakeBook()) {
			console.log(`Oh, so bad, books ended!`);
			return false;
		};
		library.books--;
		console.log(`Oh, i know, it's a good book!`);
		return true
	},
};

const Student = function() {};
Student.prototype = {
	constructor: Student,
	getBook: function() {
		if (!library.tryToTakeBook()) {
			console.log(`Oh, not bad, I will not do my homework ))`);
			return false;
		};
		library.books--;
		console.log(`Oh, i know, teacher told my about this book!`);
		return true
	},
};

const libraryStorage = function(count) {
	this.books = count;
};

const library = {
	student: new Student(),
	teacher: new Teacher(),
	books: new libraryStorage(10),

	tryToTakeBook: function() {
		if (this.books === 0) return false;
		return true;
	},
	studentTakeAbook: function() {
		this.student.getBook();
	},
	teacherTakeAbool: function() {
		this.teacher.getBook();
	}
};
