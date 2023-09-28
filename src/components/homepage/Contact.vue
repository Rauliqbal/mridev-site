<script setup>
</script>
<template>
  <section class="relative">
    <div class="relative lg:absolute inset-x-0 container py-20">
       <div class="bg-white px-4 py-8 md:p-20 rounded-3xl box-border">
          <div class="flex items-center gap-4">
             <div class="w-12 h-[2px] bg-primary"></div>
             <h2 class="section-title text-primary">Say Hello</h2>
          </div>
          <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4 font-BaiJamjuree">
             Let's work <br />
             <span class="text-gradient">together.</span>
          </h2>
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
             <div class="col-span-1 md:col-span-2 lg:col-span-1">
                <div class="flex flex-col gap-5">
                   <p class="mt-14">Have some project? or maybe just want to discuss your project, I help you as much as I can.</p>
                   <div href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center gap-2 md:gap-4 transition duration-200">
                      <i class="bx text-lg md:text-2xl bx-mail-send text-primary"></i>
                      <span class="text-sm sm:text-base">muhamadrauliqbal.13@gmail.com</span>
                   </div>
                   <div href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank" class="flex items-start gap-2 md:gap-4 transition duration-200">
                      <i class="bx text-lg md:text-2xl bx-map-pin text-primary"></i>
                      <span class="text-sm sm:text-base">Perum Telaga Murni Blok D1/14A ,Kec. Cikarang Barat, Kab. Bekasi</span>
                   </div>
                   <div href="https://www.instagram.com/raul.iqbl_/" target="_blank" class="flex items-center gap-2 md:gap-4 transition duration-200">
                      <i class="bx text-lg md:text-2xl bx-phone text-primary"></i>
                      <span class="text-sm sm:text-base">+62 896 7310 2977</span>
                   </div>
                </div>
             </div>

             <div class="py-6 px-0 md:px-8">
                <form class="flex flex-col gap-6" action="https://formspree.io/f/mqkjznjb" method="POST">
                   <div class="w-full md:max-w-md flex items-center bg-gray-100 py-3 px-6 rounded-xl">
                      <input class="w-full bg-gray-100 outline-0 focus:" placeholder="name" type="name" name="name" required />
                      <i class="bx bx-user text-2xl"></i>
                   </div>

                   <div class="w-full md:max-w-md flex items-center bg-gray-100 py-3 px-6 rounded-xl">
                      <input class="w-full bg-gray-100 outline-0" placeholder="email" type="email" name="email" required />
                      <i class="bx bx-paper-plane text-2xl"></i>
                   </div>

                   <div class="w-full md:max-w-md bg-gray-100 py-3 px-6 rounded-xl relative">
                      <textarea class="w-full bg-gray-100 outline-0" rows="3" placeholder="message" name="message" required></textarea>
                      <i class="bx bx-message-square-detail text-2xl absolute top-3 right-6"></i>
                   </div>
                   <button class="btn-primary w-full md:w-[170px] mt-4 md:mt-8" type="submit">Send message</button>
                </form>
             </div>
             <div class="flex justify-evenly col-span-1 md:col-span-2">
                <a href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
                   <i class="bx bxl-dribbble text-xl"></i>
                   <span class="font-semibold text-xl hidden lg:block">Dribble</span>
                </a>

                <a href="https://github.com/Rauliqbal" target="_blank" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
                   <i class="bx bxl-github text-xl"></i>
                   <span class="font-semibold text-xl hidden lg:block">Github</span>
                </a>

                <a href="https://www.linkedin.com/in/muhamad-raul-iqbal/" class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out">
                   <i class="bx bxl-linkedin text-xl"></i>
                   <span class="font-semibold text-xl hidden lg:block">LinkedIn</span>
                </a>

                <a
                   href="https://www.youtube.com/channel/UCklGTRJJjc00lK-qF3L_CRQ"
                   target="_blank"
                   class="flex items-center text-slate-500 gap-4 hover:bg-primary hover:text-white py-3 px-3 sm:py-3 sm:px-8 rounded-xl transition duration-200 ease-out"
                >
                   <i class="bx bxl-youtube text-xl"></i>
                   <span class="font-semibold text-xl hidden lg:block">Youtube</span>
                </a>
             </div>
          </div>
       </div>
    </div>
    <img class="w-full h-[20rem] md:h-auto mt-[-24rem] lg:mt-0" src="/images/bg-image.webp" />
 </section>
 <div class="bg-[#1c2863] py-0 lg:py-28"></div>
</template>