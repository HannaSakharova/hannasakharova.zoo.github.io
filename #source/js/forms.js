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
