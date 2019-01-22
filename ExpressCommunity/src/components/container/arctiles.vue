<template>
    <div class="container clearfix middle">
    <div class="arctiles">
       <ArctilesIndex></ArctilesIndex>
       <a href="javascript:void(0)" class="addMore height bg" @click="addMoreArctile()">加载更多</a>
    </div>
     <RightInfo/>
   </div>
</template>

<script>
import ArctilesIndex from "./ArctileIndex";
import RightInfo from "./RightInfo";
import store from "../../store/index";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "arctile",  
  components: {
    ArctilesIndex,
    RightInfo
  },  
  computed: {
    ...mapState(["addMoreTotalList","currentIndex","addMoreTotal"])
  },
  methods: {
    ...mapActions(["addMore"]),
    addMoreArctile(){
      this.addMore("arctiles");
    }
  },
  store
};
</script>
