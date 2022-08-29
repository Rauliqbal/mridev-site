<template>
  <div class="overflow-hidden">
    <Navbar />
    
    <!-- start:hero -->
    <div class="container grid grid-cols-1 md:grid-cols-2 items-center h-screen mt-10 md:mt-0">
      <div>
        <div class="flex items-center gap-8">
          <div class="w-12 md:w-24 h-1 bg-primary"></div>
          <h2 class="section-title">Rauliqbal</h2>
        </div>
        <h1 class="text-4xl md:text[-40px] lg:text-[60px] leading-normal md:leading-tight font-semibold tracking-wider mt-0 md:mt-6">
          Hello, my <br />
          name's Raul. <br />
          I'm a FrontEnd Developer.
        </h1>
        <button class="btn-primary mt-10">Recent work</button>
      </div>

      <div class="mx-auto group max-w-md">
        <div class="relative" v-tilt="{ speed: 500, perspective: 1000, transition: true }">
          <div class="flex items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-violet-500 w-60 h-60 md:w-[28rem] md:h-[28rem] overflow-hidden">
            <img class="group-hover:-translate-y-5 transition-all duration-300 ease-out" src="../assets/images/ilustration/ilustration-user.svg" alt="" />
          </div>
          <div class="relative -top-56 -left-6 md:left-0 md:-top-[28rem] group-hover:-translate-y-5 transition duration-300 ease-out">
            <img class="absolute top-0 -mt-[73px] left-[24px]" src="../assets/images/ilustration/head.svg" alt="" />
            <img class="absolute z-20 -top-[5.5rem] w-36 md:w-auto left-[4.6rem] md:top-0 mt-[9.5rem] md:left-[6.5rem] animate-blink" src="../assets/images/ilustration/eyes.svg" alt="" />
          </div>
        </div>

        <div class="relative -top-[27rem]">
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

    <div class="container invisible md:visible absolute bottom-8">
      <a href="#skills" class="flex items-center group gap-4">
        <div class="z-20 w-1 pt-[0.7rem] px-2 h-6 border-2 border-blue-500 rounded-3xl opacity-75 box-content relative">
          <div class="w-1 h-2 rounded-md bg-blue-500 animate-bounce"></div>
          <span class="w-8 h-8 rounded-full bg-transparent p-4 border-2 border-blue-400 absolute opacity-0 group-hover:animate-ping group-hover:opacity-100 top-0 -left-[8px]"></span>
        </div>

        <span class="text-sm">SCROLL DOWN</span>
      </a>
    </div>

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

    <!-- start:Portfolio -->
    <section class="bg-[#F4F6FF] py-20 mt-[58rem] md:mt-[24rem]">
      <div class="container">
        <div class="flex items-center gap-8">
            <div class="w-12 md:w-24 h-1 bg-primary"></div>
            <h2 class="section-title text-primary">what i do</h2>
        </div>
          <h2 class="text-2xl md:text-4xl font-semibold mt-2">
           Look at my portfolios.
          </h2>
      <WorkCard class="mt-14"/>
      </div>
    </section>
    <!-- end:Portfolio -->

   <!-- start:contact -->
   <section class="pt-20 bg-[#F4F6FF] relative">
      <div class="relative lg:absolute inset-x-0 container py-20">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 bg-white px-4 py-8 md:p-20 rounded-3xl box-contact">
          <div>
            <div class="flex items-center gap-8">
              <div class="w-12 md:w-24 h-1 bg-primary"></div>
              <h2 class="section-title text-primary">Say Hello</h2>
            </div>
            <h2 class="text-2xl md:text-4xl font-semibold mt-2">
           Let's work together.
            </h2>

            <p class="mt-4">Have some project? or maybe just want to discuss your project, I help you as much as I can.</p>

            <div class="flex flex-col gap-5 mt-6">
              <div href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center gap-2 md:gap-4 transition duration-200">
                <i class="bx text-lg md:text-2xl bx-mail-send text-blue-500"></i>
                <span class="text-[12px] sm:text-base">muhamadrauliqbal.13@gmail.com</span>
              </div>
              <div href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank" class="flex items-start gap-2 md:gap-4 transition duration-200">
                <i class="bx text-lg md:text-2xl bx-map-pin text-blue-500"></i>
                <span class="text-[12px] sm:text-base">Perum Telaga Murni no 14 A ,Kec. Cikarang Barat, Kab. Bekasi</span>
              </div>
              <div href="https://www.instagram.com/raul.iqbl_/" target="_blank" class="flex items-center gap-2 md:gap-4 transition duration-200">
                <i class="bx text-lg md:text-2xl bx-phone text-blue-500"></i>
                <span class="text-[12px] sm:text-base">+62 896 7310 2977</span>
              </div>
            </div>
          </div>

          <div class="py-6 px-0 md:px-8">
            <form class="flex flex-col gap-6" action="https://formspree.io/f/mqkjznjb"
  method="POST">
              <div class="w-full md:max-w-md flex items-center bg-gray-100 py-3 px-6  rounded-xl ">
                <input class="w-full bg-gray-100 outline-0" placeholder="name" type="name"  name="name">
                <i class="bx bx-user text-2xl"></i> 
              </div>

               <div class="w-full md:max-w-md flex items-center bg-gray-100 py-3 px-6  rounded-xl">
                <input class="w-full bg-gray-100 outline-0" placeholder="email" type="email"  name="email">
                <i class="bx bx-paper-plane text-2xl"></i> 
              </div>

               <div class="w-full md:max-w-md flex bg-gray-100 py-3 px-6  rounded-xl">
                <textarea class="w-full bg-gray-100 outline-0" rows="3" placeholder="message" name="message"></textarea>
                <i class="bx bx-message-square-detail text-2xl"></i> 
              </div>
              <button class="btn-primary w-full md:w-[170px] mt-4 md:mt-8" type="submit">Send message</button>
            </form>
          </div>
           <div class="flex justify-evenly col-span-1 md:col-span-2">
            <a href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
              <i class='bx bxl-dribbble text-xl' ></i>
              <span class="font-semibold text-xl hidden lg:block">Dribble</span>
            </a>

            <a href="https://github.com/Rauliqbal" target="_blank" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
              <i class='bx bxl-github text-xl' ></i>
              <span class="font-semibold text-xl hidden lg:block">Github</span>
            </a>

            <a href="https://www.linkedin.com/in/muhamad-raul-iqbal/" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
              <i class='bx bxl-linkedin text-xl' ></i>
              <span class="font-semibold text-xl hidden lg:block">LinkedIn</span>
            </a>

            <a href="https://www.youtube.com/channel/UCklGTRJJjc00lK-qF3L_CRQ" target="_blank" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
              <i class='bx bxl-youtube text-xl' ></i>
              <span class="font-semibold text-xl hidden lg:block">Youtube</span>
            </a>
          </div>
        </div>
      </div>
      <img class="w-full h-[20rem] md:h-auto mt-[-24rem] lg:mt-0" src="../assets/images/bg-image.webp" />
   </section>
   <!-- end:contact -->


  </div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import WorkCard from "../components/WorkCard.vue";

export default {
  components: { Navbar, WorkCard, },
  
  
};
</script>
