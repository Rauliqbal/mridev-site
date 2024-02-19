<script setup>
import { ref } from "vue";
import CardProject from "../CardProject.vue";
import portfoliosData from "/src/data/portfolio.json";

const portfolios = ref(portfoliosData);
</script>
<template>
  <section>
    <div class="py-20">
      <div id="sectionPin" class="overflow-clip">
        <div class="overflow-hidden sticky h-screen top-0 w-[100vw]">
          <h2 class="section-title">
            You can visit <br class="block" />
            some of
            <span
              class="inline-flex items-center gap-2 text-2xl md:text-4xl px-3 py-2 md:px-6 md:py-3 rounded-full bg-violet-200"
            >
              <p class="text-xl md:text-3xl">🤖</p>
              <h2 class="text-gradient">my works</h2>
            </span>
          </h2>

          <div class="pin-wrap flex justify-start items-center gap-8 px-4 md:px-20 mt-20">
            <CardProject
              v-for="portfolio in portfolios.slice(0, 5)"
              :key="portfolio"
              :id="portfolio.id"
              :title="portfolio.title"
              :desc="portfolio.desc"
              :image="portfolio.img"
              :type="portfolio.type"
              :url="portfolio.url"
              :techs="portfolio.tech"
              :source_code="portfolio.source_code"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes move {
  to {
    /* Move horizontally so that right edge is aligned against the viewport */
    transform: translateX(calc(-100% + 100vw));
    left: 0px;
  }
}

#sectionPin {
  height: 250vh;
  view-timeline-name: --section-pin-tl;
  view-timeline-axis: block;
}

.pin-wrap {
  width: 180vmax;
  will-change: transform;
  animation: linear move forwards;
  animation-timeline: --section-pin-tl;
  animation-range: contain 0% contain 100%;
}
</style>
