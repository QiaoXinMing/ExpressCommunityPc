import serverMethod from './serverMethod';

let vc = null;
const mutations = {
    GETNAVLIST(state, args) {
        state.TopNavList = serverMethod.TopNavList(args);
        state.SubNavList = serverMethod.SubNavList(args);
        state.QrNavList = serverMethod.QrNavList(args);
        state.FooterList = serverMethod.FooterList(args);
        state.Copyright = serverMethod.Copyright(args);
        state.bannerList = serverMethod.getbannerList(args);
    },
    GETHOTDATA(state, args) {
        state.hotdata = args;
    },
    SELECTIONTOPICS(state, args) {
        state.hotTopicList = args;
    },
    SELECTINVITATION(state, args) {
        state.invitationList = args;
    },
    SELECTINVITATIONPICTURELIST(state, args) {
        state.invitationPictureList = args;
    },
    SELECTMEBER(state, args) {
        state.meberShowListLength = args.length;
        state.meberShowList = args;
    },
    SELECTFUNNYBANNERLIST(state, args) {
        state.funnyBannerList = serverMethod.funnyBannerList(args);
    },
    SELECTFUNNYPICTUREVIDEOLIST(state, args) {
        state.funnyPictureList = args;
    },
    SELECTGETPARAGRALIST(state, args) {
        state.numArctile =  args.length;
        state.tempList = serverMethod.splitArrTen(args);
        let arctileNum = serverMethod.getSession("arctileNum");
        if (parseInt(arctileNum) > 0) {
            state.expressArctileList = state.tempList[parseInt(arctileNum) - 1].concat(state.tempList[parseInt(arctileNum)]);
        } else {
            state.expressArctileList = state.tempList[0];
        }
        state.indexTotalNum = args.length;
    },

    ADDMOREARCTILESLIST(state, type) {
        let num = null;
        if (type == "arctiles") {
            num = serverMethod.getSession("arctileNum");
            if (parseInt(num) < state.tempList.length - 1) {
                state.expressArctileList = state.tempList[parseInt(num)].concat(state.tempList[parseInt(num) + 1]);
                serverMethod.setSession("arctile", num - -1);
            }
        } else {
            num = serverMethod.getSession("videoNum");
            if (parseInt(num) < state.tempList.length - 1) {
                state.videoList = state.tempList[parseInt(num)].concat(state.tempList[parseInt(num) + 1]);
                serverMethod.setSession("video", num - -1);
            }
        }

    },
    SELECTGETPARAGRAPHBLIST(state, args) {
        state.arctilePhList = args;
    },
    SELECTGETPARAGRAPHBPLLIST(state, args) {
        state.arctilePhList = args;
    },
    SELECTGETRECOMMEND(state, args) {
        state.articleRankingList = args;
    },
    SELECTPICTURELIST(state, args) {
        state.tempList = serverMethod.splitArrTwl(args);
        let pictureNum = serverMethod.getSession("pictureNum");
        if (parseInt(pictureNum) > 0) {
            state.pictureShowList = state.tempList[parseInt(pictureNum) - 1].concat(state.tempList[parseInt(pictureNum)]);
        } else {
            state.pictureShowList = state.tempList[0];
        }
    },
    WATERFALL(state) {
        let pictureNum = serverMethod.getSession("pictureNum");
        if (parseInt(pictureNum) < state.tempList.length - 1) {
            state.pictureShowList = state.tempList[parseInt(pictureNum)].concat(state.tempList[parseInt(pictureNum) + 1]);
            serverMethod.setSession("picture", pictureNum - -1);
        }
    },
    SELECTVIDEO(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        let videoNum = serverMethod.getSession("videoNum");
        if (parseInt(videoNum) > 0) {
            state.videoList = state.tempList[parseInt(videoNum) - 1].concat(state.tempList[parseInt(videoNum)]);
        } else {
            state.videoList = state.tempList[0];
        }
    },
    ADDLOCALCOLLECTION(state,args){
        if(args.type == "arctile"){
            state.expressArctileList[args.index].arctile_collection -= -1;
        }else if(args.type == "picture"){
            state.pictureShowList[args.index].picture_collection -= -1;
        }else if(args.type == "video"){
            state.videoList[args.index].video_collection -= -1;
        }
    },
    CANCLELOCALCOLLECTION(state,args){
        if(args.type == "arctile"){
            state.expressArctileList[args.index].arctile_collection -= 1;
        }else if(args.type == "picture"){
            state.pictureShowList[args.index].picture_collection -= 1;
        }else if(args.type == "video"){
            state.videoList[args.index].video_collection -= 1;
        }
    },
    ADDLOCALDETAILSCOLLECTION(state,type){
        
        if(type == "arctile"){
            state.arctileDetais.arctile_collection -= -1;
        }else if(type == "picture"){
            state.pictureDetailsList.picture_collection -= -1;
        }else if(type == "video"){
            state.videoDetais.video_collection -= -1;
        }
    },
    CANCLELOCALDETAILSCOLLECTION(state,type){
        if(type == "arctile"){
            state.arctileDetais.arctile_collection -= 1;
        }else if(type == "picture"){
            state.pictureDetailsList.picture_collection -= 1;
        }else if(type == "video"){
            state.videoDetais.video_collection -= 1;
        }
    },
    SELECTPUBLICINDEX(state, args) {
        state.publicIndexList = args;
    },
    ARCTILEDETAILS(state, args) {
        state.arctileDetais = args;
    },
    SETDRAFTSID(state,obj){
        serverMethod.setSession(obj.type,obj.id);
    },
    PICTUREDETAILS(state, args) {
        state.meberShowListLength = args.resource_url.length;
        state.pictureDetailsList = args;
    },
    VIDEODETAILS(state, args) {
        state.videoDetais = args;
    },
    PERSONALOPERATION(state, args) {
        state.personalsetList = args;
    },
    PERSONALPERARCTILELIST(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.perArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALPICTURELIST(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.perPictureShowList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALVIDEOLIST(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.perVideoList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALQUESTION(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.questionArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALANSWER(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.answerArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALDRAFTS(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.draftsArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALCOLLECTION(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.perCollection = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALMESSAGELIST(state, args) {
        state.shareMessage = args;
        state.tempList = serverMethod.splitArrTen(args);
        state.messageList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    CHANGEINDEXNUM(state, num) {
        state.expressArctileList = state.tempList[num - 1];
    },
    CHANGEPAGE(state, num) {
        state.perArctileList = state.tempList[num - 1];
    },
    CHANGEPICTUREPAGE(state, num) {
        state.perPictureShowList = state.tempList[num - 1];
    },
    CHANGEVIDEOPAGE(state, num) {
        state.perVideoList = state.tempList[num - 1];
    },
    CHANGEQUESTIONPAGE(state, num) {
        state.questionArctileList = state.tempList[num - 1];
    },
    CHANGEABSWERPAGE(state, num) {
        state.answerArctileList = state.tempList[num - 1];
    },
    CHANGEDRAFTSPAGE(state, num) {
        state.draftsArctileList = state.tempList[num - 1];
    },
    CHANGECOLLECTIONPAGE(state, num) {
        state.perCollection = state.tempList[num - 1];
    },
    CHANGEMESSAGEPAGE(state, num) {
        state.messageList = state.tempList[num - 1];
    },
    SEARCHLIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.searchList = state.tempList[0];
    },
    CHECKREGISTERUSERNAME(state, args) {
        if (args[0]) {
            alert("用户已被注册");
        }
    },
    VCMETHOD(state, args) {
        vc = args;
    },
    REGISTER(state, args) {
        alert("注册成功");
    },
    LOGIN(state, args) {
        if (args[0].personal_id) {
            state.user=args[0];
            serverMethod.setFirstSession(args[0]);
            if(vc){
                vc.$router.push({
                    name: 'personal',
                });
            }
        } else {
            alert("密码不对劲!");
        }
    },
    GETUSERLOGIN(state, args) {
        state.user = args[0];
        state.personalPhoto = state.user.personal_pic;
    },
    COMMENLIST(state,args){
        let temp = [];
        for(let i = 0 ; i<args.length ;i++){
            temp.push(serverMethod.countTime(args[i]));
        }
        state.commentList = temp;
    },
    COLLECTIONINFO(state,args){
       console.log("收藏方法执行完毕");
    },
    DELETEMESSAGE(state,args){
        console.log("已移除");
    },
    DELETELOCALMESSAGE(state,obj){
        let tempMessage = [];
        delete state.shareMessage[obj.index];
        for(let i=0 ; i < state.shareMessage.length ; i++){
            if(state.shareMessage[i]){
                tempMessage.push(state.shareMessage[i]);
            }
        }
        if(obj.type=="arctile"){
            mutations.PERSONALPERARCTILELIST(state,tempMessage);
        }else if(obj.type=="picture"){
            mutations.PERSONALPICTURELIST(state,tempMessage);
        }else if(obj.type=="video"){
            mutations.PERSONALVIDEOLIST(state,tempMessage);
        }else if(obj.type=="question"){
            mutations.PERSONALQUESTION(state,tempMessage);
        }else if(obj.type=="answer"){
            mutations.CHANGEABSWERPAGE(state,tempMessage);
        }else if(obj.type=="drafts"){
            mutations.PERSONALDRAFTS(state,tempMessage);
        }else if(obj.type=="message"){
            mutations.PERSONALMESSAGELIST(state,tempMessage);
        }else{
            mutations.PERSONALCOLLECTION(state,tempMessage);
        }
        
    },
    CHECKLOGINED(state, args) {
        if (serverMethod.getSession("username") === "null") {
            vc.$router.push({
                name: 'login',
            });
        } else {
            vc.$router.push({
                name: 'publish',
            });
        }
    },
    CHANGEEDITORCLASSFIY(state, args) {
        let _this = vc;
        state.navTitle = args.currentTarget.innerText;
        if (state.navTitle == "文章") {
            state.showEditor = 2;
            state.submitValue = "发布";
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(true);
            }
        } else if (state.navTitle == "图集") {
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(false);
            }
            state.showEditor = 3;
            state.submitValue = "上传";
        } else {
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(false);
            }
            state.showEditor = 4;
            state.submitValue = "上传";
            serverMethod.dragUploadVideo();
        }
    },
    CLOSELOOKEDITOR(state, args) {
        if (vc.$refs.LookEditor) {
            vc.$refs.LookEditor.quill.enable(false);
        }
    },
    UPLOADIMAGE(state, ev) {
        let obj = {};
        obj.pictureSrc = "";
        obj.description = "";
        obj.picType = "";
        
        ev.target.onchange = function() {
            let file = null,
                reader;
            file = this.files[0];
            reader = new FileReader();
            reader.onload = function(e) {
                obj.pictureSrc = e.target.result;
                obj.picType = obj.pictureSrc.slice(obj.pictureSrc.indexOf("data:image/")+11,obj.pictureSrc.lastIndexOf(";"));
            };
            
            reader.readAsDataURL(file);
            if (state.uploadPictureList.length < 9) {
                state.uploadPictureList.unshift(obj);
                setTimeout(function() {
                    if (state.uploadPictureList.length > 4) {
                        ev.target.parentNode.parentNode.style.marginRight = 0;
                    }
                    if (state.uploadPictureList.length > 5) {
                        ev.target.parentNode.parentNode.parentNode.children[state.uploadPictureList.length - (state.uploadPictureList.length % 5)].style.marginRight = 0;
                    }
                }, 0)
            } else {
                alert("只能上传9张图片");
            }
        }
    },
    UPLOADVIDEO(state, ev) {
        serverMethod.uploadVideo(state,ev);
    },
    MODIFYPHOTO(state) {
        state.personalPhoto = serverMethod.modifyPhoto();
    },
    PUBLISHOVER(state,args) {
      console.log("发布成功");
    },
    SENDCOMMENTINFO(state){
       console.log("评论成功");
    },
    DELETEPICTURE(state,index){
        let tempMessage = [];
        delete state.uploadPictureList[index];
        if(state.uploadPictureList[0]){
            for(let i=0 ; i < state.uploadPictureList.length ; i++){
                if(state.uploadPictureList[i]){
                    tempMessage.push(state.uploadPictureList[i]);
                }
            }
        }
        state.uploadPictureList = tempMessage;
        return state.uploadPictureList;
    }
};

export default mutations;