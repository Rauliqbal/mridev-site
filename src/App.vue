<template>
   <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
         <component :is="Component" />
      </Transition>
   </router-view>
</template>

<script></script>

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
