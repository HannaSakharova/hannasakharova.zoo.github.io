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
$('.faq-spoiler__header').click(function () {
	const next = $(this).next();
	const child = $(this).children();
	if (next.hasClass('faq-spoiler__text--active')) {
		next.removeClass('faq-spoiler__text--active');
		child.removeClass('faq-spoiler__icon--active');
	} else {
		$('.faq-spoiler__text').removeClass('faq-spoiler__text--active');
		next.addClass('faq-spoiler__text--active');
		$('.faq-spoiler__icon').removeClass('faq-spoiler__icon--active');
		child.addClass('faq-spoiler__icon--active');
	}
});

//POPUP



