
let yOffset = 0;
let mediaQuery = $(window).width();
let winHeight = $(window).height();

function ixMain(){
	
	document.body.setAttribute('id', `show-scene-0`);

	function scrollControl(){
		var scrollContainer = $('body');
		var sectionItems = scrollContainer.find('article');
		var $scrollableAreas = $('.our_service_sub_info');
		var index = 0;
		var eventDefault = false;
		var posArr = [];
		var evTimerId = 0;
		var speed = 0;

        mediaQuery = $(window).width();
        winHeight = $(window).height();

		sectionItems.each(function(idx){
			posArr.push(this.getBoundingClientRect().top);
		})
        if (mediaQuery > 500) {

		function goTo(idx){
/*            
            console.log(posArr[idx]+'px')
			$('body').animate({
			    'scrollTop':posArr[idx]+'px'
			}, speed, 'easeOutExpo');
*/
			clearTimeout(evTimerId);
			evTimerId = setTimeout(function(){
				eventDefault = false;
			},speed);
/*
			if(idx){
				$('header').addClass('after');
                $('.to_the_top').addClass('active');

			}else{
				$('header').removeClass('after');
                $('.to_the_top').removeClass('active');
			}
  */          
            document.body.setAttribute('id', `show-scene-${index}`);
/*
            if(index < 8) {
                setTimeout(function() {
                    $('article').removeClass('active').eq(index).addClass('active');
                },300)
            } else {
                $('article').eq(7).addClass('active');
            }
*/
            if(index >= 1 && index <= 2) {
                let navMenu = $(`nav ul li[data-tabName="scrollSection${index}"`);
                navMenu.addClass('active');
                navMenu.siblings().removeClass('active');
            }
            if(index >= 2 && index <= 4) {
                let aside = $('aside');
                let asideMenu = $(`aside li[data-section="scrollSection${index}"`);
                aside.addClass('block');
                asideMenu.addClass('active');
                asideMenu.siblings().removeClass('active');
            } else {
                let aside = $('aside');
                aside.removeClass('block');
                
            }
        }

        function chgNavi(idx){
            if(idx){
				$('header').addClass('after');
                $('.to_the_top').addClass('active');

			}else{
				$('header').removeClass('after');
                $('.to_the_top').removeClass('active');
			}
            
            document.body.setAttribute('id', `show-scene-${index}`);

            if( !$('article').eq(index).hasClass('active')) {
                $('article').eq(index).addClass('active');
            }
/*
            if(index < 8) {
                setTimeout(function() {
                    $('article').removeClass('active').eq(index).addClass('active');
                },300)
            } else {
                $('article').eq(7).addClass('active');
            }
*/
            if(index >= 1 && index <= 2) {
                let navMenu = $(`nav ul li[data-tabName="scrollSection${index}"`);
                navMenu.addClass('active');
                navMenu.siblings().removeClass('active');
            }
            if(index >= 2 && index <= 4) {
                let aside = $('aside');
                let asideMenu = $(`aside li[data-section="scrollSection${index}"`);
                aside.addClass('block');
                asideMenu.addClass('active');
                asideMenu.siblings().removeClass('active');
                
            } else {
                let aside = $('aside');
                aside.removeClass('block');
                
            }
        }
/*
        function toTheTop() {
            $('.to_the_top').click(function() {
                goTo(0);
                index = 0;
                document.body.setAttribute('id', `show-scene-0`);
            });
        }
*/
        function toTheNav() {
            let navBtn = $('nav ul li');

            navBtn.click(function() {
                let sectionNumb = $(this).attr('data-tabName').slice(-1);
                console.log(sectionNumb);

                index = sectionNumb;
                goTo(index);
                document.body.setAttribute('id', `show-scene-${index}`);

            })

        }

        function toTheNav2() {
            let navBtn = $('aside ul li');

            navBtn.click(function() {
                let sectionNumb = $(this).attr('data-section').slice(-1);
                console.log(sectionNumb);

                index = sectionNumb;
                goTo(index);
            })

        }

        let lastActiveSectionIndex = -1; // 마지막으로 활성화된 섹션 인덱스를 저장할 변수

        var scrollhandle = function() {
            const sections = document.querySelectorAll('article');
            //const navLinks = document.querySelectorAll('#nav ul li');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                var yOffset = $('body').scrollTop() || $(window).scrollTop();
                if (yOffset >= sectionTop - 50) {
                    // 제공된 코드를 사용하여 섹션 번호 추출
                    let currentSectionIndex = $(section).attr('id').charAt($(section).attr('id').length - 1);
                    lastActiveSectionIndex = currentSectionIndex; // 마지막으로 활성화된 섹션 인덱스 업데이트
                    // 섹션이 변경되었는지 확인
                }
            });
            if (index !== lastActiveSectionIndex) {
                index = lastActiveSectionIndex;
                chgNavi(index);
                
                //console.log(`Section Changed to: ${lastActiveSectionIndex}`);
            }
            headerAndTopActive();
        }
        window.addEventListener('scroll', scrollhandle);
        $('body').get(0).addEventListener('scroll', scrollhandle);
        
        //toTheTop();
        toTheNav();
        toTheNav2();

        }
            
	}

	if (mediaQuery >= 768) {
        headerAndTopActive();
        scrollControl();
	}else{
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                window.location.reload();
            }, 200);
        }); 
       
        headerAndTopActive();
	}

    

}










// Header, buttonTop Scroll class Insertion
function headerAndTopActive() {
    yOffset = $('body').scrollTop() || $(window).scrollTop();
    if (yOffset > 1) {
        $('header').addClass('after');
        $('.buttonTop').addClass('active');
    } else {
        $('header').removeClass('after');
        $('.buttonTop').removeClass('active');
    }
}

/*
function moveTop() {
    document.body.scrollTo({top: 0, behavior:"smooth"});
}
*/
function mobileToTheTop() {
    $('.buttonTop').click(function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

$(document).ready(function(){
    
    
	ixMain();
    mobileToTheTop();
    if (mediaQuery <= 768) {
        window.addEventListener('scroll', () => {
            headerAndTopActive();
            
        });
        
        //mobileNav();
        //mobileSection();
    }
})

/*
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        window.location.reload();
    }
});
*/

