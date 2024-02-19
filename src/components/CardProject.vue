<script setup>
defineProps({
   id: Number,
   title: String,
   desc: String,
   image: String,
   type: String,
   url: String,
   source_code: String,
   techs : Array
});
</script>

<template>
   <div class="flex flex-col gap-6 group rounded-2xl p-4 md:p-8 bg-white" :key="id">
      <div class="relative overflow-hidden rounded-xl">
         <img class="object-cover transition-all duration-200 ease-out " :src="'/portfolio/' + image" :alt="'Image ' + title" />
         <span class="absolute top-0 right-0 text-[12px] px-6 py-1 bg-primary rounded-bl-2xl text-white">{{ type }}</span>
      </div>

      <div>
         <div>
            <h2 class="text-xl md:text-3xl font-semibold line-clamp-1" :title="title">{{ title }}</h2>
            <p class="text-slate-500 my-4 text-sm">{{ desc }}</p>
            <ul class="flex gap-2">
               <li v-for="tech in techs" :key="tech">
                  <img class="w-6 h-6 md:h-8 md:w-8" :src="'/icons/' + tech.icon" :alt="'icon' + tech.icon">
               </li>
            </ul>
         </div>
         
      </div>
      <div class="flex items-center justify-between mt-auto">
         <a class="w-[130px] btn-primary" :href="url" target="_blank">See Project</a>
         <a :href="source_code" target="_blank" class="flex items-center text-sm gap-1 text-slate-400 hover:text-slate-700 transition duration-200">
            <i class="bx bxl-github"></i>
            <span>Source Code</span>
         </a>
      </div>
   </div>
</template>
