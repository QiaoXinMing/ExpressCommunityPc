  <template> 
   <div class="container video middle"> 
    <div class="index-hot-topic repWidth"> 
     <div class="arctiles beautiful-article"> 
      <ul class="clearfix"> 
       <li v-for="(expressArctile,index) in videoList" :key=index> 
        <div class="beautiful-article-model"> 
	<router-link tag="h3" :to="{path:'VideoDetails',query:{id:expressArctile.video_id}}" class="overflow ht">
         {{expressArctile.video_title}}
	 </router-link>
         <div class="beautiful-article-info posrel"> 
          <div class="beautiful-article-img posrel"> 
           <img :src="expressArctile.video_preview_pic" /> 
           <span class="posabs fc"><i class="fa fa-play"></i>&nbsp;{{expressArctile.video_time}}</span> 
          </div> 
          <div class="beautiful-article-info-content right"> 
           <span class="beautiful-article-info-content"> {{expressArctile.video_content}} </span> 
          </div> 
          <div class="beautiful-article-bottom-info posabs height"> 
	            <em>[&nbsp;{{expressArctile.video_classfiy}}&nbsp;]</em>
              <em><i class="fa fa-eye"></i>&nbsp;{{expressArctile.video_looked}}查看</em>
              <em><i class="fa fa fa-reply"></i>&nbsp;{{expressArctile.video_reply}}回复</em>
              <em><i class="fa fa-share-alt"></i>&nbsp;{{expressArctile.video_forward}}分享</em>
              <em  @click="addCollection(expressArctile.video_id,index)"><i class="fa fa-folder-open" alt="收藏"></i>&nbsp;{{expressArctile.video_collection}}收藏</em>
              <em>{{expressArctile.video_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
              <em><i class="fa fa-user"></i>&nbsp;{{expressArctile.personal_username}}</em>
	        </div> 
         </div> 
        </div> 
	</li> 
      </ul> 
       <a href="javascript:void(0)" class="addMore height bg" @click="addMoreVideos()">加载更多</a>
     </div> 
    <RightInfo/>
    </div> 
   </div> 
</template> 
<script>
import RightInfo from "./RightInfo";
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
export default {
  name: "videos",
  data(){
    return {
       flag:true,
    }
  },
  components: {
    RightInfo
  },
  created: function() {
    this.getVideoList();
  },
  computed: {
    ...mapState(["videoList"])
  },
  methods: {
    ...mapActions(["getVideoList","addMore","getCollection","cancleCollection"]),
    addMoreVideos(){
      this.addMore("videos");
    },
    addCollection(id,index){  
     let obj = {};
     obj.infoId = id;
     obj.index = index;
     obj.type="video";
     obj.time = this.index.getNowTime().replace('年','-').replace('月','-').replace('日','');
     obj.userId = this.index.getSession("userId");
     if(this.flag){
        this.getCollection(obj);
        this.flag = !this.flag;
     }else{
        this.cancleCollection(obj);
        this.flag = !this.flag;
     }
    }
  },
  store
};
</script> 