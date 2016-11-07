$(function(){
	var dong=$(".dong")[0]
	var lengt=$(".small",dong).length
	var smallw=parseInt(getStyle($(".small",dong)[0], "width"))
	dong.style.width=smallw*lengt+"px";
	var left=0;
	var index=0;
	var k,x;
	var old=0
	for(var i=0;i<lengt;i++){
		$(".small",dong)[i].index=i
	}
	dong.onmousedown=function(e){
		var el=e||window.event
		k=el.clientX-left
		dong.onmousemove=function(e){
			var el=e||window.event
			 x=el.clientX
			dong.style.left=(k-x)*-1+"px"
		}
	}
	document.onmouseup=function(){
		left=parseInt(getStyle(dong,"left"))
		if(left>0){
			animate(dong,{left:0},500,function(){
				left=parseInt(getStyle(dong,"left"))
			})
		}
		var oldleft = Math.abs(old)
		var newleft = Math.abs(left)
		if(oldleft<newleft){  //向左移
			if(Math.abs(left%smallw)>(smallw/2)){
				animate(dong,{left:left-smallw-left%smallw},500,function(){
					left=parseInt(getStyle(dong,"left"))
				})
			}else{
				animate(dong,{left:left-left%smallw},500,function(){
					left=parseInt(getStyle(dong,"left"))
				})
			}
		}else{
			if(Math.abs(left%smallw)<(smallw/2)){
				animate(dong,{left:left-left%smallw},500,function(){
					left=parseInt(getStyle(dong,"left"))
				})
			}else{
				animate(dong,{left:left-smallw-left%smallw},500,function(){
					left=parseInt(getStyle(dong,"left"))
				})
			}
		}
		dong.onmousemove=null
		dong.onmouseup=null
		old = left
	}
	// function move(){
	// 	if(index==$(".small",dong).length){
	// 		index=0
	// 	}
	// 	animate(dong,{left:-smallw*index},500)
	// 	index++
	// }
})