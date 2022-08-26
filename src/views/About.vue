<template>
  <div>
    <Navbar/>

    <div class="grid grid-cols-1 md:grid-cols-2 h-screen items-center container overflow-hidden">
      <div class=" md:order-first order-last overflow-auto max-h-full md:max-h-[70%] py-4 md:py-0">
        <div class="flex items-center gap-8">
          <div class="w-12 md:w-24 h-1 bg-primary"></div>
          <h2 class="section-title">Hello my name is</h2>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-[60px font-semibold tracking-wider mt-0 md:mt-6">
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

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {Navbar}
};
</script>

<style></style>
