window.onload = function () {
    function Slider(containerA,listA,buttonsA,prevA,nextA){
        this.container = containerA;
        this.list = listA;
        this.buttons = buttonsA;
        this.prev = prevA;
        this.next = nextA;

        this.index = 1;
        this.timer = null;
        this.length = this.buttons.length;
    }

    Slider.prototype.init = function(){
        let that = this;

        this.prev.onclick = function(){
            that.slidePrev();
        }  
        this.next.onclick = function (){
            that.slideNext();
        }
        for (var i = 0; i < this.length; i++) {
             this.slideTo(i);
        }

        this.container.onmouseover = function(){
            that.stop();
        } 
        this.container.onmouseout = function(){
            that.play();
         } 
    
        this.play();
    }

    Slider.prototype.animate =  function(offset){
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(this.list.style.left) + offset;
        this.list.style.left = newLeft + "px";
        //无限滚动判断
        if (newLeft > -800) {
            this.list.style.left = -4000 + "px";
        }
        if (newLeft < -4000) {
            this.list.style.left = -800 + "px";
        }
    }

    Slider.prototype.buttonsShow = function() {
        //将之前的小圆点的样式清除
        for (let i = 0; i < this.length; i++) {
            if (this.buttons[i].className == "on") {
                this.buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        this.buttons[this.index - 1].className = "on";
    }


    Slider.prototype.slidePrev = function() {
        this.index -= 1;
        if (this.index < 1) {
            this.index = 5;
        }
        this.buttonsShow();
        this.animate(800);
    }

    Slider.prototype.slideNext = function() {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        this.index += 1;
        if (this.index > 5) {
            this.index = 1;
        }
  
        this.animate(-800);
        this.buttonsShow();
    }

    Slider.prototype.slideTo = function(i) {
        let that = this;
        this.buttons[i].onclick = function () {
            /*  这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /*  由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            let clickIndex = parseInt(this.getAttribute("index"));
            let offset = 800 * (that.index - clickIndex); //这个index是当前图片停留时的index
            that.animate(offset);
            that.index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            that.buttonsShow();
        }
    }

    Slider.prototype.play = function(){
        //重复执行的定时器
        let that = this;
        this.timer = setInterval(function () {
            that.slideNext();
        }, 2000);
    };

    Slider.prototype.stop = function() {
        clearInterval(this.timer);
    };

    //实例化

    const containerE = document.getElementById("container");
    const listE = document.getElementById("list");
    const buttonsE = document.getElementById("buttons").getElementsByTagName("span");
    const prevE = document.getElementById("prev");
    const nextE = document.getElementById("next");
    
    const mySlider = new Slider(containerE,listE,buttonsE,prevE,nextE);
    mySlider.init();
}
