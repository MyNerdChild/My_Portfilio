/// A JavaScript Function to toggle in and out of menu_show and menu hide classes 

$(Document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_hide");
	});
	$("body").on('click','.top',function(){
		$("nav.menu").toggleClass("menu_show")
	})
});
