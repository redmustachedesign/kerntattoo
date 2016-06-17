//Meu código de JQuery Pessoal
$(document).ready(function(){
	var smartphoneScreen = $(window).width()<=767;
	if (smartphoneScreen) {
		$('#menu-social-header').removeClass('pull-right');
	} else{
		// NADA
	};
	$('.parallax-container').jKit('parallax',{
		'strength': '1',
		'axis': 'both',
		'scope': 'local',
		'detect':'scroll'
	});
//--------TUDO REFERENTE AO FAUX-MENU CLICK-----//
	$("#home").click(function(){
		if (smartphoneScreen) {
			$('body,html').animate({
				scrollTop: $("#header-logo").offset().top -190
			}, 1500, "easeInOutQuint",function(){
				$('#menu-header').slideUp(400);
			});
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#header-logo").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		};
	});

	$("#menu-tatuagens").click(function(){
		if (smartphoneScreen) {
			$('body,html').animate({
				scrollTop: $("#content-tattoo").offset().top -190
			}, 1500, "easeInOutQuint",function(){
				$('#menu-header').slideUp(400);
			});
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#content-tattoo").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		};
	});

	$("#menu-tatuagens")
		.on('mouseenter', function(event) {
				if (!smartphoneScreen) {
					$(".submenu-tatuador").slideDown(300);
				} else{
					// NADA
				};
			})
		.on('mouseleave', function(event) {
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
		if (smartphoneScreen) {
			$('body,html').animate({
				scrollTop: $("#content-piercing").offset().top -190
			}, 1500, "easeInOutQuint",function(){
				$('#menu-header').slideUp(400);
			});
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#content-piercing").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		};
	});

	$("#menu-piercing")
		.on('mouseenter', function(event) {
				if (!smartphoneScreen) {
					$(".submenu-piercing").slideDown(300);
				} else{
					// NADA
				};
			})
		.on('mouseleave', function(event) {
			$(this).stop();
			$(".submenu-piercing").slideUp(300);
		});

	$("#sub-simara").click(function(){
		$('body,html').animate({
				scrollTop: $("#content-simara").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		});

	$("#menu-makeup").click(function(){
		if (smartphoneScreen) {
			$('body,html').animate({
				scrollTop: $("#content-makeup").offset().top -190
			}, 1500, "easeInOutQuint",function(){
				$('#menu-header').slideUp(400);
			});
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#content-makeup").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		};
	});

	$("#menu-contato").click(function(){
		if (smartphoneScreen) {
			$('body,html').animate({
				scrollTop: $("#content-contato").offset().top -190
			}, 1500, "easeInOutQuint",function(){
				$('#menu-header').slideUp(400);
			});
			return false;
		} else{
			$('body,html').animate({
				scrollTop: $("#content-contato").offset().top -100
			}, 1500, "easeInOutQuint");
			return false;
		};
	});
	// HAMBURGER ICON
	$('#hamburger-icon').click(function(){
		$('#menu-header').slideToggle(400);
	});
});
