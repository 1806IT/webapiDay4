function my$(id) {
    return document.getElementById(id)
    //1 对象.on事件名称=事件处理函数-----绑定事件
}

my$('txt').onfocus = function () {
    my$('txt').style.color = 'black';
}
var keyWords = ['你好', '不好', '东北虎', '东南亚', '你孙子', '不悔', '不悔']
//获取文本框注册键盘抬起事件
my$('txt').onkeyup = function () {
    //检查每次键盘抬起时页面中有没有div
    if (my$('dv')) {
        my$('box').removeChild(my$('dv'))
    } else {
        //获取文本框内容
        var text = this.value;
        var tempArr = [];//临时数组--存放对应伤的数据
        //把文本框输入的内容和数组中的每个数据进行对比
        for (var i = 0; i < keyWords.length; i++) {
            //是否最开始出现
            if (keyWords[i].indexOf(text) == 0) {
                tempArr.push(keyWords[i]);//将匹配的放入临时数组
            }
        }

        //如果文本框是空的，临时数组是空的，不用创建div
        if (this.value.length === 0 || tempArr.length == 0) {
            //页面中有div，，删除div
            if (my$('dv')) {
                my$('box').removeChild(my$('dv'))
            }
            return;
        }
        //创建div
        var divObject = document.createElement('div')
        my$('box').appendChild(divObject)
        divObject.id = 'dv'
        //创建遍历临时数组，创建对应的p标签
        for (var i = 0; i < tempArr.length; i++) {
            //创建p标签
            var p = document.createElement('p')
            p.innerText = tempArr[i]
            //把p标签加到div中
            divObject.appendChild(p)
            //鼠标进入
            p.onmouseover = function () {
                this.style.color = 'red'
                this.style.background = 'yellow'
            }
            //鼠标离开
            p.onmouseout = function () {
                this.style.background = ''
                this.style.color = 'black'
            }
        }
    }
}
//BOM中有两个定时器--计时器
var timeId=setInterval(function () { console.log('hello') }, 1000)
//定时器
//参数1:函数
//参数2:时间--浩渺---1000浩渺---1秒
//返回值就是定时器的id值
my$('b6').onclick=function(){
    //点击按钮，停止定时器
    //参数：要清理的定时器的id值
    window.clearInterval(timeId)
}
//摇起来
my$('b7').onclick=function(){
    //随机数
    move=setInterval(function(){
        var x = parseInt(Math.random() * 200 + 1)
        var y = parseInt(Math.random() * 200 + 1)
        my$('dv7').style.left = x+'px'
        my$('dv7').style.top = y+'px'
        console.log('2')
    },100)
}
my$('b8').onclick=function(){
    window.clearInterval(move)
}
var div = document.getElementById('x')
console.log(div)
