<template>
  <div class="perVideo"> 
      <ul class="clearfix"> 
       <li v-for="(expressArctile,index) in perVideoList" :key=index> 
        <div class="beautiful-article-model"> 
	<router-link tag="h3" :to="{path:'VideoDetails'}" class="overflow height">
         {{expressArctile.video_title}}
	 </router-link>
         <div class="beautiful-article-info posrel repWidth"> 
          <div class="beautiful-video-img"> 
           <img :src="expressArctile.video_preview_pic" /> 
           <span class="posabs"><i class="fa fa-play"></i>&nbsp;{{expressArctile.video_time}}</span> 
          </div> 
          <div class="beautiful-article-info-content right"> 
           <p> {{expressArctile.video_content}} </p> 
           <div class="beautiful-article-bottom-info right"> 
	   <em>[ {{expressArctile.video_classfiy}} ]</em> 
	   <em>{{expressArctile.video_looked}}&nbsp;<i class="fa fa-eye"></i></em> 
	   <em>{{expressArctile.video_reply}}&nbsp;<i class="fa fa-reply"></i></em> 
	   <em>{{expressArctile.video_forward}}&nbsp;<i class="fa fa-share-alt"></i></em> 
	   <em>{{expressArctile.video_collection}}&nbsp;<i class="fa fa-folder-open"></i></em> 
	   <em>{{expressArctile.video_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em> 
           <em  @click="del(expressArctile.video_id,index)">删除</em>
	   </div> 
          </div> 
         </div> 
        </div> 
	</li> 
      </ul> 
      <pg :total="indexTotalNum" @pagechange="pagechange" v-if=indexTotalNum></pg>
     </div> 
</template>

<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
import pg from "./pg";
export default{
  name:"myVideo",
   components: {
    pg
  },
  created: function() {
    this.getPerVideoList(this.index.getSession("userId"));
  },

  computed: {
    ...mapState(["perVideoList","indexTotalNum"])
  },
  methods: {
    ...mapActions(["getPerVideoList","changeVideoPage","deleteMessage"]),
    del(id,index) {
      let obj = {};
      obj.id = id;
      obj.type = 'video';
      obj.index = index;
      this.deleteMessage(obj);
    },
     pagechange(currentPage) {
      this.changeVideoPage(currentPage);
    }
  },

  store
}
</script>