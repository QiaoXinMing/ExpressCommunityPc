<template>
 <div class="beautiful-article-right  right">
    <div class="article-ranking">
        <div class="article-ranking-title height">
                 <h3>文章排行</h3>
                <a href="javascript:void(0)" class="on" @click="read($event)">阅读</a>
                <a href="javascript:void(0)" @click="commen($event)">评论</a>
              </div>
            <ul>
            <router-link tag="li" :to="{name:'ArctileDetails',query:{id:arctileItem.arctile_id}}" class="overflow height" v-for="(arctileItem,index) in arctilePhList" :key=index>
             <em>{{index+1}}.</em>
             {{arctileItem.arctile_title}}
           </router-link>
          </ul>
	</div>
	<div class="article-ranking read right">
		<div class="article-ranking-title height">
                  <h3>推荐阅读</h3>
		</div>
		<ul>		
		<li v-for="(articleRankingItem,index) in articleRankingList" v-if="articleRankingItem.resource_url !='' "  :key=index>
                      <h3 class="overflow height">{{articleRankingItem.arctile_title}}</h3>
                    <div class="read-img"><img :src=articleRankingItem.resource_url ></div>
                    <div class="read-info right">
                    <span>{{articleRankingItem.arctile_content}}</span>
                    <router-link tag="a" :to="{name:'ArctileDetails',query:{id:articleRankingItem.arctile_id}}" class="right">
                 查看更多
              </router-link>
            </div>
          </li>
        </ul>
     </div>
</div>

</template>

<script>
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default{
  name:"RightInfo", 
  created:function(){
    this.getParagraphbList();
    this.getRecommend();
  },
  computed:{
    ...mapState(['arctilePhList','articleRankingList']), 
  },
  methods:{
    ...mapActions(['getParagraphbList','getParagraphbPlList','getRecommend']),
   read(tar){
     tar.target.className = "on";
     tar.target.nextElementSibling.className = "";
     this.getParagraphbList();
   },
   commen(tar){
     tar.target.className = "on";
     tar.target.previousElementSibling.className = "";
     this.getParagraphbPlList();
   }
  },
  store 
}
</script>