$(document).ready(function(){	
	// ALL MAIN TEXTUS OPEN
	$('.inContsHome .homeTextusBtn').on('click', function(){

		var areaContsHome = $('.inContsHome .homeTextusBtn');

		if( areaContsHome.hasClass('change') ){
			areaContsHome.removeClass('change');
			$('#ktContents').removeClass('ixMain');
			$('#slideHome').stop().animate({height:'50%'}, 300);
		} else {
			areaContsHome.addClass('change');
			$('#ktContents').addClass('ixMain');
			$('#slideHome').stop().animate({height:'100%'}, 400);
		};
	});

	//listOpenClose
	$('#listOpenClose .tit').on('click', function(){
		var openConts = $(this).closest('li');

		if( openConts.hasClass('open') ){
			openConts.removeClass('open');
			openConts.find('.textus').slideUp('200');
			
		} else {
			openConts.addClass('open');
			openConts.find('.textus').slideDown('200');
		}
		openConts.siblings().removeClass('open');
		openConts.siblings().find('.textus').slideUp('200');

	});

	//Tab Conts
	$('#conentsTab').find('.click').on('click', function(){
		var commTtab = $(this).index();
		$('#conentsTab').find('.click').removeClass('on').eq(commTtab).addClass('on');
		$('#conentsTab').find('.conts').removeClass('on').eq(commTtab).addClass('on');
	});

});


(function($){
	
	//레이어 팝업
	$.fn.layerOpen = function(options){
		return this.each(function(){
			var _this = $(this);
			var _layer = $('#'+ _this.attr('data-target') || null);
			_this.click(function(e){
				e.preventDefault();
				
				var _layer_pos;
				
				if(_layer.height() > $(window).height()){
					_layer_pos = $(window).scrollTop();
				}else{
					_layer_pos = $(window).scrollTop() + ($(window).height() - _layer.height())/2;
				}

				_layer.attr('tabindex', 0).addClass('show').css({'top': _layer_pos +'px'}).focus();
				
				if(_layer.find('.prd_option_box').length > 0){
					option_reSet(_layer);
				}
				
				//$('body').append('<div class="dim"></div>');
				
				_layer.find('.popBtnClose').one('click', function(){
					$('.dim').remove();
					_layer.removeClass('show');
					_this.focus();
				});
				$('.dim').one('click', function(){
					$('.dim').remove();
					_layer.removeClass('show');
					_this.focus();
				});
			});
		});
	};

})(jQuery);