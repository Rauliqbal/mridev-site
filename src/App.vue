<template>
   <PageLoader />
   <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
         <component :is="Component"></component>
      </transition>
   </router-view>
</template>

<script>
import PageLoader from "../src/components/PageLoader.vue";

export default {
   components: { PageLoader },
};
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
