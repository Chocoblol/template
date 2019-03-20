// Проверка изображения
const isValidImage = function(img) {
	      let IMAGE_REG = /([^\s]+(?=\.(jpg|gif|png|jpeg))\.\2)$/gi;
	      if (IMAGE_REG.test(img)) return img
	      return false;      
  	  };

// Проверка на строку только из Русских букв
const isValidString = function(str) {
      let STR_REG = /^([\u0410-\u0451]{2,12})+$/gi;
      if (STR_REG.test(str)) return str;
        return false;
    };

// Проверка на число больше нуля
const isValidNum = function(num) {
      if (typeof +num == "number" && !isNaN(+num) && +num > 0) return num;
      return false;
    };
    
// Проверка на число
function isNumeric(num) {
	return !isNaN(parseFloat(num) && isFinite(num));
};