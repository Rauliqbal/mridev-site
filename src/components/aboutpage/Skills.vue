<script setup>
import { ref } from 'vue'
import skillData from '../../data/skills'

const skills = ref(skillData)
</script>
<template>
  <section class="container py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
       <div class="px-6">
          <div class="flex items-center gap-4">
             <div class="w-12 h-[2px] bg-primary"></div>
             <h2 class="section-title">Coding Skills</h2>
          </div>
          <!-- Coding Skills -->
          <div class="grid grid-cols-3 md:grid-cols-4 gap-6 mt-4">
             
            <div v-for="skill in skills" :key="skill" class="flex items-center flex-col gap-2 group">
                <img
                   class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                   :src="'/icons/'+skill.icon"
                />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">{{skill.title}}</span>
             </div>
          </div>
       </div>

       <div class="px-6">
          <div class="flex items-center gap-4">
             <div class="w-12 h-[2px] bg-primary"></div>
             <h2 class="section-title">Design Skills</h2>
          </div>
          <!-- Design Skills -->
          <div class="grid grid-cols-3 md:grid-cols-4 gap-6 mt-4">
             <div class="flex items-center flex-col gap-2 group">
                <img
                   class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                   src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">figma</span>
             </div>

             <div class="flex items-center flex-col gap-2 group">
                <img
                   class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                   src="https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png"
                />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Canva</span>
             </div>

             <div class="flex items-center flex-col gap-2 group">
                <img
                   class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                   src="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png"
                />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Photoshop</span>
             </div>

             <div class="flex items-center flex-col gap-2 group">
                <img class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out" src="https://cdn.worldvectorlogo.com/logos/invision.svg" />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">InVision</span>
             </div>
             <div class="flex items-center flex-col gap-2 group">
                <img
                   class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                   src="https://www.freelogovectors.net/wp-content/uploads/2021/07/whimsical-logo-freelogovectors.net_.png"
                />
                <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Whimsical</span>
             </div>
          </div>
       </div>
    </div>
 </section>
</template>