<script setup>
import { ref } from 'vue'
import CardProject from '../CardProject.vue'
import portfoliosData from '/src/data/portfolio.json'

const portfolios = ref(portfoliosData)

</script>
<template>
  <section class="mt-[50rem] md:mt-[15rem]">
    <div class="container py-20">
       <div class="flex items-center gap-4">
          <div class="w-12 h-[2px] bg-primary"></div>
          <h2 class="section-title text-primary">Recent Work</h2>
       </div>
      <div class="flex flex-col md:flex-row gap-4 justify-between mt-4 md:items-center">
         <h2 class="text-4xl md:text-[64px] leading-tight font-semibold font-BaiJamjuree">
            Look at my <br />
            <span class="text-gradient">Portfolios.</span>
         </h2>
         <p class="max-w-[500px] desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi modi cumque perspiciatis provident debitis</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
         <CardProject v-for="portfolio in portfolios.slice(0,4)" :key="portfolio" :id="portfolio.id" :title="portfolio.title" :desc="portfolio.desc" :image="portfolio.img" :type="portfolio.type" :url="portfolio.url" :source_code="portfolio.source_code"/>
      </div>
    </div>
  </section>
</template>