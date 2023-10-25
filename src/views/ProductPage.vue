<template>
   <main>
      
      <!-- start:hero -->
      <div class="bg-background-hero bg-cover grid grid-cols-1 lg:grid-cols-2 items-center container pt-40">
         <div class="py-4 md:py-0">
            <div class="flex items-center gap-4 mb-0 md:mb-6">
               <div class="w-12 h-[2px] bg-primary"></div>
               <h2 class="section-title">Design and Source Code</h2>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-6xl md:leading-[125%] font-semibold text-gradient
             font-BaiJamjuree">Digital Product</h1>
            <p class="desc font-medium mt-6">
               My collection of design assets and Source Code. <br class="hidden md:block" />
               ready to use for your awesome projects.
            </p>
            <div class="flex items-center gap-6 mt-8">
               <a target="_blank" href="https://azurakit.vercel.app/" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-8 group-hover:scale-125 transition-all duration-200 ease-out" src="/icons/azurakit-icon.png" alt="" />
               </a>

               <a target="_blank" href="https://www.uplabs.com/rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-10 group-hover:scale-125 transition-all duration-200 ease-out" src="/icons/uplabs-icon.svg" alt="" />
               </a>

               <a target="_blank" href="https://www.figma.com/@rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-8 group-hover:scale-125 transition-all duration-200 ease-out" src="/icons/figma-icon.svg" alt="" />
               </a>
            </div>
         </div>

         <div class="relative">
            <img class="w-full top-4 relative animate-floatUp" src="/images/7.png" alt="" />
            <img class="absolute w-full top-0 animate-floatDown" src="/images/6.png" alt="" />
            <img class="absolute w-full -top-7 animate-floatDown" src="/images/5.png" alt="" />
            <img class="absolute w-full -top-3 animate-floatUp" src="/images/4.png" alt="" />
            <img class="absolute w-full top-2 animate-floatUp" src="/images/3.png" alt="" />
            <img class="absolute w-full top-0 animate-floatDown" src="/images/2.png" alt="" />
            <img class="absolute w-full top-0 animate-floatUp" src="/images/1.png" alt="" />
         </div>
      </div>
      <!-- end:hero -->

      <!-- New Product -->
      <section class="container py-20">
         <div class="flex items-center gap-4">
            <div class="w-12 h-[2px] bg-primary"></div>
            <h2 class="section-title">New items</h2>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <!-- Card -->
            <CardProduct v-for="product in products" :key="product.id" :url="product.url" :name="product.name" :image="product.image" :source="product.source" :type="product.type" />
         </div>
      </section>
      <!-- END:New Product --> 
   </main>
</template>

<script setup>
import { ref } from "vue";
import CardProduct from "../components/CardProduct.vue";
import product from "../data/product.json";

const products = ref(product);
</script>
