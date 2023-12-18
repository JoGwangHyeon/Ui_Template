
///상품상세 모션관련
/*
setSVGApply('#svgMoneyBoxArea01', '/pub/resource/images/C/lottie/theme03.json');
setSVGApply('#svgMoneyBoxArea02', '/pub/resource/images/C/lottie/theme02.json');
setSVGApply('#svgMoneyBoxArea03', '/pub/resource/images/C/lottie/theme01.json');
 */

//2022-11-14 수정
function setSVGApply(id, jsonUrl, isAutoplay, isLoop, impLoop, _stopFrame){
    function fn(_target, idx){
        if($(_target).is('.svg-init')){
            $(_target).trigger('_reInit');
            $(_target).trigger('play');
            return false;
        }
        var item = _target;
        var wrapper = $('<div class="lottie"></div>').prependTo($(item)).get(0);
        var autoplayflag = false;
        var noRepeat = $(item).is('.no-repeat');//2022-11-14 add
        var loopflag = false;
        var motionImgTimerId;
        var loopTimerId;
        var repeatDelayTime = 5000;
        var isMain = $('.prodmall-main').length;

        if(typeof jsonUrl != "string"){//여로 이미지 모션 케이스 
            var target = $(item).find('.lottie');
            target.html($(jsonUrl.innerHtml));
            var onloadLen = 0;
            var printType = 'png';
            
            $.each(target.find('img'), function(){
                this.onload = function(){
                    onloadLen++;
                    if(onloadLen == target.find('img').length){
                        $(item).addClass('motion-init')
                    }
                }
            })
        }else{
            var fileName = jsonUrl.split('/').reverse()[0].split('.')[0];
            var printType = jsonUrl.split('/').reverse()[0].split('.')[1];

            if(printType == 'png'){

                var target = $(item).find('.lottie');
                target.addClass('css-motion');
                var imgObj = new Image();
                imgObj.src = jsonUrl;
                imgObj.onload = function(){
                    $(this).appendTo(target)
                    $(item).addClass('motion-init')
                }
            }
        }

        if(typeof isAutoplay !== "undefined") {
            autoplayflag = isAutoplay;
        }
        if(typeof isLoop !== "undefined") {
            loopflag = isLoop;
        }

        if(printType == 'png'){ 
            var _this =  $(item);

            function _reInit() {
                _this.removeClass('motion-init');
                if(loopflag){
                    //repeat
                    clearInterval(motionImgTimerId);
                }
            }
            function _play() {
                _this.addClass('motion-init');
                if(loopflag){
                    //repeat
                    motionImgTimerId = setInterval(function(){
                        _this.removeClass('motion-init');
                        //delay
                        setTimeout(function(){
                            _this.addClass('motion-init');
                        },100)
                    },repeatDelayTime);//2022-10-14 수정
                }
            }
            _this.unbind('reInit').bind('reInit',_reInit);
            _this.unbind('play').bind('play',_play);
            if(autoplayflag){
                _this.trigger('play');
            }
            return false;
        }

        
        var stopFrame = 0;
        switch(fileName){
            case 'J01' : 
            case 'recom_banner17' : 
            case 'theme03' : 
            case 'psBanner13' : 
                stopFrame = 35;
            break;
            case 'J02' : 
            case 'recom_banner01' : 
            case 'recom_banner02' : 
            case 'psBanner03' : 
                stopFrame = 28;
            break;
            case 'J03' : 
            case 'psBanner09' : 
                stopFrame = 0;
            break;
            case 'J04' : 
            case 'recom_banner16' : 
                stopFrame = 22;
            break;
            case 'J05' : 
            case 'recom_banner08' : 
                stopFrame = 42;
            break;
            case 'J06' : 
            case 'recom_banner10' : 
            case 'theme01' : 
                stopFrame = 42;
            break;
            case 'J07' : 
            case 'recom_banner14' : 
                stopFrame = 42;
            break;
            case 'J08' : 
                stopFrame = 43;
            break;
            case 'J09' : 
                stopFrame = 27;
            break;
            case 'J10' : 
            case 'recom_banner06' : 
            case 'psBanner14' : 
                stopFrame = 30;
            break;
            case 'J11' : 
            case 'psBanner12' : 
                stopFrame = 42;
            break;
            case 'J12' : 
                stopFrame = 42;
            break;
            case 'J13' : 
                stopFrame = 42;
            break;
            case 'J14' : 
                stopFrame = 26;
            break;
            case 'J15' : 
            case 'theme02' : 
                stopFrame = 34;
            break;
            case 'J16' : 
            case 'theme07' : 
                stopFrame = 32;
            break;
            case 'J17' : 
            case 'theme08' : 
                stopFrame = 34;
            break;
            case 'J18' : 
            case 'theme06' : 
                stopFrame = 42;
            break;
            case 'J19' : 
            case 'recom_banner07' : 
            case 'theme05' : 
            case 'psBanner02' : 
                stopFrame = 36;
            break;
            case 'J20' : 
            case 'theme04' : 
                stopFrame = 42;
            break;
            case 'J21' : 
            case 'theme09' : 
                stopFrame = 28;
            break;
            case 'J22' : 
                stopFrame = 42;
            break;
            case 'J24' : 
                stopFrame = 0;
            break;
            case 'J25' : 
            case 'psBanner05' : 
                stopFrame = 42;
            break;
            case 'J26' : 
                stopFrame = 17;
            break;
            case 'J27' : 
                stopFrame = 38;
            break;
            case 'J28' : 
            case 'recom_banner15' : 
                stopFrame = 34;
            break;
            case 'J29' : 
            case 'recom_banner09' : 
                stopFrame = 41;
            break;
            case 'J30' : 
                stopFrame = 42;
            break;
            case 'J31' : 
                stopFrame = 0;
            break;
            case 'J33' : 
                stopFrame = 42;
            break;
            case 'J34' : 
            case 'psBanner06' : 
                stopFrame = 30;
            break;
            case 'J35' : 
                stopFrame = 32;
            break;
            case 'J36' : 
                stopFrame = 34;
            break;
            case 'J37' : 
            case 'recom_banner11' : 
                stopFrame = 34;
            break;
            case 'J38' : 
                stopFrame = 36;
            break;
            case 'J40' : 
            case 'recom_banner12' : 
                stopFrame = 42;
            break;
            case 'J26' : 
            case 'psBanner02' : 
                stopFrame = 17;
            break;
            case 'J41' : 
            case 'psBanner07' : 
            case 'recom_banner13' : 
                stopFrame = 42;
            break;
            case 'J42' : 
                stopFrame = 33;
            break;
            case 'J44-green' : 
            case 'J44-pink' :
            case 'psBanner01' : 
            case 'psBanner04' : 
                stopFrame = 42;
            break;
            case 'J45' : 
                stopFrame = 38;
            break;
            case 'J46' : 
            case 'recom_banner05' : 
                stopFrame = 32;
            break;
            case 'J47' : 
                stopFrame = 28;
            break;
            case 'J48' : 
                stopFrame = 42;
            break;
            case 'J49' : 
                stopFrame = 42;
            break;
            case 'J50' : 
            case 'psBanner10' : 
                stopFrame = 42;
            break;
            case 'J51' : 
            case 'psBanner11' : 
                stopFrame = 42;
            break;
        }
        
        $(item).addClass(fileName);
        var isImpLoop = false;
        if(typeof impLoop !== "undefined" && impLoop !== false) {
            isImpLoop = isLoop;
        }
        
        //2022-10-17 운영 관련 stopframe변경 코드 추가
        if(typeof _stopFrame !== "undefined") {
            stopFrame = _stopFrame;
        }
        
        //메인은 오토플레이로
        if(isMain){
            autoplayflag = true;
        }
        
        var animData = {
            wrapper: wrapper, //pure element
            animType: 'svg',
            loop: isImpLoop,
            autoplay: false,
            path: jsonUrl,
            rendererSettings: {
                progressiveLoad:false
            },
        };
        var anim = bodymovin.loadAnimation(animData);

        function dataReady(){
            $(item).addClass('svg-init');
            var interactionPos = item.getBoundingClientRect();
                
            if(!(interactionPos.x > $('body').get(0).clientWidth) && !(interactionPos.y > $('body').get(0).clientHeight)){
                if(autoplayflag){
                    $(item).addClass('playing');
                    _play();
                }
            }
        }

        function _reInit() {
            anim.stop();
            if(loopflag){
                //repeat
                clearInterval(loopTimerId);
            }
        }
        function _pause() {
            anim.pause();
            if(loopflag){
                //repeat
                clearInterval(loopTimerId);
            }
        }
        
        function _play() {
            
            if(stopFrame){
                anim.playSegments([0, stopFrame], true);
            }else{
                anim.play();
            }
            
            if(loopflag){
                //repeat
                clearInterval(loopTimerId);
                loopTimerId = setInterval(function(){
                    //delay
                    anim.goToAndStop(0);
                    if(stopFrame){
                        anim.playSegments([0, stopFrame], true);
                    }else{
                        anim.play();
                    }
                },repeatDelayTime);
            }
            //2022-11-14 수정 반복재생 예외일경우 이벤트 바인딩 안함.
            if(noRepeat){
                $(item).unbind('play reInit pause');
            }
        }
        /*
        function enterFrame(frame){
            
            $(item).data('currFrame',frame);
        }
        */
        $(item).data('lottie',anim);
        anim.addEventListener('data_ready',dataReady);
        //anim.addEventListener('enterFrame',enterFrame);
        $(item).unbind('reInit').bind('reInit',_reInit);
        $(item).unbind('pause').bind('pause',_pause);
        $(item).unbind('play').bind('play',_play); 
        
    };
    $(id).each(function(idx){
        fn(this, idx);
    })
}

var hanaProdDetailUI = {};

//2022-10-24 오류 수정 CMS | 개발 반영 필요
hanaProdDetailUI.prdDetailPageInit = function() {
    //arcodian
    var arcodianWrap = $('.prodmall-notice, .accodion-list.compare-list');
    var $toggleWrap = arcodianWrap.find('[data-element="toggle"]');
    var safeAreaInsetTop = parseInt($('#content').css('padding-top')) - 56;
    
    $toggleWrap.each(function(idx){
        var plugin = $(this).data('plugin_toggle');
        var $anchor = plugin.$anchor;

        plugin.open = function(){
            var plugin = this;

            plugin.flag = true;

            plugin.beforeChange(plugin.$anchor, plugin.$panel);

            plugin.textFlag &&
            plugin.$anchor.text(plugin.options.onChangeAfterText);

            plugin.$anchor
            .addClass(plugin.options.activeClassName)
            .attr({"aria-expanded": true});

            if (plugin.options.mode === "fade") {
            plugin.$panel
                .stop()
                .fadeIn(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                    plugin.afterChange(
                    plugin.$anchor,
                    plugin.$panel
                    );
                }
                );
            } else if (plugin.options.mode === "slide") {
            plugin.$panel
                .stop()
                .slideDown(
                plugin.options.speed,
                plugin.options.easing,
                function () {
                    plugin.afterChange(
                    plugin.$anchor,
                    plugin.$panel
                    );
                }
                );
            } else {
            plugin.$panel.stop().show();
            plugin.afterChange(plugin.$anchor, plugin.$panel);
            }

            plugin.afterChange(plugin.$anchor, plugin.$panel);

            var $obj = plugin.$anchor;
            var headerHeight = 56;
            var goTopos = Math.floor($obj.offset().top);
            var distance = headerHeight;
            var scrollToMove = (goTopos - distance - safeAreaInsetTop);
            $('html,body').stop().animate({
                scrollTop: scrollToMove + 'px' //2022-10-06 ios 관련 수정
            }, 400)
        }
    });

    if(!$('.section-top').length) { 
        return false;
    }

    var repeatDelayTime = 5000;//2022-10-18 수정

    $.fn.simpleCounter = function( options ) {
        var settings = $.extend({
            start:  0,
            end: 100,
            step: 1,
            duration: 1000,
            fixed : 2,
        }, options );

        var thisElement = $(this);

        thisElement.text(settings.start)
        thisElement.css('count', settings.start);
        
        thisElement.animate({
            count : settings.end
        },{
            duration: settings.duration,
            specialEasing : {
                'count': "easeOutCirc"
            },
            step : function(now, fx){
                thisElement.text(fx.now.toFixed(settings.fixed));
            },
            complete : options.complete
        })

    };

    $.fn.simpleCounterWon = function( options ) {
        var settings = $.extend({
            start:  0,
            end: 100,
            step: 1,
            duration: 1000
        }, options );
        var thisElement = $(this);
        thisElement.text(settings.start);
        var _shadow = $('<div></div>');
        _shadow.css('width', settings.start);
        _shadow.animate({
            'width' : settings.end
        },{
            duration: settings.duration,
            specialEasing : {
                'count': "easeOutCirc"
            },
            step : function(now, fx){
                var money = new Intl.NumberFormat('ko-KR').format(Math.round(fx.now));
                thisElement.text(money);
            },
            complete : options.complete
        })
    };

    var titleMotion = {
        init : function(){
            $('.section-top .tit-default').addClass('active');
            var txt = $('.section-top .tit-default').html().split('<br>');
            var txtTotal  = "";
            $.each(txt, function(idx){
                txtTotal += '<span class="el0'+(idx + 1)+'">'+  txt[idx]+ '</span>';
            })
            
            $('.section-top .tit-default').html(txtTotal);

            //최대한도 카운팅
            var perIntervalTimerId;
            var perObj = $('.section-top .desc-percent');
            if(perObj.length){
                if(perObj.data('maxirt')){//금리 전문 대기
                    perIntervalTimerId = setInterval(function(){
                        if(!perObj.is('[class$=desc-percent]')){//answer
                            
                            clearInterval(perIntervalTimerId);
                            var perNum = eval(perObj.attr('class').split(' ')[1].split('%'));
                            var isFixed = perObj.attr('class').split(' ')[1].split('%')[0].length - 2;
                            if(isFixed == 2){
                                perObj.html('<span>0.00</span>%');
                            }else if(isFixed == 1){
                                perObj.html('<span>0.0</span>%');
                            }
                            setTimeout(function(){
                                perObj.find('span').simpleCounter({
                                    end: perNum,
                                    duration: 800,
                                    fixed:isFixed
                                });
                            },800);
                        }
                    }, 200)
                }else{//하드코딩
                    perObj.addClass(perObj.text())
                    var perNum = eval(perObj.attr('class').split(' ')[1].split('%')[0]);
                    var isFixed = perObj.attr('class').split(' ')[1].split('%')[0].length - 2;
                    if(isFixed == 2){
                        perObj.html('<span>0.00</span>%');
                    }else if(isFixed == 1){
                        perObj.html('<span>0.0</span>%');
                    }
                    setTimeout(function(){
                        perObj.find('span').simpleCounter({
                            end: perNum,
                            duration: 800,
                            fixed:isFixed
                        });
                    },800);
                }
            }
            /* 레퍼런스 없음
            var numberObj = $('.section-top .main-desc em:eq(0)');
            if(numberObj.length && numberObj.text() == '최대한도'){};
            */
        }
    }
    titleMotion.init();
    

    var imgMotionImgTimerId;
    
    var countingMotionTimerID;   
    var countingMotionTimerID2;
    function scrollMotion(){
        var heroHeight = $('.prodmall-section.section-top').height();
        $('.interaction-area').each(function(){
            var _this = $(this);
            var speed = (_this.find('.steps > li').length * 300) + 1000;
            var interactionPos = _this.get(0).getBoundingClientRect();
            if(interactionPos.top - heroHeight < 150){
                _this.addClass('motion-init');
            }
        })

        //2022-10-18
        
        function countingMotion(_this){
            var me = _this;
            clearTimeout(countingMotionTimerID)
            countingMotionTimerID = setTimeout(function(){
                me.find('.motion05 em').simpleCounterWon({
                    start:64000,
                    end: 0,
                    fixed:1,
                    duration: 800
                });
            },1200)
        }
        function countingMotion2(_this){
            var me = _this;
            clearTimeout(countingMotionTimerID2)
            countingMotionTimerID2 = setTimeout(function(){
                me.find('.motion04 em').simpleCounter({
                    start:0,
                    end: 16.5,
                    duration: 400,
                    fixed:1,
                    complete : function(){
                    }
                });
                me.find('.motion06 em').simpleCounterWon({
                    start:0,
                    end: 1155000,
                    duration: 400
                });
            },1200)
        }
        $('.icon-svg-area').each(function(){
            var _this = $(this);
            var interactionPos = _this.get(0).getBoundingClientRect().top;
            var clientH = $('body').get(0).clientHeight;         
            if(interactionPos+(_this.height()/2) > 0 && interactionPos+(_this.height()-20) < clientH){
                _this.addClass('motion-init');
            
                if(_this.data('lottie') && !_this.is('.motion-repeat')){
                    _this.trigger('play');
                }
                if(!_this.is('.motion-repeat')){
                    _this.addClass('motion-repeat');

                    if(!_this.find('.lottie').length){
                        //숫자 카운팅 모션 보유 오브젝트일경우
                        if(_this.is('#prd_fdetail_04_5101_01')){
                            _this.find('.motion05 em').text('64,000');
                            countingMotion(_this);
                        }
                        if(_this.is('#prd_fdetail_04_6101_02')){
                            _this.find('.motion04 em').text('0');
                            _this.find('.motion06 em').text('0');
                            countingMotion2(_this);
                        }
                        clearInterval(imgMotionImgTimerId);
                        imgMotionImgTimerId = setInterval(function(){
                            _this.removeClass('motion-init');
                            //숫자 카운팅 모션 보유 오브젝트일경우
                            if(_this.is('#prd_fdetail_04_5101_01')){
                                _this.find('.motion05 em').text('64,000');
                                countingMotion(_this);
                            }
    
                            if(_this.is('#prd_fdetail_04_6101_02')){
                                _this.find('.motion04 em').text('0');
                                _this.find('.motion06 em').text('0');
                                countingMotion2(_this);
                            }
    
                            //delay
                            setTimeout(function(){
                                _this.addClass('motion-init');
                            },100)
                        },repeatDelayTime);
                    }else{//2022-10-27 else추가 
                        clearInterval(imgMotionImgTimerId);
                        imgMotionImgTimerId = setInterval(function(){
                            _this.removeClass('motion-init');
                            _this.trigger('reInit');
                            //delay
                            setTimeout(function(){
                                _this.addClass('motion-init');
                                _this.trigger('play');
                            },100)
                        },repeatDelayTime);
                    }
                }
                
            }else{
                _this.trigger('reInit');
                _this.removeClass('motion-init');
                _this.removeClass('motion-repeat');
            }
        })
    }

    $(document).scroll(scrollMotion);

    $('.interaction-area').each(function(){
        var itemHeight = $(this).find('li').height() + 20;
        $(this).find('.bg-bar').height((itemHeight * $('.interaction-area li').length) - 20);
    });

    //2022-09-29 가상키패드 관련 추가 
    $('.simulation-area').on('click', '.input.native-readonly .native-inner', function(){
        var me = $(this);
        var hei = $('body').height();
        setTimeout(function(){
            $(window).scrollTop(Math.abs(hei - me.offset().top - 389));
        },20);
    })
    //페이지 로드후 상세 top영역 모션 클래스 추가 함수
    $('#content').addClass('page-motion-init');



    //2022-10-05 기간 선택박스 클릭후 스크롤링 이벤트 바인딩
    var fixedInScroll = function(){
        var wrapper = $('.simulation-area');
        wrapper.each(function(){
            var container = $(this);
            var btns = container.find('.button-select__item');

            btns.on('click', function(){
                var me = $(this);
                var _selectModal = $(me.data('target'));
                var _scrollTarget = ($('body').is('.modal-open')) ? $('#wrap') : $(window);
                var _gap = 50;
                var _fixedHeight = _scrollTarget.height();
                var _listHeight = 179;
                var moveTo = 0;
                var _ordScrollTop = _scrollTarget.scrollTop();
                if(_listHeight > 840){ //최대값보다 크다면
                    _listHeight = 850;
                }
                var _selectModalHeight = _listHeight + 55 + parseInt(_selectModal.find('.modal__contents').css('padding-bottom'));

                if(_fixedHeight - me.offset().top < _selectModalHeight + _gap){
                    moveTo = _selectModalHeight - (_fixedHeight - me.offset().top);
                    _scrollTarget.scrollTop(_ordScrollTop + moveTo + _gap)
                }
            })
        })
        
    }
    fixedInScroll();
}


$(document).ready(function(){
    hanaProdDetailUI.prdDetailPageInit();
})