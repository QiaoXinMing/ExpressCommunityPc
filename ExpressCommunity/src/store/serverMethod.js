const imgWebSite = "http://192.168.1.103:65534/JingYanSheQu/images/webSite/";
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
    //获取id元素信息
const getId = (args) => {
        return document.getElementById(args);
    }
    /* 获取动态样式*/
const getStyle = (element, alt) => {
        return parseInt((element.currentStyle ? element.currentStyle : window.getComputedStyle(element, "null"))[alt]);
    }
    //阻止默认事件阻止冒泡事件
let mrEvent = (e) => {
        let eve = e || window.event;
        eve.stopPropagation ? eve.stopPropagation() : window.event.cancelBubble = true;
        eve.preventDefault ? eve.preventDefault() : window.event.returnValue = false;
    }
    //索检指定数组
const SplitArrayLength = (args, start,end,type) => {
    let newArr = [],
        bannerArr = [],
        imgArr = args.slice(start,end);
    for(let i =0 ;i<imgArr.length;i++){
      if(type == 'typePic'){
        imgArr[i].resource_url= imgWebSite + imgArr[i].resource_url.split("|")[0];
        newArr.push(imgArr[i]);
      }else if(type == 'bannerPic'){
          for(let j = 0 ; j < imgArr[i].resource_url.split("|").length - 1;j++){
            bannerArr.push(imgWebSite + imgArr[i].resource_url.split("|")[j]);
          }
          newArr = bannerArr;
      }else{
        newArr.push(imgArr[i]);
      }
    }
    return newArr;
}

const TopNavList = (args) => {
    return SplitArrayLength(args, 0,5);
}
const SubNavList = (args) => {
    return SplitArrayLength(args, 5,16);
}
const QrNavList = (args) => {
   return SplitArrayLength(args, 21,23,"typePic");
}
const FooterList = (args) => {
    return SplitArrayLength(args, 16,20);
}
const Copyright = (args) => {
    return SplitArrayLength(args,20,21)[0].title;
}

const getbannerList = (args) => {    
    return SplitArrayLength(args, 23,24,"bannerPic"); 
}

const funnyBannerList = (args) => {
    let funnyBannerList = [];
    funnyBannerList.push(args[args.length - 1]);
    for (let i = 0; i < args.length; i++) {
        funnyBannerList.push(args[i]);
    }
    funnyBannerList.push(args[0]);
    return funnyBannerList;
}

const splitArrTen = (args) => {
    let arcList = [];
    for (let i = 0; i < args.length; i += 10) {
        arcList.push(args.slice(i, i + 10));
    }
    return arcList;
}
const splitArrTwl = (args) => {
    let pictureList = [];
    for (let i = 0; i < args.length; i += 12) {
        pictureList.push(args.slice(i, i + 12));
    }
    return pictureList;
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
    let defaultUserInfo = uncompile(localStorage.getItem("JingYanSheQuDefultUserInfo")),
        defaultUser = {},
        keys = null,
        value = null;
    try {
        /*将数组转成json */
        for (let i = 0; i < defaultUserInfo.split("%").slice(1).length; i++) {
            if (i % 2 == 0) {
                value = defaultUserInfo.split("%")[i];
            } else {
                keys = defaultUserInfo.split("%")[i];
            }
            defaultUser[keys] = value;
        }
    } catch (e) {
        return;
    }
    return defaultUser[key];
}
const compile=(code)=>{    
   var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
   for(var i=1;i<code.length;i++){  
   c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
   }  
   return escape(c);
}  
const setFirstSession = (user) => {
    let str = "%arctileNum%0%pictureNum%0%videoNum%0%navId%6%draftsNum%0%userId%" + user.personal_id + "%username%" + user.personal_username + "%password%" +user.personal_password + "%dateTime%" + (+new Date());
    localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
}
const setSession = (type, num) => {
    let str = "",
        pictureNum = getSession("pictureNum"),
        arctileNum = getSession("arctileNum"),
        videoNum = getSession("videoNum"),
        navId = getSession("navId"),
        userId = getSession("userId"),
        draftsNum = getSession("draftsNum"),
        username = getSession("username"),
        password = getSession("password");
      
    if (type == "arctile") {
      str =  "%arctileNum%" + num + "%pictureNum%" + pictureNum + "%videoNum%" + videoNum + "%navId%" + navId +"%draftsNum%" + draftsNum +"%userId%" + userId + "%username%" + username + "%password%" + password + "%dateTime%" + (+new Date());
        localStorage.setItem("JingYanSheQuDefultUserInfo",compile(str));
    } else if (type == "picture") {
        str =  "%arctileNum%" + arctileNum + "%pictureNum%" + num + "%videoNum%" + videoNum + "%navId%" + navId +"%draftsNum%" + draftsNum + "%userId%" + userId + "%username%" + username + "%password%" + password + "%dateTime%" + (+new Date());
        localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
    } else if (type == "video") {
        str =  "%arctileNum%" + arctileNum + "%pictureNum%" + pictureNum + "%videoNum%" + num + "%navId%" + navId +"%draftsNum%" + draftsNum + "%userId%" + userId + "%username%" + username + "%password%" + password + "%dateTime%" + (+new Date());
        localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
    }else if(type == "drafts"){
        str =  "%arctileNum%" + arctileNum + "%pictureNum%" + pictureNum + "%videoNum%" + videoNum + "%navId%" + navId +"%draftsNum%" + num + "%userId%" + userId + "%username%" + username + "%password%" + password + "%dateTime%" + (+new Date());
        localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
    }else{
        str =  "%arctileNum%" + arctileNum + "%pictureNum%" + pictureNum + "%videoNum%" + videoNum + "%navId%" + num +"%draftsNum%" + draftsNum + "%userId%" + userId + "%username%" + username + "%password%" + password + "%dateTime%" + (+new Date());
        localStorage.setItem("JingYanSheQuDefultUserInfo", compile(str));
    }
}
const getTime = (time) => {
    /*
      60秒
      一分 60
      六十分 一小时
    */
    let totalTime = null;

    if (time < 10) {
        totalTime = "00:00:0" + parseInt(time);
    }
    if (time > 9 && time < 60) {
        totalTime = "00:00:" + parseInt(time);
    }

    if (time > 59 && time < 3600) { //此处为分级    
        let minute = parseInt(time/60%60),
            seconds = parseInt(time%60);
        if (minute < 10 && minute == 0) {
            totalTime = "00:0" + minute + ":00";
        }
        if (minute > 9 && seconds == 0) {
            totalTime = "00:" + seconds + ":00";
        }
        if (minute < 10 && seconds <10) {
            totalTime = "00:0" + minute + ":0" +seconds;
        }
        if (minute < 10 &&  seconds > 10) {
            totalTime = "00:0" + minute + ":" + seconds;
        }
        if (minute > 9 && seconds < 10) {
            totalTime = "00:" + minute + ":0" + seconds;
        }
        if (minute > 9 &&   seconds > 10) {
            totalTime = "00:" + minute + ":" + seconds;
        }
        return totalTime;
    }
    //此处为时级视频 
    if (parseInt(time / 60) > 59) { //此处为时级 
        let hour = parseInt(time/60/60),
            minute = parseInt(time/60%60),
            seconds = parseInt(time%60);
        if(hour < 10 && minute == 0 && seconds==0){
            totalTime = "0:" + hour + "00:00";
        }
        if(hour > 10 && minute == 0 && seconds==0){
            totalTime = hour + "00:00";
        }
        if(hour < 10 && minute < 10 && seconds<10 ){
            totalTime = "0:" + hour + ":0" + minute +":0" + seconds;
        }
        if(hour < 10 && minute > 10 && seconds>10){
            totalTime = "0" + hour + ":" +minute + ":" + seconds;
        }
        if(hour < 10 && minute > 10 && seconds<10){
            totalTime = "0:" + hour + ":"+ minute +":0" + seconds;
        }
        if(hour < 10 && minute < 10 && seconds>10){
            totalTime = "0:" + hour + ":0" + minute + ":" + seconds;
        }
        
        if(hour > 10 && minute < 10 && seconds<10){
            totalTime =  hour + ":0"+minute +":0" + seconds;
        }
        if(hour > 10 && minute > 10 && seconds>10){
            totalTime =  hour + ":" + minute + ":" + seconds;
        }
        if(hour > 10 && minute > 10 && seconds<10){
            totalTime =  hour + ":"+ minute +":0" + seconds;
        }
        if(hour > 10 && minute < 10 && seconds>10){
            totalTime =  hour + ":0" + parseInt(time / 60) / 60 + ":" + parseInt(time / 60) / 60;
        }

        if(hour > 10 && minute > 10 && seconds>10){
            totalTime =  hour + ":" + minute + ":" + seconds;
        }
        return totalTime;
    }
}
const reader = (s,file) => {
    function getFileURL(file) {
        var getUrl = null;
        if (window.createObjectURL != undefined) { // basic
            getUrl = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            getUrl = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            getUrl = window.webkitURL.createObjectURL(file);
        }
           return getUrl;
        }
        s.showPrograss=false;
        s.hiddenProgress=true;
        setTimeout(function(){
            getClassName('videoPreview').getElementsByTagName("video")[0].src = getFileURL(file);
        },30);
}
const dragUploadVideo = (s,f) => {
    setTimeout(function() {
        let dropbox = getClassName('videoUploadWrap');

        dropbox.addEventListener("dragover", function(e) {
            mrEvent(e);
        }, false);

        dropbox.addEventListener("drop", function(e) {
            mrEvent(e);
            let list = e.dataTransfer.files;
            let f = list[0];
            if (/mp4|MP4/gi.test(f.name)) {
                reader(s,f);
            } else {
                alert("请上传视频");
            }
        }, false);
    }, 0);
}
const uploadVideo = (s,ev) => {
    let f = ev.srcElement.files[0];
    reader(s,f);
}
const modifyPhoto = () => {
    let photoCircle = getId('previewCircle'),
        previewShear = getId('previewShear'),
        ctx = photoCircle.getContext("2d"),
        ctx2 = previewShear.getContext("2d"),
        file = null,
        canvasImage = null,
        canvasImageArr = [],
        reader,
        previewPhoto = getId('previewPhoto');
    photoCircle.width = "80";
    photoCircle.height = "80";
    previewShear.width = "500";
    previewShear.height = "500";

    function canFun(x, y) {
        let top = !y ? 0 : parseInt(y);
        let left = !x ? 0 : parseInt(x);
        ctx.clearRect(0, 0, 80, 80);
        ctx.save();
        ctx.arc(40, 40, 40, 0 * Math.PI, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(previewPhoto, 0, 0, 80, 80);
        ctx2.clearRect(0, 0, 500, 500);
        ctx2.drawImage(previewPhoto, top * 2.5, left * 2.5, 250, 250, 0, 0, 500, 500);
    }

    function getCanvasImg() {
        let f = document.getElementById("previewShear").toDataURL();

        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        canvasImage = dataURLtoBlob(f);
        canvasImageArr.shift();
        canvasImageArr.push(canvasImage);
        return canvasImageArr;
    }
    //鼠标按下范围框 判断鼠标是否移动 是否抬起 抬起则取消鼠标按下事件  
    $('#chooseBox').mousedown(function(e) {
        mrEvent(e);
        let oEvent = e || event,
            originX = e.clientX,
            originY = e.clientY,
            left = 0,
            top = 0;
        window.onmousemove = function(e) {
            mrEvent(e);
            top = e.clientY - originY,
                left = e.clientX - originX;
            $('#chooseBox').css({ left: left, top: top });
            if ($('#chooseBox').position().left <= 0) {
                left = 0;
                $('#chooseBox').css({ left: left, });
            }
            if ($('#chooseBox').position().left > 120) {
                left = '120px'
                $('#chooseBox').css({ left: left });
            }
            if ($('#chooseBox').position().top <= 0) {
                top = 0;
                $('#chooseBox').css({ top: top });
            }
            if ($('#chooseBox').position().top > 120) {
                top = '120px'
                $('#chooseBox').css({ top: top });
            }
            canFun(top, left);
        }
        window.onmouseup = function(e) {
            mrEvent(e);
            window.onmousemove = null;
        }
    });

    function changeFile() {
        $('.chooseBox').css({ display: 'block', left: 0, top: 0 });
        file = $(this)[0].files[0];
        reader = new FileReader();
        reader.onload = function(e) {
            previewPhoto.setAttribute('src', e.target.result);
            canFun();
        }

        reader.readAsDataURL(file);
    }
    $("input[type='file']").change(changeFile);
    return getCanvasImg();
}

const user = () => {
    let user = {};
    user.userId = getSession("userId");
    user.username = getSession("username");
    return user;
}
const publishTime = () => {
    let data = new Date(),
        year = data.getFullYear(),
        mounth = data.getMonth() + 1,
        day = data.getDate(),
        hour = data.getHours(),
        minutes = data.getMinutes(),
        seconds = data.getSeconds();
    return year + "-" + mounth + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
}
const countTime = (args)=>{
    function changeNum (args){
        return parseInt(args);
    }
    let tempTime = args.arctile_publishTime.split(' '),
        tempNowTime = publishTime().split(' '),
       tempYear = tempTime[0].split('-'),
       tempNowYear = tempNowTime[0].split('-'),
       tempHour = tempTime[1].split(':'),
       tempNowHour = tempNowTime[1].split(':');
       if(changeNum(tempYear[0]) < changeNum(tempNowYear[0])){
        args.countTime = changeNum(tempNowYear[0])-changeNum(tempYear[0]) + "年前";
        return args;
       }
       
       if(changeNum(changeNum(tempNowYear[1])>changeNum(tempYear[1]))){
        args.countTime = changeNum(tempNowYear[1])-changeNum(tempYear[1]) + "月前";
        return args;
       }
       if(changeNum(tempNowYear[2]) > changeNum(tempYear[2])){
        args.countTime = changeNum(tempNowYear[2])-changeNum(tempYear[2]) + "天前";
        return args;
       }       
       if(changeNum(tempHour[0]) < changeNum(tempNowHour[0])){
          args.countTime = changeNum(tempNowHour[0])-changeNum(tempHour[0]) + "时前";
          return args;
       }
        if(changeNum(tempHour[1]) < changeNum(tempNowHour[1])){
            args.countTime = changeNum(tempNowHour[1])-changeNum(tempHour[1]) + "分前";
            return args;
        }
}
const getArctilePicture =(obj,con)=>{
    let img = $('.editorContainer').find('img'),
        imgArr=[];
        if(img.length){//有图片
            for(let i = 0; i < img.length; i++){
                let imgObj = {};
                 imgObj.img = $(img[i]).attr("src");
                 imgObj.type = $(img[i]).attr("src").slice($(img[i]).attr("src").indexOf('/')+1,$(img[i]).attr("src").indexOf(';'));
                 imgArr.push(imgObj);
                 $(img[i]).replaceWith(" JingYanSheQu "); 
             }
             obj.imgArrListInfo = imgArr;
             obj.container  = $('.ql-editor').html();
             $('.ql-editor').html("");
             return obj;
        }else{//没图片
            return con;
        }
}
export default {
    TopNavList, //顶部导航
    SubNavList, //顶部子导航
    QrNavList, //二维码导航
    FooterList, //底部导航
    Copyright, //版权信息
    getbannerList, //获取banner导航
    funnyBannerList, //搞笑视图banner
    splitArrTen, //数组每10个分为一组
    splitArrTwl, //数组每12个分为一组
    setFirstSession, //设置首次session信息
    getSession, //获取session信息
    setSession, //设置session信息
    dragUploadVideo, //拖拽上传视频
    uploadVideo, //文件上传视频
    modifyPhoto, //修改个人中心头像
    user, //定义用户对象
    publishTime, //发布内容时间
    getTime,//获取上传视频时长
    countTime,//计算回复评论时间差
    getArctilePicture,//把图片替换成JingYanSheQu
};