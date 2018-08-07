window.addEventListener('DOMContentLoaded', () =>{
	

	let scroll = false; //техническая переменная
	let i;				//техническая переменная

	// ПЛАВНАЯ ПРОКРУТКА ПРИ НАЖАТИИ ССЫЛОК В НАВИГАЦИОННОМ МЕНЮ
	let navMenu = document.querySelector('.container'); //получаем навигационное меню

	navMenu.addEventListener('click', function(event){
		let link, element;
		let target = event.target;
		if (target && target.matches('a')){
			event.preventDefault(); // отменяем стандартное поведение элемента
			scroll = true;
			link = target.getAttribute('href'); // получаем id ссылки из href
			//console.log(link);
			element = document.querySelector(link);	// получаем элемент на который идет ссылка
			//console.log(element);		
			let distance = element.offsetTop; // получаем расстояние до элемента
			//console.log(target);
			i = window.pageYOffset; // получаем текушую позицию
			console.log(i);

			if (i < distance && scroll == true){
				function scrollDown(){
					if (i < distance){
						window.scrollTo(0, i);
						i = i + 50;
						let timer = setTimeout(scrollDown, 30);
					} else {
						clearTimeout(timer);//останавливаем интервал
						scroll = false;		// отключаем скролл	
					};
				};
				scrollDown();
			} if (i > distance && scroll == true){
				function scrollUp(){
					if (i > distance){
						window.scrollTo(0, i);
						i = i - 50;
						let timer = setTimeout(scrollUp, 30)
					} else {
						clearTimeout(timer);//останавливаем интервал
						scroll = false;		// отключаем скролл	
					}
				};
				scrollUp();
			}
			
		}
	
	});
});






