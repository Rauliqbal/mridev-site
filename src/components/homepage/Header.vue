<script setup>
defineProps({
   onClick: String
})
</script>
<template>
  <div class="bg-background-hero bg-cover py-20 md:py-0">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0 items-center md:h-screen pt-20 md:pt-10">
       <div class="order-last md:order-first">
          <h1 class="text-slate-900 text-3xl sm:text-4xl md:text-6xl md:leading-[125%] font-BaiJamjuree font-semibold">
            <span class="text-gradient">Hello, I'm Rauliqbal,</span> Front-End Developer
            based in Indonesia.  
          </h1>
          <p class="desc mt-8">A Front-End Developer and Mobile Developer in Indonesia. I specialize in UI/UX Design, Responsive Web Design, and Mobile Development</p>
          <router-link to="/project" class="btn-primary mt-10 inline-flex">Recent work</router-link>
       </div>
       <div class="order-first md:order-last mx-auto group max-w-md">
          <div class="relative" v-tilt="{ speed: 500, perspective: 1000, transition: true }">
             <div class="flex items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-violet-500 w-60 h-60 md:w-[28rem] md:h-[28rem] overflow-hidden">
                <img class="group-hover:-translate-y-5 transition-all duration-300 ease-out" src="/images/ilustration/ilustration-user.svg" alt="" />
             </div>
             <div class="relative -top-56 -left-6 md:left-0 md:-top-[28rem] group-hover:-translate-y-5 transition duration-300 ease-out">
                <img class="absolute top-0 -mt-[73px] left-[24px]" src="/images/ilustration/head.svg" alt="" />
                <img class="absolute z-20 -top-[5.5rem] w-36 md:w-auto left-[4.6rem] md:top-0 mt-[9.5rem] md:left-[6.5rem] animate-blink" src="/images/ilustration/eyes.svg" alt="" />
             </div>
          </div>

          <div class="relative -top-[27rem]">
            <span
              class="animate-floating absolute -left-8 md:left-0 top-44 md:-top-2 bg-white rounded-full shadow-2xl animation-delay-2000"
            >
              <img
                class="p-3 w-14 md:w-20"
                src="/icons/tailwind-icon.svg"
                alt=""
              />
            </span>
            <span
              class="animate-floating absolute -right-8 md:right-16 top-52 md:-top-20 bg-white rounded-full shadow-2xl animation-delay-3000"
            >
              <img
                class="p-3 w-14 md:w-20"
                src="/icons/react-icon.svg"
                alt=""
              />
            </span>
            <span
              class="animate-floating absolute top-72 md:top-40 -right-6 bg-white rounded-full shadow-2xl"
            >
              <img class="p-3 w-14 md:w-20" src="/icons/vue-icon.svg" alt="" />
            </span>
            <span
              class="animate-floating absolute -bottom-[27.5rem] left-0 md:left-9 bg-white rounded-full shadow-2xl animation-delay-4000"
            >
              <img class="p-3 w-14 md:w-20" src="/icons/figma-icon.svg" alt="" />
            </span>
          </div>
       </div>
    </div>

 </div>
</template>