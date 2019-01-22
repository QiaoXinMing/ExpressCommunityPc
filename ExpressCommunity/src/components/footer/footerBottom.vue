<template>
<div id="footer" class="repWidth bg">
  <div class="footer middle">
    <div>
       <ul>
       <router-link tag='li' :to="{name:footNavItem.url}" v-for='(footNavItem,index) in FooterList' :key=index exact>
         {{footNavItem.title}}
       </router-link> 
     </ul>
    </div>
     <p>{{Copyright}}</p>
  </div>
</div>
</template>

<script>
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default {
  name: 'footerBottom',  
  computed:{
   ...mapState(['FooterList','Copyright']),
  },  
  store
}
</script>

