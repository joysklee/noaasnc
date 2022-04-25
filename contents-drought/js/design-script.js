var slideIndex = 1;
function showSlides(n) {
	var slides = $('.slide').find('li');
	var dots = $('.dots span');
	if(n > slides.length) {slideIndex = 1}
	if(n < 1) {slideIndex = slides.length}
	for(var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for(var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += "active";
}
function showCarousel(n) {
	var slides = $('.carousel').find('li');
	if(n > slides.length-2) {slideIndex = 1}
	if(n < 1) {slideIndex = slides.length-2}
	var i = slides.width()+15;
	slides.parent().css('left', -(i * (slideIndex-1))+ 'px')
}

$(document).ready(function(){
//	$(".datepicker input").datepicker({
//		changeMonth : true,
//		changeYear : true,
//		showMonthAfterYear : true, // 타이틀영역 월이전 년출력 (년/월 순)
//		showOtherMonths : true, // 현재월에 이전,다음달 날짜표시
//		dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ], // 요일
//		monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월',
//				'8월', '9월', '10월', '11월', '12월' ], // 달 출력텍스트
//		dateFormat : "yy-mm-dd", // 표기방법
//		showOn : "both",
//		buttonImage : "../images/gis/ic-calendar.png",
//		buttonImageOnly : true,
//		buttonText : "날짜선택",
//		beforeShow: function() {
//			$(this).datepicker("widget").removeClass("hide-days");
//			$(this).datepicker("widget").removeClass("year-only");
//		}
//	});
	$('.control button').on('click', function(e) {
		e.preventDefault();
		$('.list').show();
	})
	$('.btn-close').on('blur click', function(e) {
		e.preventDefault();
		$(this).parent().hide();
	});
	
	// slide
	$('.slide button').on('click', function(e) {
		if($(this).hasClass('prev')) {
			showSlides(slideIndex += -1);
		} else {
			showSlides(slideIndex += 1);
		}
	});
	// carousel
	$('.carousel button').on('click', function(e) {
		if($(this).hasClass('prev')) {
			showCarousel(slideIndex += -1);
		} else {
			showCarousel(slideIndex += 1);
		}
	});
	
});
