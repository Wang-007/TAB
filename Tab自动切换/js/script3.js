/*自动切换*/
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;
function tab(){
	//当前高亮显示的标签索引
	var index=0;
	var timer=null;
	//获取所有的标签和要切换的内容
	var titles = $('notice-tit').getElementsByTagName('li');
	var	divs = $('notice-con').getElementsByTagName('div');
	//遍历每一个标签且给他们绑定事件
	for (var i = 0; i < titles.length; i++) {
		titles[i].id=i;
		titles[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
		}
		titles[i].onmouseout=function(){
			timer = setInterval(autoPlay, 2000);
		}
	}
	if (timer) {
		clearInterval(timer);
		timer=null;
	}
	//添加定时器,改变当前高亮的索引
	timer = setInterval(autoPlay, 2000);

	function autoPlay(){
		index++;
		if (index>=titles.length) {
			index=0;
		}
		changeOption(index);
	}

	function changeOption(curIndex){
		for (var j = 0; j < titles.length; j++) {
			titles[j].className = '';
			divs[j].style.display = 'none';
		}
		//高亮显示当前标签
		titles[curIndex].className='select';
		divs[curIndex].style.display = 'block';
		index=curIndex;	
	}
}