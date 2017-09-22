$(function(){
	$('input:submit').click(function(){
		if($('input:text').val() == ''){
			alert('请输入email地址或账号！');
			return false;
		}else if($('input:password').val() == ''){
			alert('请输入密码');
			return false;
		}else{
			alert('登录成功');
		}
	})
})