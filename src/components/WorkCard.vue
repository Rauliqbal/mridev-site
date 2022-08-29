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
          <div class="flex flex-col md:flex-row bg-white">
            <img class="w-full md:w-1/2" src="https://rauliqbal.vercel.app/images/portfolio/lenterahouse-webdev.webp" alt="" />
            <div class="w-full md:w-1/2 py-12 md:py-0 flex flex-col justify-center items-center">
              <h5 class="text-lg uppercase text-blue-500 font-medium">{{data.type}}</h5>
              <h4 class="text-xl md:text-2xl lg:text-3xl text-blue-500 font-semibold uppercase mt-2">{{data.title}}</h4>

              <button class="btn-primary mt-8">Live demo</button>
            </div>
          </div>
        </swiper-slide>
  </swiper>
  
</template>

<script>
import workContent from "../service/workContent.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style.css";

export default {
  components:{ Swiper, SwiperSlide},

  data() {
    return {
      portfolio: workContent,
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
