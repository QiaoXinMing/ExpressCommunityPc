<template>
 <div class="arctilesDetailsRight right">
     <div class="publishUser">
        <ul>
	   <li>
	      <img :src=user.personal_pic >
	   </li>
		   <li>
	      <a href="javascript:void(0)" class="addMore bg">关注</a>
	   </li>
	   <li>
	      <label>发布者：</label>
	      {{user.personal_username}}
	   </li>
	    <li>
	      <label>粉丝：</label>
	      {{user.personal_attentioned}}人
	   </li>
	    <li>
	      <label>关注：</label>
        {{user.personal_attention}}人
	   </li>
	    <li class="ds">
	      <label v-if="user.resource_type == 'arctile' ">文章不错打赏一个</label>
	      <label v-if="user.resource_type == 'video' ">视频不错打赏一个</label>
	      <label v-if="user.resource_type == 'picture' ">图集不错打赏一个</label>
	      <img src="http://localhost:65534/JingYanSheQu/images/webSite/QR_jysq.png"/>
	   </li> 
		
	</ul>
  </div>
 </div>

</template>

<script>

export default{
  name:"DetailsRightInfo", 
  props:['userInfo'],
  data(){
    return{
       user:[],
    }
   },
   watch:{
      userInfo(){
         this.user = this.userInfo;
      }
   }
}
</script>