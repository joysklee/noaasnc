$(function(){
	var zoomx = 100;
	$(document).ready(function() {
	  $(".gnb > ul > li a").hover(
	    function() {
	      $(".depth2, depth2-wrap").stop().slideDown(200, function() {
	    	  $(this).css('display', 'flex');
	      });
	    },
	    function() {
	      $(".depth2").stop().slideUp(200);
	    }
	  );

	  $(".depth2").hover(
	    function() {
	      $(".depth2").stop().slideDown(200);
	    },
	    function() {
	      $(".depth2").stop().slideUp(200);
	    }
	  );
	});
    $(window).on('load resize', function(){
        var window_w = $("body").prop("clientWidth");
        var right_bg_position = window_w - 40;
        var right_bg_position_main = window_w - 60;
        var window_w_cal = window_w / 2;
        var window_h = $(window).height();
        var sub_visual_h = $('#sub_visual').outerHeight();
        sub_visual_h = sub_visual_h - 2;
        $('#header .center_wrapper > .gnbDp-1 li .depth_02').css({
            'width' : window_w,
            'margin-left' : -window_w_cal
        });
        $('#sub_slogun').css('line-height',sub_visual_h + 'px');
        if (window_w < 1201){

            if ($('#snb .subMDp-1').is(':visible')) {
                $('#snb .subMDp-1').css('display','none');
            }
            $('#snb > h2').css('background-position', right_bg_position + 'px 50%');
            $('.cs_sns_relatedsite_wrapper .cs_center').css('background-position', right_bg_position_main + 'px 13px');

            $('#snb > h2').on('click', function(){
                if ($('#snb .subMDp-1').is(':visible')) {tg
                    $(this).removeClass('on');
                    $('#snb .subMDp-1').slideUp();
                } else {
                    $(this).addClass('on');
                    $('#snb .subMDp-1').slideDown();
                }
            });
            $('#snb .subMDp-1 > li > a').on('click', function(event){
                $('#snb .subMDp-1 > li').removeClass('on');
                if ($(this).siblings('ul').length) {
                    event.preventDefault();
                    $(this).parent().addClass('on').children('ul').slideDown().parent('li').siblings().children('ul').slideUp();
                }
            });
            $('#navToggle').on('click', function(){
                $('body, #mobileGnb').css('height', window_h);
                $('body').addClass('mobileGnb_on');
                $('#mobileGnb, .mobie_mask').addClass('active');
            });
        } else {

            if (!$('#snb .subMDp-1').is(':visible')) {
                $('#snb .subMDp-1').css('display','block');
            }

        }
        if($(this).scrollTop() < 120) {
    		$('.gnb-wrap, .depth2-wrap').removeClass('fixed');
    	} else {
    		$('.gnb-wrap, .depth2-wrap').addClass('fixed');
    	}
    });
    // scroll
    $(window).on('scroll', function(){
    	if($(this).scrollTop() < 120) {
    		$('.gnb-wrap, .depth2-wrap').removeClass('fixed');
    	} else {
    		$('.gnb-wrap, .depth2-wrap').addClass('fixed');
    	}
    });
    $('#btn_m_gnd_close, .mobie_mask').on('click', function(){
        $('#mobileGnb, .mobie_mask').removeClass('active');
        $('body').removeClass('mobileGnb_on');
        $('body').css('height', 'auto');
    });
    var beforEvent;
    $('#mobileGnb .gnbDp-1 > li').on('click', function(e){
    	//e.preventDefault();
    	e.stopImmediatePropagation();
    	var on = $(this).hasClass("on");
    	var show = $(this).children('ul').css("display");
    	if( show == "none" ){
    		if(on){
    			on = false;
    		}
    	} else {
    		if( !on ){
    			on = true;
    		}
    	}
    	$('.gnbDp-1 > li > ul > li').removeClass('on');
    	if(beforEvent)
    		beforEvent.removeClass('on');
    	$(this).addClass('on').children('ul').slideDown().parent('li').siblings().children('ul').slideUp();
    	if( on ){
        	$(this).removeClass('on');
        	$(this).children('ul').slideUp();
        } else {
        	$(this).addClass('on');
        	$(this).children('ul').slideDown();
        	beforEvent = $(this);
        }
    });
    $('#mobileGnb .gnbDp-1 > li > ul > li').on('click', function(e){
    	e.stopImmediatePropagation();
    	var on = $(this).hasClass("on");
        $('.gnbDp-1 > li > ul > li').removeClass('on');
        $(this).addClass('on').children('ul').slideDown().parent('li').siblings().children('ul').slideUp();
        
    	if( on ){
        	$(this).removeClass('on');
        	$(this).children('ul').slideUp();
        } else {
        	$(this).addClass('on');
        	$(this).children('ul').slideDown();
        }
    });
});

// 가로사이즈 가장 큰값 구하기
function getMaxChildWidth(sel){
    max = 0;
    $(sel).find('a').each(function(){
        var c_width = parseInt($(this).width());
        if (c_width <= 15) {
            max = 15;
        } else {
            if (c_width > max) {
                max = c_width;
            }
        }
    });
    return(max);
}

// 엘리먼트 높이값 가장 큰 사이즈 구하기
$.fn.hiLow = function( arg ){
    var height = this.map(function( idx, el){
        return $(el).height();
    }).get();
    return this.height( Math[(arg !== 'min') ? 'max' : 'min'].apply( null,height )  );
}