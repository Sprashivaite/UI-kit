$(function() {
    $(".Dropdown-guests").click(function(){ // задаем функцию при нажатиии на элемент <button>
	    $( ".Dropdown-guests" ).toggleClass( ".Dropdown__Field_expanded" ); // удаляем все элементы <p> из DOM
	  });
});

