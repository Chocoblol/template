'use strict';

// обертка откладывающая вызов ф-ции

const debounce = (fn, ms) => {
	let timer = null;
	return (...args) => {
		const onComplete = () => {
			fn.apply(this, args);
			timer = null;
		};
		if (timer) clearTimeout(timer);
		timer = setTimeout(onComplete, ms);
	};
};
