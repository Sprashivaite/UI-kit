$(function() {
    $(".Dropdown-guests").click(function(){ // задаем функцию при нажатиии на элемент <button>
	    $( ".Dropdown-guests_expanded" ).replaceAll( ".Dropdown-guests" ); // удаляем все элементы <p> из DOM
	  });
});

