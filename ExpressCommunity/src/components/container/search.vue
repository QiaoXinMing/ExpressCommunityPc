<template>
<div class="container  middle"> 
  <div class="arctiles repWidth">
    <div v-for="(publicIndex,index) in searchList" :key=index> 
      <div v-if="publicIndex.resource_type === 'arctile' " class="beautiful-article">
     <ul>
       <li>
      <div v-if="publicIndex.resource_url !== '' " class="beautiful-article-model">
       <router-link tag="h3" :to="{path:'ArctileDetails',query:{id:publicIndex.arctile_id}}" class="overflow ht">
         {{publicIndex.arctile_title}}
        </router-link>
       <div class="beautiful-article-info posrel">
        <div class="beautiful-article-img">
            <img :src=publicIndex.resource_url>
        </div>	
        <div class="beautiful-article-info-content right">
        <p class="ht">{{publicIndex.arctile_content}}</p>
        </div>
        <div class="beautiful-article-bottom-info posabs"> 
          <em>[&nbsp;{{publicIndex.arctile_classfiy}}&nbsp;]</em>
          <em><i class="fa fa-eye"></i>&nbsp;{{publicIndex.arctile_looked}}</em>
          <em><i class="fa fa-reply"></i>&nbsp;{{publicIndex.arctile_reply}}</em>
          <em><i class="fa fa-share-alt"></i>&nbsp;{{publicIndex.arctile_forward}}</em>
          <em><i class="fa fa-folder-open"></i>&nbsp;{{publicIndex.arctile_collection}}</em>
          <em>{{publicIndex.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
          <em><i class="fa fa-user"></i>&nbsp;{{publicIndex.personal_username}}</em>
        </div>
      </div>
    </div>

    <div v-else class="noPicture">
      <router-link tag="h3" :to="{path:'ArctileDetails',query:{id:publicIndex.arctile_id}}" class="overflow ht">
        {{publicIndex.arctile_title}}
	   </router-link>
     <div class="beautiful-article-info">	
      <p class="ht">{{publicIndex.arctile_content}}</p>
        <div class="beautiful-article-bottom-info right"> 
          <em>[&nbsp;{{publicIndex.arctile_classfiy}}&nbsp;]</em>
          <em><i class="fa fa-eye"></i>&nbsp;{{publicIndex.arctile_looked}}</em>
          <em><i class="fa fa fa-reply"></i>&nbsp;{{publicIndex.arctile_reply}}</em>
          <em><i class="fa fa-share-alt"></i>&nbsp;{{publicIndex.arctile_forward}}</em>
          <em><i class="fa fa-folder-open"></i>&nbsp;{{publicIndex.arctile_collection}}</em>
          <em>{{publicIndex.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
          <em><i class="fa fa-user"></i>&nbsp;{{publicIndex.personal_username}}</em>
        </div>
     </div>
   </div>
   </li>
  </ul>
      </div>

      <div v-if="publicIndex.resource_type == 'picture' " class="picture">
  <div class="index-hot-topic clearfix">
    <div class="beautiful-article">
      <div class="pictureInfo">
	 <router-link tag="div" :to="{path:'PictureDetails',query:{id:publicIndex.arctile_id}}" class="pictureInfoImage left">
          <img :src=publicIndex.resource_url>
        </router-link>
            <div class="publicIndexContent">
	       <h3 class="title">
	         {{publicIndex.arctile_title}}
	       </h3>
	      <p class="publicIndexContentDetails">
	        {{publicIndex.arctile_content}}
	      </p>
	    
	     <div class="picture-userInfo height right">
          <em>[&nbsp;{{publicIndex.arctile_classfiy}}&nbsp;]</em>
          <em>{{publicIndex.arctile_looked}}&nbsp;<i class="fa fa-eye"></i></em>
          <em>{{publicIndex.arctile_reply}}&nbsp;<i class="fa fa fa-reply"></i></em>
          <em>{{publicIndex.arctile_forward}}&nbsp;<i class="fa fa-share-alt"></i></em>
          <em>{{publicIndex.arctile_collection}}&nbsp;<i class="fa fa-folder-open" alt="收藏"></i></em>
          <em>{{publicIndex.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
          <em><i class="fa fa-user"></i>&nbsp;{{publicIndex.personal_username}}</em>
	     </div>
	</div>
      </div>
    </div>
  </div>
</div>


<div v-if="publicIndex.resource_type==='video' " class="videos bbs">
  <div class="viedo-details">
    <router-link tag="h3" :to="{path:'VideoDetails',query:{id:publicIndex.arctile_id}}" class="overflow height">
      {{publicIndex.arctile_title}}
    </router-link>
    <div class="videoInfo">
      <div class="video-wrap">
        <video class="left">
          <source :src=publicIndex.resource_url type="video/mp4"/>
        </video>
        <div class="video-wrap height bg">
            <em>[&nbsp;{{publicIndex.arctile_classfiy}}&nbsp;]</em>
            <em>{{publicIndex.arctile_looked}}&nbsp;<i class="fa fa-eye"></i></em>
            <em>{{publicIndex.arctile_reply}}&nbsp;<i class="fa fa fa-reply"></i></em>
            <em>{{publicIndex.arctile_forward}}&nbsp;<i class="fa fa-share-alt"></i></em>
            <em>{{publicIndex.arctile_collection}}&nbsp;<i class="fa fa-folder-open" alt="收藏"></i></em>
            <em>{{publicIndex.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
            <em><i class="fa fa-user"></i>&nbsp;{{publicIndex.personal_username}}</em>
        </div>
      </div>
      <div class="videoComment right">
        <span class="bg height">
          最新评论
        </span>
        <ul class="clearfix">
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li>
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
        </ul>
        <div class="pubVideoPl">
          <form action="" type="post">
            <textarea value="" class="left"></textarea>
            <input type="submit" class="right bg" value="发布" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

</div>
  <rightInfo />
 </div>
</template>

<script>
import store from "../../store/index"
import { mapState, mapActions } from "vuex"
import rightInfo from "./RightInfo"
import pg from "../personal/pg"
export default {
   name:"search",
  components: {
    rightInfo,
  },
   created: function() {
     this.getSearchList(this.$route.params.searchInfo);
  },
  computed: {
    ...mapState(["searchList"])
  },
  methods: {
    ...mapActions(["getSearchList"]),
   
  },
  watch:{
    $route(from,to){
      this.getSearchList(this.$route.params.searchInfo);
    }
  },
  store
}
</script>