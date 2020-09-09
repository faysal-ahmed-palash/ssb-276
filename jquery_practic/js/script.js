$(document).ready(function(){
	$('.hide-btn').click(function(){
		$('.h4-hide').hide('slow');
	});

	$('.show-btn').click(function(){
		$('.h4-show').show('slow');
	});

	$('.toggle-btn').click(function(){
		$('.h4-toggle').toggle('slow');
	});

	$('.fadein-btn').click(function(){
		$('.h4-fadein').fadeIn(1000);
	});

	$('.h4-fadeout').mouseenter(function(){
		$(this).fadeOut(1000);
	});

	$('.fadetoggle-btn').click(function(){
		$('.h4-fadetoggle').fadeToggle(500);
	});

	$('.fadeto-btn').click(function(){
		$('.div-fadeto').fadeTo(500, 0.5);
	});

	$(".slidedown-h4").click(function(){
    	$("#slidedown").slideDown("slow");
  	});

  	$(".slideup-h4").click(function(){
    	$("#slideup").slideUp("slow");
  	});

  	$(".slidetoggle-h4").click(function(){
    	$("#slidetoggle").slideToggle("slow");
  	});

  	$(".btn-start").click(function(){
    	$(".stop_content").slideDown(5000);
  	});

  	$(".btn-stop").click(function(){
    	$(".stop_content").stop();
  	});

  	$(".btn-animate").click(function(){
    	$("div.ball_animate").animate({
    		left		: '500px',
    		width		: '200px',
    		height		: '200px',
    		// backgroundColor   : '#ff0000',
    		borderRadius	: '0'
    	}, 2000);
  	});

  	$(".btn-callback").dblclick(function(){
    	$(".text-secondary").hide(1000, function(){
    		alert('The text has been hidden.');
    	});
  		$(this).animate({
  			borderRadius	: '25%'
  		})
  	});


  	$(".btn_css_set").click(function(){
    	$(".css-set-text").css({
    		// "background-color"	: "#686de0",
    		"color"				: "#f6e58d"
    	});
  	});

  	$(".btn_css_get").click(function(){
  		alert("Button BG color is " + $(this).css('background-color'));
  	});
});