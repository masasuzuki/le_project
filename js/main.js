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
	$(window).on('scroll',function(){
 	var scrollTop = $(window).scrollTop();
 	if(scrollTop > 320){
  		$('.navbar').stop().animate({
 			backgroundColor:'white'
 		},500
 		);
 		$('.nav li a').stop().animate({
 			color:'#003366'
 		},500
 		);
 		$('.mainMenu').switchClass('mainMenu', 'mainMenuScroll', 1000);
 		
 		return false;
 	}
 	if(scrollTop == 0){
  		$('.navbar').stop().animate({
 			backgroundColor:'transparent'
 		});
 		$('.nav li a').stop().animate({
 			color:'white'
 		},500
 		);
 		$('.mainMenuScroll').switchClass('mainMenuScroll', 'mainMenu', 1000);
 	}
	});

	//partnerMAILアイコン
	$(".partner span")
		.on('mouseover', function(){
			$('#partnerBlock').stop().animate({
				opacity:'1.0'
			},500
			);
			$('#partnerComent').stop().animate({
				opacity:'1.0'
			},500
			);
		}).on('mouseout', function(){
			$('#partnerBlock').stop().animate({
				opacity:'0.8'
			},500
			);
			$('#partnerComent').stop().animate({
				opacity:'0'
			},500
			);
		});

	//contactMAILアイコン
	$(".mail span")
		.on('mouseover', function(){
			$('#mailBlock').stop().animate({
				opacity:'1.0'
			},500
			);
			$('#mailComent').stop().animate({
				opacity:'1.0'
			},500
			);
		}).on('mouseout', function(){
			$('#mailBlock').stop().animate({
				opacity:'0.8'
			},500
			);
			$('#mailComent').stop().animate({
				opacity:'0'
			},500
			);
		});

	//contactTELアイコン
	$("#telBlock")
		.on('mouseover', function(){
			$('#telBlock').stop().animate({
				opacity:'1.0'
			},500
			);
			$('#telComent').stop().animate({
				opacity:'1.0'
			},500
			);
		}).on('mouseout', function(){
			$('#telBlock').animate({
				opacity:'0.8'
			},500
			);
			$('#telComent').stop().animate({
				opacity:'0'
			},500
			);
		});


});