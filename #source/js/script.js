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

//POPUPs
const CLASS_LIST = {
	MODAL: 'modal',
	MODAL_ACTIVE: 'modal--active',
	MODAL_CONTENT: 'modal-content',
	MODAL_SCROLL: 'modal--scroll',
	TRIGGER_OPEN: 'modal-open',
	TRIGGER_CLOSE: 'modal-close'
};

document.addEventListener('click', (event) => {
	//open
	if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
		event.preventDefault();

		const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
		const modalId = target.getAttribute('href').replace('#', '');
		const modal = document.getElementById(modalId);

		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${getScrollBarWidth()}px`;

		modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
	}
	//close
	if (event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) || event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)) {
		event.preventDefault();

		const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
		modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);

		modal.addEventListener('transitionend', showScroll);
	}
});
const getScrollBarWidth = () => {
	const item = document.createElement('div');

	item.style.position = 'absolute';
	item.style.top = '-9999px';
	item.style.width = '50px';
	item.style.height = '50px';
	item.style.overflow = 'scroll';
	item.style.visibility = 'hidden';

	document.body.appendChild(item);
	const scrollBarWidth = item.offsetWidth - item.clientWidth;
	document.body.removeChild(item);

	return scrollBarWidth;
};
const showScroll = (event) => {
	if (event.propertyName === 'transform') {
		document.body.style.overflow = 'visible';
		document.body.style.paddingRight = '';

		event.target.closest(`.${CLASS_LIST.MODAL}`).removeEventListener('transitionend', showScroll);
	}
};

//Select and Add and remove portions 
const selected = document.querySelector('.dropdown-order__selected');
const optionContainer = document.querySelector('.dropdown-order__options');
const optionsList = document.querySelectorAll('.dropdown-order__option');
const addPortion = document.querySelector('#addPortion');
const removePortion = document.querySelector('#removePortion');
const currentAmountPortions = document.querySelector('#currentAmoutPortions');
const finalPrice = document.querySelector('#finalPrice');

selected.addEventListener('click', () => {
	optionContainer.classList.toggle('dropdown-order__options--active');
});
optionsList.forEach(o => {
	o.addEventListener('click', () => {
		selected.innerHTML = o.querySelector('label').innerHTML;
		finalPrice.innerHTML = o.getAttribute('data-price');
		selected.classList.add('dropdown-order__selected--active');
		optionContainer.classList.remove('dropdown-order__options--active');

		let price = o.getAttribute('data-price');
		let value = parseInt(price);
		addPortion.addEventListener('click', function () {
			currentAmountPortions.innerHTML++;
			finalPrice.innerHTML = currentAmountPortions.innerHTML * 1 * value + '₽';
		})
		removePortion.addEventListener('click', function () {
			currentAmountPortions.innerHTML--;
			if (currentAmountPortions.innerHTML < 1)
				currentAmountPortions.innerHTML = 1;
			finalPrice.innerHTML = currentAmountPortions.innerHTML * 1 * value + '₽';
		})
	});
});

//Goto
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		};
	};
};

