(function($){

	// all menu
	$(document).ready(function(){

		$('body').append('<div class="allmenuDim"></div>');

		$(".allmenu-open").click(function(){

			var num=$(".allmenu").hasClass("show");

			if(!num){
				$(".allmenu").show().parents("#wrap, body").css({"overflow-y" : "hidden"})
				$(".allmenuDim").show();
			}else {
				$(".allmenu").hide().parents("#wrap, body").css({"overflow-y" : ""})
				$(".allmenuDim").hide();
			}
		});
		
		$(".allmenu-close").click(function(){

			var scollH = $(".allmenu div").scrollTop();

			if (scollH>0){
				$(".allmenu div").scrollTop(0.0)
			}

			$(".allmenu").hide().parents("#wrap, body").css({"overflow-y" : ""})
			$(".allmenuDim").hide();
		});

		
		$(document).on('click', '.allmenuDim', function() {

			var scollH = $(".allmenu div").scrollTop();

			if (scollH>0){
				$(".allmenu div").scrollTop(0.0)
			}

			$(".allmenu").hide().parents("#wrap, body").css({"overflow-y" : ""})
			$(".allmenuDim").hide();
		});
	});
	
	// open slide
	$(function(){
		$(document).ready(function(){
			accordion();
		});
		
		function accordion(){
			$('.openClick').click(function(e){
				e.preventDefault();

				var _this = $(this);
				var target = _this.next('.openConts');
				var status = _this.hasClass('open');
				var layer = _this.parents('.slideConts');

				if(!status){
					_this.addClass('open');
					target.stop().css({'display' : 'block'});

					if(layer.hasClass('react')){
						layer.find('.openClick').not(_this).removeClass('open');
						layer.find('.openConts').not(target).css({'display' : 'none'});
					}
				}else{
					_this.removeClass('open');
					target.stop().css({'display' : 'none'});
				}
			});

			// 드랍메뉴 레이어
			$('.header .title-link .dropConts').append('<div class="dimDrop"></div>');

			$(".header .title-link").click(function(){

				var openDrop = $('.header .title-link');

				if( openDrop.hasClass('open') ){
					openDrop.removeClass('open');
					$('body').removeClass('autoDrop');
				} else {
					openDrop.addClass('open');
					$('body').addClass('autoDrop');
				}
			});

			$(".title-link .dimDrop, .dropOpen").click(function(){
				$('body').removeClass('autoDrop');
			});

		}
	})

	$(function(){
		$(document).ready(function(){
			slideMos();
		});
		
		function slideMos(){
			$('.noticeClick').click(function(e){
				e.preventDefault();

				var _this = $(this);
				var target = _this.next('.noticeConts');
				var status = _this.hasClass('open');

				if(!status){
					_this.addClass('open');
					target.stop().slideDown();
				}else{
					_this.removeClass('open');
					target.stop().slideUp();
				}
			});
		}
	})

	//Tab Style	
	$(function(){
		$('.tab-type').each(function(){
			var tab = $(this);
			var tabTit = tab.find(' > .tabs a');
			var tabCont = tab.find(' > .tab-cont');
			var num = tabTit.length;
			// var width = tab.width() / num;

			tabTit.click(function(e){
				e.preventDefault();
				var index = $(this).index();

				tabTit.removeClass('on');
				$(this).addClass('on');
				
				if(tab.is('#_tabFc')){
					tabCont.hide();
					tabCont.eq(index).show();
				};
			})
		})
	})	
	
	//thead th padding
	$(function(){
		$('table').each(function(){
			if($(this).find('thead tr').length > 1){
				$(this).find('thead th').css({padding:'8px 10px 12px'});
			}
		})
		
	})

})(jQuery);

// top fixed
$(document).ready(function(){ 

	var oyoHeader = {
		topFixed : null,
		topFixed_h : null,
		init_h : null,

		init : function(){

			oyoHeader.topFixed = $('#topFixed');
			oyoHeader.topFixed_h = oyoHeader.topFixed.height();
			oyoHeader.init_h = 30;
	
			oyoHeader.pg_type = oyoHeader.topFixed.hasClass('ixHead') ? 'topTitle' : 'sub';

			this.addEvent();
		},
		
		addEvent : function(){

			$(window).scroll(function(){

				oyoHeader.cur_pos = $(window).scrollTop();

				if(oyoHeader.pg_type == 'topTitle'){

					if(oyoHeader.cur_pos < oyoHeader.init_h){
						oyoHeader.topFixed.removeClass('change_top');
					}else{
						oyoHeader.topFixed.addClass('change_top');
					}

					if(oyoHeader.cur_pos > oyoHeader.pre_pos && oyoHeader.cur_pos > oyoHeader.topFixed_h){
						oyoHeader.topFixed.addClass('scroll_down');

					}else{
						if(oyoHeader.cur_pos + $(window).height() < $(document).height()){
							oyoHeader.topFixed.removeClass('scroll_down');

						}
					}
				}

				oyoHeader.pre_pos = oyoHeader.cur_pos;
			});
		},
	}

	$('#topFixed').length && oyoHeader.init();

	// 헤더 퀵메뉴 레이어
		$('.header').append('<div class="dimm"></div>');

		$(".header .clickQuick").click(function(){

			var areaConts = $('.header');

			if( areaConts.hasClass('open') ){
				areaConts.removeClass('open');
				$("body").removeClass('autoQuick');
				$(".dimm").hide();
			} else {
				areaConts.addClass('open');
				$("body").addClass('autoQuick');
				$(".dimm").show();
			}
		});

		$(".header .dimm, .contsQuick").click(function(){
			$(".header").removeClass('open');
			$("body").removeClass('autoQuick');
			$(".dimm").hide();
		});
});

// common more button
$(function(){
	$('.buttonShortcuts').click(function(e){
		e.preventDefault();
		if($(this).hasClass('hide')){
			$(this).removeClass('hide');
			$('.menuShortcutsGo').removeClass('open');
		}else{
			$(this).addClass('hide');
			$('.menuShortcutsGo').addClass('open');
		}
	});

	$('.menuShortcutsGo .btnClose, .menuShortcutsGo .dim').click(function(e){
		e.preventDefault();
		$(this).removeClass('open');
		$('.buttonShortcuts').removeClass('hide');
		$('.menuShortcutsGo').removeClass('open');
	});
});

//list click background
$(function(){
	$('.list-form li').click(function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});
	
	$('table').each(function(){
		var ty1 = $(this).find('td.icoLink').parent('tr');
		var ty2 = $(this).find('td.fromat').parent('tr');
		var ty3 = $(this).find('td.subject').parent('tr');
		var tr = $(this).find('tr');

		ty1.click(function(){
			tr.removeClass('on');
			$(this).addClass('on');
		});
		ty2.click(function(){
			tr.removeClass('on');
			$(this).addClass('on');
		});
		ty3.click(function(){
			tr.removeClass('on');
			$(this).addClass('on');
		});

		if($(this).parent().hasClass('row2')){
			ty1.click(function(){
				$(this).next('tr').addClass('on');
			});
			ty1.next('tr').click(function(){
				tr.removeClass('on');
				$(this).addClass('on');
				$(this).prev('tr').addClass('on');
			});

			ty2.click(function(){
				$(this).prev('tr').addClass('on');
			});
			ty2.prev('tr').click(function(){
				tr.removeClass('on');
				$(this).addClass('on');
				$(this).next('tr').addClass('on');
			});

			ty3.click(function(){
				$(this).prev('tr').addClass('on');
			});
			ty3.prev('tr').click(function(){
				tr.removeClass('on');
				$(this).addClass('on');
				$(this).next('tr').addClass('on');
			})
		
		}
	})
})












// keypad (아래로 코드 넣지 마세요)========================================
/**
 * 키패드 영역에 웹뷰 입력필드가 가려질 경우
 * 해당 컴포넌트 영역이 업스크롤되어 노출되도록 처리한다.
 * 공통 회전버튼 UI 는 키패드 밑에 숨김
 */
var orgScreenHeight = window.screen.height;
var NativeKeyPad = {
	JS_RULE_TYPE_KEYPAD_LYAOUT_FOCUSED : function(callback){
		// 스크롤을 가진 객체를 찾아 리턴
		var view = $('.inFocus');
		if(!view.length){ return false;}// add
		var scrollViewCheck = function(){
			var viewParent = view.parent();
			$.fn.hasScrollBar = function(){
				return (this.prop("scrollHeight") > this.prop("clientHeight")+3 && $(this).css('overflow-y') == 'auto' && $(this).prop('nodeName') == "DIV");// modify
			};
			var i = 0;
			while(!viewParent.hasScrollBar()){
				if(i>50){ return $('#wrap');}
				viewParent = viewParent.parent();
				i++;
			}
			return viewParent;
		};
		var scrollView = scrollViewCheck();
		var setLayoutPosition = function(numVal){
			scrollView.scrollTop(numVal);
		};

		// 입력폼이 화면에 보이는지 체크
		var upContentsView = function(){
			/////////////////////////////////////////////////
			// 현재의 위치가 가려지는 지를 판별한다.
			/////////////////////////////////////////////////
			// 1. 내위치 가져오기
			var selfY = view.offset().top + scrollView.scrollTop() + 40;
			// 2. 화면의 크기 가져오기
			//int screenHeight = editTextView.getRootView().getHeight();
			var screenHeight = $('body').height();
			// 3. 보안키패드 크기 가져오기
			var keyPadHeight = orgScreenHeight - screenHeight;
			/////////////////////////////////////////////////
			// 키패드바로 위로 인풋을 올려 놓는다.
			/////////////////////////////////////////////////
			// 겹쳐있는지를 판단한다.
			var selfEndY = selfY + view.height();
			var maxY = orgScreenHeight - keyPadHeight;

			if (maxY < selfEndY && !(maxY > selfY - scrollView.scrollTop())){
				setLayoutPosition(selfEndY-maxY - 40);
			}
		};
		upContentsView();
	}
}

// 키패드 show 이벤트 대용
var keypadShowTimerID;
$(window).resize(function(){
	NativeKeyPad.JS_RULE_TYPE_KEYPAD_LYAOUT_FOCUSED();
});

/* 회전버튼
$(document).on('click','.buttonRotation',function(){
	if(!$('body').is('.transform')){
		$('body').addClass('transform');
	}else{
		$('body').removeClass('transform');
	}
})
*/
$(document).on('focus','input:not([type=radio],[type=checkbox]), textarea',function(){
	if($(this).attr('readonly')){ return false;}
	$(this).addClass('inFocus');
});
$(document).on('blur','input:not([type=radio],[type=checkbox]), textarea',function(){
	$(this).removeClass('inFocus');
});
///////////////////////////////////////////////////////////////////////////