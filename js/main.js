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
});