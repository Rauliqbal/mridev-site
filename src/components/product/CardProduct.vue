<template>
   <a :href="url" target="_blank" class="bg-white rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all ease-out">
      <img :src="image" :alt="'Cover Photo' + name" />
      <div class="p-5">
         <h3 class="font-semibold text-2xl capitalize h-16">{{ name }}</h3>
         <div class="flex items-center justify-between mt-6">
            <p class="text-lg md:text-xl text-slate-500 capitalize font-medium">{{ source }}</p>
            <p class="text-base md:text-lg font-semibold text-primary px-5 py-2 bg-primary/20 rounded-full">{{ type }}</p>
         </div>
      </div>
   </a>
</template>

<script setup>
defineProps({
   id: Number,
   url: String,
   name: String,
   source: String,
   type: String,
   image: String,
});
</script>
