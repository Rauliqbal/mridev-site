<template>
   <footer class="bg-[#1C2863]">
      <div class="container pt-20">
         <div class="flex flex-col md:flex-row justify-center gap-8 md:gap-32 mb-20">
            <div>
               <h3 class="text-3xl md:text-5xl md:leading-tight text-white font-semibold max-w-[496px] font-BaiJamjuree">You only have one chance to make a first impression.</h3>
               <div class="flex items-center gap-4 md:gap-8 mt-8">
                  <div class="w-4 md:w-24 h-1 bg-secondary"></div>
                  <h2 class="section-title text-base md:text-2xl text-secondary">Let’s make it an amazing one.</h2>
               </div>
            </div>
            <div class="flex flex-col gap-2">
               <router-link to="/" class="text-lg text-center md:text-start text-white hover:text-primary/70 transition duration-200">Home</router-link>
               <router-link to="/about" class="text-lg text-center md:text-start text-white hover:text-primary/70 transition duration-200">About me</router-link>
               <router-link to="/project" class="text-lg text-center md:text-start text-white hover:text-primary/70 transition duration-200">Projects</router-link>
               <router-link to="/product" class="text-lg text-center md:text-start text-white hover:text-primary/70 transition duration-200">Product</router-link>
               <router-link to="/contact" class="text-lg text-center md:text-start text-white hover:text-primary/70 transition duration-200">Contact</router-link>
            </div>
         </div>

         <hr class="bg-white" />
         <div class="flex justify-between items-center px-4 md:px-8 text-white py-8">
            <h5>© {{ date }}, Rauliqbal.</h5>
            <button @click="scrollToTop" class="hover:text-primary/70 transition duration-200">Back to top</button>
         </div>
      </div>
   </footer>
</template>

<script setup>
function scrollToTop() {
   window.scrollTo(0, 0);
}

const date = new Date().getFullYear();
</script>
