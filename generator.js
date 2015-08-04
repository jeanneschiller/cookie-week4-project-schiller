//pseudo code
// 01 




// $(document).ready(function(){
// 	var cookie = $("p");
//   $(cookie).hide();
//   	var crackMeOpen = $(".open");
// 	$(crackMeOpen).on("click", function(){
// 		// run this code when event happens
// 		var random = Math.floor((Math.random() * cookie.length) +1 );
// 		var nthChildP = $ ("p:nth-child(" + random + ")");
// 		$(".shown").removeClass("shown").hide();
// 		$(nthChildP).fadeIn( 2000 ).addClass("shown");
// 	});
// });


$(document).ready( function() {

	$("p").hide();
	$(".open").on('click', function(){
		var random = Math.floor(Math.random()* $("p").length + 1);
		$("img").fadeOut(2000);
		$("p.show").removeClass().hide();
		$("p:nth-child( " + random + ")").fadeIn(2000).addClass("show");



	});
	$(".reset").on('click', function(){
		// var random = Math.floor(Math.random()* $("p").length + 1);
		$("p.show").removeClass().hide();
		$("img").fadeIn(2000);
		// $("p:nth-child( " + random + ")").fadeIn(2000).addClass("show");



	});


});

















