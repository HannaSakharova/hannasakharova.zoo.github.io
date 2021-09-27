$(document).ready(function () {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if (isIE()) {
		$('body').addClass('ie');
	}
	if (isMobile.any()) {
		$('body').addClass('touch');
	}
//Function to detect WEBP support
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}

//Menu burger
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('menu__body--active');
		menuBody.classList.toggle('menu__body--active');
	});
}
$('.menu__list').click(function (e) {
	$('.icon-menu,.menu__body').removeClass('menu__body--active');
	$('body').removeClass('lock');
});

//Animation of the first block
function showText() {
	$('.mainblock__body').removeClass('mainblock__body--hide');
	$('.mainblock__body').addClass('mainblock__body--show').fadeOut(0).fadeIn(2500);
	$('.mainblock__title-focus').removeClass('mainblock__title-focus--hide');
	$('.mainblock__title-focus').addClass('mainblock__title-focus--show').fadeOut(0).fadeIn(4000);
}
showText();

//Changing the header style
$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 80) {
		$('.wrapper').addClass('scrolled');
	}
	if (scrolled <= 80) {
		$('.wrapper').removeClass('scrolled');
	}
});

//AOS activate
AOS.init();

//Sliders
$('.slider__feed').slick({
	arrows: false,
	dots: true,
	infinite: false
});
$('.slider__ration').slick({
	arrows: false,
	dots: true,
	infinite: false
});

//Spoiler FAQ
// $('.faq-spoiler__title').click(function (event) {
// 	if ($('.faq-spoiler').hasClass('spoiler')) {
// 		$('.faq-spoiler__title').not($(this)).removeClass('active');
// 		$('.faq-spoiler__text').not($(this).next()).slideUp('active');
// 	}
// 	$(this).toggleClass('active').next().slideToggle(300);
// });

//POPUP




//FORMS


//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
//'a{3,1000}' только буквы минимум 3
//'9{3,1000}' только цифры минимум 3
$.each($('input.phone'), function (index, val) {
	$(this).attr('type', 'tel');
	$(this).focus(function () {
		$(this).inputmask('+38(999) 999 9999', {
			clearIncomplete: true, clearMaskOnLostFocus: true,
			"onincomplete": function () { maskclear($(this)); }
		});
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		$(this).parent().removeClass('err');
		$(this).removeClass('err');
	});
});
$('input.phone').focusout(function (event) {
	maskclear($(this));
});
$.each($('input.num'), function (index, val) {
	$(this).focus(function () {
		$(this).inputmask('9{1,1000}', { clearIncomplete: true, placeholder: "", clearMaskOnLostFocus: true, "onincomplete": function () { maskclear($(this)); } });
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		$(this).parent().removeClass('err');
		$(this).removeClass('err');
	});
});
$('input.num').focusout(function (event) {
	maskclear($(this));
});

});

