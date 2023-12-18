 /************************************************
 *	@Page		: Common UI - Javascript
 *	@Author 	: 조광현
 *	@Project	: NH농협(인뱅/스뱅)
 *	@Date		: 2020-09-09
 *	@Version 	: 1.2
 *************************************************/ 
(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);//http://jquery.thewikies.com/browser/
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&/6.0/.test(navigator.userAgent)){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};})(jQuery);

var commonUI = (
	
	function($){

		//Initialize Common UI Module
		$(document).ready(function() {
			mainSlideAccountBox();
			customTab();
			customSelect();
			customScroll();
			modalPopupClose();			
			customToggleBox();
			inPopupClose();
			// checkBudgetLimit();
			infoPopOpen();
			sitemapOpen();
			scrollTabFixed();	
			scrollInfoFixed();			
			SlideFinanceBox();	// 금융광장 슬라이드 한별 200924 추가
			f_slider_click();
		});
	}
	
)(jQuery);


/*
// Modal Popup - open --- 로컬확인용//*/
function modalPopupOpen(targetId, popupId) {
	if(targetId === undefined || popupId === undefined) return;
	
	$(targetId).on('click', function(e) {
		e.preventDefault();

		$(popupId).show();
		progressStepAndBar(); // Action ProgressBar 
		
		$('body').addClass('position-fixed');		
	});

	$('.modal-popup').attr('tabindex', 0).focus(); //20201028 수정
}


/* 개발기 용 
function modalPopupOpen() {
	$('.modal-popup').attr('tabindex', 0).focus(); //20201106 수정 
}*/

//slick-slider focus
function f_slider_click(){
   $('.slick-next').on('click', function(){
	   if( $(this).hasClass() != 'slick-disabled' ){
		   setTimeout(function(){
			   $('.slick-prev').focus();
		   }, 300);
	   }			
   });
}

// Modal Popup - close
function modalPopupClose(targetId) {
	$(targetId).hide();

	$('.modal-close, .modal-popup-close').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.modal-wrap').hide();
		$('body').removeClass('position-fixed');
	});

	// Custom Alert Close
	$('.custom-alert-close').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.custom-alert').fadeOut(500);
	});
}

// Inpopup - open
function inPopupOpen(targetId, popupId) {
	
	$(targetId).on('click', function(e){
		e.preventDefault();
		$(targetId).show();
		$(popupId).show();
		$(popupId).stop().animate({
			bottom: 0
		}, 500, function(){
			$(popupId).attr('tabindex', 0).focus(); // 2020-11-11 추가
		});
		$('.modal-dim').css('z-index', 1);
	});
}

// InPopup - close
function inPopupClose(targetId) {
	$(targetId).animate({
		bottom: '-100%'
	}, 0);
	$('.modal-dim').css('z-index', 0);
	
	$('.in-popup .in-popup-close').on('click', function(e) {
		e.preventDefault();
		$('.btn-toggle-footer').removeClass('fold-open'); // 2020-11-04 추가
		$('.btn-toggle-footer').find('i').text('펼침');
		$(this).closest('.in-popup').animate({
			bottom: '-100%'
		}, 0);
		$('#info_content').hide();
		$(this).closest('.in-popup').hide(); // 2020-11-11 추가
		$('.modal-dim').css('z-index', 0);	
	});
}

// 이용안내 팝업
function infoPopOpen() {
	var $infoContent = $('#info_content'); /* 큰팝업 이용안내 */
	var $infoGuide = $('#info_guide'); /* 큰팝업 이용안내 버튼 */
	var $openInPop = $('#open_in_pop'); /* 바닥 이용안내 버튼 */
	var $listInfoBox = $('.list-bottom-info'); /* 바닥 이용안내 창(높이값) */
	var $mainInfoBox = $('.in-popup.main-info'); /* 바닥 이용안내 */
	var $infoContentMain = $('#info_content_main'); /* 바닥 이용안내 */

	// if($infoContent.length <= 0) return;

	
	if($infoGuide.length) {
		$infoGuide.on('click', function() {
			// in-popup 이용안내 버튼 2020-11-04
			if( $infoGuide.hasClass('fold-open') ){
				$infoGuide.removeClass('fold-open');
				$infoContent.stop().animate({
					bottom: '-100%'
				}, 100);
				$infoContent.hide();	
				$('.modal-dim').css('z-index', 0);
				$infoGuide.find('i').text('펼침');				
				
			} else {
				$infoGuide.addClass('fold-open');
				$infoContent.show();
				$infoContent.stop().animate({
					bottom: 0
				}, 100, function(){
					$infoContent.find('.in-popup-close').attr('tabindex',0).focus(); //20201110 수정
				});	
				$('.modal-dim').css('z-index', 1);
				$infoGuide.find('i').text('닫힘');
			}			
		});
	}

	$infoContent.find('.in-popup-close').on('click', function() {
		$('.modal-dim').css('z-index', 0);
	});
/*
	var $infoContent = $('#info_content'); /* 큰팝업 이용안내 *
	var $infoGuide = $('#info_guide'); /* 큰팝업 이용안내 버튼 *
	var $openInPop = $('#open_in_pop'); /* 바닥 이용안내 버튼 *
	var $listInfoBox = $('.list-bottom-info'); /* 바닥 이용안내 창(높이값) *
	var $mainInfoBox = $('.in-popup.main-info'); /* 바닥 이용안내 *
	var $infoContentMain = $('#info_content_main'); /* 바닥 이용안내 *
*/

	if($openInPop.length) {
		$listInfoBox.height('38px');
		$openInPop.show();
		$infoContentMain.css("bottom","-100%");
		$openInPop.on('click', function() {
			$(this).hide();
			$mainInfoBox.height('250px'); /* 300px */
			$infoContentMain.show();
			$infoContentMain.stop().animate({
				bottom: 0						
			}, 100, function(){
				$(this).find('.in-popup-close').attr('tabindex', 0).focus();
			});			
		});
	}

	$infoContentMain.find('.in-popup-close').on('click', function() {
		$openInPop.show();
		$infoContentMain.animate({
			bottom: '-100%'
		}, 100);
		$infoContentMain.hide();
		$('.modal-dim').css('z-index', 0);
	});
	
}

// Custom Tab
function customTab() {
	$('.custom-tab.tab-form').each(function() {
		var $this = $(this);
		var firstTab = $this.find('li').first();
		var selectedTab = $this.find('.selected');
		if(!firstTab.hasClass('.selected')) {
			selectedTab.prev().css('border-right-color', '#111');
		}
	});
}

// Custom Select box
function customSelect() {

	var $customSelect = $('.custom-select > select');
	var parentElement = $('.select2-results');

	if($customSelect.length) {
		$customSelect.select2({
			minimumResultsForSearch: Infinity,
			// dropdownParent: parentElement
		});
		$customSelect.on("select2:open", function(){
			$('.mCSB_container').on('scroll touchmove mousewheel keydown keyup keypress', function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			});
		})
		$customSelect.on("select2:close", function(){
			$('.mCSB_container').off('scroll touchmove mousewheel keydown keyup keypress');

		})
	}
}

// Custom Scroll bar
function customScroll() {

	// var agent = navigator.userAgent.toLowerCase();
	
	// if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf('msie') != -1)) {
	// 	$('.content-ie').css('paddingBottom','20px');
	// }

	// $('body').mCustomScrollbar({
	// 	theme:'dark',
	// 	autoExpandScrollbar: false,
	// 	mouseWheelPixels: 300,
	// 	scrollInertia: 400,
	// 	advanced:{
	// 		updateOnSelectorChange : true
	// 	}
	// });

	var noCustomScroll = $('.no-custom-scroll');
	var modalBody = $('.modal-wrap .modal-body');
	var customScroll = $('.custom-scroll');

	if(modalBody.length) {
		if(!noCustomScroll.length) {
			modalBody.mCustomScrollbar({
				theme:'dark',
				autoExpandScrollbar: false,
				mouseWheelPixels: 150,
				scrollInertia: 0,
				snapAmount: 50,
				scrollEasing: 'linear',
				mouseWheel: {
					enable: true,
					scrollAmount: 50,
					normalizeDelta: true
				},
				keyboard: {
					enable: true,
					scrollAmount: 50
				},
				advanced:{
					updateOnSelectorChange : true,
					updateOnContentResize: true
				},
				callbacks: {
					onScrollStart: function() {
						$('.custom-select > select').select2('close');
						$(".af-datepicker").remove();
					}
				}
			});
		}
	}
	
	if(customScroll.length) {
		if(!noCustomScroll.length) {
			customScroll.mCustomScrollbar({
				theme:'dark',
				autoExpandScrollbar: false,
				mouseWheelPixels: 150,
				scrollInertia: 0,
				snapAmount: 50,
				scrollEasing: 'linear',
				mouseWheel: {
					enable: true,
					scrollAmount: 50,
					normalizeDelta: true
				},
				keyboard: {
					enable: true,
					scrollAmount: 50
				},
				advanced:{
					updateOnSelectorChange : true,
					updateOnContentResize: true
				},
				callbacks: {
					onScrollStart: function() {
						$('.custom-select > select').select2('close');
						$(".af-datepicker").remove();
					}
				}
			});
		}
	}
}

// Custom Toggle box
function customToggleBox() {

	$('.fold-toggle-btn').on('click', function() {

		var btnData=$(this).attr('data-fold-toggle');
		var $foldToggleBox=$(document).find('.fold-toggle-box[data-fold-toggle='+btnData+']');
		var boxData=$foldToggleBox.attr('data-fold-toggle');


		if($foldToggleBox.length === 1){
			if(boxData !== undefined && btnData === boxData) {
				boxData = $foldToggleBox.attr('data-fold-toggle');
				setToggleIcon($(this), '.fold-toggle-box[data-fold-toggle=' + boxData + ']');
			}
		}
	});
}
// Set icon for Custom Toggle box
function setToggleIcon(foldbtn, foldBoxName) {

	var $foldBtn = foldbtn;
	var $foldBox = $(foldBoxName);

	if($foldBtn.hasClass('fold-open') === true) {
		$foldBtn.removeClass('fold-open');
		$foldBox.slideUp();
		$foldBtn.find('i').text('펼침');
	} else {
		$foldBtn.addClass('fold-open');
		$foldBox.slideDown();
		$foldBox.find('.d-table-cell > input:eq(0)').attr('tabindex', 0).focus();
		$foldBtn.find('i').text('닫힘');
		
	}
}
// Set Step & Progress bar
function progressStepAndBar() {
	$('.step-present').each(function() {

		var $this = $(this);
		var stepComplete = $this.prevAll();
		var stepPresent = stepComplete.length + 1;
		var stepLength = $('.step-num').length;
		var setBarWidth = parseInt(stepPresent / stepLength * 100);

		stepComplete.addClass('step-complete');
		$('.bar-present').width(setBarWidth + '%');
	});
}

// 이체가능금액 확인
function checkBudgetLimit() {
	$('.check-budget-limit').on('click', function() {

		$(this).toggleClass('on');	

	});
}

// 메인 슬라이드
function mainSlideAccountBox() {

	if($('.account-slide-box').length === 0) return;

	$('.account-slide-box').slick({
		// dots: true,
		infinite: false,
		rows: 2,
		slidesPerRow: 2,
		slidesToShow: 1,
		speed: 300,
		zIndex: 50
	});
}

// 전체 메뉴 보기
function sitemapOpen() {
	$('.btn-sitemap').on('click', function() {
		$('.gnb-sitemap-wrap').fadeIn(200);
		$('body').addClass('position-fixed')
	})

	$('.btn-sitemap-close').on('click', function() {
		$('.gnb-sitemap-wrap').fadeOut(200);
		$('body').removeClass('position-fixed');
		$('.btn-sitemap').focus();
	});
}

// 메인 탭바 스크롤 고정
function scrollTabFixed() {

	if($('.tab-main').length <= 0) return;

	var headerTabPoint = $('.tab-main').offset().top;

	$(window).on('scroll', function() {
		var nowPoint = $(this).scrollTop();
		
		if( nowPoint > headerTabPoint ) {
			$('.tab-main').addClass('fixed');
			$('.tab-main ~ .d-table').css('margin-top', '110px');
		} else {
			$('.tab-main').removeClass('fixed');
			$('.tab-main ~ .d-table').css('margin-top', 0);
		}
	});
}

// 하단 인포버튼 스크롤 고정
function scrollInfoFixed() {

	if($('.main-wrap > .footer').length <= 0 || $('.list-bottom-info').length <= 0) return;

	checkInfoPosition();
	
	$(window).on({
		resize: function() {checkInfoPosition()},
		scroll: function() {checkInfoPosition()}
	});	
}

function checkInfoPosition() {

	var htmlHeight = $('html').height();
	var footerHeight = $('.main-wrap > .footer').height();
	var footerTop = htmlHeight - footerHeight;		
	var innerHeight = $(this).innerHeight();
	var scrollTop = $(this).scrollTop();
	var $listInfoBox = $('.list-bottom-info');

	if(innerHeight + scrollTop >= footerTop) $listInfoBox.removeClass('fixed').css('bottom', footerHeight);
	else $listInfoBox.addClass('fixed').css('bottom', 0);	
}

// 금융광장 슬라이드
function SlideFinanceBox() {
	if($('.finance-slide-box').length === 0) return;

	$('.finance-slide-box').slick({
		dots: false,
		autoplay: false,
		infinite: false,
		arrows: true,
		rows: 2,
		slidesPerRow: 3,
		slidesToShow: 1,
		speed: 300,
		zIndex: 50
	});
}

