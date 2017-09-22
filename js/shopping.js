var flag=0;
var num=0;
//定义全价
var money=0;
//定义当当网价格
var ddMoney=0;
//定义积分
var jifen=0;
function change(){
	ddMoney = 0;
	money = 0;
	jifen = 0;
	for(var i=0;i<6;i++){
		//获得全价
		money += +$('.shopping_product_list_3:eq('+i+') label').text() 
			* $('.shopping_product_list_5:eq('+i+') input').val();

		//获得优惠后的价格
		ddMoney += +$('.shopping_product_list_4:eq('+i+') label').text() 
			* $('.shopping_product_list_5:eq('+i+') input').val();

		//获得商品积分
		jifen += +$('.shopping_product_list_2:eq('+i+') label').text() 
			* $('.shopping_product_list_5:eq('+i+') input').val();
	}
	//写入对应位置
	$('#product_total').html(ddMoney.toFixed(2));
	$('#product_integral').html(jifen.toFixed(2));
	$('#product_save').html((money-ddMoney).toFixed(2));
}
$(function(){
	//商品列表
	$("#shopping_commend_arrow").click(function(){
		if(flag == 0){
			$('#shopping_commend_sort').slideUp(500);
			$("#shopping_commend_arrow").attr('src','images/shopping_arrow_down.gif');
			flag ++ ;
		}else{
			$('#shopping_commend_sort').slideDown(500);
			$("#shopping_commend_arrow").attr('src','images/shopping_arrow_up.gif');
			flag = 0;
		}
	});
	//点击删除按钮
	$('.shopping_product_list_6').click(function(){
		$(this).siblings(':eq(4)').children(':eq(0)').val(0);
		$(this).parent().fadeOut(500);
		change();
		$(this).parent().fadeOut(500);

	});
	//点击清空购物车按钮
	$('#removeAllProduct').click(function(){
		timer=setInterval(function(){
			$('.shopping_product_list').eq(num).fadeOut(200);
			num++;
			if(num == 6)
				clearInterval(timer);
		},250);
		$('.shopping_product_list input').val(0);
		change();
	});
	//当改变输入框数值
	$('.shopping_product_list_5 input').stop().change(function(){
		change();
	})
	
})