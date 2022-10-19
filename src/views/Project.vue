<template>
   <div>
      <Navbar />
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h1 class="text-4xl text-white font-bold">Projects</h1>
         </div>
      </div>

      {{ portfolio }}

      <div class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex flex-col" v-for="project in portfolio" :key="project.id">
               <img :src="'../assets/' + project.img" alt="" />
               <h2>{{ project.title }}</h2>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import workContent from "../data/workContent.json";

export default {
   components: { Navbar },
   data() {
      return {
         portfolio: workContent,
      };
   },
};
</script>
