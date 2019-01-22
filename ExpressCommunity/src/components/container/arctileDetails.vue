<template>
 <div class="container middle clearfix">
   <div class="arctilesDetailsLeft DetailsLeft hotTag left">
     <h3>{{arctileDetais.arctile_title}}</h3>
     <div class="arctileContainer hotTag" >
      <quill-editor class="quill lookArctile" :options="editorOption" ref="myTextEditor"></quill-editor>
     </div>
     <div class="arctileUerInfo right">
       <span>{{totalNum}}&nbsp;字</span>
       <span>{{arctileDetais.arctile_looked}} 人浏览</span> 
       <span>{{arctileDetais.arctile_reply}} 人回复</span>
       <span @click="addCollection(arctileDetais.arctile_id,'arctile')"><i class="fa fa-folder-open"></i>&nbsp;{{arctileDetais.arctile_collection}} 人喜欢</span> 
       <span>{{arctileDetais.arctile_publishTime}}</span> 
       <span>作者:&nbsp;{{arctileDetais.personal_username}}</span>
     </div>
     <comment :arctileId="{id:arctileId,type:'arctile'}"></comment>
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
  name: "ArctileDetails",
  data() {
    return {
      userInfo:[],
      arctileId:0,
      totalNum:0,
      editorOption: {
        placeholder: "",
      },
      flag:true,
    };
  },
  beforeRouteEnter (to, from, next) {   
    next(vm=>{
      vm.postArctileDetails(vm.$route.query.id);
      vm.arctileId = vm.$route.query.id;
    })

  },
  components: {
    DetailsRightInfo,
    comment
  },
  mounted: function() {
    this.$refs.myTextEditor.quill.enable(false);
  },
  computed: {
    ...mapState(["arctileDetais",])
  },
  methods:{
    ...mapActions(["postArctileDetails","getDetailsCollection","cancleDetailsCollection"]),
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
    arctileDetais:function(){
      this.$refs.myTextEditor.quill.root.innerHTML = this.arctileDetais.arctile_content;
      let _this = this;
      setTimeout(function(){
       _this.totalNum = _this.$refs.myTextEditor.quill.getLength();
      },0)
        this.userInfo = this.arctileDetais;
    },
    
  },
  store
};
</script>