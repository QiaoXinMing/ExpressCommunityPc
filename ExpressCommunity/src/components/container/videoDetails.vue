<template>
   <div class="container middle clearfix videoDetails"> 
      <div class="VideoDetailsLeft DetailsLeft hotTag posrel">
      <h3 class="posabs title hotTag">{{videoDetais.video_title}}</h3>
        <div class='detailsInfo'>
         <video :src= videoDetais.resource_url class="left"></video>
          <div class="repWidth controlStrip height bg"> 
            <span class="playInfo posrel height"> <i class="fa fa-play play posabs" id="play"></i> <i class="fa fa-pause pause posabs hiddenNone" id="pause"></i> </span> 
            <span class="timeInfo"> <em id="currentTime">00:00</em>/ <em id="durationtime">{{videoDetais.video_time}}</em> </span> 
            <span class="prograss posrel"> <em id="prograss" class="posabs"></em> </span> 
            <span class="volume posrel" id="parentVolumeWrap">
              <i class="fa fa-volume-u  p height"></i> 
              <em class="posrel parentVolume"><a id="volumeDown"><i id="volume" class="posabs"></i></a></em> 
            </span>
            <span class="video-down">
              <a :href= videoDetais.resource_url  :title= videoDetais.video_title :alt= videoDetais.video_title >
              <i class="fa fa-download"></i>
              </a>
            </span>
            <span class="video-down video-like" @click="addCollection(videoDetais.video_id,'video')"><i id="heart" class="fa fa-folder-open"></i> {{videoDetais.video_collection}}</span>
            <span class="video-share"><i id="heart" class="fa fa-share-alt"></i> {{videoDetais.video_forward}}</span>
            <span class="fullScreen" id="fullscreen">
                  <i class="fa fa-arrows-alt"></i>
            </span> 
          </div> 
     </div>
<comment :arctileId="{id:arctileId,type:'video'}"></comment>
   </div>
    <DetailsRightInfo :userInfo="userInfo"/>
  </div>
</template>

<script>

import DetailsRightInfo from "./DetailsRightInfo";
import comment from "./comment";
import store from "../../store/index";
import { mapState,mapActions} from "vuex";
export default {
  name: "VideoDetails",
  data() {
    return {
      userInfo:[],
      arctileId:0,
      flag:true,
    };
  },
  components: {
    DetailsRightInfo,
    comment
  },
  beforeRouteEnter:function(to,from,next){
    next(vm=>{
      vm.postVideoDetails(vm.$route.query.id);
      vm.arctileId = vm.$route.query.id;   //调用id查询评论信息数据
    });
  },
  mounted:function(){
     this.index.playVideo();     
  },
  computed: {
    ...mapState(["videoDetais"])
  },
  methods:{
    ...mapActions(["postVideoDetails","getDetailsCollection","cancleDetailsCollection"]),
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
     videoDetais(){
	     this.userInfo = this.videoDetais;
     }
  },
  store
};
</script>
