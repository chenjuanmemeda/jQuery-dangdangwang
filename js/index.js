
$(function(){
	//“我的当当”下拉菜单
	window.open('open.html','','width=500px,height=350px');
	$('#menu').hover(function(){
		$('#dd_menu_top_down').slideDown(100);
	},function(){
		$('#dd_menu_top_down').slideUp(100);
	})
	//右侧广告随滚轮动
	$(window).scroll(function(){
		var $scrollTop=$(document).scrollTop();
		$('#right').animate({'top':$scrollTop+50+'px'},50);
	})
	//右侧广告点击关闭
	$('#dd_close').click(function(){
		$('#right').css({'display':'none'});
	})
	//点击轮播图切换
	$('#scroll_number li').click(function(){
		var index=$(this).index();
		// $('#scroll_img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$('#scroll_img li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(1000);  
	})
	//选项卡
	$('#bookTab .book_new .book_type').click(function(){
		//切换选项卡
		$(this).addClass('book_type_out').siblings().removeClass('book_type_out');
		var num=$(this).index();
		//切换显示内容
		$('#bookTab .book_class dl').eq(num-1).removeClass('book_none').siblings().addClass('book_none');
	})
	//“书讯快递”自动滚动
	var number=0;
	var timer=setInterval(function(){
		$('#express li').eq(number).css({'display':'none'});
		number++;
		if(number>30){
			for(var i=0;i<30;i++){
				$('#express li').eq(i).css({'display':'block'});
			}
			number=0;
		}
	},1000);
})

