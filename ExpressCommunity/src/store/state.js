const state = {
    TopNavList: [], //获取顶部导航信息初始化数据
    SubNavList: [], //获取子导航信息初始化数据
    QrNavList: [], //获取顶部二维码初始化数据
    FooterList: [], //展示网站底部导航
    Copyright: "", //网站版权信息   
    FootNavList: [], //获取底部导航信息
    bannerList: [], //首页banner
    hotdata: [], //热点文章
    hotTopicList: [], //精选话题
    invitationList: [], //精选帖子
    invitationPictureList: [], //精选图片
    meberShowList: [], //会员展示
    numArctile:0,//默认显示主题条数
    funnyBannerList: [], //幽默banner
    funnyPictureList: [], //幽默图片展示
    expressArctileList: [], //文章列表获取
    arctilePhList: [], //文章和视频公共模板页右侧显示信息数据
    articleRankingList: [], //推荐阅读列表
    pictureShowList: [], //图片列表页
    pictureDetailsList: [], //图片详情页
    videoList: [], //视频列表页
    publicIndexList: [], //模板方法
    personalsetList: [], //个人中心导航
    perList: [], //个人导航
    arctileDetais: [], //文章详情页
    commentList: [], //文章评论详情
    videoDetais: [], //视频详情页
    perArctileList: [], //个人中心文章
    perPictureShowList: [], //个人中心图片
    perVideoList: [], //个人中心视频
    perCollection: [], //个人收藏
    questionArctileList: [], //个人问题
    answerArctileList: [], //个人回答
    draftsArctileList: [], //个人草稿箱
    addTempArctileList: [], //个人草稿箱
    messageList: [], //个人消息
    searchList: [], //搜索列表
    indexTotalNum: 0, //首页文章总数
    shareMessage:0,//数据共有
    tempList: [], //文章列表缓存
    user: [], //login数组 
    uploadPictureList: [], //上传图片缓存数组
    pageview: "", //网站访问量
    tempPerList: [], //个人信息数据缓存数组
    personalPhoto: [], //个人中心头像
    searchTotal: 0, //搜索总数
    navTitle: "文章", //发布页主导航
    subNavTitle: "宅技术", //发布页子导航
    subNavId: 6, //设置子导航默认ID
    showEditor: 2, //显示编辑区区块
    showPrograss:true,//视频区域显示预览视频
    hiddenProgress:false,//视频区域隐藏预览视频
    meberShowListLength:0,
};

export default state;