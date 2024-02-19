<script setup>
import { RouterLink } from 'vue-router';

const services = [
  {
    title: "Front End Developer",
    desc: "Create your amazing idea in websites , full interaction with responsive views.",
    image: "ui-dev.jpg",
    role: "DEVELOPER",
    url:"/project"
  },
  {
    title: "UI Designer",
    desc: "Create eye-catching and powerful mobile apps with a focus on User.",
    image: "ui-des.jpg",
    role: "DESIGNER",
    url:"https://www.figma.com/@rauliqbal"
  },
];
</script>
<template>
  <section>
    <div class="container py-20">
      <h2 class="section-title">
        Some of the <br class="block" />
        <span
          class="inline-flex items-center gap-2 text-2xl md:text-4xl px-3 py-2 md:px-6 md:py-3 rounded-full bg-blue-200"
        >
          <p class="text-xl md:text-3xl">💻</p>
          <h2 class="text-gradient">services</h2>
        </span>
        I specialize in
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ">
        <div
          v-for="service in services"
          class="service-card flex flex-col w-full bg-white rounded-3xl  box-border hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <div class="px-8 md:px-10 py-10">
            <div class="flex items-center gap-2 mb-1">
              <div class="w-8 h-[2px] bg-primary"></div>
              <h2 class="badge text-primary uppercase">
                {{ service.role }}
              </h2>
            </div>
            <h4 class="text-xl md:text-3xl font-semibold">
              {{ service.title }}
            </h4>
            <p class="desc text-slate-500 mt-4 mb-4">
              {{ service.desc }}
            </p>

            <a class="font-medium text-blue-500 hover:text-blue-700" :href="service.url">Look at my work <i class='bx bx-link-alt'></i></a>
          </div>
          <img class="rounded-2xl -left-10" :src="'/images/' + service.image" />
        </div>
      </div>
    </div>
  </section>
</template>
