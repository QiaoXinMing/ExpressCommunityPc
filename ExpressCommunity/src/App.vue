<template>
  <div id="app">
      <headerTop/> 
       
         <keep-alive>
          <router-view name='container'></router-view>
         </keep-alive>     
   <footerBottom/>  
  </div>
</template>

<script>
import headerTop from './components/header/headerTop'
import footerBottom from './components/footer/footerBottom'
export default {
  name: 'App',
  components:{
   headerTop,
   footerBottom
  },
}
</script>

<style>

</style>
