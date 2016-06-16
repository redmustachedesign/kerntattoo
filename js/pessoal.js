//Meu código de JQuery Pessoal
$(document).ready(function(){
	$('.parallax-container').jKit('parallax',{
		'strength': '1',
		'axis': 'both',
		'scope': 'local',
		'detect':'scroll'
	});
//--------------------------------------------------TUDO REFERENTE AO FAUX-MENU-----//
	$(window).scroll(function(){
		if($(this).scrollTop() > 321){
			$('#subtitle-logo').slideUp("slow");
		} else{
			$('#subtitle-logo').slideDown("slow");
		}
		return false;
			});
// ------------------------------------------------- BX SLIDER ----------//
	$('.bxslider').bxSlider({
		mode:'fade',
		controls: false,
		auto: true
	});
//--------------------------------------------------TUDO REFERENTE AO FAUX-MENU CLICK-----//
	$("#home").click(function(){
			$('body,html').animate({
				scrollTop: $("#header-logo").offset().top-155
			}, 1500,"easeInOutQuint");
			return false;
		});

	$("#menu-tatuagens").click(function(){
		$('body,html').animate({
				scrollTop: $("#content-tattoo").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		});

	$('#menu-tatuagens').mouseenter(function(event) {
		$(".submenu-tatuador").slideDown(300);
	});

	$('#menu-tatuagens').mouseleave(function(event) {
		$(this).stop();
		$(".submenu-tatuador").slideUp(300);
	});

	$("#sub-kern").click(function(){
		$('body,html').animate({
				scrollTop: $("#content-daniel").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		});

	$("#menu-piercing").click(function(){
		$('body,html').animate({
				scrollTop: $("#content-piercing").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		});

	$('#menu-piercing').mouseenter(function(event) {
		$(".submenu-piercing").slideDown(300);
	});

	$('#menu-piercing').mouseleave(function(event) {
		$(this).stop();
		$(".submenu-piercing").slideUp(300);
	});

	$("#sub-simara").click(function(){
		$('body,html').animate({
				scrollTop: $("#content-simara").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		});

// ------------------ FUNCTION MAPS ----------//
	var mapOptions = {
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		scrollwheel: false
	}

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

// -------------- INSTAFEED --------------//
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });

    feed.run();

});
