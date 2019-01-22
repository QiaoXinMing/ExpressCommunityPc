<template>
  <div class="personal container middle">
    <div class="personalInfo repWidth">
      <div class="personalPhoto left">
        <img :src=user.personal_pic />
      </div>
      <div class="personalshowInfo left">
        <h3 class="height">{{user.personal_username}}</h3>
        <ul>
          <li>
            <label>文章</label>
            {{user.personal_arctile}}
          </li>
          <li>
            <label>图集</label>
            {{user.personal_picture}}
          </li>
          <li>
            <label>视频</label>
            {{user.personal_video}}
          </li>
          <li>
            <label>经验币</label>
            {{user.personal_jyb}}
          </li>
         </ul>
      </div>
      <a class="personal bg height addMore showInfo" @click="publish()">发布文章</a>
      <a class="personal bg height addMore showInfo" @click="singout()">退出登录</a>
    </div>
    <div class="personalNav repWidth">
      <ul class="height">
        <router-link tag="li" :to="{name:personalsetItem.url}" v-for="(personalsetItem,index) in personalsetList" :key=index @click="change(personalsetItem.url)">
         {{personalsetItem.title}}
        </router-link>
      </ul>
    </div>
     <router-view name='person'></router-view>
  </div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
export default {
  name:"personal",
  created: function() {
    this.getPersonalOperation();
        let user={};
        user.username = this.index.getSession("username");
        user.password = this.index.getSession("password");
        this.login(user);
  },
 
  computed: {
    ...mapState(["personalsetList","user"])
  },
  methods: {
    ...mapActions(["getPersonalOperation","checkLogin", "postVC","login"]),
    change(args) {
      this.changeUrl = args;
    },
    changePhoto() {
      this.plugs.uploadPhoto();
    },
    publish:function(){
      this.postVC(this);
      this.checkLogin();
    },
    singout(){
      localStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%0%pictureNum%0%videoNum%0%navId%6%userId%null%username%null%password%null%dateTime%"+(+new Date()));
      this.$router.push({
        path:"../../index"
      })
    }
  },
  store
}
</script>
