<script setup>
defineProps({
   id: Number,
   title: String,
   desc: String,
   image: Image,
   type: String,
   url: String,
});
</script>

<template>
   <div class="flex flex-col gap-6 group rounded-2xl p-8 bg-white" :key="id">
      <div class="relative overflow-hidden rounded-xl">
         <img class="object-cover transition-all duration-200 ease-out" :src="'/portfolio/' + image" :alt="'Image ' + title" />
         <span class="absolute top-0 right-0 text-[12px] px-6 py-1 bg-primary rounded-bl-2xl text-white">{{ type }}</span>
      </div>

      <div>
         <h2 class="text-lg md:text-xl font-semibold line-clamp-1" :title="title">{{ title }}</h2>
         <p class="text-slate-500 mt-4 text-sm">{{ desc }}</p>
         <a class="mt-6 w-[130px] btn-primary" :href="url" target="_blank">See Project</a>
      </div>
   </div>
</template>
