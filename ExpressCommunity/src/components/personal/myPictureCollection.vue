<template>
<div class="perPicture">
<ul class="clearfix">
     <li v-for="(pictureShowListItme,index) in perPictureShowList" :key=index >
      <div class="beautiful-article-info personalPicture pictureInfo">
	<router-link tag="div" :to="{path:'detailsPicture'}" class="pictureInfoImage left">
          <img :src=pictureShowListItme.resource_url>
        </router-link>
            <div class="perPictureContent">
	       <h3 class="height">
	         {{pictureShowListItme.picture_title}}
	       </h3>
	      <p class="perPictureContentDetails">
	        {{pictureShowListItme.picture_content}}
	      </p>
	      <div class="picture-userInfo right">
          <em>
            [ {{pictureShowListItme.picture_classfiy}} ]
          </em>
          <em>
            {{pictureShowListItme.picture_looked}}&nbsp;
            <i class="fa fa-eye"></i>            
          </em>
          <em>
            {{pictureShowListItme.picture_reply}}&nbsp;
            <i class="fa fa-reply"></i>            
          </em>
          <em>
            {{pictureShowListItme.picture_forward}}&nbsp;
            <i class="fa fa-share-alt"></i>
          </em>
          <em>
            {{pictureShowListItme.picture_collection}}&nbsp;
            <i class="fa fa-folder-open-alt"></i>
          </em>
          <em>
            {{pictureShowListItme.picture_publishTime}}&nbsp;
            <i class="fa fa-clock-o"></i>
          </em>
          <em  @click="del(pictureShowListItme.picture_id,index)">
            删除
          </em>
	</div>
	</div>
      </div>
      </li>
   
</ul>
<pg :total="indexTotalNum" @pagechange="pagechange"v-if=indexTotalNum></pg>
</div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
import pg from "./pg";
export default {
  name:'myPictureCollection',
  created:function(){
    this.getPerPictureList(this.index.getSession("userId"));
  },
  components: {
    pg
   },
  computed:{
   ...mapState(["perPictureShowList","indexTotalNum"]), 
  },
  methods:{
   ...mapActions(["getPerPictureList","changePicturePage","deleteMessage"]),  
   del(id,index) {
      let obj = {};
      obj.id = id;
      obj.type = 'picture';
      obj.index = index;
      this.deleteMessage(obj);
    },
    pagechange(currentPage){
      this.changePicturePage(currentPage);
     }
  },
  store
}
</script>