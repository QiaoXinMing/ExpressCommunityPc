<template>
 <div class="perArticle">                               
 <ul class="garagraph clearfix"> 
  <li v-for="(expressArctile,index) in perArctileList" :key=index> 
     <div v-if="expressArctile.resource_url != '' " class="beautiful-article-model">
	   <a href="#/ArctileDetails"><h3 class="overflow height">{{expressArctile.arctile_title}}</h3></a>
            <div class="beautiful-article-info">
              <div class="beautiful-article-img">
                  <img :src=expressArctile.resource_url>
              </div>	
              <div  class="beautiful-article-info-content right">
                <p>{{expressArctile.arctile_content}}</p>
                 <div class="right"> 
                    <span>[&nbsp;{{expressArctile.arctile_classfiy}}&nbsp;]</span>
                    <span>{{expressArctile.arctile_looked}}&nbsp;<i class="fa fa-eye"></i></span>
                    <span>{{expressArctile.arctile_reply}}&nbsp;<i class="fa fa-reply"></i></span>
                    <span>{{expressArctile.arctile_forward}}&nbsp;<i class="fa fa-share-alt"></i></span>
                    <span>{{expressArctile.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></span>
                    <span class="delete" @click="del(expressArctile.arctile_id,index)">删除</span>
                  </div>
                </div>
              </div>
            </div>

      <div v-else class="beautiful-article-model noPicture">
        <h3 class="overflow height">{{expressArctile.arctile_title}}</h3>
          <div class="beautiful-article-info">	
          <div class="beautiful-article-info-content">
            <p>{{expressArctile.arctile_content}}</p>
            <div class="arctileFooter right"> 
              <span>[&nbsp;{{expressArctile.arctile_classfiy}}&nbsp;]</span>
                    <span>{{expressArctile.arctile_looked}}&nbsp;<i class="fa fa-eye"></i></span>
                    <span>{{expressArctile.arctile_reply}}&nbsp;<i class="fa fa-reply"></i></span>
                    <span>{{expressArctile.arctile_forward}}&nbsp;<i class="fa fa-share-alt"></i></span>
                    <span>{{expressArctile.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></span>
                    <span class="delete" @click="del(expressArctile.arctile_id,index)">删除</span>
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
import { mapState, mapActions ,mapGetters} from "vuex";
import pg from "./pg";
export default {
  name: "myArctile",
  created: function() {
    this.getPerArctileList(this.index.getSession("userId"));
  }, 
  components: {
    pg
  },
  computed: {
    ...mapState(["perArctileList","indexTotalNum"])
  },
  methods: {
    ...mapActions(["getPerArctileList","changePage","deleteMessage"]),
    del(id,index) {
      let obj = {};
      obj.id = id;
      obj.type = 'arctile';
      obj.index = index;
      this.deleteMessage(obj);
    },
    pagechange(currentPage) {
      this.changePage(currentPage);
    },
  },
  store
};
</script>