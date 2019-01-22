<template>
    <div class="customMessage hotTag">
    <ul class="clearfix">
     <li v-for="(meaasgeItem,index) in messageList" :key=index>
      <div class="customMessageWrap" v-if="meaasgeItem.arctile_type !='administrator' " >
       <div class="customPhoto left">
        <img :src=meaasgeItem.personal_pic >
       </div>
       <div class="customPrompt">
       <div class="customPromptTop">
	    <label class="left">来自&nbsp;{{meaasgeItem.personal_username}}&nbsp;通知</label>
	    <label class="right">{{meaasgeItem.arctile_publishTime}}</label>
      </div>
         {{meaasgeItem.arctile_content}}
       </div>
     </div>

 <div class="customMessageWrap" v-else>
  <div class="customPhoto left">
    <img :src=meaasgeItem.personal_pic>
  </div>
  <div class="customPrompt">
    <div class="customPromptTop height">
      <label class="left">来自&nbsp;{{meaasgeItem.arctile_type}}&nbsp;通知&nbsp;&nbsp;&nbsp;{{meaasgeItem.arctile_publishTime}}</label>
      <label class="right"><em @click="del(meaasgeItem.arctile_reply_id,index)">删除</em></label>
    </div>
    <p>{{meaasgeItem.arctile_content}}</p>
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
  name:'myMessage',
  data(){
     return{
      display: 10, // 每页显示条数
      current: 1, // 当前的页数
     }
  },
 created:function(){
   this.getPerMessageList(this.index.getSession("userId"));
  },
  components: {
    pg
  },
 computed: {
    ...mapState(["messageList","indexTotalNum"])
  },
  methods: {
    ...mapActions(["getPerMessageList","changeMessagePage","deleteMessage"]),
   del(id,index) {
      let obj = {};
      obj.id = id;
      obj.type = 'message';
      obj.index = index;
      this.deleteMessage(obj);
    },
    pagechange(currentPage) {
     this.changeMessagePage(currentPage);
    },
    
  },   
}
</script>

