import getData from './ajaxIos';
import sm from './serverMethod';
import serverMethod from './serverMethod';
const actions = {
    //查询导航
    getNavList({ commit, rootState }) {
        //对应服务器端的路由地址
        getData.getData.getAxiosMethod(this, 'search_nav.php', 'GETNAVLIST');
    },
    //查询热点
    getHotData({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_hot_data.php', 'GETHOTDATA');
    },
    //查询精选话题
    getSelectionTopics({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_arctile_and_video.php', 'SELECTIONTOPICS');
    },
    //精选帖子
    getInvitationList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_invitation.php', 'SELECTINVITATION');
    },
    //加载精选图片
    getInvitationPictureList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_invitation_picture.php', 'SELECTINVITATIONPICTURELIST');
    },
    //加载会员
    getMeberShowList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_meber_arctile.php', 'SELECTMEBER');
    },
    //幽默banner
    getFunnyBannerList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_funny.php', 'SELECTFUNNYBANNERLIST');
    },
    //幽默视图
    getFunnyPictureVideoList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_picture_and_video.php', 'SELECTFUNNYPICTUREVIDEOLIST');
    },
    //加载文章列表
    getParagraList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_arctile.php', 'SELECTGETPARAGRALIST');
    },
    //首页文章分页
    getPage({ commit, rootState }, num) {
        this.commit('CHANGEINDEXNUM', num);
    },
    //个人中心分页
    changePage({ commit, rootState }, num) {
        this.commit('CHANGEPAGE', num);
    },
    changePicturePage({ commit, rootState }, num) {
        this.commit('CHANGEPICTUREPAGE', num);
    },
    changeVideoPage({ commit, rootState }, num) {
        this.commit('CHANGEVIDEOPAGE', num);
    },
    changeQuestionPage({ commit, rootState }, num) {
        this.commit('CHANGEQUESTIONPAGE', num);
    },
    changeAnswerPage({ commit, rootState }, num) {
        this.commit('CHANGEABSWERPAGE', num);
    },
    changeDraftsPage({ commit, rootState }, num) {
        this.commit('CHANGEDRAFTSPAGE', num);
    },
    changeCollectionPage({ commit, rootState }, num) {
        this.commit('CHANGECOLLECTIONPAGE', num);
    },
    changeMessagePage({ commit, rootState }, num) {
        this.commit('CHANGEMESSAGEPAGE', num);
    },

    //文章列表/视频列表加载更多事件
    addMore({ commit, rootState }, type) {
        this.commit('ADDMOREARCTILESLIST', type);
    },
    //加载文章排行榜
    getParagraphbList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_arctile_phb.php', 'SELECTGETPARAGRAPHBLIST');
    },
    //按照评论数排行文章
    getParagraphbPlList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_paragrap_pl_list.php', 'SELECTGETPARAGRAPHBPLLIST');
    },
    //推荐阅读
    getRecommend({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_arctile_recommend.php', 'SELECTGETRECOMMEND');
    },
    //图片列表页
    getPictureList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_picture.php', 'SELECTPICTURELIST');
    },
    //加载图片瀑布流
    getWaterFall({ commit, rootState }) {
        this.commit('WATERFALL');
    },
    //视频列表
    getVideoList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_video.php', 'SELECTVIDEO');
    },
    //子导航公共模板页
    postPublicIndexList({ commit, rootState }, id) {
        sm.setSession("navId",id);      
        getData.getData.postAxiosMethod(this, 'search_public_arctile_picture_video.php', id, 'SELECTPUBLICINDEX');
    },
    //文章详情页
    postArctileDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_arctile_details.php', id, 'ARCTILEDETAILS');
    },
    //草稿箱文章ID
    setDraftsNum({ commit, rootState }, obj){
        this.commit("SETDRAFTSID",obj);
    },
    //图集详情页
    postPictureDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_picture_details.php', id, 'PICTUREDETAILS');
    },
    //视频详情页
    postVideoDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_video_details.php', id, 'VIDEODETAILS');
    },
    //文章视频图集评论详细内容
    getCommentList({ commit, rootState },obj){
        getData.getData.postAxiosMethod(this, 'search_reply_details.php', obj, 'COMMENLIST');
    },
    //添加至个人收藏
    getCollection({ commit, rootState },obj){
        this.commit("ADDLOCALCOLLECTION",obj);
        getData.getData.postAxiosMethod(this, 'search_add_collection.php', obj, 'COLLECTIONINFO');
    },
    //取消个人收藏
    cancleCollection({ commit, rootState },obj){
        this.commit("CANCLELOCALCOLLECTION",obj);
        getData.getData.postAxiosMethod(this, 'search_cancle_collection.php', obj, 'COLLECTIONINFO');
    },
    //详情页添加到收藏
    getDetailsCollection({ commit, rootState },obj){
        this.commit("ADDLOCALDETAILSCOLLECTION",obj.type);
        getData.getData.postAxiosMethod(this, 'search_add_details_collection.php', obj, 'COLLECTIONINFO');
    },
    //详情页取消个人收藏
    cancleDetailsCollection({ commit, rootState },obj){
        this.commit("CANCLELOCALDETAILSCOLLECTION",obj.type);
        getData.getData.postAxiosMethod(this, 'search_cancle_details_collection.php', obj, 'COLLECTIONINFO');
    },
    //内容详情页评论
    sendCommentInfo({commit,rootState},obj){
        getData.getData.postAxiosMethod(this, 'search_containerDeatils_comment_listInfo.php', obj, 'SENDCOMMENTINFO');
    },
    //内容详情回复评论
    commentListCommint({commit,rootState},obj){
        getData.getData.postAxiosMethod(this, 'search_user_replay_details_info.php', obj, 'SENDCOMMENTINFO');
    },
    //个人中心导航
    getPersonalOperation({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'search_personal_nav.php', 'PERSONALOPERATION');
    },
    //个人中心发表的文章
    getPerArctileList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_arctile_List.php', id, 'PERSONALPERARCTILELIST');
    },
    //个人中心图集列表页
    getPerPictureList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_picture_List.php', id, 'PERSONALPICTURELIST');
    },
    //个人中心视频
    getPerVideoList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_video_List.php', id, 'PERSONALVIDEOLIST');
    },
    //个人中心已发布的问题
    getPerQuestionList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_public_question.php', id, 'PERSONALQUESTION');
    },
    //个人中心已回答的问题
    getPerAnswerList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_public_answer.php', id, 'PERSONALANSWER');
    },
    //个人中心草稿文章
    getPerDraftsList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_drafts.php', id, 'PERSONALDRAFTS');
    },
    //个人收藏
    getPerCollectionList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_public_arctile_picture_video.php', id, 'PERSONALCOLLECTION');
    },
    //个人消息
    getPerMessageList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'search_personal_message.php', id, 'PERSONALMESSAGELIST');
    },
    //索简信息
    getSearchList({ commit, rootState }, con) {
        getData.getData.postAxiosMethod(this, 'search_express_community.php', con, 'SEARCHLIST');
    },
    //检测用户名是否被注册
    checkRegisterUserName({ commit, rootState }, name) {
        getData.getData.postAxiosMethod(this, 'search_checkUser.php', name, 'CHECKREGISTERUSERNAME');
    },
    //注册全局组件
    postVC({ commit, rootState }, vc) {
        this.commit("VCMETHOD", vc);
    },
    //用户注册
    register({ commit, rootState }, user) {
        getData.getData.postAxiosMethod(this, 'search_express_register.php', user, 'REGISTER');
    },
    //用户登陆
    login({ commit, rootState }, user) {
        getData.getData.postAxiosMethod(this, 'search_login_user.php', user, 'LOGIN');
    },
    //检测用户是否登录
    checkLogin({ commit, rootState }) {
        this.commit("CHECKLOGINED");
    },
    //修改发布主导航信息
    changeEditor({ commit, rootState }, ev) {
        this.commit("CHANGEEDITORCLASSFIY", ev);
    },
  
    //个人中心数据删除
    deleteMessage({commit,rootState},obj){
        let message = {};
        message.id = obj.id;
        message.type= obj.type;
        getData.getData.postAxiosMethod(this, 'search_delete_user_arctile.php', message, 'DELETEMESSAGE');
        this.commit("DELETELOCALMESSAGE",obj);
    },
    //关闭编辑区预览内容的编辑器
    closeLookEditor({ commit, rootState }) {
        this.commit("CLOSELOOKEDITOR");
    },
    //上传图集
    uploadImages({ commit, rootState }, ev) {
        this.commit("UPLOADIMAGE", ev);
    },
    //上传视频
    uploadVideo({ commit, rootState }, ev) {
        this.commit("UPLOADVIDEO", ev);
    },
    //显示草稿箱内容
    arctileShowDetais({ commit, rootState },id){
   //     getData.getData.postAxiosMethod(this, 'search_drafts_details_arctile.php', id, 'ARCTILESHOWDETAILS');
    },
    //个人中心修改头像
    modifyPhoto({ commit, rootState }) {
        this.commit("MODIFYPHOTO");
    },
    //发布文章&图集&视频方法
    published({ commit, rootState }, obj) {
        let publishObj = {};
        publishObj.primayNav = rootState.navTitle;
        publishObj.subNavTitle = rootState.subNavTitle;
        publishObj.subNavId = rootState.subNavId;
        publishObj.title = obj.title;
        publishObj.publishTime = sm.publishTime();
        publishObj.userId = sm.user().userId;
        publishObj.userName = sm.user().username;
        if (rootState.showEditor === 2) {
            serverMethod.getArctilePicture(publishObj,obj);
            publishObj.type = obj.type;
            console.log(publishObj);
            getData.getData.postAxiosMethod(this, 'express_upload_arctile.php', publishObj, 'PUBLISHOVER');
        } else if (rootState.showEditor === 3) {
            publishObj.type = "picture";
            publishObj.num = obj.uploadPictureList.length;
            publishObj.uploadImages = obj.uploadPictureList;
            getData.getData.postAxiosMethod(this, 'express_upload_picture.php', publishObj, 'PUBLISHOVER');
        } else if (rootState.showEditor === 4) {
            let f = new FormData();
            f.append("videoInfo",obj.uploadVideoInfo);
            f.append("type" ,"video");
            f.append("title",obj.title);
            f.append("primayNav",publishObj.primayNav);
            f.append("subNavTitle",publishObj.subNavTitle);
            f.append("subNavId",publishObj.subNavId);
            f.append("publishTime",publishObj.publishTime);
            f.append("userId",publishObj.userId);
            f.append("userName",publishObj.userName);
            f.append("videoTime",sm.getTime(obj.videoTime));
            f.append("videoContainer",obj.videoContainer);
            getData.getData.postVideo(this,'express_upload_video.php', f,"PUBLISHOVER");
        }

    },
    //清空编辑区标题内容和导航
    declearPublish({ commit, rootState }){
        rootState.navTitle="文章";
        rootState.subNavTitle="宅技术";
        rootState.subNavId="6";
    },
    //修改子导航
    changeSubNav({ commit, rootState }, index){
        if(rootState.SubNavList.length > 0){
          rootState.subNavTitle = rootState.SubNavList[index].title;
          rootState.subNavId = rootState.SubNavList[index].id;
       }
    },
    //修改文章 == 草稿箱
    modifyArctile({ commit, rootState }, id){
       getData.getData.postAxiosMethod(this, 'search_update_arctile.php', id, 'PUBLISHOVER');
    },
    //移除上传的图片
    deletePicture({ commit, rootState },index){
       this.commit("DELETEPICTURE",index);
    }

}

export default actions;