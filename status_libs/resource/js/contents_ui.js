
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