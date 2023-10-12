;(function($){
	$.extend({
		inputStyle:function(){
			function check(el,cl){
				$(el).each(function(){
					$(this).parent('i').removeClass(cl);

					var checked = $(this).prop('checked');
					if(checked){
						$(this).parent('i').addClass(cl);
					}
				})
			}	
			$('input[type="radio"]').on('click',function(){
				check('input[type="radio"]','radio_bg01_check');
			})
			$('input[type="checkbox"]').on('click',function(){
				check('input[type="checkbox"]','checkbox_bg01_check');
			})
		}
		
	})

})(jQuery)

//调用
$(function(){
	$.inputStyle();
})