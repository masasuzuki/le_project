$(function(){
	//button1の制御
	$('.button1 a').on('mouseover',function(){
		$(this).stop().animate({
			backgroundColor:'#00CCFF',
			borderColor:'white',
			color:'white'
		},500
		);
	}).on('mouseout',function(){
		$(this).stop().animate({
			backgroundColor:'transparent',
			borderColor:'#3CA89F',
			color:'#3CA89F'
		},500
		);
	});
	//button2の制御
	$('.button2 a').on('mouseover',function(){
		$(this).stop().animate({
			backgroundColor:'#00CCFF',
			borderColor:'#00CCFF',
			color:'white'
		},500
		);
	}).on('mouseout',function(){
		$(this).stop().animate({
			backgroundColor:'transparent',
			borderColor:'white',
			color:'white'
		},500
		);
	});
	//button3の制御
	$('.button3 a').on('mouseover',function(){
		$(this).stop().animate({
			backgroundColor:'#00CCFF',
			borderColor:'#00CCFF',
			color:'white'
		},500
		);
	}).on('mouseout',function(){
		$(this).stop().animate({
			backgroundColor:'transparent',
			borderColor:'black',
			color:'black'
		},500
		);
	});

	//メニューバースクロール制御
//	$(window).on('scroll',function(){
//  	var scrollTop = $(window).scrollTop();
//  	if(scrollTop > 300){
//   		$('.navbar').stop().animate({
//  			backgroundColor:'white'
//  		},500
//  		);
//  		$('.mainMenu').switchClass('mainMenu', 'mainMenuScroll', 1000);
//  		return false;
//  	}
//  	if(scrollTop == 0){
//   		$('.nav li').css({
//  			backgroundColor:'transparent'
//  		});
// 			$('.mainMenuScroll').switchClass('mainMenuScroll', 'mainMenu', 1000);
//  	}
//	});
});