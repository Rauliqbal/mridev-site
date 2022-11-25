<template>
   <Navbar />
   <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
         <component :is="Component"></component>
      </transition>
   </router-view>
   <Footer />
</template>

<script setup>
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
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
