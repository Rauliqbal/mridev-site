<script setup>
import { Modal } from "flowbite-vue";
import { ref } from "vue";

const isShowModal = ref(false);
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>
<template>
  <div
    class="bg-background-hero bg-cover grid grid-cols-1 lg:grid-cols-2 items-center container pt-28 pb-20"
  >
    <div class="md:order-first order-last py-4 md:py-0">
      <div class="flex items-center gap-4">
        <div class="w-12 h-[2px] bg-primary"></div>
        <h2 class="section-title">Hello my name is</h2>
      </div>
      <h1
        class="text-gradient text-3xl sm:text-4xl md:text-6xl md:leading-[125%] font-BaiJamjuree font-semibold"
      >
        Muhamad Raul Iqbal
      </h1>
      <p class="desc mt-6">
        I am a
        <span class="text-primary font-medium">Front End Developer</span> and
        <span class="text-primary font-medium">UI Designer</span>, I am used to
        making projects with Vue JS and Tailwind CSS, I use git as version
        control and github to store my project source code.
      </p>
      <p class="desc mt-4">
        I am a graduate of
        <span class="text-primary font-medium"
          >Computer Network Engineering Vocational School</span
        >, have high spirit of motivation in terms of
        <span class="text-primary font-medium">learning</span>,
        <span class="text-primary font-medium">seek experience</span> and
        <span class="text-primary font-medium">seek new things</span>.
      </p>
      <p class="desc mt-4">
        I am able to work in a team well, honestly,
        <span class="text-primary font-medium">hardworking </span> and
        <span class="text-primary font-medium">responsible</span>. Currently
        looking for a job as Front End Developer in a company.
      </p>

      <button
        type="button"
        class="btn-primary inline-flex mt-8"
        @click="showModal"
      >
        Get my CV
      </button>

      <!-- Modal CV -->
      <div v-if="isShowModal">
        <div
        
          class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
        ></div>
        <div
          tabindex="0"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center flex"
        >
          <div class="relative p-4 w-full h-full md:h-auto max-w-5xl">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="p-4 rounded-t flex justify-between items-center">
                <button
                type="button"
                  @click="closeModal"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-6 pt-0">
                <img src="/images/cv-rauliqbal.jpg" alt="" />
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-first md:order-last mx-auto group max-w-md pt-24 pb-12">
      <div
        class="relative"
        v-tilt="{ speed: 500, perspective: 1000, transition: true }"
      >
        <div
          class="flex items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-violet-500 w-60 h-60 md:w-[28rem] md:h-[28rem] overflow-hidden"
        >
          <img
            class="group-hover:-translate-y-5 transition-all duration-300 ease-out"
            src="/images/ilustration/ilustration-user.svg"
            alt=""
          />
        </div>
        <div
          class="relative -top-56 -left-6 md:left-0 md:-top-[28rem] group-hover:-translate-y-5 transition duration-300 ease-out"
        >
          <img
            class="absolute top-0 -mt-[73px] left-[24px]"
            src="/images/ilustration/head.svg"
            alt=""
          />
          <img
            class="absolute z-20 -top-[5.5rem] w-36 md:w-auto left-[4.6rem] md:top-0 mt-[9.5rem] md:left-[6.5rem] animate-blink"
            src="/images/ilustration/eyes.svg"
            alt=""
          />
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
</template>