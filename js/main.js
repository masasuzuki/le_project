$(function(){
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 770;
    if (x <= y) {
       //$('#change_text').html('<p class="fadeInMain text-center text-inverse main_text">LIVE EST ,INC.</p>');
    } else {
       //$('#change_text').html('<p class="text-center text-inverse" style="font-size:80px; letter-spacing:4px; display:inline-block;">LIVE EST ,INC.<br></p><br><p class="text-center text-inverse" style="font-size:30px; letter-spacing:2px; display:inline-block;">- Always From Here-</p>');
    }

	//windowのサイズによりテキストを入れ替える
	$(window).resize(function(){
	    
	    //windowの幅をxに代入
	    var x = $(window).width();
	    //windowの分岐幅をyに代入
	    var y = 770;
	    if (x <= y) {	//一時不要
	    	//$('#change_text').html('<p class="fadeInMain text-center text-inverse main_text">LIVE EST ,INC.</p>');
	    } else {
	    	//$('#change_text').html('<p class="text-center text-inverse" style="font-size:80px; letter-spacing:4px; display:inline-block;">LIVE EST ,INC.<br></p><br><p class="text-center text-inverse" style="font-size:30px; letter-spacing:2px; display:inline-block;">- Always From Here-</p>');
	    }
	});

	//button1の制御//0221変更：'#3CA89F'
	$('.button1 a').on('mouseover',function(){
		$(this).stop().animate({
			backgroundColor:'#01044E',
			borderColor:'white',
			color:'white'
		},500
		);
	}).on('mouseout',function(){
		$(this).stop().animate({
			backgroundColor:'transparent',
			borderColor:'#08233E',
			color:'#08233E'
		},500
		);
	});
	//button2の制御 0310色変更：'#00CCFF'
	$('.button2 a').on('mouseover',function(){
		$(this).stop().animate({
			backgroundColor:'#01044E',
			borderColor:'#01044E',
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
            //メニューバーを表示
            $('.navbar').removeClass('hide');
            
	  		$('.navbar').stop().animate({
	 			backgroundColor:'white'
	 		},500,
	 		function(){
		 		$('#top_logo').attr('src', 'img/le_logo_01.png');
		 		$('.mainMenu').switchClass('mainMenu', 'mainMenuScroll', 10);
	 		}
	 		);
	 		$('.nav li a').stop().animate({
	 			color:'#003366'
	 		},500,
	 		function(){
		 		//if($('#top_logo').attr("src") === "img/le_logo_02.png" ){
		 		//}
	 		}
	 		);
	 		//return false;
	 	}
	 	if(scrollTop == 0){
            //スクロール禁止
            //PC用
            var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
            $(document).on(scroll_event,function(e){e.preventDefault();});
            //SP用
            //$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});

            //メニューバーを隠す
            $('.navbar').addClass('hide');

	  		$('.navbar').stop().animate({
	 			backgroundColor:'transparent'
	 		},500,
	 		function(){
			 	$('#top_logo').attr('src', 'img/le_logo_02.png');
		 		$('.mainMenuScroll').switchClass('mainMenuScroll', 'mainMenu', 10);
	 		}
	 		);
	 		$('.nav li a').stop().animate({
	 			color:'white'
	 		},500,
	 		function(){
		 		//if($('#top_logo').attr("src") === "img/le_logo_01.png" ){
				//}
	 		}
 			);
	 		//return false;
	 		//$('#top_logo').stop().animate({
	 		//	marginLeft:'-100px'
	 		//},100
	 		//).stop().animate({
	 		//	marginLeft:'40px'
	 		//},1000
	 		//);
	 	}
	});

	//partnerMAILアイコン
	$(".partner span")
		.on('mouseover', function(){
			$('#partnerBlock').stop().animate({
				opacity:'0.7'
			},500
			);
			$('#partnerComent').stop().animate({
				opacity:'0.7'
			},500
			);
		}).on('mouseout', function(){
			$('#partnerBlock').stop().animate({
				opacity:'1.0'
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
				opacity:'0.7'
			},500
			);
			$('#mailComent').stop().animate({
				opacity:'0.7'
			},500
			);
		}).on('mouseout', function(){
			$('#mailBlock').stop().animate({
				opacity:'1.0'
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
				opacity:'0.7'
			},500
			);
			$('#telComent').stop().animate({
				opacity:'0.7'
			},500
			);
		}).on('mouseout', function(){
			$('#telBlock').animate({
				opacity:'1.0'
			},500
			);
			$('#telComent').stop().animate({
				opacity:'0'
			},500
			);
		});


});