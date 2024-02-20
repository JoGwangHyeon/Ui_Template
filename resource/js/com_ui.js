
$(document).ready(function() {

    // Scroll Control
    document.body.setAttribute('id', `show-scene-0`);

    $(window).scroll(function() {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 0) {
            $('body').attr('id', 'show-scene-1').removeClass('show-scene-0');
            $('.buttonTop').addClass('active');
            $('header').addClass('active');
        } else {
            $('body').attr('id', 'show-scene-0').removeClass('show-scene-1');
            $('.buttonTop').removeClass('active');
            $('header').removeClass('active');
        }
    });

    $('.buttonTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // Tab
    $('.tab').on('click', function () {
        var idx = $(this).index();
        $('.tab').removeClass('on');
        $(this).addClass('on');
        $('.tabpanel').removeClass('on').eq(idx).addClass('on');
    });

	// Input Text Delete
    $('.deleteButton').click(function() {
		$('.textInput').val('');
		$('.deleteButton').css('display','none');
	});
	$('.textInput').on('input', function() {
		if ($(this).val() === '') {
			$('.deleteButton').css('display','none');
		} else {
			$('.deleteButton').css('display','block');
		}
	});

    // Accordion
    $('.accordion .tit_click').click(function() {
				
        const listItem = $(this).closest('.accordion > li');
        const isContentVisible = listItem.hasClass('on');

        $('.accordion > li').removeClass('on');
        $('.accordion > li .conts').slideUp(200);

        if (!isContentVisible) {
          listItem.addClass('on').find('.conts').slideDown(200);
        }
    });

    // Tooltip layer
    $(".toolTips .click").click(function(){

        var toolTopLayer = $('.toolTips');

        if( toolTopLayer.hasClass('on') ){
            toolTopLayer.removeClass('on');
        } else {
            toolTopLayer.addClass('on');
        }
    });

    // Text flow
    $('.my-news-ticker-1').AcmeTicker({
        type:'horizontal',
        speed:1000,
        direction: 'right',/*up/down/left/right*/
        controls: {
            prev: $('.acme-news-ticker-prev'),
            toggle: $('.acme-news-ticker-pause'),
            next: $('.acme-news-ticker-next')
        }
    });
    $('.my-news-ticker-2').AcmeTicker({
        type:'marquee',
        direction: 'left',/*up/down/left/right*/
        speed: 0.05,
        controls: {
            toggle: $('.acme-news-ticker-pause'),
        }
    });
    $('.my-news-ticker-3').AcmeTicker({
        type:'typewriter',
        direction: 'right',/*up/down/left/right*/
        speed:50,
        controls: {
            prev: $('.acme-news-ticker-prev'),
            toggle: $('.acme-news-ticker-pause'),
            next: $('.acme-news-ticker-next')
        }
    });
    $('.my-news-ticker-4').AcmeTicker({
        type:'vertical',
        direction: 'right',/*up/down/left/right*/
        speed:1000,
        controls: {
            prev: $('.acme-news-ticker-prev'),
            next: $('.acme-news-ticker-next'),
            toggle: $('.acme-news-ticker-pause')
        }
    });
    
});

// Textarea 글자수 제한
function countBytes() {
    const text = document.getElementById('inputText').value;
    const byteCount = new Blob([text]).size;

    const countDisplay = document.getElementById('byteCount');
    countDisplay.innerHTML = `<span>${byteCount}/100 bytes</span>`;

    if (byteCount > 100) {
        document.getElementById('inputText').value = text.substring(0, text.length - 1);
        countBytes();
    }
}




$(function() {
    //input을 datepicker로 선언
    $("#datepicker1").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
        ,changeYear: true //option값 년 선택 가능
        ,changeMonth: true //option값  월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        ,buttonText: "선택" //버튼 호버 텍스트              
        //,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
        ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후) 
    });                    
    
    //초기값을 오늘 날짜로 설정해줘야 합니다.
    $('#datepicker1').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)   


$("#datepicker2").datepicker({
        dateFormat: 'yy-mm-dd' //달력 날짜 형태
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
        ,changeYear: true //option값 년 선택 가능
        ,changeMonth: true //option값  월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
        ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        ,buttonText: "선택" //버튼 호버 텍스트              
        //,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
        ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
    });
    
    //초기값을 오늘 날짜로 설정해줘야 합니다.
    $('#datepicker2').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)    
});