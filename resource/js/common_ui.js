

$(document).ready(function(){

	//레프트 메뉴
	$("#Lnb .allFold").click(function(){
		var lnbConts = $('#Lnb');

		if( lnbConts.hasClass('expand') ){
			lnbConts.removeClass('expand');
		} else {
			lnbConts.addClass('expand');
		}
		if( lnbConts.hasClass('cutback') ){
			lnbConts.removeClass('cutback');
		} else {
			lnbConts.addClass('cutback');
		}
	});

	//레프트 oneDepth 메뉴
	$('#Lnb').find('.oneDepth > button').click(function(){

		var lnbOne = $(this).closest('.oneDepth');

		if( lnbOne.hasClass('open') ){
			lnbOne.removeClass('open');
		} else {
			lnbOne.addClass('open');
		}
		lnbOne.siblings().removeClass('open');
	});

	//레프트 twoDepth 메뉴
	$('#Lnb').find('.oneClick').click(function(){

		var lnbTow = $(this).closest('li');

		if( lnbTow.hasClass('open') ){
			lnbTow.removeClass('open');
		} else {
			lnbTow.addClass('open');
		}
		lnbTow.siblings().removeClass('open');

	});


	
});