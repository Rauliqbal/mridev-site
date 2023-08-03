<template>
   <main>
      <!-- start:hero -->
      <div class="bg-background-hero bg-cover grid grid-cols-1 lg:grid-cols-2 items-center container pt-28 pb-20">
         <div class="md:order-first order-last py-4 md:py-0">
            <div class="flex items-center gap-4">
               <div class="w-12 h-[2px] bg-primary"></div>
               <h2 class="section-title">Hello my name is</h2>
            </div>
            <h1 class="text-2xl md:text-5xl lg:text-[60px font-semibold tracking-wider mt-0 md:mt-6 text-slate-900">Muhamad Raul Iqbal</h1>
            <p class="desc mt-6">
               I am a <span class="text-primary font-medium">Front End Developer</span> and <span class="text-primary font-medium">UI Designer</span>, I am used to making projects with Vue JS and Tailwind CSS, I use git as version control
               and github to store my project source code.
            </p>
            <p class="desc mt-4">
               I am a graduate of <span class="text-primary font-medium">Computer Network Engineering Vocational School</span>, have high spirit of motivation in terms of <span class="text-primary font-medium">learning</span>,
               <span class="text-primary font-medium">seek experience</span> and <span class="text-primary font-medium">seek new things</span>.
            </p>
            <p class="desc mt-4">
               I am able to work in a team well, honestly, <span class="text-primary font-medium">hardworking </span> and <span class="text-primary font-medium">responsible</span>. Currently looking for a job as Front End Developer in a
               company.
            </p>

            <button type="button" class="btn-primary inline-flex mt-8" data-te-toggle="modal" data-te-target="#exampleModalCenteredScrollable" data-te-ripple-init data-te-ripple-color="light">Get my CV</button>

            <!-- Modal CV -->
            <div
               data-te-modal-init
               class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
               id="exampleModalCenteredScrollable"
               tabindex="-1"
               aria-labelledby="exampleModalCenteredScrollable"
               aria-modal="true"
               role="dialog"
            >
               <div
                  data-te-modal-dialog-ref
                  class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1100px]"
               >
                  <div class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                     <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <!--Modal title-->
                        <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="exampleModalCenteredScrollableLabel">CV Rauliqbal</h5>
                        <!--Close button-->
                        <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                           </svg>
                        </button>
                     </div>

                     <!--Modal body-->
                     <div class="relative p-4">
                        <img src="../assets/images/cv-rauliqbal.jpg" alt="" />
                     </div>

                     <!--Modal footer-->
                     <div class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <button
                           type="button"
                           class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                           data-te-modal-dismiss
                           data-te-ripple-init
                           data-te-ripple-color="light"
                        >
                           Close
                        </button>
                        <a
                           href="/public/cv-rauliqbal.pdf"
                           target="_blank"
                           type="button"
                           class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                           data-te-ripple-init
                           data-te-ripple-color="light"
                        >
                           Get My CV
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="order-first md:order-last mx-auto group max-w-md pt-24 pb-12">
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
      <!-- end:hero -->

      <!-- start:resume -->
      <section class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
            <div>
               <!-- Experience -->
               <div>
                  <div class="flex items-center gap-4 mb-6">
                     <div class="w-12 h-[2px] bg-primary"></div>
                     <h2 class="section-title">Experience</h2>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2022 - Current</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">freelancer</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Front-End Developer</h5>
                  </div>
               </div>

               <!-- Education -->
               <div class="mt-12">
                  <div class="flex items-center gap-4 mb-6">
                     <div class="w-12 h-[2px] bg-primary"></div>
                     <h2 class="section-title">Education</h2>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 pb-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2019 - 2021</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">smk 11 maret</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Teknik Komputer dan Jaringan</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 pb-0 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2017 - 2019</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">mts al-imaroh</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Madrasah Tsanawiyah</h5>
                  </div>
               </div>
            </div>

            <!-- Course -->
            <div>
               <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-[2px] bg-primary"></div>
                  <h2 class="section-title">Course</h2>
               </div>
               <div class="flex flex-col-reverse">
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2021</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">buildwith angga</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Full-Stack Web Designer 2021</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 pb-8 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2021</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">dicoding</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Belajar Dasar Pemrograman Web</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary pb-8">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2021</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">Progate</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Kursus Git Control System</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary pb-8">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2022</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">dicoding</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Front-End Web Pemula</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary pb-8">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2022</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">BuildWith Angga</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Bootcamp Front-End Developer : Mastering Vue JS 3</h5>
                  </div>
                  <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary pb-8">
                     <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2023</h6>
                     <h4 class="uppercase font-semibold text-2xl mt-2">Digital Talent Scholarship</h4>
                     <h5 class="text-base italic text-slate-500 mt-2">Junir Web Developer 2023</h5>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- end:resume -->

      <!-- start: Certificates -->
      <section class="container py-20">
         <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-[2px] bg-primary"></div>
            <h2 class="section-title">Certificates</h2>
         </div>

         <div>
            <swiper
               :breakpoints="swiperOptions.breakpoints"
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
               class="mySwiper"
            >
               <swiper-slide v-for="certificate in certificates" :key="certificate">
                  <div class="pb-14" data-te-toggle="modal" :data-te-target="'#certificate' + certificate.id">
                     <div class="cursor-pointer flex flex-col box-border bg-white rounded-xl transition-all duration-300 overflow-hidden">
                        <div class="p-5">
                           <img class="w-16 h-16 bg-[#335ef7] mb-4" :src="'/images/' + certificate.image" />
                           <h5 class="font-semibold text-xl">{{ certificate.title }}</h5>
                           <h5 class="font-semibold text-slate-500 mt-1">Publisher : {{ certificate.publish }}</h5>
                        </div>
                     </div>
                  </div>
               </swiper-slide>
            </swiper>
         </div>

         <!-- Modal Content -->
         <div
            v-for="certificate in certificates"
            :key="certificate"
            data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            :id="'certificate' + certificate.id"
            tabindex="-1"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
         >
            <div
               data-te-modal-dialog-ref
               class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]"
            >
               <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                     <!--Modal title-->
                     <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="exampleModalXlLabel">{{ certificate.title }}</h5>
                     <!--Close button-->
                     <button type="button" class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </button>
                  </div>
                  <div class="modal-body relative p-4">
                     <img :src="'/certificate/' + certificate.certificate" :alt="'Sertifikat telah menyelesaikan ' + certificate.title" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- End:Certificates -->

      <!-- Start: Skills -->
      <section class="container py-20">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div class="px-6">
               <div class="flex items-center gap-4">
                  <div class="w-12 h-[2px] bg-primary"></div>
                  <h2 class="section-title">Coding Skills</h2>
               </div>
               <!-- Coding Skills -->
               <div class="grid grid-cols-3 md:grid-cols-4 gap-6 mt-4">
                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">HTML</span>
                  </div>

                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">css</span>
                  </div>

                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Javascript</span>
                  </div>
                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Sass</span>
                  </div>
                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">bootstrap 5</span>
                  </div>
                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Tailwind</span>
                  </div>
                  <div class="flex items-center flex-col gap-2 group">
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
                     />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Vue Js</span>
                  </div>
                  <div class="flex items-center flex-col gap-2 group">
                     <img class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out" src="https://nuxt.com/assets/design-kit/logo/icon-green.svg" />
                     <span class="text-[12px] text-center uppercase text-slate-500 group-hover:text-primary font-semibold transition duration-300 ease-out">Nuxt Js</span>
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
      <!-- End: Skills -->
   </main>
</template>

<script>
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Navbar from "../components/Navbar.vue";
import certificates from "../data/certificateContent.json";

export default {
   components: { Swiper, SwiperSlide, Navbar },

   setup() {
      return {
         modules: [Pagination, Autoplay],
      };
   },

   data() {
      return {
         certificates: certificates,

         swiperOptions: {
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
               },
            },
         },
      };
   },
};
</script>
