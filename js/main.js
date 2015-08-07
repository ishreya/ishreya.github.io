

$(document).ready(function(){
	$("#header_parallax").parallax("50%", 0.2);
	$(".bg2").parallax("50%", 0.3);

	$(".navigation ul li a").on("click", function(e){
		e.preventDefault();
		$(this).parent().addClass("active").siblings().removeClass("active");
	})

	new WOW().init();
	var waypoint = new Waypoint({
	  element: document.getElementById('portfolio'),
	  handler: function(direction) {
	    $(".top_bar").toggleClass("dark_bg");
	  }
	})	

	$.localScroll({
		target: 'body', 
		queue:true,
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			
		},
		onAfter:function( anchor, settings ){
			
		}
	});	
});