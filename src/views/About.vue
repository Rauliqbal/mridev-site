<template>
  <div>
    <Navbar/>

    <!-- start:hero -->
    <div class="grid grid-cols-1 md:grid-cols-2 items-center container py-10">
      <div class=" md:order-first order-last py-4 md:py-0">
        <div class="flex items-center gap-8">
          <div class="w-12 md:w-24 h-1 bg-primary"></div>
          <h2 class="section-title">Hello my name is</h2>
        </div>
        <h1 class="text-3xl md:text-5xl lg:text-[60px font-semibold tracking-wider mt-0 md:mt-6">
          Muhamad Raul Iqbal
        </h1>
        <p class="desc mt-6">
          I am a <span class="text-blue-500 font-medium">Front End Developer</span> and <span class="text-blue-500 font-medium">UI Designer</span>, I am used to making projects with Vue JS and Tailwind CSS, I use git as version control and github to store my project source code.
        </p>
        <p class="desc mt-4">
          I am a graduate of <span class="text-blue-500 font-medium">Computer Network Engineering Vocational School</span>, have high spirit of motivation in terms of <span class="text-blue-500 font-medium">learning</span>, <span class="text-blue-500 font-medium">seek experience</span> and <span class="text-blue-500 font-medium">seek new things</span>. 
        </p>
        <p class="desc mt-4">
          I am able to work in a team well, honestly, <span class="text-blue-500 font-medium">hardworking </span>  and <span class="text-blue-500 font-medium">responsible</span>. Currently looking for a job as Front End Developer in a company.
        </p>

        <a class="btn-primary inline-flex mt-8" href="https://drive.google.com/file/d/146Ebl_VJqstMxv169d6WJn-U5RC5ZOjJ/view" target="_blank">Get my CV</a>
      </div>

      <div class=" order-first md:order-last mx-auto group max-w-md pt-24 pb-12">
        <div class="relative">
          <div class="flex items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-violet-500 w-60 h-60 md:w-[28rem] md:h-[28rem] overflow-hidden">
            <img class="group-hover:-translate-y-5 transition-all duration-300 ease-out" src="../assets/images/ilustration/ilustration-user.svg" alt="" />
          </div>
          <div class="relative -top-56 -left-6 md:left-0 md:-top-[28rem] group-hover:-translate-y-5 transition duration-300 ease-out">
            <img class="absolute top-0 -mt-[73px] left-[24px]" src="../assets/images/ilustration/head.svg" alt="" />
            <img class="absolute z-20 -top-[5.5rem] w-36 md:w-auto left-[4.6rem] md:top-0 mt-[9.5rem] md:left-[6.5rem] animate-blink" src="../assets/images/ilustration/eyes.svg" alt="" />
          </div>
        </div>

        <div class="relative -top-[27rem] ">
          <span class="animate-floating absolute -left-8 md:left-0 top-44 md:-top-4 bg-white rounded-full shadow-2xl animation-delay-2000">
            <img class="p-3 w-14 md:w-20" src="../assets/images/tailwind-icon.svg" alt="" />
          </span>
          <span class="animate-floating absolute top-72 md:top-40 -right-6 bg-white rounded-full shadow-2xl">
            <img class="p-3 w-14 md:w-20" src="../assets/images/vue-icon.svg" alt="" />
          </span>
          <span class="animate-floating absolute -bottom-[27.5rem] left-0 md:left-9 bg-white rounded-full shadow-2xl animation-delay-4000">
            <img class="p-3 w-14 md:w-20" src="../assets/images/figma-icon.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
    <!-- end:hero -->

    <!-- start:Skills -->
    <section id="skills" class="bg-[#1C2863]">
      <div class="container py-20">
        <div class="md:w-1/2">
          <div class="flex items-center gap-8">
            <div class="w-12 md:w-24 h-1 bg-secondary"></div>
            <h2 class="section-title text-secondary">what i do</h2>
          </div>
          <h2 class="text-xl md:text-3xl font-semibold text-white mt-2">
            I enjoy creating delightful, <br />
            human-centered digital experiences.
          </h2>

          <h3 class="text-5xl font-semibold text-white mt-20">Think.Make.<br />Solve</h3>
        </div>

        <div class="flex flex-col md:flex-row items-center md:justify-center gap-8 px-4 absolute right-0 lg:mr-[4%] mt-8 md:mt-4 lg:-mt-8 xl:-mt-24">
          <div class="flex flex-col justify-center items-center w-full md:max-w-[370px] bg-[#fff] rounded-3xl p-8 md:p-12 shadow hover:shadow-2xl transition-all duration-300 ease-out">
            <div class="p-6 bg-blue-300 rounded-full w-[200px] h-[200px]">
              <img src="../assets/images/fe-dev.svg" />
            </div>
            <div class="mt-8">
              <h4 class="text-xl md:text-2xl text-center font-semibold">Front End Developer</h4>
              <p class="text-center text-slate-500 mt-4">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </div>
          </div>

          <div class="flex flex-col justify-center items-center w-full md:max-w-[370px] bg-[#fff] rounded-3xl p-8 md:p-12 shadow hover:shadow-2xl transition-all duration-300 ease-out">
            <div class="p-6 bg-violet-300 rounded-full w-[200px] h-[200px]">
              <img src="../assets/images/ui-des.svg" />
            </div>
            <div class="mt-8">
              <h4 class="text-xl md:text-2xl text-center font-semibold">UI Designer</h4>
              <p class="text-center text-slate-500 mt-4">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end:Skills -->

    <!-- start:testimonial -->
    <section class="bg-[#F4F6FF]">
       <div class="container py-20 mt-[58rem] md:mt-[24rem] ">
      <div class="flex items-center gap-8">
        <div class="w-12 md:w-24 h-1 bg-primary"></div>
        <h2 class="section-title">Testimonials</h2>
      </div>
      <h2 class="text-xl md:text-3xl font-semibold mt-2">
            What are they saying.
      </h2>
      <swiper
      :slidesPerView="2"
      :spaceBetween="30"
      :breakpoints="swiperOptions.breakpoints"
      :loop="true"
      :pagination="{
        clickable: true,
      }"   
      :modules="modules"
      class="mySwiper mt-8">
      <swiper-slide class="pb-14">
        <div class="flex bg-white hover:shadow-lg transition duration-300 py-8 pl-16 pr-8 rounded-2xl relative">
          <span class="absolute text-4xl left-4 text-slate-300"><i class='bx bxs-quote-left'></i></span>
          <div>
            <p class="text-sm md:text-base text-slate-500 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.</p>
            <h5 class="text-lg font-semibold mt-4">Raisha Ramadanti</h5>
          </div>
          
        </div>
      </swiper-slide>

      <swiper-slide class="pb-14">
        <div class="flex bg-white hover:shadow-lg transition duration-300 py-8 pl-16 pr-8 rounded-2xl relative">
          <span class="absolute text-4xl left-4 text-slate-300"><i class='bx bxs-quote-left'></i></span>
          <div>
            <p class="text-sm md:text-base text-slate-500 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.</p>
            <h5 class="text-lg font-semibold mt-4">Azura</h5>
          </div>
          
        </div>
      </swiper-slide>

      <swiper-slide class="pb-14">
        <div class="flex bg-white hover:shadow-lg transition duration-300 py-8 pl-16 pr-8 rounded-2xl relative">
          <span class="absolute text-4xl left-4 text-slate-300"><i class='bx bxs-quote-left'></i></span>
          <div>
            <p class="text-sm md:text-base text-slate-500 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.</p>
            <h5 class="text-lg font-semibold mt-4">Naura</h5>
          </div>
          
        </div>
      </swiper-slide>
      </swiper>
    </div>
    </section>
    <!-- end:testimonial -->

   

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {Navbar, Swiper,
    SwiperSlide,},

  setup() {
    return {
      modules: [Pagination],
    };
  },

  data () {
      return { // Retourn the API Dates

        swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },          
      768: {       
         slidesPerView: 2,       
         spaceBetween: 50     
      },   
  
      // 1440: {       
      //    slidesPerView: 3,       
      //    spaceBetween: 30     
      // } 
      }   
      }
    }
  },
};
</script>

