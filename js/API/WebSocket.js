'use strict';

// пример использование websocket
let btn = document.querySelector('.send-btn');

const ws = new WebSocket('wss://echo.websocket.org');

ws.open = function() {
	alert('соеднинение установлено');
};

ws.onerror = function(e) {
	alert('Error: ' + e);
};

ws.onmessage = function(e) {
	console.log(e.data);
};

btn.addEventListener('click', () => {
	ws.send('Hello!');
});
