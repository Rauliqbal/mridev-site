<script setup></script>
<template>
  <section  class="bg-[#1C2863]">
    <div class="container py-20">
      <div class="md:w-2/3">
        <div class="flex items-center gap-4">
          <div class="w-12 h-[2px] bg-secondary"></div>
          <h2 class="section-title text-secondary">what we serve</h2>
        </div>
        <h2
          class="text-xl md:text-4xl md:leading-snug font-semibold text-white mt-4"
        >
          Some of the services I specialize in, <br class="hidden md:block" />
          if you are interested, please contact me.
        </h2>

        <h3
          class="text-5xl md:text-6xl font-semibold mt-20 text-white font-BaiJamjuree"
        >
          Think.Make.<br />Solve
        </h3>
      </div>

      <div
        class="flex flex-col md:flex-row items-center md:justify-center gap-8 px-4 absolute right-0 lg:mr-[4%] mt-8 md:mt-4 lg:-mt-8 xl:-mt-40"
      >
        <div
          class="flex flex-col justify-center items-center w-full md:max-w-[320px] bg-white rounded-3xl p-8 box-border hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <img class="w-44 h-44" src="/images/fe-dev.svg" />
          <div class="mt-8">
            <h4 class="text-xl md:text-2xl text-center font-semibold">
              Front End Developer
            </h4>
            <p class="text-center text-slate-500 mt-4">
              Create your amazing idea in websites , full interaction with
              responsive views.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center w-full md:max-w-[320px] bg-white rounded-3xl p-8 box-border hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <img class="w-44 h-44" src="/images/ui-des.svg" />
          <div class="mt-8">
            <h4 class="text-xl md:text-2xl text-center font-semibold">
              UI Designer
            </h4>
            <p class="text-center text-slate-500 mt-4">
              Create eye-catching and powerful mobile apps with a focus on User.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
