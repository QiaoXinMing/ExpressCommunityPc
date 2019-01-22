<template>
  <div class="perCollection"> 
  <div class="arctiles repWidth">
    <div v-for="(publicIndex,index) in perCollection" :key=index> 
      <div v-if="publicIndex.resource_type === 'arctile' " class="beautiful-article">
     <ul>
       <li>
      <div v-if="publicIndex.resource_url !== '' " class="beautiful-article-model">
       <router-link tag="h3" :to="{name:'ArctileDetails',query:{id:publicIndex.arctile_id}}" class="overflow ht">
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
          <em @click="del('arctile',publicIndex.arctile_id,index)">删除</em>
        </div>
      </div>
    </div>

    <div v-else class="noPicture">
      <router-link tag="h3" :to="{name:'ArctileDetails',query:{id:publicIndex.arctile_id}}" class="overflow ht">
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
          <em @click="del('collectionArctile',publicIndex.arctile_id,index)">删除</em>
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
	 <router-link tag="div" :to="{name:'PictureDetails',query:{id:publicIndex.arctile_id}}" class="pictureInfoImage left">
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
          <em @click="del('collectionPicture',publicIndex.arctile_id,index)">删除</em>
	     </div>
	</div>
      </div>
    </div>
  </div>
</div>


<div v-if="publicIndex.resource_type==='video' " class="videos bbs">
  <div class="viedo-details">
    <router-link tag="h3" :to="{name:'VideoDetails',query:{id:publicIndex.arctile_id}}" class="overflow height">
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
            <em @click="del('collectionVideo',publicIndex.arctile_id,index)">删除</em>
        </div>
      </div>
      <div class="videoComment right">
        <span class="bg height">
          最新评论
        </span>
        <ul class="clearfix">
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
            <em>
              {{publicIndex.personal_username}}&nbsp;:&nbsp;&nbsp;&nbsp;
            </em>
            {{publicIndex.arctile_content}}
          </li>
          <li class="overflow">
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
    <pg :total="indexTotalNum" @pagechange="pagechange" v-if=indexTotalNum></pg>
</div>
 </div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
import pg from "./pg";
export default {
  name:'myCollection',
   
 components: {
    pg
  },
created: function() {
    this.getPerCollectionList(this.index.getSession("userId"));
  },
computed: {
    ...mapState(["perCollection","indexTotalNum"])
  },
methods:{
 ...mapActions(["getPerCollectionList","changeCollectionPage","deleteMessage"]),
  pagechange(currentPage){
    this.changeCollectionPage(currentPage);
     },
     del(type,id,index) {
      let obj = {};
      obj.id = id;
      obj.type = type;
      obj.index = index;
      this.deleteMessage(obj);
    },
  },

}
</script>