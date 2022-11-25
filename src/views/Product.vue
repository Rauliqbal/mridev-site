<template>
   <div>
      <div class="bg-[#1C2863]">
         <div class="container mt-20 py-16">
            <h3 class="text-4xl text-white font-bold">Product</h3>
         </div>
      </div>
      <!-- start:hero -->
      <div class="bg-background-hero bg-cover grid grid-cols-1 lg:grid-cols-2 items-center container pt-8">
         <div class="py-4 md:py-0">
            <div class="flex items-center gap-4 mb-0 md:mb-6">
               <div class="w-12 md:w-24 h-1 bg-primary"></div>
               <h2 class="section-title">Design and Source Code</h2>
            </div>
            <h1 class="text-2xl md:text-6xl font-semibold text-slate-900">Digital Product</h1>
            <p class="desc font-medium mt-6">
               My collection of design assets and Source Code. <br class="hidden md:block" />
               ready to use for your awesome projects.
            </p>
            <div class="flex items-center gap-6 mt-8">
               <a target="_blank" href="https://histudio.vercel.app/" class="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full group">
                  <img class="w-6 group-hover:scale-125 transition-all duration-200 ease-out" src="../assets/images/histudio-icon.svg" alt="" />
               </a>

               <a target="_blank" href="https://www.uplabs.com/rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full group">
                  <img class="w-10 group-hover:scale-125 transition-all duration-200 ease-out" src="../assets/images/uplabs-icon.svg" alt="" />
               </a>

               <a target="_blank" href="figma.com/@rauliqbal" class="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full group">
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
            <div class="bg-white rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all ease-out">
               <img src="https://assets.materialup.com/uploads/1d56eb98-b6c6-416b-b613-ecdfe0e75abb/preview.png" alt="" />
               <div class="p-5">
                  <h3 class="font-semibold text-2xl capitalize">Furnilux Web Landingpage</h3>
                  <div class="flex items-center justify-between mt-6">
                     <p class="text-lg md:text-xl text-slate-500 capitalize font-medium">Uplabs</p>
                     <p class="text-base md:text-lg font-semibold text-primary px-5 py-2 bg-primary/20 rounded-full">premium</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- END:New Product -->
   </div>
</template>

<script setup></script>
