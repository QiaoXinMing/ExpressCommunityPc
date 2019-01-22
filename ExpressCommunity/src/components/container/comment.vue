<template>
    <div class="comment">
        <div class="publishComment repWidth">
            <div class="publishCommentTitle repWidth">
                <h3 class="left height">读者感悟</h3>
                <sub>请遵守<a href="#">经验社区公约</a>言论规则，不得违反国家法律法规</sub>
                <em class="right">{{commentList.length}}条评论</em>
            </div>
            <div class="publishEditore repWidth">
                <textarea v-model="plEditorContainer"></textarea>
                <input type="button" value="发布评论" class="right height bg" @click="checkLogin()">
            </div>
        </div>
        <div class="publishCommentDetails repWidth">
             <div class="userComment repWidth" v-for='(commentListItem ,index ) in commentList' :key = index>
                 <div class="photo left">
                     <img :src=commentListItem.personal_pic >
                 </div>
                 <div class="commentDetails right">
                      <h3 class="height"><a>{{commentListItem.personal_username}}</a>
                      <em>{{commentListItem.countTime}}</em></h3>
                      <div class="commentDetailsContainer">
                          <dl>
                              <dt>{{commentListItem.arctile_content}}</dt>
                              <dd>
                                  <div class="subComment">
                                      <div class="subCommentDetails subMiddle" v-if="commentListItem.arctile_replay_content">
                                          <b>{{commentListItem.arctile_reply_username}} :</b>
                                          {{commentListItem.arctile_replay_content}}
                                          <div class="subFooter height">
                                             <span><i class="fa fa-heart-o"></i>喜欢{{commentListItem.arctile_replay_like}}</span>
                                             <span @click.navite=replayUser(commentListItem.arctile_reply_id,index)><i class="fa fa-comment"></i> 回复 </span>
                                             <div v-if="syzReplay == index" class="subPublish subUserPublish">
                                          <textarea class="subPublishContainer" v-model=replayContent></textarea>
                                          <input type="button" value="回复" class="height bg right" @click.navite="replayInfo(commentListItem.arctile_reply_id,commentListItem.arctile_like_num,commentListItem.arctile_title,'replaySubDetails')"/>
                                      </div>
                                      </div>
                                      </div>
                                      <div class="subFooter height">
                                             <span><i class="fa fa-heart-o"></i>喜欢{{commentListItem.arctile_replay_like}}</span>
                                             <span @click.navite=replay(commentListItem.arctile_reply_id,index)><i class="fa fa-comment"></i> 回复 </span>
                                      </div>
                                      <div v-if="syz == index" class="subPublish subUserPublish">
                                          <textarea class="subPublishContainer" v-model=subPublishContainer></textarea>
                                          <input type="button" value="回复" class="height bg right" @click.navite="replayInfo(commentListItem.arctile_reply_id,commentListItem.arctile_like_num,commentListItem.arctile_title,'replaySubInfo')"/>
                                      </div>
                                  </div>
                              </dd>
                          </dl>
                          
                      </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import store from "../../store/index";
import { mapState,mapActions} from "vuex";
export default {
    name:"comment",
    props:["arctileId"],
    data(){
        return{
            plEditorContainer:"",
            syz:-1,
            i:1,
            syzReplay:1,
            replayContent:"",
            subPublishContainer:"",
        }
    },
    created:function(){
       
    },
   computed: {
    ...mapState(["commentList"])
  },
  methods:{
    ...mapActions(["getCommentList","sendCommentInfo","commentListCommint"]),
    checkLogin(){
        if(this.index.getSession("username") !== 'null'){
            if(this.plEditorContainer.match(/^\s*$/)){
                  alert("请输入评论内容字数不限");
            }else{
               let obj = {};
          obj.id = this.arctileId.id;
          obj.type=this.arctileId.type;
          obj.title=this.commentList[0].arctile_title;
          obj.container = this.plEditorContainer;
          obj.userId = this.index.getSession("userId");
          obj.time = this.index.getNowTime().replace("年","-").replace("月","-").replace("日","");
          obj.like = "0";
          this.sendCommentInfo(obj);
          this.plEditorContainer='';
            }
        }else{
          alert("请登录");
        }
    },
    replayUser(id,index){
        let _this = this;        
        (function(index){
            _this.i+=1;
            if(_this.i%2){
              _this.syzReplay = -1;
              _this.i=1;
            }else{
              _this.syzReplay = index;
            }
          
        })(index)
    },
    replay(id,index){
        let _this = this;        
        (function(index){
            _this.i+=1;
            if(_this.i%2){
              _this.syz = -1;
              _this.i=1;
            }else{
              _this.syz = index;
            }
          
        })(index)
     },
     replayInfo(id,likeNum,title,type){
         if(this.replayContent.match(/^\s*$/) && this.subPublishContainer.match(/^\s*$/)){
             console.log("please input  comment info");
         }else{
            let obj = {};
            obj.arctileId = id;
            obj.userId = this.index.getSession("userId");
            obj.username = this.index.getSession("username");
            obj.type="arctile";
            obj.replayType= type;
            if(!this.replayContent.match(/^\s*$/) && type=="replaySubDetails"){
                obj.container = this.replayContent;
            }else if(!this.subPublishContainer.match(/^\s*$/) && type=="replaySubInfo"){
                obj.container = this.subPublishContainer;
            }
            obj.time = this.index.getNowTime().replace("年","-").replace("月","-").replace("日","-");
            obj.like= likeNum;            
            console.log(obj);
            this.commentListCommint(obj);
         }
     },
  },
  watch:{
      arctileId:function(){
          this.getCommentList(this.arctileId);
      }
  }
  
}
</script>