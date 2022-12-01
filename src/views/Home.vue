<template>
   <main>
      <Navbar />
      <!-- start:hero -->
      <div class="bg-background-hero bg-cover">
         <div class="container grid grid-cols-1 lg:grid-cols-2 items-center h-screen pt-10">
            <div>
               <div class="flex items-center gap-4">
                  <div class="w-12 h-[2px] bg-primary"></div>
                  <h2 class="section-title">Rauliqbal</h2>
               </div>
               <h1 class="text-slate-900 text-4xl md:text[-40px] lg:text-[54px] xl:text-[64px] leading-normal md:leading-tight font-semibold tracking-wider mt-2">
                  Hello, my <br />
                  name's Raul. <br />
                  I'm a Front-End Developer.
               </h1>
               <router-link to="/project" @click="reloadPage" class="btn-primary mt-10 inline-flex">Recent work</router-link>
            </div>
            <div class="mx-auto group max-w-md">
               <div class="relative" v-tilt="{ speed: 500, perspective: 1000, transition: true }">
                  <div class="flex items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-violet-500 w-60 h-60 md:w-[28rem] md:h-[28rem] overflow-hidden">
                     <img class="group-hover:-translate-y-5 transition-all duration-300 ease-out" src="../assets/images/ilustration/ilustration-user.svg" alt="" />
                  </div>
                  <div class="relative -top-56 -left-6 md:left-0 md:-top-[28rem] group-hover:-translate-y-5 transition duration-300 ease-out">
                     <img class="absolute top-0 -mt-[73px] left-[24px]" src="../assets/images/ilustration/head.svg" alt="" />
                     <img class="absolute z-20 -top-[5.5rem] w-36 md:w-auto left-[4.6rem] md:top-0 mt-[9.5rem] md:left-[6.5rem] animate-blink" src="../assets/images/ilustration/eyes.svg" alt="" />
                  </div>
               </div>

               <div class="relative -top-[27rem]">
                  <span class="animate-floating absolute -left-8 md:left-0 top-44 md:-top-4 bg-white rounded-full shadow-2xl animation-delay-2000">
                     <img class="p-3 w-14 md:w-20" src="../assets/images/tailwind-icon.svg" alt="" />
                  </span>
                  <span class="animate-floating absolute top-72 md:top-40 -right-6 bg-white rounded-full shadow-2xl">
                     <img class="p-3 w-14 md:w-20" src="../assets/images/vue-icon.svg" alt="" />
                  </span>
                  <span class="animate-floating absolute -bottom-[27.5rem] left-0 md:left-9 bg-white rounded-full shadow-2xl animation-delay-4000">
                     <img class="p-3 w-14 md:w-20" src="../assets/images/figma-icon.svg" alt="" />
                  </span>
               </div>
            </div>
         </div>

         <div class="container -mt-16 pb-10 invisible md:visible bottom-8">
            <button @click="goto('skills')" class="flex items-center group gap-4">
               <div class="z-20 w-1 pt-[0.7rem] px-2 h-6 border-2 border-primary rounded-3xl opacity-75 box-content relative">
                  <div class="w-1 h-2 rounded-md bg-primary animate-bounce"></div>
                  <span class="w-8 h-8 rounded-full bg-transparent p-4 border-2 border-blue-400 absolute opacity-0 group-hover:animate-ping group-hover:opacity-100 top-0 -left-[8px]"></span>
               </div>

               <span class="text-sm">SCROLL DOWN</span>
            </button>
         </div>
      </div>
      <!-- end:hero -->

      <!-- start:Skills -->
      <section ref="skills" class="bg-[#1C2863]">
         <div class="container py-20">
            <div class="md:w-2/3">
               <div class="flex items-center gap-4">
                  <div class="w-12 h-[2px] bg-secondary"></div>
                  <h2 class="section-title text-secondary">what we serve</h2>
               </div>
               <h2 class="text-xl md:text-4xl font-semibold text-white mt-4">
                  Some of the services I specialize in, <br />
                  if you are interested, please contact me.
               </h2>

               <h3 class="text-5xl md:text-7xl font-semibold mt-20 text-white">Think.Make.<br />Solve</h3>
            </div>

            <div class="flex flex-col md:flex-row items-center md:justify-center gap-8 px-4 absolute right-0 lg:mr-[4%] mt-8 md:mt-4 lg:-mt-8 xl:-mt-40">
               <div class="flex flex-col justify-center items-center w-full md:max-w-[320px] bg-white rounded-3xl p-8 box-border hover:-translate-y-4 transition-all duration-300 ease-out">
                  <img class="w-44 h-44" src="../assets/images/fe-dev.svg" />
                  <div class="mt-8">
                     <h4 class="text-xl md:text-2xl text-center font-semibold">Front End Developer</h4>
                     <p class="text-center text-slate-500 mt-4">Create your amazing idea in websites , full interaction with responsive views.</p>
                  </div>
               </div>

               <div class="flex flex-col justify-center items-center w-full md:max-w-[320px] bg-white rounded-3xl p-8 box-border hover:-translate-y-4 transition-all duration-300 ease-out">
                  <img class="w-44 h-44" src="../assets/images/ui-des.svg" />
                  <div class="mt-8">
                     <h4 class="text-xl md:text-2xl text-center font-semibold">UI Designer</h4>
                     <p class="text-center text-slate-500 mt-4">Create eye-catching and powerful mobile apps with a focus on User.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- end:Skills -->

      <!-- start:Portfolio -->
      <section class="mt-[50rem] md:mt-[15rem]">
         <div class="container py-20">
            <div class="flex items-center gap-4">
               <div class="w-12 h-[2px] bg-primary"></div>
               <h2 class="section-title text-primary">Recent Work</h2>
            </div>
            <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4">
               Look at my <br />
               portfolios.
            </h2>

            <swiper
               :breakpoints="swiperOptions.breakpoints"
               :slidesPerView="1"
               :spaceBetween="30"
               :pagination="{
                  clickable: true,
               }"
               :autoplay="{
                  delay: 3500,
                  disableOnInteraction: false,
               }"
               :loop="true"
               :modules="modules"
               class="mySwiper mt-10"
            >
               <swiper-slide class="pb-12" v-for="project in portfolio" :key="project.id">
                  <figure class="box-border relative overflow-hidden group rounded-xl md:rounded-3xl">
                     <img class="object-cover w-full group-hover:scale-110 group-hover:blur-sm transition-all duration-200 ease-out" :src="'/portfolio/' + project.img" :alt="'Image' + project.title" />
                     <figcaption class="p-4 md:p-8 flex flex-col justify-end bg-slate-900/40 inset-0 absolute opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 ttransition-all duration-300 ease-out">
                        <h2 class="text-lg md:text-2xl font-semibold text-white">{{ project.title }}</h2>
                        <p class="text-slate-100 mt-2">{{ project.desc }}</p>
                        <a class="mt-4 w-[130px] btn-primary" :href="project.url" target="_blank">See Project</a>
                     </figcaption>
                  </figure>
               </swiper-slide>
            </swiper>
         </div>
      </section>
      <!-- end:Portfolio -->

      <!-- start: Product -->
      <section>
         <div class="container py-20">
            <div class="flex items-center gap-4">
               <div class="w-12 h-[2px] bg-primary"></div>
               <h2 class="section-title text-primary">My Product</h2>
            </div>
            <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4">
               Support me by<br />
               buy my product.
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
               <CardProduct v-for="product in products" :key="product.id" :url="product.url" :name="product.name" :image="product.image" :source="product.source" :type="product.type" />
            </div>
         </div>
      </section>
      <!-- end:product -->

      <!-- start:testimonial -->
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
      <!-- end:testimonial -->

      <!-- start:contact -->
      <section class="relative">
         <div class="relative lg:absolute inset-x-0 container py-20">
            <div class="bg-white px-4 py-8 md:p-20 rounded-3xl box-border">
               <div class="flex items-center gap-4">
                  <div class="w-12 h-[2px] bg-primary"></div>
                  <h2 class="section-title text-primary">Say Hello</h2>
               </div>
               <h2 class="text-4xl md:text-[64px] leading-tight font-semibold mt-4">
                  Let's work <br />
                  together.
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
                           <span class="text-sm sm:text-base">Perum Telaga Murni no 14 A ,Kec. Cikarang Barat, Kab. Bekasi</span>
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
         <img class="w-full h-[20rem] md:h-auto mt-[-24rem] lg:mt-0" src="../assets/images/bg-image.webp" />
      </section>
      <!-- end:contact -->
      <div class="bg-[#1c2863] py-0 lg:py-28"></div>
   </main>
</template>

<script>
import CardProduct from "../components/product/CardProduct.vue";
// Import Swipers
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Navbar from "../components/Navbar.vue";
import productContent from "../data/productContent.json";

export default {
   components: { CardProduct, Swiper, SwiperSlide, Navbar },
   setup() {
      return {
         modules: [Pagination, Autoplay],
      };
   },
   data() {
      return {
         products: productContent,
         portfolio: [
            {
               title: "My Mushaf - Al Qur'an Digital",
               desc: "My Mushaf Indonesia adalah Aplikasi Al - Qur'an Digital Berbasis Website App.",
               img: "mymushaf.webp",
               url: "https://mymushaf.vercel.app/",
               type: "Web App",
            },
            {
               title: "FurniLux - Landing Page UI KIT",
               desc: "Design landing page for funiture.",
               img: "furnilux.webp",
               url: "https://www.figma.com/community/file/1161470450362319670",
               type: "Landing Page Design",
            },
            {
               title: "Lets Cooking - Resep Masakan Indonesia",
               desc: "Lets Cooking adalah Aplikasi Resep masakan Indonesia Berbasis Website App.",
               img: "lets-cook.webp",
               url: "https://letscooking.vercel.app/",
               type: "Web App",
            },
            {
               title: "Anonime - Streaming Anime",
               desc: "Website Streaming Anime Slicing from Figma.",
               img: "anonime.webp",
               url: "https://anonime.vercel.app/",
               type: "Web App",
            },
         ],
         swiperOptions: {
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
            },
         },
      };
   },
   methods: {
      reloadPage() {
         window.setTimeout(function () {
            location.reload();
         }, 100);
      },
      goto(refName) {
         var element = this.$refs[refName];
         var top = element.offsetTop;

         window.scrollTo(0, top);
      },
   },
};
</script>
