$(".gototop").hide();

$(window).scroll(function(e){
	if ($(window).scrollTop()>0)
		$(".gototop").fadeIn(500)
	else $(".gototop").fadeOut(500);
});

$(".gototop").click(function(){
	$("html,body").animate({
		scrollTop:0
	},500);
});