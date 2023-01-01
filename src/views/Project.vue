<template>
   <main>
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h3 class="text-4xl text-white font-bold">Projects</h3>
         </div>
      </div>

      <div class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div class="flex flex-col gap-6 group rounded-2xl p-8 bg-white" v-for="project in portfolio" :key="project.id">
               <div class="relative overflow-hidden rounded-xl">
                  <img class="object-cover w-full h-44 sm:h-full md:h-60 transition-all duration-200 ease-out" :src="'/portfolio/' + project.img" :alt="'Image ' + project.title" />
                  <span class="absolute top-0 right-0 text-[12px] px-6 py-1 bg-primary rounded-bl-2xl text-white">{{ project.type }}</span>
               </div>

               <div>
                  <h2 class="text-lg md:text-xl font-semibold line-clamp-1" :title="project.title">{{ project.title }}</h2>
                  <p class="text-slate-500 mt-4 text-sm md:text-base">{{ project.desc }}</p>
                  <a class="mt-6 w-[130px] btn-primary" :href="project.url" target="_blank">See Project</a>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>

<script setup>
import { ref } from "vue";
import workContent from "../data/workContent.json";

const portfolio = ref(workContent);
</script>
