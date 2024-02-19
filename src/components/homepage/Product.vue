<script setup>
import { ref } from 'vue';
import CardProduct from '../CardProduct.vue';
import productsData from '/src/data/product.json'

const products = ref(productsData)
</script>
<template>
  <section>
    <div class="container py-20">
      <h2 class="section-title">
       Support me by <br class="block" />
       buy
        <span
          class="inline-flex items-center gap-2 text-2xl md:text-4xl px-3 py-2 md:px-6 md:py-3 rounded-full bg-blue-200
          "
        >
          <p class="text-xl md:text-3xl">🎁</p>
          <h2 class="text-gradient">my product</h2>
        </span>
      </h2>

       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-20">
         <CardProduct v-for="product in products.slice(0,3)" :key="product.id" :name="product.name" :source="product.source" :type="product.type" :image="product.image" :url="product.url"/>
       </div>
    </div>
 </section>
</template>