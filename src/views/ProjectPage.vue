<template>
   <main>
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h3 class="text-4xl text-white font-bold">Projects</h3>
         </div>
      </div>

      <div class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <CardProject v-for="project in portfolios" :key="project.div" :id="project.id" :title="project.title" :image="project.img" :type="project.type" :url="project.url" :desc="project.desc" :source_code="project.source_code" />
         </div>
      </div>
   </main>
</template>

<script setup>
import { ref } from "vue";
import projectContent from "../data/portfolio.json";
import CardProject from "../components/CardProject.vue";

const portfolios = ref(portfolio);
</script>
