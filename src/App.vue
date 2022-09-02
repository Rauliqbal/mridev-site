<template>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">      
      <component :is="Component"/>
    </transition>
    <Footer/>
  </router-view>
</template>

<script>
  import Footer from './components/Footer.vue'

  export default {
    components: { Footer, },
  
  }

</script>

<style type="text/css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>