<template>
   <main>
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h3 class="text-4xl text-white font-bold">Product</h3>
         </div>
      </div>
      <!-- start:hero -->
      <div class="bg-background-hero bg-cover grid grid-cols-1 lg:grid-cols-2 items-center container pt-8">
         <div class="py-4 md:py-0">
            <div class="flex items-center gap-4 mb-0 md:mb-6">
               <div class="w-12 h-[2px] bg-primary"></div>
               <h2 class="section-title">Design and Source Code</h2>
            </div>
            <h1 class="text-2xl md:text-6xl font-semibold text-slate-900">Digital Product</h1>
            <p class="desc font-medium mt-6">
               My collection of design assets and Source Code. <br class="hidden md:block" />
               ready to use for your awesome projects.
            </p>
            <div class="flex items-center gap-6 mt-8">
               <a target="_blank" href="https://histudio.vercel.app/" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-6 group-hover:scale-125 transition-all duration-200 ease-out" src="../assets/images/histudio-icon.svg" alt="" />
               </a>

               <a target="_blank" href="https://www.uplabs.com/rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-10 group-hover:scale-125 transition-all duration-200 ease-out" src="../assets/images/uplabs-icon.svg" alt="" />
               </a>

               <a target="_blank" href="https://www.figma.com/@rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full group">
                  <img class="w-8 group-hover:scale-125 transition-all duration-200 ease-out" src="../assets/images/figma-icon.svg" alt="" />
               </a>
            </div>
         </div>

         <div class="relative">
            <img class="w-full top-4 relative animate-floatUp" src="../assets/images/7.png" alt="" />
            <img class="absolute w-full top-0 animate-floatDown" src="../assets/images/6.png" alt="" />
            <img class="absolute w-full -top-7 animate-floatDown" src="../assets/images/5.png" alt="" />
            <img class="absolute w-full -top-3 animate-floatUp" src="../assets/images/4.png" alt="" />
            <img class="absolute w-full top-2 animate-floatUp" src="../assets/images/3.png" alt="" />
            <img class="absolute w-full top-0 animate-floatDown" src="../assets/images/2.png" alt="" />
            <img class="absolute w-full top-0 animate-floatUp" src="../assets/images/1.png" alt="" />
         </div>
      </div>
      <!-- end:hero -->

      <!-- New Product -->
      <section class="container py-20">
         <h2 class="text-3xl font-semibold">New Items</h2>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <!-- Card -->
            <CardProduct v-for="product in products" :key="product.id" :url="product.url" :name="product.name" :image="product.image" :source="product.source" :type="product.type" />
         </div>
      </section>
      <!-- END:New Product -->
   </main>
</template>

<script setup>
import { ref } from "vue";
import CardProduct from "../components/product/CardProduct.vue";
import productContent from "../data/productContent.json";

const products = ref(productContent);
</script>
