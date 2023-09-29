<script setup>
import { ref } from "vue";
import projectContent from "../data/portfolio.json";
import CardProject from "../components/CardProject.vue";

const portfolios = ref(projectContent);
</script>

<template>
   <main>
      <div class="container mt-20 py-16">
         <div class="flex justify-between mt-4 items-center">
            <h2 class="text-4xl md:text-[64px] leading-tight font-semibold font-BaiJamjuree">
               Look at my <br />
               <span class="text-gradient">Portfolios.</span>
            </h2>
            <p class="w-[500px] desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi modi cumque perspiciatis provident debitis</p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
            <CardProject v-for="project in portfolios" :key="project.div" :id="project.id" :title="project.title" :image="project.img" :type="project.type" :url="project.url" :desc="project.desc" :source_code="project.source_code" />
         </div>
      </div>

      
   </main>
</template>

