<template>
   <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
         clickable: true,
      }"
      :loop="true"
      :modules="modules"
      class="mySwiper"
   >
      <swiper-slide class="pb-14" v-for="data in portfolio" :key="data.id">
         <div class="p-4 flex flex-col w-full bg-white rounded-xl shadow-noblur">
            <div class="w-full rounded-lg overflow-hidden">
               <img class="object-cover w-full" src="../assets/images/portfolio.png" alt="" />
            </div>
            <div class="flex flex-col md:flex-row md:items-center mt-5">
               <div>
                  <h2 class="text-xl md:text-2xl font-semibold">{{ data.title }}</h2>
                  <p class="text-lg text-slate-500 mt-2">{{ data.type }}</p>
               </div>
               <a class="md:ml-auto py-3 px-6 text-sm font-semibold text-primary ring-2 ring-primary hover:bg-primary hover:text-white" href="#">See Project</a>
            </div>
         </div>
      </swiper-slide>
   </swiper>
</template>

<script>
import workContent from "../data/workContent.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style.css";

export default {
   components: { Swiper, SwiperSlide },

   data() {
      return {
         portfolio: workContent,
      };
   },
   setup() {
      return {
         modules: [Pagination, Autoplay],
      };
   },
};
</script>
