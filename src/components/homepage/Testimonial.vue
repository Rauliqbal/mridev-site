<script setup>
</script>
<template>
  <section>
    <div class="container py-20">
       <div class="text-center">
          <h2 class="section-title">Testimonials</h2>
          <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4">
             What people say <br />
             about me ?
          </h2>
       </div>

       <swiper
          :slidesPerView="2"
          :spaceBetween="24"
          :breakpoints="swiperOptions.breakpoints"
          :loop="true"
          :pagination="{
             clickable: true,
          }"
          :modules="modules"
          class="mySwiper mt-10"
       >
          <swiper-slide class="pb-14">
             <div class="flex flex-col bg-white box-border py-8 pl-8 md:pl-24 pr-8 rounded-2xl relative">
                <span class="relative md:absolute text-6xl left-4 text-slate-200"><i class="bx bxs-quote-left"></i></span>
                <div>
                   <p class="text-base md:text-lg leading-relaxed tracking-wide font-medium text-slate-500 italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.
                   </p>
                   <h5 class="text-xl font-semibold mt-4">Raisha Ramadanti</h5>
                </div>
             </div>
          </swiper-slide>

          <swiper-slide class="pb-14">
             <div class="flex flex-col bg-white box-border py-8 pl-8 md:pl-24 pr-8 rounded-2xl relative">
                <span class="relative md:absolute text-6xl left-4 text-slate-200"><i class="bx bxs-quote-left"></i></span>
                <div>
                   <p class="text-base md:text-lg leading-relaxed tracking-wide font-medium text-slate-500 italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.
                   </p>
                   <h5 class="text-xl font-semibold mt-4">Azura</h5>
                </div>
             </div>
          </swiper-slide>

          <swiper-slide class="pb-14">
             <div class="flex bg-white box-border py-8 pl-24 pr-8 rounded-2xl relative">
                <span class="absolute text-6xl left-4 text-slate-200"><i class="bx bxs-quote-left"></i></span>
                <div>
                   <p class="text-base md:text-lg leading-relaxed tracking-wide font-medium text-slate-500 italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis quos cupiditate sint consectetur doloribus deleniti, laborum qui voluptates tempora.
                   </p>
                   <h5 class="text-xl font-semibold mt-4">Naura</h5>
                </div>
             </div>
          </swiper-slide>
       </swiper>
    </div>
 </section>
</template>