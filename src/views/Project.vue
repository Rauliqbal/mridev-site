<template>
   <div>
      <Navbar />
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h3 class="text-4xl text-white font-bold">Projects</h3>
         </div>
      </div>

      <div class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="relative overflow-hidden group rounded-2xl" v-for="project in portfolio" :key="project.id">
               <img class="object-cover w-full group-hover:scale-110 group-hover:blur-sm transition-all duration-200 ease-out" :src="'/portfolio/' + project.img" :alt="'Image ' + project.title" />

               <div class="p-8 flex flex-col justify-end bg-slate-900/40 inset-0 absolute opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 ttransition-all duration-300 ease-out">
                  <h2 class="text-lg md:text-2xl font-semibold text-white">{{ project.title }}</h2>
                  <p class="text-slate-100 mt-2">{{ project.desc }}</p>
                  <a class="mt-4 w-[130px] btn-primary" :href="project.url" target="_blank">See Project</a>
               </div>
               <span class="absolute top-0 right-0 text-sm px-6 py-1 text-white bg-primary rounded-bl-2xl">{{ project.type }}</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import workContent from "../data/workContent.json";

const portfolio = ref(workContent);
</script>
