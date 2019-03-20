'use strict';

// пример JSONP
const CALLBACK_NAME = '__jsonpTestRequest';

window[CALLBACK_NAME] = (data) => {
	// let res = JSON.parse(data);
	document.write(data);
};
function getData() {
	let script = document.createElement('script');
	script.src = 'https://jsonplaceholder.typicode.com/posts/1' + '?callback' + CALLBACK_NAME;
	document.body.appendChild(script);
};
// getData();

// ПРИМЕР XMLHttpRequest
function getData(URL) {
	return new Promise( success => {
		let xml = new XMLHttpRequest();
		xml.open('GET', URL, true);
		xml.setRequestHeader('Content-Type', 'application/json');
		xml.responseType = 'json';
		xml.timeout = 6000;
		xml.onreadystatechange = function() {
			if (this.status === 200 && this.readyState === 4) {
				success(this.responseText);
			};
		};
		xml.send();
		xml.ontimeout = (evt) => {
			alert('превышено время ожидания');
		};
		xml.onerror = () => {
			alert('ошибка запроса')
		};

	}).catch(e) {
		alert(`Ошибка ${e.message}`)
	}; 	
};
getData(URL).then( res => JSON.parse(res));//.....

// пример fetch
async function getData(URL, data) {
	const options = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'applycation/json'
		}),
		// body: JSON.stringify(data),
	};

	let res = await fetch(URL, options);
	if !(res.ok) {
		alert('Ошибка загрузки')
	};
	return await res.json();
};
getData().then( res => console.log(res)).catch( e => {throw new Error(`e.message`)})