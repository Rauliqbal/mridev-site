<script>
import certificateContent from "/src/data/certificate";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const certificates = ref(certificateContent);
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  data() {
    return {
      certificates: certificates
    }
  }
};


</script>
<template>
  <section class="container py-20">
    <div class="flex items-center gap-4 mb-4">
      <div class="w-12 h-[2px] bg-primary"></div>
      <h2 class="section-title">Certificates</h2>
    </div>
    <swiper
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2
        }
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="certificate in certificates" :key="certificate">
        <div class="pb-14" >
          <div
            class="flex flex-col box-border bg-white rounded-xl transition-all duration-300 overflow-hidden"
          >
            <div class="p-5">
              <img
                class="w-16 h-16 bg-[#335ef7] mb-4"
                :src="'/images/' + certificate.image"
              />
              <h5 class="font-semibold text-xl">{{ certificate.title }}</h5>
              <h5 class="font-semibold text-slate-500 mt-1">
                Publisher : {{ certificate.publish }}
              </h5>
            </div>
          </div>
        </div>
        
      </swiper-slide>
    </swiper>
   
  </section>
</template>
