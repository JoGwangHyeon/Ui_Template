/****************************
    Hana Bank JS 2022 extend
*****************************/
//2022-10-21 수정
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

//========================================================================================== //

var hanaProdUI = {};

//2022-10-20 sliderAutoplay 수정
hanaProdUI.sliderAutoplay = function(obj){
    if($(obj).length < 1) return;
    var categoryTimerId;
    $.each($(obj), function(){
        var $obj = $(this);
        var $item = null;
        var $list = null;
        var $indicator = null;
        var $transformObj = null;

        var indicator = '';
        var active = 0;
        var transformMove = 0;
        var gap = 0;
        var autoplayFlag = false;
        var stopFlag = false;

        function init(){
            $item = $obj.children();
            
            $obj.addClass('stack-slide');
            $item.wrap('<div class="stack-slide-item" />');
            $obj.find('.stack-slide-item').wrapAll('<div class="stack-slide__overview"><div class="stack-slide__list" /></div>');
            
            $transformObj = $obj.find('.stack-slide__list');
            $item = $obj.find('.stack-slide-item');
            
            transformMove = $item.eq(0).width();
            gap = parseInt($item.eq(0).css('margin-right'));

            $transformObj.css({
                'width' :  ($item.length + 4) * transformMove + 'px',
                'transform': 'translate3d(' + -transformMove + 'px, 0, 0)'
            });
            

            $item.first().clone().addClass('clone').attr({'aria-hidden' : 'true', 'data-slide-index' : $item.length}).appendTo($transformObj);
            $item.last().clone().addClass('clone').attr({'aria-hidden' : 'true', 'data-slide-index' : -1}).prependTo($transformObj)
            $item.each(function(i,e){
                $(e).attr({'aria-hidden' : 'true', 'data-slide-index' : i});
            })
            $item.eq(active).attr({'aria-hidden': 'false', 'data-position': 'active'}).next().attr('data-position', 'next').next().attr('data-position', 'afternext')

            indicator += '<ul class="stack-slide__indicator" role="tablist">';
            for(var i=0; i<$item.length; i++){
                indicator += '<li role="presentation"><button type="button" role="tab" aria-selected="false" aria-label="총 ' + $item.length + '페이지 중 ' + (i + 1) + '페이지'  +'"></button></li>'
            }
            indicator += '<li role="presentation" class="auto-play-control"><button type="button">정지/재생</button></li>'
            indicator += '</ul>';
            $obj.append(indicator);
            $indicator = $obj.find('.stack-slide__indicator > li:not(.auto-play-control)');
            $indicator.eq(active).addClass('is-active').children().attr('aria-selected', 'true');

            $('[data-slider=panel1]').slick('setPosition');
            $obj.addClass('init');
        }

        function event(){
            $obj.on('touchmove', function(e){
                clearInterval(autoplayFlag);
                e.stopPropagation();
            })
            swipe($obj);
            page($obj);
        }

        
        function gotoNext(current){
            $transformObj.css('transition', 'all 0.4s ease-in-out');
            if(current.data('slide-index') == ($item.length - 1)){//last
                var oldX = -(((current.index()+1) * transformMove) + ((current.index()) * gap));
                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                setTimeout(function(){
                    $transformObj.css('transition', 'none');
                    $transformObj.css({'transform' : 'translate3d('+ (-transformMove) +'px, 0, 0)'});
                },400);
                $transformObj.css('transition', 'all 0.4s ease-in-out');
                next($item.first().prev());
            }else{//next
                var oldX = -(((current.index()+1) * transformMove) + ((current.index()) * gap));
                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                next(current);
            }
        }

        function swipe(){
            var startX = 0;
            var objX = 0;
            var endX = 0;
            var min = $obj.outerWidth()/4;
            var swipeFlag = false;

            $obj.data('flag', false);

            $obj.off('touchend').on({
                'touchstart' : function(e){
                    swipeFlag = false;
                    startX = e.originalEvent.touches[0].pageX
                    var current = $(this);
                    var oldX = -((current.index() * transformMove));
                    endX = oldX;
                    $transformObj.css('transition', 'none');
                },
                'touchmove' : function(e){
                    objX = e.originalEvent.touches[0].pageX - startX;
                    swipeFlag = true;
                    var current = $(this);
                    var oldX = -(((current.index()) * transformMove) + ((current.index()-1) * gap));
                    $transformObj.css({'transform': 'translate3d(' + (oldX + objX) + 'px, 0, 0)'});
                },
                'touchend' : function(e){
                    var current = $(this);
                    if(swipeFlag){
                        $transformObj.css('transition', 'all 0.4s ease-in-out');
                        if(Math.abs(objX) <= min){
                            var oldX = -(((current.index()) * transformMove) + ((current.index()-1) * gap));
                            $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                        }else if(objX > min && objX !== endX){
                            if(current.data('slide-index') == 0){//first
                                var oldX = -(((current.index()-1) * transformMove) + ((current.index()-2) * gap));
                                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                                setTimeout(function(){
                                    $transformObj.css('transition', 'none');
                                    var oldX = -((($item.length) * transformMove) + (($item.length-1) * gap));
                                    $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                                },400);
                                $transformObj.css('transition', 'all 0.4s ease-in-out');
                                prev($item.last().next());
                            }else{//prev
                                var oldX = -(((current.index()-1) * transformMove) + ((current.index()-2) * gap));
                                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                                prev(current);
                            }
                        }else if(objX < 0 && objX < -min && objX !== endX){
                            if(current.data('slide-index') == ($item.length - 1)){//last
                                var oldX = -(((current.index()+1) * transformMove) + ((current.index()) * gap));
                                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                                setTimeout(function(){
                                    $transformObj.css('transition', 'none');
                                    $transformObj.css({'transform' : 'translate3d('+ (-transformMove) +'px, 0, 0)'});
                                },400);
                                $transformObj.css('transition', 'all 0.4s ease-in-out');
                                next($item.first().prev());
                            }else{//next
                                var oldX = -(((current.index()+1) * transformMove) + ((current.index()) * gap));
                                $transformObj.css({'transform' : 'translate3d('+ oldX +'px, 0, 0)'});
                                next(current);
                            }
                        }
                        if(!stopFlag){
                            autoPlay();
                        }
                    }
                }
            }, '[data-position=active]')
        }
        function autoPlay(){
            clearInterval(autoplayFlag)
            autoplayFlag = setInterval(function(){
                if($obj.parents('.slick-slide').is('.slick-current') || $('.prodmall-main').length){
                    gotoNext($obj.find('.stack-slide-item[aria-hidden=false]'));
                }
            }, 4000);
        }
        function svgControl(current){
            var target = current;
            var isInSVG = target.find('[class^=psBanner]');
            if(isInSVG.length){
                $obj.find('[class^=psBanner]').not(isInSVG).trigger('reInit');
                setTimeout(function(){
                    $obj.find('.clone [class^=psBanner]').trigger('play');
                    isInSVG.trigger('play');
                },400);
            }

            var isInSVG2 = target.find('[class^=submainTopBanner]');
            if(isInSVG2.length){
                $obj.find('[class^=submainTopBanner]').not(isInSVG2).trigger('reInit');
                setTimeout(function(){
                    $obj.find('.clone [class^=submainTopBanner]').trigger('play');
                    isInSVG2.trigger('play');
                },400);
            }
        }
        function next(current){
            var target = current;
            active = target.index() + 1;
            svgControl(target.next());
            $item.not(target).removeAttr('data-position style').attr('aria-hidden', 'true');
            target.addClass('played');
            setTimeout(function(){
                target.removeAttr('data-position style').attr('aria-hidden', 'true')
            },200)
            target
                .next().attr({'data-position': 'active', 'aria-hidden': 'false'})
                .next().attr({'data-position': 'next', 'aria-hidden': 'true'})
                .next().attr({'data-position': 'afternext', 'aria-hidden': 'true'});

            $indicator.eq(active-1).addClass('is-active').children().attr('aria-selected', 'true');
            $indicator.eq(active-1).siblings().removeClass('is-active').children().attr('aria-selected', 'false');
        }

        function prev(current){
            var target = current;
            active = target.index() - 1;
            svgControl(target.prev());
            $item.removeAttr('data-position style').attr('aria-hidden', 'true');
            target.prev().attr({'data-position': 'prev'});
            target.addClass('played');
            setTimeout(function(){
                target.prev().attr({'data-position': 'active', 'aria-hidden': 'false'})
            },200)
            target
                .attr({'data-position': 'next', 'aria-hidden': 'true'})
                .next().attr({'data-position': 'afternext', 'aria-hidden': 'true'});

            $indicator.eq(active-1).addClass('is-active').children().attr('aria-selected', 'true');
            $indicator.eq(active-1).siblings().removeClass('is-active').children().attr('aria-selected', 'false');
        }

        function page(){
            $obj.find('.auto-play-control').off('click').on('click', function(){
                var me = $(this);
                if(!me.is('.play')){
                    me.addClass('play');
                    stopFlag = true;
                    clearInterval(autoplayFlag);
                }else{
                    stopFlag = false;
                    me.removeClass('play')
                    autoPlay();
                }
            })
            $indicator.off('click').on('click', 'button',function(e){
                var $parent = $(this).parent();
                active = $parent.index();

                if(!$parent.is('.is-active')){
                    $item
                        .removeAttr('data-position style').attr('aria-hidden', 'true')
                        .eq(active).attr({'data-position': 'active', 'aria-hidden': 'false'})
                        .next().attr({'data-position': 'next', 'aria-hidden': 'true'})
                        .next().attr({'data-position': 'afternext', 'aria-hidden': 'true'});

                    $(this).attr('aria-selected', 'true');
                    $parent.addClass('is-active').siblings().removeClass('is-active').children().attr('aria-selected', 'false');
                }
            })
        }

        init(obj);
        event(obj);

        clearTimeout(categoryTimerId);
        categoryTimerId = setTimeout(function(){
            $('#content').addClass('motion-init')
            if(!stopFlag){
                autoPlay();
            }

            //2022-10-08 main, submain motion-finish 타이밍 클래스 추가
            if($('#content').is('.prodmall-main')){//main
                setTimeout(function(){
                    $('#content').addClass('hero-motion-finish')
                },2000)//2022-10-17

            }else if($('#content').is('.prodmall-sub')){//submain
                setTimeout(function(){
                    $('#content').addClass('hero-motion-finish');
                },2000);//2022-10-17
            }
            
        },1000)
    });
}

/*
    2022-10-11 수정
    가입프로세스(입금, 적금, 청약) 숫자 키패드 호출시 dummy 생성 위치 변경
*/
hanaProdUI.hanaRemoveDummyDiv = function(){
    if($('#divNumKeypadDummy').length > 0){
        $('#divNumKeypadDummy').remove();
    }
    //active 되어있는 화면에 추가
    setTimeout(function(){
        var screenItems = $('.step-screen-container');
        var swiperInfo = hanaProdUI.getSwiperInfo();
        var targetContainer = screenItems.eq(swiperInfo.realIndex);
        swiperInfo.params.touchRatio = 0;
        $('<div id="divNumKeypadDummy" style="height:380px"></div>').appendTo(screenItems.eq(swiperInfo.realIndex));//2022-10-11 수정
    },10)
}

//2022-10-08 가입프로세스 가상키패드 닫힐때 호출되어야할 hanaKeypadOut 함수 추가 
hanaProdUI.hanaKeypadOut = function(){
    //스와이프 기능을 정지시키는 함수
    var swiperInfo = hanaProdUI.getSwiperInfo();
    swiperInfo.params.touchRatio = 1;
    if($('#divNumKeypadDummy').length > 0){
        $('#divNumKeypadDummy').remove();
    }
}

//2022-08-25 일자 계산 관련 수정
hanaProdUI.dialSelect = function(obj, param, cfn){
    var $el = null;
    var dialModal = {
        scrollWrapper : [
            /*{
                $el : null,
                cols:0,
                itemHeight : 0,
                isActive : false,
                scrollItems:[],
                scrollTop : 0,
                val: null
            }*/
        ],
        //setDate : "EE",
        groupIdx : 0, //dial group의 인덱스 저장
        min : 0, //최소 가입기간
        max : 0, //최대 가입기간(만기일)
        tabs : null,
        minDate : null,
        maxDate : null,
        $callBtn : null,
        $confirmBtn: null,
        _callBackFn : null,
        onlyMulti:false
    };

    var itemTemplate = '\
        <li class="list-wrap__item list-button-wrap list-button-wrap--small" data-option-value="{{value}}">\
            <button type="button" class="list-wrap__anchor">\
                <span class="list-wrap__box">\
                    <strong class="list-wrap__title list-wrap__title--value">{{value}}</strong>\
                </span>\
            </button>\
        </li>';
    
    function init(obj){
        var me = $(obj);
        if(!me.length){ return false;}
        var o = new Object(dialModal);            
        var container, items;

        o.tabs = me.find('.tab-wrap__menu');
        o.$callBtn = $('button[data-target="#'+me.get(0).id+'"]');
        o.$confirmBtn = me.find('.button-fixed .button--positive');
        o._callBackFn = cfn;

        
        
        function scrollWrapperExtend(obj, container, items){
            var colsType = parseInt(items.attr('class').split('col-')[1].slice(0,1));
            obj.groupIdx = (colsType > 1) ? 1 : 0;
            obj.scrollWrapper.push({
                $el : container,
                cols: colsType,
                itemHeight : 0,
                isActive : false,
                scrollItems: items,
                scrollTop : 0,
                val: null,
                selYY : '',
                selMM : ''
            });
            return obj;
        }
        
        if(typeof param.length == 'number'){ //single
            container = me.find('.modal__contents');
            items = container.find('.container__panel');// .list-section
            o = scrollWrapperExtend(o, container, items);
            o.items = param;
        }else{
            o.items = param.items;
            if(!!o.tabs.length){//탭이 있다면
                o.onlyMulti = me.find('.modal__contents--inner-tab [data-element=tab]').data('options').initIndex;
                if(o.onlyMulti){
                    o.tabs.parent().hide();
                }
                
                me.find('.pualugin-tab__panel').each(function(){
                    container = $(this);
                    items = container.find('.container__panel');
                    o = scrollWrapperExtend(o, container, items);
                    
                    o.min = param.min;
                    o.max = param.max;
                })
            }else{
                container = me.find('.modal__contents--multiple');
                items = container.find('.container__panel');// .list-section
                o = scrollWrapperExtend(o, container, items);
                o.min = param.min;
                o.max = param.max;
            }
        }
        //동적 생성
        createslide(o);
        event(me, o);
        
        $('body').data('plugin_modal').open(obj);
    }

    //윤년 관련 함수
    function dateChk(yyyy, m){
        var lastDay = new Date(yyyy,m,0).getDate();
        return lastDay;
    }

    function createslide(o){
        if(typeof param.length != 'number'){
            var dateObj = calcPeriod(o.min, o.max);
            o.dateObj = dateObj.distance;      
            o.minDate = dateObj.min;              
            o.maxDate = dateObj.max;
            if(!!o.tabs.length){//탭이 있다면
                createYY(o, "년");
                createMM(o, Object.keys(dateObj.distance)[0], "월");
                createDD(o, o.scrollWrapper[o.groupIdx].selYY, parseInt(o.dateObj[o.scrollWrapper[o.groupIdx].selYY][0]), "일");
            }   
        }
        if(!o.onlyMulti){
            singleCreateMM(o);
        }
    }

    function rtArrayNum(num){
        var arr = new Array(num);
        for(var i = 0; i < num; i++){
            arr[i] = ((i+1)+"").padStart(2, "0");
        };
        return arr;
    }

    /*
     calcPeriod : 최소 최대기간 사이의 년 월 배열이 담긴 객체 리턴 
    */
   
     function distance(mm){//인자값 개월수
        var b = new Date();
        b.setMonth(b.getMonth() + mm);
        return b;
    }

    function calcPeriod(oMin, oMax){
        var dateObj = {};
        var a = distance(oMin);
        var b = distance(oMax);
        var min = a.getMonth() + 1;
        var max = b.getMonth() + 1;
        var len = b.getFullYear() - a.getFullYear() + 1;
        
        for(var i=0; i<len; i++){
            dateObj[a.getFullYear() + i] = rtArrayNum(12);
        }
        dateObj[b.getFullYear()] = dateObj[b.getFullYear()].slice(0, max);
        dateObj[a.getFullYear()] = dateObj[a.getFullYear()].slice(min-1);

        return {
            distance : dateObj,
            min : a,
            max : b
        }
    }

    function createYY(o, unitText){
        var dateObj = o.dateObj;
        var resultStr = '<ul class="list-wrap">';
        for(var key in dateObj){
            resultStr += itemTemplate.replace(/{{value}}/g, key+unitText);
        }
        resultStr += '</ul>';

        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(0).html(resultStr);
        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(0).scrollTop(0).find('.list-wrap__item').eq(0).addClass('active-item')
    }

    function createMM(o, selYear, unitText){
        var dateObj = o.dateObj;
        var resultStr = '<ul class="list-wrap">';
        for(var key in dateObj[selYear]){
            resultStr += itemTemplate.replace(/{{value}}/g, dateObj[selYear][key]+unitText);
        }
        resultStr += '</ul>';
        o.scrollWrapper[o.groupIdx].selYY = selYear;
        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(1).html(resultStr);
        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(1).scrollTop(0).find('.list-wrap__item').eq(0).addClass('active-item')
    }

    function createDD(o, selYear, selMonth, unitText){
        var arrDay = rtArrayNum(31);
        var limitMinDate = o.minDate.getDate();
        var limitMaxDate = o.maxDate.getDate();
        
        arrDay = arrDay.slice(0, dateChk(selYear, selMonth));

        if(o.minDate.getFullYear() == parseInt(selYear) && (o.minDate.getMonth()+1) == parseInt(selMonth)){//최소 가입일 적용
            arrDay = arrDay.slice(limitMinDate-1);
        }
        if(o.maxDate.getFullYear() == parseInt(selYear) && (o.maxDate.getMonth()+1) == parseInt(selMonth)){//최대 만기일 적용
            arrDay = arrDay.slice(0, limitMaxDate);
        }
            
        var resultStr = '<ul class="list-wrap">';
        for(var i=0; i<arrDay.length; i++){
            resultStr += itemTemplate.replace(/{{value}}/g, arrDay[i] + unitText);
        }
        resultStr += '</ul>';

        o.scrollWrapper[o.groupIdx].selMM = selMonth;
        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(2).html(resultStr);
        o.scrollWrapper[o.groupIdx].scrollItems.find('.list-section').eq(2).scrollTop(0).find('.list-wrap__item').eq(0).addClass('active-item')
        return arrDay;
    }
    
    function singleCreateMM(o){
        var resultStr = '<ul class="list-wrap">';
        for(var i=0; i<o.items.length; i++){            
            resultStr += itemTemplate.replace(/{{value}}/g, o.items[i]['codeName']);
        }
        resultStr += '</ul>';
        o.scrollWrapper[0].scrollItems.find('.list-section').eq(0).html(resultStr);
        o.scrollWrapper[0].scrollItems.find('.list-section').eq(0).scrollTop(0).find('.list-wrap__item').eq(0).addClass('active-item')
    }
    
    function event($el, o){
        var $callBtn = o.$callBtn;

        //2022-10-17 이전 다음항목 클릭시
        $el.on('click', '.modal__contents .list-section .list-wrap__item', function(e){//2022-10-17 update
            var _this = $(this);
            var scrollContainer = _this.parents('.list-section');
            var scrTop = scrollContainer.scrollTop();
            if(_this.is('.active-item')) { return false;}
            if(_this.next('.active-item').length){//이전항목이라면
                scrollContainer.animate({
                    scrollTop:scrTop - 50
                }, 100);
            }
            if(_this.prev('.active-item').length){//다음항목이라면
                scrollContainer.animate({
                    scrollTop:scrTop + 50
                }, 100);
            } 
        });
        //모달내부 확인버튼 이벤트        
        o.$confirmBtn.off('click').on('click', function(){
            var _selectVal = '';
            var _selectVal2 = '';
            var _rtnVal = {};
            //탭이 존재한다면
            if(o.tabs.length){
                var activeIdx = o.tabs.find('.is-active').parent('.tab-wrap__item').eq(0).index();
                if(!!activeIdx){
                    o.scrollWrapper[activeIdx].$el.find('.active-item').each(function(subIdx){
                        if(!!subIdx){
                            _selectVal += "-"
                        }    
                        //Date format zerofill
                        _selectVal += (parseInt($(this).data('option-value'))+"").padStart(2, "0");
                    })
                    _selectVal2 = _selectVal;
                    _rtnVal.type = 'TM';
                    _rtnVal.res = _selectVal;
                }else{//multi innner single
                    _selectVal2 = o.scrollWrapper[activeIdx].$el.find('.active-item').data('option-value');
                    _selectVal = o.items[o.scrollWrapper[activeIdx].$el.find('.active-item').index()];
                    _rtnVal.type = 'TS';
                    _rtnVal.res = _selectVal;
                }
            }else{//single
                _selectVal2 = o.scrollWrapper[0].$el.find('.active-item').data('option-value');   
                _selectVal = o.items[o.scrollWrapper[0].$el.find('.active-item').index()];
                _rtnVal.type = 'S';
                _rtnVal.res = _selectVal;
            }

            $callBtn.attr('data-set-value', _selectVal2);
            //콜백함수에 선택값 전달
            o._callBackFn(_rtnVal);
            $('body').data('plugin_modal').close(obj);
        });

        $el.find('.list-section').each(function(){
            var scrollContainer = $(this);      
            var isMultiple = scrollContainer.parent().is('.col-3');
            var orgTargetIdx = 0;
            //스크롤시 이벤트
            scrollContainer.off('scroll').on('scroll',function(){
                var me = $(this);
                var items = me.find('.list-wrap__item');
                var _height = 60;// items.height() + margin;
                var scrTop = this.scrollTop + (_height/2);
                var activeTargetIdx =  (Math.floor(scrTop/_height));
                if(activeTargetIdx > items.length -1) {
                    activeTargetIdx = items.length -1;
                }
                //년도가 변할경우 월 데이터 갱신
                if(isMultiple && scrollContainer.index() === 0){//년
                    if(orgTargetIdx != activeTargetIdx){
                        
                        createMM(o, Object.keys(o.dateObj)[activeTargetIdx], "월");
                    }
                }
                if(isMultiple && scrollContainer.index() === 1){//월
                    if(orgTargetIdx != activeTargetIdx){
                        
                        createDD(o, o.scrollWrapper[o.groupIdx].selYY, parseInt(o.dateObj[o.scrollWrapper[o.groupIdx].selYY][activeTargetIdx]),  "일");
                    }
                }
                if(orgTargetIdx != activeTargetIdx && window.navigator.vibrate){
                    window.navigator.vibrate(100);
                }
                
                items.eq(activeTargetIdx).addClass('active-item').siblings().removeClass('active-item')
                orgTargetIdx = activeTargetIdx;
            })
        });        
    }

    init(obj);
};



/* swiper slide 아이템이 out될시에 구분 클래스를 적용해주는 함수  */
hanaProdUI.swiperOutTransition = function(swiperObj){
    swiperObj.on('slideChangeTransitionStart', function () {
        swiperObj.slides[swiperObj.previousIndex].classList.add('transition');
    })
    swiperObj.on('slideChangeTransitionEnd', function () {
        $(swiperObj.slides).removeClass('transition');
    })
}


hanaProdUI.getSwiperInfo;//2022-08-25 개발에서 사용할 함수 swiper정보를 가져오는 함수
hanaProdUI.validSwipeNext;//2022-08-25 개발에서 호출할 함수

//2022-09-14 수정
hanaProdUI.screenSwiper = function(scrollContainer){
    if(!$(scrollContainer).length){ return false;}
    $('body').addClass('page-h-swiper');
    //var nextButton = $('.step-screen-arrow');
    var swiperOptions = {
        resistanceRatio: 0,
        slidesPerView: 'auto',
        effect:'slide',
        threshold:20,
        spaceBetween: 0,
        speed: 300,
        allowSlideNext : false,
        direction:'vertical',
        slideClass : 'step-screen-container'
    }
    var swiperSection = new Swiper(scrollContainer, swiperOptions);

    //클로저
    var getSwiperInfo = function(swiperObj){
        var swiperObj = swiperObj;
        return function(){
            return swiperObj;
        }
    }
    var gSwipeNext = function(swiperObj){
        var swiperObj = swiperObj;
        
        return function(idx){
            swiperObj.params.allowSlideNext = true;
            swiperObj.allowSlideNext = true;
            if(idx) {
                swiperObj.slideTo(idx);
            }else{
                var nextIdx = swiperObj.realIndex+1;
                swiperObj.slideTo(nextIdx);
            }
            
            swiperObj.params.allowSlideNext = false;
            swiperObj.allowSlideNext = false;
        }
    }

    hanaProdUI.getSwiperInfo = getSwiperInfo(swiperSection);
    hanaProdUI.validSwipeNext = gSwipeNext(swiperSection);

    hanaProdUI.swiperOutTransition(swiperSection, scrollContainer, swiperOptions);
    var stepPagenation = $('.ste-progress');
    var stepPagenationItem = stepPagenation.find('.stepper__step');
    
    var initIdx = 0;
    if(stepPagenation.data('init-idx')){
        initIdx = eval(stepPagenation.data('init-idx'));
    }

    //2022-08-29 modify
    swiperSection.on('slideChangeTransitionStart', function(ui){
        stepPagenation.addClass('trasition');
        var swiperLen = $('.step-screen-container').length;
        var ingBtn = $('.step-screen-arrow');
        if(swiperSection.realIndex == (swiperLen-1)){
            ingBtn.addClass('last');

        }else{
            ingBtn.removeClass('last');
        }
    })
    swiperSection.on('slideChangeTransitionEnd', function(ui){
        stepPagenation.removeClass('trasition');
        isGetFeed = false;
        swiperSection.params.allowSlideNext = false;
        swiperSection.allowSlideNext = false;
       // $(scrollContainer).addClass('no-answer-yet');
        stepPagenationItem.eq(ui.realIndex + initIdx).addClass('stepper__step--current').siblings().removeClass('stepper__step--current')
    })

    /*
    nextButton.on('click',function(){
        hanaProdUI.validSwipeNext();
    })
    */
    // 2022-10-20 숫자 키패드팝업시 화면 스크롤
    $('.inner-content-scroll').on('click', '.input.native-readonly .native-inner', function(){
        var me = $(this);
        hanaProdUI.hanaRemoveDummyDiv();
        var safeAreaInsetTop = parseInt($('#content').css('padding-top')) - 56; //2022-10-04 ios 관련 추가
        var safeAreaInsetBtm = parseInt($('.app-footer').css('padding-bottom')) - 24;// 2022-10-20 ios 관련 추가
        if(($('body').get(0).clientHeight - 380 - safeAreaInsetBtm) < me.offset().top){
            var scrollTo = Math.abs(me.offset().top - ($('body').get(0).clientHeight - 380)) + safeAreaInsetTop + safeAreaInsetBtm;
            setTimeout(function(){
                $('.inner-content-scroll .swiper-slide-active').scrollTop(scrollTo);
            },20);
        }
    })
}
///가입프로세스
hanaProdUI.savgJoinPageInit = function() {
    hanaProdUI.screenSwiper('.inner-content-scroll');
    //hanaProdUI.inputFieldEditable('.input.underline-type');
}

///상품상세 
hanaProdUI.prdDetailPageInit = function() {
    function scrollMotion(){
        var heroHeight = $('.prodmall-section.section-top').height();
        $('.interaction-area').each(function(){
            var _this = $(this);
            
            var interactionPos = _this.get(0).getBoundingClientRect();
            if(interactionPos.top - heroHeight < 150){
                _this.addClass('motion-init');
            }
        })
    }
    scrollMotion();
    $(document).scroll(scrollMotion);

    $('.interaction-area').each(function(){
        var itemHeight = $(this).find('li').height() + 20;
        $(this).find('.bg-bar').height((itemHeight * $('.interaction-area li').length) - 20);
    });
}


//2022-09-14 청약 설문조사 추가
hanaProdUI.surveyFocus =  function(curObj){
    var curObj = $(curObj);
    var container = $('.survey-container');    
    var listItems = container.find('li.guide-wrap');
    var curItem = curObj.parents('li.guide-wrap').eq(0);
    var targetIdx = (arguments[1]) ? 0 : 1;
    listItems.each(function(idx){
        if(curItem.get(0) === this){
            var nextItem = listItems.eq(idx + targetIdx);
            if(nextItem.length){
                setTimeout(function(){//접힐 시간 필요
                    var scrollYpos = nextItem.offset().top;
                    if((idx + targetIdx) == container.eq(0).find('li.guide-wrap').length){//첫번째 섹션의 마지막 항목체크
                        scrollYpos = $('.survey-container:eq(1) .fixed-area').offset().top;
                    }
                    $('html,body').animate({
                        scrollTop:scrollYpos - ($('.app-header').height() * 2)
                    }, 500)
                },200)
            }
        }
    })
}

//2022-10-15 청약 설문조사 수정
hanaProdUI.surveyList = function(init){
    var init = init;
    var container = $('.survey-container');
    if(!container.length){ return false;}
    var listWrap = container.find('.survey-list');
    var qnaGroup = listWrap.find('.guide-wrap');

    qnaGroup.each(function(){
        var me = $(this);
        var qnaOption =  me.find('.title-xsmall .pualugin__button');
        var radioItems = me.find('.guide-wrap__list .radio-wrap__radio');

        if(init){
            radioItems.each(function(){
                var radioBtn = $(this);
                if(radioBtn.prop('checked')){
                    me.addClass('is-active');
                    radioBtn.parents('li').eq(0).addClass('is-visible').siblings().removeClass('is-visible');
                }
            })
        }

        radioItems.off('click').on('click', function(){
            var radioBtn = $(this);
            me.addClass('is-active');
            if(me.find('.is-visible').length){
                if(me.is('.fold-down')){
                    me.removeClass('fold-down');
                }else{
                    me.addClass('fold-down');
                }
            }
            if(radioBtn.prop('checked')){
                radioBtn.parents('li').eq(0).addClass('is-visible').siblings().removeClass('is-visible');
            }
        });

        qnaOption.off('click').on('click', function(){
            if(me.find('.is-visible').length){
                if(me.is('.fold-down')){
                    me.removeClass('fold-down');
                }else{
                    me.addClass('fold-down');
                }
            }
        })
    })
    //auto focus
    container.find('input[type=radio], input[type=checkbox]').on('change', function(){
        var _this = $(this);
        if(_this.prop('checked')){
            hanaProdUI.surveyFocus(_this);
        }
    })
    
}


//2022-10-12 수정 
var hanaprodMainUI = {
    sliderTab1 : function(obj, tab, idx){

        if($(obj).length < 1) return;

        /* slick내부 스크롤영역 이벤트 상속 제외 */
        $(".sub-menu-wrap").on("touchstart touchmove touchend",function(e){
            e.stopPropagation();
        });

        
        var $sliderTabs = $(tab).find('[role=tab]');
        var currentIndex = idx;
        var activeTabClass = 'is-active';
        var slideId = $(obj).data('slider-id');
        var tabPosition = [];

        $sliderTabs.each(function(i,e){
            $(e).attr({
                'data-slick-index' : i,
                'aria-selected' : false,
                'id' : slideId + '-tab-' + i,
                'aria-controls' : slideId + '-panel-' + i
            })
        });

        $sliderTabs.each(function(i,e){
            tabPosition[i] = tabPosition[0] ? parseFloat($(e).offset().left - 24).toFixed() : parseFloat($(e).offset().left - 10).toFixed()
        });
        $(obj).on({
            'init' : function(event, slick){
                currentIndex = slick.getCurrent();
                $(tab).stop().animate({ 'scrollLeft' : tabPosition[currentIndex-1] }, 0);
                $sliderTabs.eq(currentIndex).addClass(activeTabClass).attr('aria-selected', true);
                $(obj).find('>.slick-list>.slick-track>.slick-slide').each(function(i,e){
                    $(e).attr({
                        'id' : slideId + '-panel-' + i,
                        'role' : 'tabpanel',
                        'aria-labelledby' : slideId + '-tab-' + i
                    });
                })
                $('.svg-init').trigger('reInit');
            },
            'afterChange':function(event, slick){
                $(window).scrollTop(0);
                //emptyChk('.offer-wrap');//탭전환시마다 체크

                $('.svg-init').trigger('reInit');
                $(slick.$slides[currentIndex]).find('.svg-init').trigger('play');
            },
            'swipe' : function(event, slick, direction) {
                currentIndex = $(this).slick('slickCurrentSlide');
                $sliderTabs.eq(currentIndex)
                .addClass(activeTabClass).attr('aria-selected', true)
                .siblings().removeClass(activeTabClass).attr('aria-selected', false);
                $(tab).stop().animate({ 'scrollLeft' : tabPosition[currentIndex-1] }, 200);
            }
        });

        $sliderTabs.on('click', function(event) {
            currentIndex = $(this).data('slick-index');
            $sliderTabs.eq(currentIndex)
            .addClass(activeTabClass).attr('aria-selected', true)
            .siblings().removeClass(activeTabClass).attr('aria-selected', false);
            $(obj).slick('slickGoTo', currentIndex);
            $(tab).stop().animate({ 'scrollLeft' : tabPosition[currentIndex-1] }, 200);
        });

        $(obj).on('click', '.product-hero__button', function(e){
            e.stopPropagation();
            e.preventDefault();
        })

        $(obj).slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            adaptiveHeight : true,
            initialSlide: currentIndex,
            touchThreshold: 10,
            speed:120,
            useTransform: false
        });
        $(obj).slick('slickGoTo', currentIndex);

        
        /* 2022-11-01 삭제
        var headerHeight = 56;
        var $headerTit = $('.app-header__title');
        
        function changePageTit(_text){
            $headerTit.text("상품 | " + _text);
        }

        function fixed(winTop){
            if(winTop > headerHeight + 150){
                $headerTit.addClass('is-scroll');
                changePageTit($(tab).find('.is-active').text());
            }else{
                $headerTit.removeClass('is-scroll');
                $headerTit.text('상품');
            }
        }

        $(window).on('scroll', function(){
            winTop = Math.round($(window).scrollTop());
            fixed(winTop);
        })
        */
    },
    //2022-11-01 추가 
    headerTitCtr : function(tab){
        var headerHeight = 56;
        var $headerTit = $('.app-header__title');
        var safeAreaInsetTop = parseInt($('#content').css('padding-top')) - 56;
        
        function changePageTit(_text){
            $headerTit.text("상품 | " + _text);
        }

        function fixed(winTop){
            if(winTop > headerHeight + safeAreaInsetTop){
                $headerTit.addClass('is-scroll');
                changePageTit($(tab).find('.is-active').text());
            }else{
                $headerTit.removeClass('is-scroll');
                $headerTit.text('상품');
            }
        }

        var scrollEvntHeaderFn = function(){
            winTop = Math.round($(window).scrollTop());
            fixed(winTop);
        }
        $(window).off('scroll', scrollEvntHeaderFn).on('scroll', scrollEvntHeaderFn);
    },
    sticky : function(obj){//2022-10-31 수정
        var $obj = null;
        var $wrap = null;
        var objHeight = 0;
        var objTop = 0;
        var headerHeight = 0;
        var winTop = 0;
        var _mainSet = 0;
        var _gap = 0;
        var safeAreaInsetTop = parseInt($('#content').css('padding-top')) - 56; //2022-10-04 ios 관련 추가
        var safeAreaInsetBtm = parseInt($('#content').css('padding-bottom')) - 48; //2022-10-04 ios 관련 추가
        
        if(!$(obj).length){ return false;}
        function init(obj){
            $obj = $(obj);
            objHeight = $obj.outerHeight();
            //main 
            if($obj.prev('.hero-banner').length) {
                _gap = -13
            }else{
                _gap = -13
            }
            headerHeight = 56;
            
            objTop = $obj.offset().top;
            
            
            if(!$obj.parent('[data-sticky=wrap]').length){
                if($('.submain-panel').length){//submain
                    objHeight = 78;
                    objTop = 295;
                    _mainSet = 28
                }else if($obj.is('.classifiable')){//moneybox main
                    objHeight = 63;
                    objTop = 230;
                }else if($('#content').is('.info-use')){//moneybox intro
                    objHeight = 48;
                }else if($obj.is('.usage-history')){
                    objHeight = 192;
                    objTop = objTop- safeAreaInsetTop;//10-26 수정
                }else{
                    objHeight = 70;
                    objTop = 56;
                    _gap = -13 + safeAreaInsetTop;
                }
                $(obj).wrap('<div data-sticky="wrap" style="height:' + objHeight + 'px" />');
            }else{
                if($('.submain-panel').length){//submain
                    objHeight = 78;
                    objTop = 295;
                    _mainSet = 28
                }else if($obj.is('.classifiable')){//moneybox main
                    objHeight = 63;
                    objTop = 230;
                }else if($('#content').is('.info-use')){//moneybox intro
                    objHeight = 48;
                }else if($obj.is('.usage-history')){
                    objHeight = 192;
                    objTop = objTop- safeAreaInsetTop;//10-26 수정
                }else{
                    objHeight = 70;
                    objTop = 56;
                    _gap = -13 + safeAreaInsetTop;
                }
                $wrap = $obj.parent('[data-sticky=wrap]');
                $wrap.css('height', objHeight + 'px');
            }
            $wrap = $obj.parent('[data-sticky=wrap]');
    
            $wrap.removeClass('is-active');
            winTop = Math.round($(window).scrollTop());
    
            fixed(winTop);
            $wrap.removeClass('is-out');
        }
    
        function event(){
            //2022-09-01 수정 탭버튼 스크롤 포커싱 이벤트
            var motionFlag = false;
            var oldIdx = 0;
            function isActive(item){
                item.addClass('on').siblings().removeClass('on');
                var idx = item.index();
                var $obj = item.parents('.sub-menu-inner:eq(0)');
                if(idx > oldIdx){//우측 이동
                    if(idx > 2){
                        //console.log('right')
                        $obj.scrollLeft(999);
                    }
                }else{//좌측이동
                    if(idx < 3){
                        //console.log('left')
                        $obj.scrollLeft(0);
                    }
                }
                oldIdx = idx
            }
            var ankerBtnFn = function(e){
                e.preventDefault();
                isActive($(this).parent('li'));
                var _scrollDistance = $('body').get(0).scrollHeight - $('body').get(0).clientHeight;
                if(!_scrollDistance){ return false;}
                motionFlag = true;
                var goTopos = Math.floor($(this.hash).offset().top);
                var distance = Math.floor(objHeight + headerHeight) - _gap;
                /*
                    2022-10-06 보험 기타보장 관련 스크롤 가능여부 체크 추가
                    마지막요소가 아니지만, 스크롤 위치는 끝으로 가야하는 경우.
                */
                var isLastItem = $(this).parent('li').is(':last-of-type');
                var scrollToMove = (goTopos - distance - safeAreaInsetTop);
                if(!isLastItem){
                    if((_scrollDistance - scrollToMove) <= 0) {
                        scrollToMove = _scrollDistance - 2;
                    }
                }
                var motionFlagTimerId;
                $('html,body').stop().animate({
                    scrollTop: scrollToMove + 'px' //2022-10-06 ios 관련 수정
                }, 500, function(){
                    clearTimeout(motionFlagTimerId);
                    motionFlagTimerId = setTimeout(function(){
                        motionFlag = false;
                    },50)
                    
                })
            }
            $obj.find('.sub-menu a').off('click', ankerBtnFn).on('click', ankerBtnFn);
    
            //2022-10-31 modify scrollmenu
            var scrollEvntFn = function(){
                winTop = Math.round($(window).scrollTop());
                var isModalFlag = false;
                if($('body').is('.modal-open')){
                    winTop = Math.round($('#wrap').scrollTop());
                    isModalFlag = true;
                }
                fixed(winTop);
                if(!winTop){
                    $obj.each(function(){
                        var me = $(this);
                        isActive(me.find('.sub-menu li').eq(0))
                    })
                }
                
                if(!motionFlag && !isModalFlag){
                    $obj.each(function(){
                        var me = $(this);
                        var isVisible = this.getBoundingClientRect();
                        if(!isVisible.x){
                            me.find('.sub-menu a').each(function(idx){
                                var goTopos = Math.floor($(this.hash).get(0).getBoundingClientRect().y);
                                var distance = Math.floor(objHeight + headerHeight);
                                //2022-10-04 보험 기타보장 관련 130으로 수정
                                if(goTopos <= (distance + 130) && goTopos > 0 && idx != oldIdx){
                                    isActive(me.find('.sub-menu li').eq(idx));
                                }
                            })
                            //2022-10-06 마지막 탭
                            if ($('body').get(0).scrollHeight - Math.round($(window).scrollTop()) <= $('body').get(0).clientHeight) { //2022-10-06 
                                isActive(me.find('.sub-menu li').eq(me.find('.sub-menu li').length - 1));
                            }
                        }
                    })
                }
            }
            $(window).off('scroll', scrollEvntFn).on('scroll', scrollEvntFn);
        }
    
        //2022-10-08 수정
        function fixed(winTop){
            if(winTop - _mainSet > (objTop  - headerHeight)){//2022-10-25 가계부 관련 수정
                $wrap.addClass('is-active');
                $wrap.removeClass('is-out');
            }else{
                if($wrap.is('.is-active')){
                    $wrap.addClass('is-out');
                }
                $wrap.removeClass('is-active');
            }
        }
        init(obj);
        event();
    }
};


$(function(){
    hanaProdUI.prdDetailPageInit();
    hanaProdUI.surveyList();
})
