//获取id元素信息
const getId = (args) => {
    return document.getElementById(args);
}

//获取类名元素
const getClassName = (args) => {
    if (document.getElementsByClassName) {
        if (document.getElementsByClassName(args).length != 1) {
            return document.getElementsByClassName(args);
        } else {
            return document.getElementsByClassName(args)[0];
        }
    } else {
        //可以准确找到dom元素  影响性能
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            if (document.getElementsByTagName("div")[i].getAttribute("class") === args) {
                return document.getElementsByTagName("div")[i];
            }
        }
    }
}

/* 获取动态样式*/
const getStyle = (element, alt) => parseInt((element.currentStyle ? element.currentStyle : window.getComputedStyle(element, "null"))[alt]);

//阻止默认事件阻止冒泡事件
const mrEvent = (e) => {
    let eve = e || window.event;
    eve.stopPropagation ? eve.stopPropagation() : window.event.cancelBubble = true;
    eve.preventDefault ? eve.preventDefault() : window.event.returnValue = false;
}

//设置响应式字体
let fontSize = () => {
    const scale = 1 / window.devicePixelRatio; //设置缩放比例	
    document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 12 / 10 + 'px'; //设置文档字体大小
}



window.onload = function() {
    fontSize();
    let date = getSession("dateTime");
    if(date && Math.ceil((+new Date()-date)/1000) > 3600*24*3){
        localStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%0%pictureNum%0%videoNum%0%navId%6%draftsNum%0%userId%null%username%null%password%null%dateTime%"+(+new Date()));
    }
}

window.onresize = function() {
    fontSize();
}
const showMoreNav = () => {
    document.getElementsByClassName("NavMoreList")[0].style.top = 0;
}
const closeMoreNav = () => {
    document.getElementsByClassName("NavMoreList")[0].style.top = (window.screen.height / 16) + "rem";
}
const startBanner = () => {
    let imgsUL = getClassName("bannerSlideWrapper")[0],
        nav = getClassName("dotWrap"),
        prev = getClassName("prev")[0],
        next = getClassName("next")[0],
        timer = null,
        animTimer = null,
        index = 0;

    //init images set images offsetLeft PX
    function initImgs(cur_index) {
        clearInterval(timer);
        clearInterval(animTimer);
        let off = cur_index * 680;
        imgsUL.style.left = -off + "px";
    }

    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -680) {
            donghua(-2720);
        } else if (newLeft < -2720) {
            donghua(0);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);
                play();
            }
        }, 20);
    }

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 2000)
    }

    function btnShow(cur_index) {
        for (let i = 0; i < nav.children.length; i++) {
            nav.children[i].className = "";
        }
        nav.children[cur_index].className = "current";
    }

    for (var i = 0; i < nav.children.length; i++) {
        nav.children[i].index = i;
        nav.children[i].onmouseover = function() {
            index = this.index;
            initImgs(this.index );
            btnShow(this.index );
        }
        nav.children[i].onmouseout = function() {
            play();
        }
    }

    prev.onclick = function() {
        initImgs(index);
        index -= 1;
        if (index < 1) {
            index = 4;
        }
        animate(680);
        btnShow(index);
    }

    next.onclick = function() {
        initImgs(index);
        index += 1;
        if (index > 4) {
            index = 0;
        }
        animate(-680);
        btnShow(index);
    }
    play();
}

const hoverChange = (el) => {
    let dd = el.parentNode.getElementsByTagName("dd");
    for (let i = 0; i < dd.length; i++) {
        dd[i].getElementsByTagName("p")[0].className = "invitation-info-hidden hiddenNone";
    }
    el.getElementsByTagName("p")[0].className = "invitation-info-show showInfo";
}

const meberBanner = (len) => {
    let imgsUL = getClassName("meber-show-banner-admin-list"),
        prev = getClassName("prev")[1],
        next = getClassName("next")[1],
        animTimer = null,
        width=208,
        totalWidth = 208*len,
        index = 1;
        document.getElementById("meberShowBannerAdmin").style.width=totalWidth+"px";
    
        //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -width) {
            donghua(-totalWidth);
        } else if (newLeft < -totalWidth) {
            donghua(0);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);

            }
        }, 20);
    }

  if(len > 3){
    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = len;
        }
        animate(width);
    }

    next.onclick = function() {
        index += 1;
        if (index > len) {
            index = 1;
        }
        animate(-width);
    }
  }
    

}

const funnyBanner = () => {
    let imgsUL = getClassName("bannerSlideWrapper")[1],
        timer = null,
        animTimer = null;

    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -340) {
            donghua(-1700);
        } else if (newLeft < -1700) {
            donghua(-340);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        clearInterval(timer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);
                play();
            }
        }, 20);
    }

    function play() {
        timer = setInterval(function() {
            animate(-340);
        }, 2000)
    }

    play();
}

const startfunnyBanner = (len) => {
    let imgsUL = getClassName("slideWrapper"),
        ContainerUL = getClassName("wrapperContainer"),
        timer = null,
        prev = getClassName("prev"),
        next = getClassName("next"),
        animTimer = null,
        animTimers = null,
        width=900,
        conWidth = 300,
        totalConWidth = 300*(len-1),
        totalWidth = 900*(len-1),
        index = 1;
        document.getElementById('slideWrapper').style.width=900*len+"px";
        document.getElementById('wrapperContainer').style.width=300*len+"px";

    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -width) {
            donghua(-totalWidth);
        } else if (newLeft < -totalWidth) {
            donghua(0);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        clearInterval(timer);
        animTimer = setInterval(function() {
        imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);
                play();
            }
    }, 20);
    }
    function animate1(offset) {
        let newLeft = parseInt(ContainerUL.offsetLeft) + offset;
        if (newLeft > -conWidth) {
            donghua1(-totalConWidth);
        } else if (newLeft < -totalConWidth) {
            donghua1(0);
        } else {
            donghua1(newLeft);
        }
    }

    function donghua1(offset) {
        clearInterval(animTimers);
        clearInterval(timer);

        animTimers = setInterval(function() {
            ContainerUL.style.left = ContainerUL.offsetLeft + (offset - ContainerUL.offsetLeft) / 10 + "px";
            if (ContainerUL.offsetLeft - offset < 10 && ContainerUL.offsetLeft - offset > -10) {
                ContainerUL.style.left = offset + "px";
                clearInterval(animTimers);
            }
        }, 20);
    }

    function play() {
        clearInterval(animTimer);
        clearInterval(animTimers);
        clearInterval(timer);        
        timer = setInterval(function() {
            animate(-width);
            animate1(-conWidth);
        }, 2000)
        
    }
    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = len;
        }
        animate(width);
        animate1(-conWidth);
    }

    next.onclick = function() {
        index += 1;
        if (index > len) {
            index = 1;
        }
        animate(-width);
        animate1(-conWidth);
    }
    play();
}

const checkUserName = (name) => {
    let regChinese = /^[\u4e00-\u9fa5]{2,4}$/, // chinese
        regEmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,4})+$/, // email
        regPhone = /^1[3|5|7|8][0-9]\d{8}$/, // phone
        ch = regChinese.test(name),
        email = regEmail.test(name),
        Phone = regPhone.test(name);
    if (ch || email || Phone) {
        return name;
    }

    if (!ch && !email && !Phone) {
        return;
    }
}
const checkPassword = (password) => {
    let regPass = /^[a-zA-Z0-9\~\'\!\@\#\￥\$\%\^\&\*\(\)\-\+\_\=\:\.]{6,12}$/;
    if (regPass.test(password)) {
        return password;
    } else {
        return;
    }
}

const getNowTime = () => {
    let date = new Date(),
        year = date.getFullYear(),
        mounth = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        second = date.getSeconds();
        if(hours<10 || minutes<10 || second<10){
            if(hours<10){
                return year + "年" + mounth + "月" + day + "日 0" + hours + ":" + minutes + ":" + second;
            }
            if(minutes<10){
                return year + "年" + mounth + "月" + day + "日 " + hours + ":0" + minutes + ":" + second;
            }
            if(second<10){
                return year + "年" + mounth + "月" + day + "日 " + hours + ":" + minutes + ":0" + second;
            }
            if(hours<10 && minutes<10){
                return year + "年" + mounth + "月" + day + "日 0" + hours + ":0" + minutes + ":" + second;
            }
            if(hours<10 && second<10){
                return year + "年" + mounth + "月" + day + "日 0" + hours + ":" + minutes + ":0" + second;
            }
            if(second<10 && minutes<10){
                return year + "年" + mounth + "月" + day + "日 " + hours + ":0" + minutes + ":0" + second;
            }
            if(hours<10 && second<10 && minutes<10){
                return year + "年" + mounth + "月" + day + "日 0" + hours + ":0" + minutes + ":0" + second;
            }
        }else{
            return year + "年" + mounth + "月" + day + "日 " + hours + ":" + minutes + ":" + second;
        }
        
}
const compile=(code)=>{    
    var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
    for(var i=1;i<code.length;i++){  
    c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
    }  
    return escape(c);
 }  
 const uncompile = (code)=>{  
    code=unescape(code);  
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);  
    for(var i=1;i<code.length;i++){  
    c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));  
    }  
    return c;  
 }  
const getSession = (key) => {
    let defaultLocalStorage = localStorage.getItem("JingYanSheQuDefultUserInfo")?uncompile(localStorage.getItem("JingYanSheQuDefultUserInfo")):null,
    defaultUserInfo = '',
    defaultUser = {},
    keys = null,
    value = null,
    str = "%arctileNum%0%pictureNum%0%videoNum%0%navId%6%draftsNum%0%userId%null%username%null%password%null%dateTime%"+(+new Date());
    if(!defaultLocalStorage){
        localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
    }else{
        defaultUserInfo =  defaultLocalStorage.split("%").slice(1,defaultLocalStorage.split("%").length);      
        try {
            /*将数组转成json */
            for (let i = 0; i < defaultUserInfo.length; i++) {
                if (i % 2 == 0) {
                    keys = defaultUserInfo[i];
                } else {
                    value = defaultUserInfo[i];
                }
                defaultUser[keys] = value;
            }
        } catch (e) {
            return;
        }
    }
    return defaultUser[key];
}

const playVideo = ()=>{
      
    const video = document.getElementsByTagName('video')[0],
          play = document.getElementById('play'),
          prograss = document.getElementById('prograss'),
          currentTime = document.getElementById('currentTime'),
          volumeDown = document.getElementById('volumeDown'),
          volumekj = document.getElementById('volume'),
          pause = document.getElementById('pause');
     let  tempLeft = 35;
          play.addEventListener("click",function(){
              video.play();
              video.volume = 0.5;
              this.style.display = 'none';
              pause.style.display = 'inline-block';
          });
          pause.onclick = function() {
            this.style.display = 'none';
            play.style.display = 'inline-block';
            video.pause();
         }
         video.addEventListener('timeupdate',
          function() {
            let a = video.currentTime / video.duration;
            prograss.style.width = a * 100 + '%';
            if (parseInt(video.currentTime) > 0 && parseInt(video.currentTime) < 10) {
                currentTime.textContent = "00:" + '0' + parseInt(video.currentTime);
            } else if (parseInt(video.currentTime) > 9 && parseInt(video.currentTime) < 60) {
                currentTime.textContent = "00:" + parseInt(video.currentTime);
            } else if (parseInt(video.currentTime) > 59 && parseInt(parseInt(video.currentTime) % 60) < 10) {
                currentTime.textContent = '0' + parseInt(parseInt(video.currentTime) / 60) + ':0' + parseInt(parseInt(video.currentTime) % 60)
            } else if (parseInt(parseInt(video.currentTime) % 60) > 9 && parseInt(parseInt(video.currentTime) / 60) < 10) {
                currentTime.textContent = '0' + parseInt(parseInt(video.currentTime) / 60) + ':' + parseInt(parseInt(video.currentTime) % 60)
            } else if (parseInt(parseInt(video.currentTime) / 60) > 9) {
                currentTime.textContent = parseInt(parseInt(video.currentTime) / 60) + ':' + parseInt(parseInt(video.currentTime) % 60)
            }
        });
        video.addEventListener('ended',
           function() {
             pause.style.display = 'none';
             play.style.display = 'inline-block';
        });
        volumeDown.onmousedown=function(ev){
            mrEvent(ev);
            let startMouseX = ev.pageX;
            volumekj.onmousemove=null;
              volumekj.onmousemove = function(ev){
                mrEvent(ev);
                volumekj.style.left = ev.pageX - startMouseX + tempLeft + "px";
                if(ev.pageX - startMouseX > 0){
                    if(getStyle(volumekj,"left") > 73){
                        volumekj.style.left = "73px";
                    }
                }else{
                    if(getStyle(volumekj,"left")<0 ){
                        volumekj.style.left =  "-2px";
                    }
                } 
                if(getStyle(volumekj,"left")<0){
                        video.volume =0
                    }else if(getStyle(volumekj,"left")>73){
                        video.volume =1
                    }else{
                        video.volume = (getStyle(volumekj,"left")/73).toFixed(1);
                    }
              }
                          
        }
        volumeDown.onmouseup=function(ev){
            mrEvent(ev);
            volumekj.onmousemove=null;
            tempLeft = getStyle(volumekj,"left");
        }
}
export default {
    playVideo,
    showMoreNav,
    closeMoreNav,
    startBanner,
    meberBanner,
    hoverChange,
    funnyBanner,
    startfunnyBanner,
    checkUserName,
    checkPassword,
    getNowTime,
    getSession,
}