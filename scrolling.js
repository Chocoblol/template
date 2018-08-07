window.addEventListener('DOMContentLoaded', () =>{
	//Получем сылки с навигационного меню
	let navList = document.querySelectorAll('li > a');

	// Получаем элементы на которых идет ссылка с навигационного меню
	let AnchorsElements = document.querySelectorAll('li > a').href;

	let scroll = false;

	// ПЛАВНАЯ ПРОКРУТКА ПРИ НАЖАТИИ ССЫЛОК В НАВИГАЦИОННОМ МЕНЮ
	let navMenu = document.querySelector('.container');

	navMenu.addEventListener('click', function(event){
		let scrollTarget, link, element;
		let target = event.target;
		if (target && target.matches('a')){
			event.preventDefault();
			scroll = true;
			link = target.getAttribute('href');
			//console.log(link);
			element = document.querySelector(link);	
			//console.log(element);		
			target = element.offsetTop;
			console.log(target);
			i = 0;

			if (target > 0 && scroll == true){
				function scrollDown(){
					if (i < target){
						window.scrollTo(0, i);
						i = i + 50;
						let timer = setTimeout(scrollDown, 30);
					} else {
						clearTimeout(timer);
						scroll = false;
						return i 
					};
				};
				scrollDown();
			} if (target < 0 && scroll == true){
				function scrollUp(){
					if (i < target){
						window.scrollTo(0, i);
						i = i - 50;
						let timer = setTimeout(scrollDown, 30)
					} else {
						clearTimeout(timer);
						scroll = false;
						return i 
					}
				};
				scrollUp();
			}
			
		}
	
	});
});






