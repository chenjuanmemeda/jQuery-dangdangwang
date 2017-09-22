$(function(){
	$('#nickName_prompt').addClass('gray').html('昵称可由大小写英文字母、数字组成，长度为5-20个字符');
	// 
	// 正则表达式
	var reg='';

	//省市联动
    var cityList = new Array();
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
    cityList['其他'] = ['其他'];

	function init(obj,val){
		$(obj).removeClass('checkIt gray red brown')
			.addClass('red').html('请输入'+val+'!');
	}
	//判断邮箱
	$('#email').change(function(){
		var reg=/[a-zA-Z1-9]+\w+@\w{1,5}.com/;
		if(reg.test($(this).val())){
			$(this).removeClass('brown').addClass('green');
			$('#email_prompt').removeClass('red').addClass('checkIt').html('');
		}else{
			$(this).removeClass('green').addClass('brown');
			$('#email_prompt').removeClass('checkIt').addClass('red').html('请输入正确格式的邮箱！');
		}
	})

	//判断昵称
	$('#nickName').change(function(){
		var reg=/\w{5,20}/;
		if(reg.test($(this).val())){
			$(this).removeClass('brown gray').addClass('green');
			$('#nickName_prompt').removeClass('red').addClass('checkIt').html('');
		}else{
			$(this).removeClass('green gray').addClass('brown');
			$('#nickName_prompt').removeClass('checkIt gray').addClass('red').html('请输入正确格式的昵称！');
		}
	})

	//判断密码
	$('#pwd').change(function(){
		var reg=/\w{5,20}/;
		if(reg.test($(this).val())){
			$(this).removeClass('brown gray').addClass('green');
			$('#pwd_prompt').removeClass('red').addClass('checkIt').html('');
		}else{
			$(this).removeClass('green gray').addClass('brown');
			$('#pwd_prompt').removeClass('checkIt gray').addClass('red').html('请输入正确格式的密码！');
		}
	})
	
	$('#repwd').change(function(){
		if($(this).val() == $('#pwd').val()){
			$(this).removeClass('brown gray').addClass('green');
			$('#repwd_prompt').removeClass('red').addClass('checkIt').html('');
		}else{
			$(this).removeClass('green gray').addClass('brown');
			$('#repwd_prompt').removeClass('checkIt gray').addClass('red').html('请输入相同的密码！');
		}
	})

	//下拉选项
	var flag=0;
	var num=0;
		//承载下拉选项
	var opt1='';
	var opt2='';
		//将下拉选项添加进去
	for(item in cityList){
		op1='<option>'+item+'</option>';
		$('#province option').eq(flag).after(op1);
		flag++;
	}
		//当选中一个省份
	$('#province').change(function(){
		$('#city').html('<option>请选择城市/地区</option>')

		for(item in cityList[$(this).val()]){
			op2='<option>'+cityList[$(this).val()][item]+'</option>';
			$('#city option').eq(num).after(op2);
			num++;
		}
		num=0;
	})
})