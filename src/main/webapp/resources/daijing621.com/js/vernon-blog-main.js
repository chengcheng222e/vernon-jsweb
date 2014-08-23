/**
 * Vernon博客
 * 
 * @date 2012-11-12
 */

$(function(){
	// Meta鼠标经过显示提示
	metaHoverTip();
});


//Meta鼠标经过显示提示
function metaHoverTip(){
	$("a[rel='tooltip']").bind("mouseover",function(){
		$(this).tooltip("show");
		//console.log(1111);
	}); 
}