<template>
  <div class="container middle publish clearfix posrel">
       <div class='title left repWidth'>
        <div class="select posabs height">
	       <span>{{navTitle}}</span>
	        <ul class="posabs hiddenNone proClassfiy">
	          <li v-for="(navItem,index) in TopNavList.slice(1,4)" @click="changeNav($event)" :key=index>{{navItem.title}}</li>
	        </ul>
	        <div class="searchtype_arrow posabs"></div>
	     </div>
	     <div class="select NavClassfiy posabs height">
	      <span class="subClassfiy">{{subNavTitle}}</span>
	       <ul class="hiddenNone subNavInfo">
	         <li v-for="(subNavItem,index) in SubNavList" @click="changeSubNavInfo(index)" :key=index>{{subNavItem.title}}</li>
	       </ul>
	      <div class="searchtype_arrow sub_arrow posabs"></div>
	       </div>
           <input class="publishTitle height right" type="text" placeholder="内容标题不得超过30个字" maxlength=30 v-model="publishTitle" @change=checkTitle($event)>
         </div>
         <quill-editor v-if="showEditor == 2 " class="quill editorContainer" :options=editorOption ref="myTextEditor" v-model="container" @change="changeText()"></quill-editor>
         <div v-if="showEditor == 3 " class="imgUpload clearfix">
           <div class="prompt left">
            <ul>
	              <li v-for="(uploadPictureItem,index) in uploadPictureList" v-if="index > -1" :key=index>
	              <div class="promptPhoto posrel">
	               <div class="imgOptation posabs">
		             <div class="innerOption posabs">
                <em class="left">待上传</em>
                <em class="deleteImg right" @click.navite="delPicture(index)">删除</em>
              </div>
              <div class="updataloadbackground"></div>
              </div>
              <img :src=uploadPictureItem.pictureSrc>
            </div> 
            <textarea class="promptPhotoInfo" placeholder="请输入照片描述" v-model=uploadPictureItem.description ></textarea>
            </li>

              <li class="imgUploadWrap">
                <div class="imgUploadOptions posrel">
                 <div class="imgUploadOptionsButton posabs height bg">
                  <div class="promptPhoto posrel">+</div>
                   <div class="promptPhotoInfo" @chang="changeText($event)">请输入照片描述不得多余100字也可空着不写</div>
                  </div>
                <input type="file" @click="uploadImage($event)" class="posabs">
               </div>
              </li>
            </ul>
        </div>
          
       </div>
       <div v-if="showEditor == 4 " class="videoUpload clearfix">
           <div class="videoUploadWrap repWidth">
            <div class="videoUploadInner posabs" v-if="showPrograss" >
	      <i class="fa fa-cloud-upload"></i>
	       <input type="file" id="uploadVideoInfomation" class="uploadVideo posabs" @change="uploadVideoInfo($event)">
	       <label class="height">将视频拖拽到此处可上传</label>
	    </div>
	     <div class="videoUploadShowInfo" v-if="hiddenProgress">
	          <div class="videoUploadwbk posrel">
		     <div class="videoUploadbk posabs">
		       <i class="videoUploadbg posabs"></i>
		      </div>
		     <em class="videoUploadPrograss posabs">0%</em>
		  </div>
    <div class="videoPreview left">
		     <video id ="previewVideo"></video>
		  </div>
		  <div class="videoEditor right">
		     <textarea placeholder="我是视频描述信息" v-model= videoContainer ></textarea>
		  </div>
	     </div>
	   </div>
       </div>
       <label>请遵守<a href="#">经验社区公约</a>言论规则，不得违反国家法律法规</label>
       <input type="button" :value=submitValue class="height arctilePublishButton addMore bg right" @click="publish('arctile')"/>
    <div v-if="showEditor == 2 " class="preview posabs">
      <quill-editor  class="quill" :options=lookEditor ref="LookEditor"></quill-editor>
    </div>
    <div class="autoSave height right">
        <input type="button" value="保存到草稿箱" class="height arctilePublishButton addMore bg right" @click="saveDrafts('drafts')" v-if=" this.showEditor === 2"/>
    </div>
   <div class="changeVideo height right posrel"  v-if="hiddenProgress">
        <input type="file" value="更换视频" class="height changeVideoInput addMore bg right posabs" @change="uploadVideoInfo($event)"/>
    </div>
   </div>
</template>

<script>
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default {
  name: "publish",
  data() {
    return {
      publishTitle:"",
      description:"",
      videoContainer:"",
      lookEditor: { placeholder: "" },
      container: "",
      submitValue: "发布",
      navList:"",
      editorOption: {
        placeholder: "请输入您的内容",
        modules: {
          toolbar: [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "code-block",
            { color: ["#f5f5f5"] },
            { background: ["#008b8b"] },
            "image",
            "underline",
            "strike",
            "blockquote"
          ]
        }
      }
    };
  },
  beforeRouteEnter:function(to,from,next){
     next(vm=>{
       if(from.path == '/personal/myDrafts'){
         vm.postArctileDetails(vm.$route.query.id);
         let obj = {};
         obj.type= "drafts";
         obj.id= vm.$route.query.id;
         vm.setDraftsNum(obj);
       }else{
          let obj = {};
         obj.type= "drafts";
         obj.id= 0;
         vm.setDraftsNum(obj);
         vm.publishTitle="";
         vm.container="";
         vm.changeSubNav(0);
       }
     });
  },
  created:function(){
   this.postVC(this);
   this.postArctileDetails(this.index.getSession("draftsNum"));
  },
  mounted:function(){
     this.closeLookEditor(this);
  },
  computed:{
   ...mapState(['TopNavList','SubNavList','uploadPictureList','navTitle','subNavTitle','showEditor','showPrograss','hiddenProgress','arctileDetais']),
  },
  methods: {
    ...mapActions(['postVC','changeEditor','changeSubNav','closeLookEditor','changeText','uploadImages','uploadVideo','published','modifyArctile','postArctileDetails','setDraftsNum','deletePicture']),
    changeNav(ev){
      this.changeEditor(ev);
    },
    changeSubNavInfo(index){
      this.changeSubNav(index);
    },
    uploadImage(ev){
       this.uploadImages(ev);
    },
    uploadVideoInfo(ev){
      this.uploadVideo(ev);
    },
  checkTitle:function(args){
    if (args.target.value.length >30){
      console.log(args.target.value);
      args.target.value = args.target.value.slice(30);
    }
  },
saveDrafts(type){
  this.publish(type);
},
    publish(type){     
      if(this.publishTitle!==""){
           if(this.showEditor === 2){
             if(this.container !==""){
                 let publishInfo = {};
                 publishInfo.title = this.publishTitle;
                  publishInfo.type=type?type:"drafts";
                 publishInfo.container = this.container;
                 this.published(publishInfo);
                 this.publishTitle = '';
                 this.container = '';
                 this.$router.push({
                       path:"/arctiles"
                 });
             }else{
                alert("请输入内容");
             }
           }else if(this.showEditor === 3){
             if(this.uploadPictureList !==""){
                 for(let i = 0; i < this.uploadPictureList.length ;i++){
                      if(this.uploadPictureList[i].description == "" || this.uploadPictureList[i].pictureSrc == "" ){
                        alert("完善上传图集信息");
                      }
                  }
                 let publishInfo = {};
                     publishInfo.title = this.publishTitle;
                     publishInfo.uploadPictureList = this.uploadPictureList;
                     this.published(publishInfo);
                     this.publishTitle = '';
                     delete publishInfo.uploadPictureList;
                     for(let i = 0; i < this.uploadPictureList.length ;i++){
                      delete this.uploadPictureList[i].description;
                      delete this.uploadPictureList[i].picType;
                      delete this.uploadPictureList[i].pictureSrc;
                     }
                     this.uploadPictureList.length=0;
                     this.$router.push({
                       path:"/pictures"
                     });
             }else{
                alert("选择上传图片");
             }
           }else{
             let videoObj = document.getElementById("uploadVideoInfomation");
             let previewVideo = document.getElementById("previewVideo");
             if(videoObj.files[0]){
                let publishInfo = {};
                     publishInfo.title = this.publishTitle;
                     publishInfo.uploadVideoInfo = videoObj.files[0];
                     publishInfo.videoTime = previewVideo.duration;
                     publishInfo.videoContainer = this.videoContainer; 
                     this.published(publishInfo);
                     this.publishTitle = '';
                     publishInfo.videoContainer = '';
                     this.videoContainer = '';
                     delete publishInfo.title;
                     delete publishInfo.uploadVideoInfo;
                     delete publishInfo.videoTime;
                     this.$router.push({
                       path:"/videos"
                     });
             }else{
               alert("请选择视频");
             }
           }
      }else{
         alert("请输入标题");
      } 
    },
    changeText(){
      this.$refs.LookEditor.quill.root.innerHTML = this.container;
    },
   delPicture(index){
     this.deletePicture(index);
   }
  },

  watch:{
    arctileDetais(){ 
      if(this.arctileDetais){
       this.publishTitle = this.arctileDetais.arctile_title; 
       this.container = this.arctileDetais.arctile_content;
       this.changeSubNav(this.arctileDetais.arctile_nav_id-6);
      }
    },
  },
  store
};
</script>