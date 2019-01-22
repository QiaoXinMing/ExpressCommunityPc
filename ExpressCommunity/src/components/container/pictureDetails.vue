<template>
   <div class="container middle clearfix"> 
   <div class="arctilesDetailsLeft showPictureBanner subMiddle left"> 
    <div class="slideDetails subMiddle posrel"> 
     <div class="slideDetailsPicture posrel"> 
      <ul class="slideWrapper posabs" id="slideWrapper"> 
       <li v-for="(bannerItem,index) in pictureDetailsList.resource_url" :key="index"> 
        <div class="showPictureBannerDetailsImg subMiddle posrel">
         <img :src="bannerItem" alt="" /> 
         <b :href="bannerItem" target="_blank" class="posabs"><i class="fa fa-download"></i></b> 
        </div> 
        </li> 
      </ul> 
     </div> 
     <div class="slidePictureDetails posabs"> 
       <div class="slideDetailsPictureContainer"> 
        <ul class="wrapperContainer posabs" id="wrapperContainer"> 
          <li v-for="(bannerItem,index) in pictureDetailsList.picture_content" :key="index"> {{bannerItem}} </li>  
        </ul> 
       </div> 
      </div> 
     <a href="javascript:;" class="posabs bg prev">上一张</a> 
     <a href="javascript:;" class="posabs bg next">下一张</a> 
    </div> 
  <comment :arctileId="{id:arctileId,type:'picture'}"></comment>
   </div> 
   <div class="userPictureInfo right"> 
    <h3 class="height">{{pictureDetailsList.picture_title}}</h3> 
    <!--div v-for="(pictureDetailsItem,index) in pictureDetailsList.picture_content" :key=index>
    {{pictureDetailsItem}}
    </div-->

    <div class="userPictureDteilsInfo"> 
     <img :src= pictureDetailsList.personal_pic /> 
    </div> 
    <div class="author">
      {{pictureDetailsList.personal_username}} &nbsp;&nbsp; 
     <a href="javascript:void(0)" class="tpgzyh height bg showInfo">关注</a> 
    </div> 
    <div class="detailsPictureContainer"></div> 
    <div class="userFooter clearfix"> 
     <div class="userPictureTime"> 
      <span class="left">[{{pictureDetailsList.picture_classfiy}}]&nbsp;&nbsp;{{pictureDetailsList.picture_publishTime}}</span> 
     </div> 
     <div class="userPictureDetailsShareInfoDetails height"> 
      <label class="">分享到</label> 
      <ul> 
       <li> <i class="fa fa-qq"></i></li> 
       <li> <i class="fa fa-weibo"></i></li> 
       <li> <i class="fa fa-h-sign"></i></li> 
      </ul> 
      <a href="javascript:void(0)" @click="addCollection(pictureDetailsList.picture_id,'picture')">{{pictureDetailsList.picture_collection}}收藏</a>
      <a href="javascript:void(0)">举报</a> 
     </div> 
    </div> 
   </div> 
  </div>
</template>

<script>
import comment from "./comment";
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default{
  name:"PictureDetails",
   components: {
    comment
  },
  data(){
    return {
      length:"",
      arctileId:0,
      flag:true,
    }
  },
  beforeRouteEnter:function(to,from,next){
    next(vm=>{
         vm.postPictureDetails(vm.$route.query.id);
         vm.arctileId = vm.$route.query.id;
    })     
  },
  created:function(){
  },
  computed:{
   ...mapState(['pictureDetailsList','meberShowListLength']),   
  },
  methods:{
    ...mapActions(["postPictureDetails","getDetailsCollection","cancleDetailsCollection"]),
    addCollection(id,type){
      let obj = {};
      obj.id = id;
      obj.type=type;
      if(this.flag){
           this.getDetailsCollection(obj);
           this.flag = !this.flag;
      }else{
           this.cancleDetailsCollection(obj);
           this.flag = !this.flag;
      }
    }
  },
  watch:{
    pictureDetailsList(){
        this.index.startfunnyBanner(this.meberShowListLength);
    }
    
  },
  store
}
</script>