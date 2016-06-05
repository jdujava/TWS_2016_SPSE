(function ($){
	$(document).ready(function(){

		var width = $(window).width();
		var height = $(window).height();
		var scroll_height = $('.scroll').height();
		var page_height = $('.active').height() - height;
		var scrolltop;

		var bool = false;

		
		$(window).on('resize', function(){
			width = $(window).width();
			height = $(window).height();
			scroll_height = $('.scroll').height();

		});

		$('.scroll').click(function (e) {
			page_height = $('.active').height() - height;
			var posY = e.pageY - $(this).offset().top;
			var progress = page_height*posY/scroll_height;
			$('body').stop().animate({'scrollTop' : progress},700,'easeInOutQuad');
			$('.dot-box').stop().animate({top: posY},700,'easeInOutQuad');
		});

		$('.dot-box').on('mousedown', function(){
			bool = true;
		});
		$(window).on('mouseup', function(){
			bool = false;
		});
		$(window).on('mousemove', function(e){
			if (bool==true){
				page_height = $('.active').height() - height;
				var posY = Math.min((0.95*height-75),(Math.max(0,(e.pageY) - ($('.scroll').offset().top))));
				var progress = page_height*posY/scroll_height;
				$('body').scrollTop(progress);
				$('.dot-box').css('top' , posY);
			};
		});


		var count = 1;
		var item;
		var float_item;
		var float_item_offset;
		var visible_height;

		$(window).on('scroll', function(e){
			
			page_height = $('.active').height() - height;
			scrolltop = $(window).scrollTop();
			var progress = 100*scrolltop/page_height;
			$('.dot-box').css({
				'top' : progress+'%'
			});


			if ($('.active').attr('id')=='homesite') {
				if (count < 3){
					item = '.anim' + count; 
					float_item = $('.active').children().children().filter(item);
					float_item_offset = float_item.offset().top;
					visible_height = float_item_offset - height*0.9;
					if (scrolltop > visible_height) {
						$(float_item).addClass('floated-in');
						count++;
					};
				};
			};

		});

		

		$('.toggle').click(function (e) {
			$('.toggle').children().toggleClass('clicked');
			$('.toggle').toggleClass('active-toggle');
			$('.black').toggleClass('active-nav');
		});


		$(".toggle").on('mouseenter',function () {
	  		if ($(this).position().top == 5){
	  			$(this).addClass('possible');
	  		}
	  		else{
	  			$(this).removeClass('possible');
	  		};
		});

		$("a").on('mouseenter mouseleave',function (e) {
	  		if (e.type === 'mouseenter') {
	  			$(this).children().filter('.title-s').css({
				'left': '0px'
				 });
				$(this).children().children().css({
				'transition' : 'left 0.3s ease',
				'left' : '0px',
				'opacity' : '1'
				 });
	  		};
	  		if(e.type === 'mouseleave') {
	  			$(this).children().filter('.title-s').css({
				'left': '-51px'
				 });
	  			$(this).children().children().css({
				'left': '-155px',
				'opacity' : '0',
				'transition' : 'left 0.3s ease, opacity 0s 0.3s',
				 });
	  		};
		});

		$('#homesite').addClass('active');
		$('.content').not('.active').hide(1);
		$('li a').click(function(){
			$('.toggle').trigger('click');
			var site = '#' + $(this).attr('id') + 'site';
				$('.content').hide(1).removeClass('active');
				$(site).show(1);
			setTimeout(function(){
				$(site).addClass('active');
				page_height = $('.active').height() - height;
				count = 1;
				$('.floated-in').removeClass('floated-in');
			}, 100);
			
		});




		$('.gallery-item').click(function(e){
			if (bool==false){
				var item_top = $(this).position().top;
				var center = item_top - 0.175*height;
				$('body').stop().animate({'scrollTop' : center},700,'easeInOutQuad');
				
				$('.full-size').removeClass('full-size');
				$(this).addClass('full-size');
			};
		});


		$('.learn').click(function(){
			var index = $(this).parent().index();
			$('.item-description').eq(index).addClass('active-description');
			console.log(index);
		});

		$('.item-description').click(function(){
			$('.item-description').removeClass('active-description');
		});

		var inprocess = false;
		$('#gallerysite').bind('mousewheel', function(e){
			if (inprocess != true) {
				if(e.originalEvent.wheelDelta < 0) {
					inprocess = true;
					setTimeout(function(){
						inprocess = false;
					}, 700);
			        var item_top = $('.full-size').next().position().top;
					var center = item_top - 0.175*height;
					$('body').stop().animate({'scrollTop' : center},700,'easeInOutQuad');
					
					$('.full-size').removeClass('full-size').next().addClass('full-size');

			    }else if(e.originalEvent.wheelDelta > 0) {
			    	inprocess = true;
					setTimeout(function(){
						inprocess = false;
					}, 700);
			        var item_top = $('.full-size').prev().position().top;
					var center = item_top - 0.175*height;
					$('body').stop().animate({'scrollTop' : center},700,'easeInOutQuad');
					
					$('.full-size').removeClass('full-size').prev().addClass('full-size');
			    }
			};
		    
		    return false;
		});
	});
	
	
	var inputFields = $('.form-label').next();
	inputFields.each(function(){
		var singleInput = $(this);
		( singleInput.val() == '' ) ? singleInput.prev('.form-label').removeClass('float') : singleInput.prev('.form-label').addClass('float');	
		singleInput.on('change keyup', function(){
			( singleInput.val() == '' ) ? singleInput.prev('.form-label').removeClass('float') : singleInput.prev('.form-label').addClass('float');	
		});
	});

	var send = false;
	var sendTime = new Date().getTime();

	$('input[type="submit"]').on('mousedown',function(e){
		send = true;
		sendTime = new Date().getTime();
		$('.border-width').removeClass('deactive-width');
		$('.border-height').removeClass('deactive-height');
		setTimeout(function(newSendTime){
			if (send && newSendTime == sendTime) {
				alert('Nothing has been sended you foooool, this message shall not paaaaaaaasssssss!!!!!!!');	
			}
		}.bind(null, sendTime), 1000);
	});
	$('input[type="submit"]').on('mouseup mouseout',function(e){
		send = false;
		$('.border-width').addClass('deactive-width');
		$('.border-height').addClass('deactive-height');
	});
	$('input[type="submit"]').click(function(e){
		e.preventDefault;
		return false;
	});
	
})(jQuery);