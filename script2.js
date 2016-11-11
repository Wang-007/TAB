/*延迟切换*/
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//标签索引
	var index=0;
	var timer=null;

	var titles=$('notice-tit').getElementsByTagName('li');
		divs = $('notice-con').getElementsByTagName('div');
		if (titles.length != divs.length)
			return;
		//遍历titles下的所有li
		for (var i = 0; i < titles.length; i++) {
			titles[i].id = i;
			titles[i].onmouseover = function(){
				//用that这个变量引用当前滑过的li,因为在setTimeout里面this的对象是window
				var that = this;
				//如果存在准备执行的定时器,立刻清除,只有当前停留时间大于500ms时才开始执行
				if (timer) {
					clearTimeout(timer);
					timer=null;
				}
				//延迟半秒执行
				timer=setTimeout(function(){
					for (var j = 0; j < titles.length; j++) {
						titles[j].className='';
						divs[j].style.display='none';
					}
					titles[that.id].className='select';
					divs[that.id].style.display='block';
				}, 500);
			}
		}
}		