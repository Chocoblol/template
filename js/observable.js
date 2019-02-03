'use strict';
// Observable - если что-то происходит то
// он передает это всем Observers 

function Observable() {
	let Observers = [];

	this.sendMessage = (data) => {
		// передаем наблюдателям в notify data(информацию)
		for (let i = 0; i < Observers.length;i++) {
			Observers[i].notify(data);
		};
	};

	this.addObservers = (observer) => {
		// добавляем наблюдателей
		Observers.push(observer);
	};
};

// в обсервер передаем поведение - behavior,
// т.е. наблюдателям передаем то, что они будут делать с data
function Observer( behavior ) {
	this.notify = (data) => {
		behavior(data);
	}
};

// let observable = new Observable();
// let obs1 = new Observer((data) => {console.log(data)});
// let obs2 = new Observer((data) => {alert(data)});
// observable.addObservers(obs1);
// observable.addObservers(obs2);

// setTimeout(() => {observable.sendMessage('тестовое сообщение')}, 3000)
// ПРИМЕР КОКУПКИ ТОВАРА И ВСПЛЫТИЯ ОКНА
let basketObs = new Observers((id) => {
	let li = createElement('li');
	li.classList.add('basket__product');
	li.textContent = `Товар ${id}`;
	document.querySelector('.basket__product-list').appendChild(li)
});

let modalObs = new Observers((id) => {
	let msg = `Товар ${id} добавлен в корзину`;
	document.querySelector('.buy__modal_message').textContent = msg;
	document.querySelector('.buy__modal').classList.remove('hide');
	setTimeout(() => {
		document.querySelector('.buy__modal').classList.add('hide');
	},1000);
});

let serverObs = new Observersy((id) => {
	let config = {
		method: 'POST',
		body: JSON.stringify(`Товар ${id}`),
		headers: new Headers({
			'Content-type': 'application/text'
		});
	};
	let URL = 'https://test_url';
	return new fetch(URL, config).then( res => console.log(res));
});

let observable = new Observable();
observable.addObservers(basketObs);
observable.addObservers(modalObs);
observable.addObservers(serverObs);

btn.addEventListener('click', (evt)=> {
	let id = evt.target.getAtrribute('id');
	observable.sendMessage(id);
});