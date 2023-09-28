<script setup>
import { ref } from 'vue';
import CardProduct from '../CardProduct.vue';
import productsData from '/src/data/product.json'

const products = ref(productsData)
</script>
<template>
  <section>
    <div class="container py-20">
       <div class="flex items-center gap-4">
          <div class="w-12 h-[2px] bg-primary"></div>
          <h2 class="section-title text-primary">My Product</h2>
       </div>
       <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4 font-BaiJamjuree  ">
          Support me by<br />
          <span class="text-gradient">buy my product.</span>
       </h2>

       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
         <CardProduct v-for="product in products.slice(0,3)" :key="product.id" :name="product.name" :source="product.source" :type="product.type" :image="product.image" :url="product.url"/>
       </div>
    </div>
 </section>
</template>