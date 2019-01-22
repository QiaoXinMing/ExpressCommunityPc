<template>
   <div class="personalShowDetailsInfo"> 
   <div class="previewPhotoArea"> 
    <div class="userPhoto posrel"> 
     <div class="chooseBox posabs hiddenNone" id="chooseBox"></div> 
     <div class="previewPhoto"> 
      <img id="previewPhoto" :src=user.personal_pic /> 
     </div> 
     <input type="file" @click="changePhoto()" class="height posabs"/> 
     <b class="height bg posabs">更换头像</b> 
    </div> 
    <canvas class="previewShear" id="previewShear"></canvas> 
    <canvas class="previewCircle" id="previewCircle"></canvas> 
   </div> 
   <div class="personalUsername"> 
    <label class="height">用户昵称</label> 
    <input type="text" :placeholder=user.personal_username class="height"/> 
   </div> 
   <div class="personalUsername"> 
    <label class="height left">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;&nbsp;</label> 
    <ul class="sex"> 
     <li><input type="radio" name="sale" checked/>&nbsp;男</li> 
     <li><input type="radio" name="sale" />&nbsp;女</li> 
     <li><input type="radio" name="sale" />&nbsp;保密</li> 
    </ul> 
   </div> 
   <div class="personalUsername"> 
    <label class="height">电子邮件</label> 
    <input type="text" :placeholder=user.personal_email_name class="height"/> 
   </div> 
   <div class="personalUsername"> 
    <label class="height">手机号码</label> 
    <input type="text" :placeholder=user.personal_phoneNum class="height"/> 
   </div> 
   <div class="personalUsername"> 
    <label class="height">微信收款二维码</label> 
    <input type="file" name="qr" id="qr" value="上传二维码" @change=upQr()>
   </div> 
   <div class="personalUsername"> 
    <label class="height left">个人简介</label> 
    <textarea class="personal jianjie" :placeholder=user.personal_introduction></textarea> 
   </div> 
   <div class="social"> 
    <label class="height left">社交账号</label> 
    <div class="binding"> 
     <p class="height">你可以通过绑定的社交帐号登录社区。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p> 
     <p class="height">如果帐号被占用，你可以在<a href="#">经验社区帐号</a>绑定解绑相关问题汇总中获得相关帮助。</p> 
     <div class="accountNumber"> 
      <ul> 
       <li class="height"> <i class="fa fa-h-sign"></i> 绑定微博&nbsp;&gt; </li> 
       <li class="height"> <i class="fa fa-h-sign"></i> 绑定微博&nbsp;&gt; </li> 
       <li class="height"> <i class="fa fa-h-sign"></i> 绑定微博&nbsp;&gt; </li> 
       <li class="height"> <i class="fa fa-h-sign"></i> 绑定微博&nbsp;&gt; </li> 
       <li class="height"><i class="fa fa-plus-sign-alt"></i>添加更多社交账号&nbsp;+&gt; </li> 
      </ul> 
     </div> 
    </div> 
   </div> 
   <input type="submit" value="保存" class="addMore height bg"/> 
  </div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
export default {
  name: "mySet",
  created: function() { 
    let user={};
        user.username = this.index.getSession("username");
        user.password = this.index.getSession("password");
        this.login(user);
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["modifyPhoto","login"]),
    changePhoto() {
      this.modifyPhoto();
    },
    upQr(){
      let qr = document.getElementById("qr");
      if(qr.files[0].type === "image/png"){
         console.log("fz yonghushujxinx");
      }else{
         alert("请选择png格式二维码");
      }
    }
  },
  store
};
</script>