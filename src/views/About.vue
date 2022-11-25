<template>
   <div>
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

            <a class="btn-primary inline-flex mt-8" href="https://drive.google.com/file/d/146Ebl_VJqstMxv169d6WJn-U5RC5ZOjJ/view" target="_blank">Get my CV</a>
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
               <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-[2px] bg-primary"></div>
                  <h2 class="section-title">Experience</h2>
               </div>
               <div class="relative border-l-2 border-l-primary pl-6 before:block before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-white before:border-4 before:border-primary">
                  <h6 class="py-[2px] px-3 text-[12px] border-2 border-primary font-semibold text-primary inline-flex rounded-full -mt-4">2021 - Current</h6>
                  <h4 class="uppercase font-semibold text-2xl mt-2">freelancer</h4>
                  <h5 class="text-base italic text-slate-500 mt-2">Front-End Development</h5>
               </div>

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

            <!-- Start:Course -->
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
               </div>
            </div>
            <!-- End:Course -->
         </div>
      </section>
      <!-- end:resume -->

      <!-- start: Certificates -->
      <section class="container py-20">
         <div class="flex items-center gap-4">
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
                  delay: 4500,
                  disableOnInteraction: false,
               }"
               :loop="true"
               :modules="modules"
               class="mySwiper"
            >
               <swiper-slide>
                  <div class="pb-14">
                     <div class="cursor-pointer flex flex-col shadow hover:shadow-xl rounded-xl transition-all duration-300 overflow-hidden" data-bs-toggle="modal" data-bs-target="#certificateModal4">
                        <div class="p-5">
                           <img class="w-16 h-16 object-cover bg-[#335ef7] mb-4" src="https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/0ecccc80caed7d3013433880e099e4fb.png" />
                           <h5 class="font-semibold text-xl">Front-End Web Pemula</h5>
                           <h5 class="font-semibold text-slate-500 mt-1">Publisher : Dicoding</h5>
                        </div>
                     </div>
                  </div>
               </swiper-slide>

               <swiper-slide>
                  <div class="pb-14">
                     <div class="cursor-pointer flex flex-col shadow hover:shadow-xl rounded-xl transition-all duration-300 overflow-hidden" data-bs-toggle="modal" data-bs-target="#certificateModal3">
                        <div class="p-5">
                           <img
                              class="w-16 h-16 object-cover bg-[#335ef7] mb-4"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEX///84CVPXzdzTydlkP3l2VYhpRX16W4w7DVbv6/Hy7/TZ0N5VLWz9/P07DFXi2+ZbNHG7q8RKH2JvTYPJvND39fiXfqWtmriBY5KyoL3Ow9VDF11fOXS/sMiNcpzEtszn4eqmkbJQJ2iag6iJbZlHG2Cgiq13V4qYgKbpkXnDAAAER0lEQVR4nO2b6XaqMBRGSfFqRAYRUUFUcKh9/ye8tk2YHJhN0vXtnxZZZzc5GU6ipgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZfGXwdoNp6LD6Iy7IN/Q6OSIDqUTM0o49nhniQ6nPSuSxwyUVdmTIpEuOqKWHEoixF75omNqR7lJCBnFomNqh773FnbBZKFq99IsZ+3RnMl2KTqiDsSfRzlNmo+jfrLNTGTpXcF8exxN9okbOkb9b8VeanKJB4utCUmuw9PL3Duf1ofZtLqRrK9sQpFhFPa35AE2PY6/G0l/FWKQJv3qbeE+Z/bII+Pivviuy4di+vG2eJ/y8VqE2K9SOe2WY/HrrioRsnnxZWvDn3rVcO+hUmT06tuGyZ6aC28SLjI/Psz6ChFtydNk96Z4n8JFdMuPP3br1cabX+z6ItqVZ8l7wn1OKpJ9ZBnOMvjcH2uJOGwMtkXvfh+IMP7VEtEm7AWnYeKrTWcRXZJ07yyizdkb4gGia0B3kRN7g+CppLsI71v7QeKrTXcRayvFANxdRBv9PrgQm+09iLAFly12V9KDCK9Axv1H14AeRBL2CrFzew8ia/aK2RDx1aZHEbHbxB67lvIt8vlXcoTXtsUeyfUgwvZWVPkJkS1/zSHCq093EZ/tEb1B4qtNd5GQvUFwubG//YjgOkp3kej3OVvwPYLOIrx4HA0TX206i5zZC1SvosRsf6h8XYs3iIyVRkYtEZ0f9shT+737Sx2RtBofSVONbyVi8RI2EX9G3UXESu90XAeMsCYdRKz03pMMB9TtRbJzN9HV0h9ai0yzGwOCi6W/tBUJs+songz3BVqK+KfshtCowcWPAWklokdENo82ItNz7sLWWBKP5iJ+csk0yEaK/PimoYgf5O6cEZoIX5mkNBLxAzOnQY7h++KspIGIkeRb49atpLokX1skXl0KGgvhC/ciNUXCCS1o0L0soxWnjoi/npMintjK+yOqRWbn8r2h6CAg0CoqRWjJgsxdecbcHJUiJUYHKTUaitCrTDNHkSciln6XGeSyEl27esVDEeNumLpleCDNsuohMYsz98++H6bIdqNLmhoZvzvW7JTm4NllDTORajHyBOM2Z9MJm6ct965P0etS+sZgGM5zDQmKus0JR/caCopMN6XcoGqKhMW9xuKsX5UUCfJLKvpv56cXetUSCXLdanGKfz5TUSTM2uO45hO4giJ+WlK4JNk6REERfnOsWE5QUITNH3Rd+FQ9EYNlSOl0QD0Rh3Ws0pZEXZFxcd+knojBtx/UC3LZrp5I+jupb5foK2QjsIIis2LJZ+udllMlRQorFIZ5NRUU0XZPfoSonIjmeH9E5LZwvC86qClya5WV+TdENM36OI3KReuJ6KDaMt3to7yMjEcItTGWnxPzx4YmomPpjuUsXTcWHQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCA/7KYLqJppiVbAAAAAElFTkSuQmCC"
                           />
                           <h5 class="font-semibold text-xl">Dasar Git</h5>
                           <h5 class="font-semibold text-slate-500 mt-1">Publisher : Progate</h5>
                        </div>
                     </div>
                  </div>
               </swiper-slide>

               <swiper-slide>
                  <div class="pb-14">
                     <div class="cursor-pointer flex flex-col shadow hover:shadow-xl rounded-xl transition-all duration-300 overflow-hidden" data-bs-toggle="modal" data-bs-target="#certificateModal2">
                        <div class="p-5">
                           <img class="w-16 h-16 bg-[#335ef7] mb-4" src="https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/0ecccc80caed7d3013433880e099e4fb.png" />
                           <h5 class="font-semibold text-xl">Belajar Dasar Pemrograman Web</h5>
                           <h5 class="font-semibold text-slate-500 mt-1">Publisher : Dicoding</h5>
                        </div>
                     </div>
                  </div>
               </swiper-slide>

               <swiper-slide>
                  <div class="pb-14">
                     <div class="cursor-pointer flex flex-col shadow hover:shadow-xl rounded-xl transition-all duration-300 overflow-hidden" data-bs-toggle="modal" data-bs-target="#certificateModal1">
                        <div class="p-5">
                           <img
                              class="w-16 h-16 bg-[#335ef7] mb-4"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEUzX/b///////3//f8zX/X///wzXvn///j///r9//////cyX/j//f7//fv///E0X/M0Xfv/+v/6//0zX/AyYe63wfv1//DU4vgvWvUvWu7/+P/p8/3N3PogUvj6//WftfHK0/b//+3j6/wiVPW31/TAyfRCa+OVrfFefP7t9/zt9fDB0PmntPmOpf94lf06Z/lUc/uRnPYrYel5kPlqgPN7kutjie4mUf6Ame3f7vhUd+qaufOWrvAqSv8dUushV/20xvheffmzxuVIb/CPovLt7v9JafY4aedrf+jS3/KHnObIzfdnhOlKeuYpVuOWrPmqxfGEpu2WteOnrPw/hNw6X9dniuHV3P2gqueQlvaKmefd4+tkiuc8cOXh4vXS6vZMgNgRAAAf50lEQVR4nOVdDV/bNre35RfJlm3JlmlsEicErU0NLXQhaQilcdoApV0faHfvfbo9292+/7e4kikdBCexQ9pS7tnLbyvE0d86Ou/nSFFXTsB1EQIA2dAw2rYFtxrba0+e7jw/mJzsEkm7J5OD5ztPn6xtN7agZbcRcCECBkKuC1a/HGX1j7QCywECYVCvrZ3vPYs45zGLTUqpqV9Q/t/iz8RPomd75+Na2kQGAI745OqX8xUQup4H0821n1+FoxGPu4SaJlYUnZpYNy9IxybVFQWbJiVdiVN5/PPaZgo9z139claF0HGAASxVc8Qe1lo7z0acRqZCFEwxIbrYM8oIUT4jVAhh8o90QsTPFaIL/Hx0stOqiT10NNUSz3KcFa1sVQgty3F8YHvpw71HcaKLHapMup7Ej/Yepp4NfMexVsWwq0KIxEGCm60e5VjsmLIUQkXsKua019qEUu6saGUr41K1/rrHuJQmOD93S5D8oJRCnPVe19W7wqXI1oJAA7DRP8siIUPEwRL/WgqgIg6kKY6tkEdRdtZvQOCIR9u33cvbIrQCDxhpa3cUUXNJXEVk0mi020oN4N1agdwSoeUgWHsacWYKnbBKhIJZCY+e1iBybgnxlggBrO1wxkwsWJOuECEVvBqZJOY7NXhLO2dphBpqar7ROOURwQpTsK4vJ16KKX8cw5hE/LRh+FoTad8c4QPkg596WbRCWMUUZb2fgI8efHOEGqg9H0SMfXWEjEWD5zXw7fewvs/jUKGrZM1iwlQJY75f/2YIAQSWhZxWFGH89eF9BolxFLUcZFmgutypvoeOq6GNCf9G4P4hPtlAmlvd0qmOEMJ6nytsWbtlWSJM4f06hF8ZoQM1oD58FIf6NziA1wlTPYwfPVSBBqvtYzWEngOEhKHht4b3GWRIhcQBjvcVEbre693MXKl9VoXEN2e7rysGAqohDI4GjAn3/DshpFR8++Ao+AoIHRXBYB0OTzJhYtOlvaPbkgyHmCw7GcJ1BFFJD7IcQhtomuNtj74Xe14nc7TtOZoG7FUi1FwPPR19HwFzk8zR08BztVUiFLaEUILkbmyhQEj4n3VhW60IoaMh2wfDAy6U4PeG9plMPeQHQ+DbSFt8FhcjRFDTYINQcld4VBIW62nIhS2O4ixGKOxsOI71b2ZmlyOM9XhsoxJR1RLnUAOtkR7dFQ69JBrpo1YZr3ERwqDpwxfJ91KA84kkL6DfXKT/FyAMVAQOX4Zf35Nfhlj48hAgdQHEBQibKOhwttIw2uqIEsY7AWoujVD41KpvHSYhoeH3BlNIISVhcmj5qoXmKI05CDVoaVDs4N0SotcJi12EmgXnSJw5CJGGwIuX39yZr0aEvXwBxEqXQmhrsCVZ9HuDmEuSUVtwnok6A6Fj25YPxyMS3tEzeElifWQ0hr5l2zPO4qw9BBowGvEyic5vT3rcMMR6q+0h0lw4JPpdcSbmk6mTIXRnncUZCKHm1Q8ovttn8JLEOg/qnjYj0DgDYdNFO/xOeRPzCBO+A91qCP320+Q7xQyXIRwmT9vr1bj04YjcbUV4nQgbPay2h5uROMDfe9kVyNRNvlkeoeekz34keBdknqROu0BlFCC0Xfso+97rXYKyI9sp4NQChBrYHtxNh3A+hYNttcACn0YIVAvUd++0PzGLTLZbN4A6zajTCKHY6P2M/Riq/jrRMNtXbzLqjT104UNu/pgImckfwhtlxtMILa3+iOb1rT8c6WLdj+radHzxBkLUj0OT/kja/pIINcO4jxYhhBt3O2wxnzDjG4vOoTNZsjj0bhA2J4v2sMV/SClzSZTx1hyEzgOtHik/jM9URJgoUV174MxAiBDY//qVeF+bon1wrUb8KsKmX4t+5A28IBzV/OYMhBp4Ht8DhPHzaympqwj9nwY/kF8/i3A4+MmfdQ57P/4plBT1is+hBRo/tqa4JKExGleqGL4gBA7aM39gc+YfwszcQw6YRqg1tcY9EKQXhKOGwDOF0EFW/z6w6AXR/j8pxUuEgV/jdyf6dFtmMnnND6YRukdL6UJCZKWi7OXCJsGUyr9vuTxM9a40/2WRJ6VLhW1xfOROI3TSeCmDFJtKyChlOtYJjViXkfC26Thi0kw+Tz42XC45hEmcTnMpaHG6TIANK2Ihozic9Hp7e72TiPNb72GmvHm/1+tNwngkMC7FsYzyFphCiHbDpUSpbmbx6ZO3dckTNrA2t99N+C3tBkz/JVcXpG+fnMYZXiaggqNwF11B6ACoNkZL9EWaJuHdzl8WMC40jqYaQE1/eR9xaprVJLP4gBnSPOFMdGzJsKYDgLr5OFyGTbFpjhoqBM7lHlpQ7Ue0evMu7SadFLrXw7DAdrf/Fet6NZ5nuo5NnHM4ZoP08mH1eKk91HUa9VVoXe6hAYz6GTVJ5WfxZzWkgWCqKClQDb9zVrEYnNKzownOrUasDy5bgMB5tFRQTBfS6qxu5LwlEaLAeJ0JtqrGpVhJ+k0b2SqYSi8byLK9jSomri6NyQ24NuhKljT1l39/fpSddD83BlRcm2D67LURoM8IrXXYq/QASbTLj2b3IGlgGGZhybCrThkNh0ADp2H+Wujol/y92/6H+EK9UryECurBdesSIdhkVc8z7vJzb3atVdNAw272ptw+0jfZmyEymmAzyw8vHa3lLOq2TyKcnx2dZd2KC1RMtgkuEap2i1eWo4P+vPrcwAKgFoclEXbjGgBWE8E12TAmpEQnR+g0BmZ+CnXKq+tqzFv2paTRvF6188xMRl+l87pzgGWr8EPJulSWfHBU29LswOkpWNh/0ZHkUtc+DU1CTUyU+P3fB1R8a5VFEtrztMs9HJrVPiyOWPRJnVcQKMkJ9srpfn3vc9O9AzbP5GAQvpMjHCby9DGq846FapH41iqLZKY5vNxD9UNFJqVh8g7ART1kTX+zlJmE8dC7VDj2mrD6qP5K/KfvHXHJA5Twseq4xrukJNN/eS7/8AXhHq5m4NIuEcpmUTcn1JpHZV4dnjRU4/NnNPgnZ1m4K/4f1IkUxjgmf0Chc0GddSshNHW8lyMElmtNhD1R5cOEHyKwsO0IIXgchSXaUDD/syZMvkCOifDrb4iJIwMZRkuoR8r4aeogx4aOXep1XUGI9YnABhQjsD/FgverfDikdbdcw8rPZV4dFd7JnzXbcaygqckjQxPNQtaBUKhscK46UNUsVbPrbyqdQ9004092YCiG5bUyalaSpfgctMsh3IxLVG+aTGj8pP9WaMBAtYM9Hg42NfQwUXDW3QAGRI4h9hDVH1dqPpZuZsuzDAWp9o5eySgS8nxLK9lTjXYWV+Bihk3GWRy9+0t8wAJDpgw+ecEpNfnB0HClmEXQGn6s6sBiRd+xVaQgJ31WxavQhUNxKPvGywC0gBDyc98ezqTTRLCcEMHjjwKR6z2MBhvobUL47xBoamAjpG5+DDkjuuC1Cnuh6yfiDCsAvB2V/5Ccq8J4eqOkY9YWOurz+XvIzJGwV3JHRMeUR0dbEPn9wZrxjvEnTWAgIN7l+sdoEMp4fWhWmxEz+hsAxQLjSuwtGKpTuuvfMFAtmfs4Otr+cDri8rCaNAxDnnW20DFvrSek4fkIQMuofzSTbq4LqVCWlTiVj4GlGOhpNUVKotRfjO2CnAc+OJj71s0DYKN03BvwSMk7cLvR2a/u+ON//ffxRZNB+jFOqGRkoVRGL8KskkikT5GhwObjSgBZclhUjftA02qWHxQY4xuD7pxlsU47r4BJX5+yiGKd6CYesNf7R04TQgsdH8WR8PJjzAhnnS21U9EEf9yECkorfUQh5Ngr6DTS7PNRWqgkrWfRnELOwdDNxbKH1OPxezbiGWFmNkh+NVwV1c/jJNdjLIzJYWpr7XrVoEaKFLXGK30o6gCvAIi7tZu1UNHuou1ktveJJ97FsETHkbnpze3+hGdCP4a43j4+Z5nelYoMc/NJqq6jpgc6lQJ5Oq8Jq23My7M2Jnh3y53mRUc4d+A8jrqpX+BQ+c3J7PZ2HL56PZQWoPjHsJrQBfXt/d1EuIiHAl/UNQVck4etFDrNJrADf+ukiuoWRjtQ4GGFWlIeJgWCVEM2qIddKmz5gj6yQBsnsw+PTgfdve0t27MtywlyLduuN7pYodIvkSMGkm5LBqYAsIFjN8eVECrJIVSsfoVIMA314U2ESHVhR3Z6Pysarqa10zmrwoRkJDo5+gQM23NU+XkNrl8GxQjBpFWHUnYj4c42Hz6Lq5mXUd9SrEmFmKvOD29CUIXdXw+F54r5dsFPnaYxM0iCTWySLqM0zB61NtHFC2qjh92L38ecn29BX5MzohwIt59FLKuk8aNwYikBLp/4FTI7LRi70fTb51yYXTp5ZQmBMeVVIeTUSbfIFtF183+SOJKShTLKR4/XtlTNEWexL20QrEdnrcATnIlcSyjGhxNhAArTtFuh10xgQ0qaVIjmR+dGgaaATpo7EKY+2hAu3vSPBVufR0UFnXrWsT4cDCIadqUsIISfvd8ONOHrSlbE0VHeQWEFtuY1tycj4WRxmQcaVJCMZpIqNV7escDs2C6QJZp3lOt0qtOe4VrTGsNRQWoWKQwSbbptWPv5Ec8kfCzHSnK231hL8ghi9iR30drQcbcniXCwGDVxxv+9Xb4kBiu8pmwk5c113oFFVouWXrwllpFRw572OgzgAONj0UmkfQ35TtsWqr4rfo5pTCJKoi67GN6Aw2OpfJxguzfQFSqYM6RRv2HZh6UNaUySDWUtVsrxtR6FUWBMr99xkIU6Ub5FxCTRc299apdlPAfVi3y7aBs1201NKHv1r85JIrwjLNzWrpCf8nWYJD6yHcMfH4xoV46wFYZ3v6YiTQtCGpeMxCrxmvKkLEIqLNKb+weEHROE5AsTjmpFJxWB/ZtaF7NtT87UDSxhM9gPtnucs5CFlzLJZCTcan44GHFKM8xY9PJ9zQKaJmyf86zkiByB8InyVCmJ0GSjtGDtyEHnHF9+oZ71vYKeB9vYLHBCdX7yIUB2Pr3DBYa3JTYyw18SRERos4NE0U09JJgOTt8Ghmo1AYJq2i3ZNyh+66myY5YcWRImHws0BbDsdKR8SYcK73F485fENqGCWhZihnF0WM/5vmkjX4Paxr8HX4Su2MwoEqdPKNpo8P6t5UBhFTgaUtf3ecnuVqqbO8pzWi7OhsPIL9IUWrtz5eCLk/i7cHqM6V9D6h8jcs14YpngR0rCLNlviH0EliGzDAGsv79iWzNMTcKU5P0fFy8KutD4az8prRB1kz5XemXVIT8HBXa1Y6fxFSGCmTmSVtaU9+EI1nqeXYvo0jCKZLkFxtnoYPwAOXkriOXVr+oVmVWLBq/eQqBZKoKOgf76OKpSQInNnvK4ZHAHh/UihMIvTK7ygFBqR8idjuPIYd+f+LWofPy00ROOUmR2Qx3zkydbbXl+Ndi66swx3Yx6Deg4atBUIUCb+1FGsdzkciCFbH6snOASCHUZnfFu9BI7ghvr4bWFU6rHqTc9NgZYlo+ef/HP5cTnNykKNvYiRqgUniwiR2/lLwYT/UqAVajIbXH+bOEg+wB9OjrjskKJYX3EhA2x+HQJbCfKrl5iwJxOw916gdvkAeGSTidM+G9qUTQV/vJld6QV2hK2mIrEPmKWzyjENDrdtrzts6unRrDyE2BBLXBd++3vLP7sUPHJ2h8nZTLMpqnvlkNIC/1CIWbsepdO+yYh3SoaUYmC038kLn6jtS1b9d1mozfIhDeoi/et84Px++gqQjM0u8dIa2r25u9dnn+cEU4/rBtGp0wqKkdIyiA0WVg0IRU6sCiqIBzrgl920C+XlXOY0IO/odgcy5GjwE95btbijIZhZobXtgbzThOBP/pRRKkiuBwnSuvButsO6qxEZl4OGC+FEIe8U5TShjCVh3ka4JuTQAU3guLAtU5NclF4IFht9HvdRrZMKjlW432ucMTpZOR6SYgQgyQ9/o8MNcrl6lHUCmy/HdgeOOclMiJlEQqfpTDZhFDRFmIcj1XbmtaJgeaNI6nGFdxlJAujbstHwk4HsvGz1uNRN2SFSzlI5N7LeHG2+6QpdUpgaVp7WMIWyxGWOofCL2wXHC2YFoUvhS5/pnk3zNNAGLAHNHdfhaQx5YCgyTYSWk4wu4+Mxqk4j0UDxSjL9R/RBycvNMOXOkVYN9r4hHYXKoGykkZsypZfJB7RdV14uaSQjrYtdZqtgeegNaH1hSPUO4wiLAP0g9O/VHlhC1ANaDX+VIrKCUxdWgpSZabQ95o5K6XCcdZL5F5zhAv1IaHdwSHSps+VBi3r+IamyF+IEAEHzs3QqYCcTsTuhd1P8NMrLksJCB49HQp5hVzhRarNflTgMhBhl3ZfTlopUB3L8AIDHI8niYBNdZYt0Bi5Pny8CCEWtmZ6k0URcLwOnyWx+S9GwVAcAMYDhQzWAPIedBIS5oVH/HBLy6dZGfXujEw9VsZbMm4ciAOItPH/Cn4mwqQ1GVtQQSywPV5sl5phViRIoQbTeOaoQX4aFDkiKFBI9k61BQcYjYnMSmFh0Z9sG3mu5ygKi713vgWcPM7oIjB+lGDWFTKZZqNXC4NS0i5d6FvoIU8LhmpYmn2YkFnpPMY/FQT4rUD9MBixhlAlwHW3jhJTVoKyMOv9IWsv9FkpHH7oublotl6/GeW3YFAWDf69WY+V+Yma3LfYwQv8Q5lsKgg/Nd2tOaFknP2pXQQwrr8VLz376dHLDwBKHgZvJ5zlNZHR4N0x7PNZaRfcTX2hAtfH4UAIUCpYNOL9TbXpdxZkmKmOdxb7+EQ/bhc4hgCez0mS6DipqcZ0QQoyHLgO0j8HR0HOlsDa5wwzeTFSTD/OFv44PhIu5Ph/E3n+lJAQ3q8Bz9W8+oJoRu7jL4zTzEo2DefVwpk4ey6F0dQeGkKmWHD99+TVAxlkRL7aeHRR+s7eDOYIf0Y2hXzhofBjdJOP9t7aUFMtywOd+WG3PE4zP9YmhBFLi5JNqtqZl7MyaTf5y0A33ERhi0ILeueDySbUEIQ2qu+PInkDCJk3GI4SMhLmurD2SBTtvUWaAz3bcYGxPX938ljb/HgpFxbpjZCEMKJtcNxdUAUcPUfWjDFqQvXzcA01gQM0w9ieJCVKUqSC77KM79eArBFDgXhBjb3ufEmTx0vnx7xlsunmCmWy6TxaZAvxt9P10V8Q+u1fuDAjkAOalmunT89KmJhUMbOk/xYhVxM+v2PYtb0wWrCEPOY9P2+h88Niv3DI2KKa1Kg/a0ic5zheLT7bC9qasDA1z9tenBUkJBv1a7YwrqxAHBLwdi+KF9am53mLubknmWwqWKUtk03hgpQ6DrPhjIGNlidkzuaz5FWqulaAmr63GCFT+jVo+KDdFqfQrp1GkSn1orBy5zCqwBYsyB/yczAr2bT4rc8rdVeBnb5PyN+q4zi+V6LUVt9NgewyCRyt/XcvkaqFml09OejP+VCeP5ybA8asPiPZNCdxfUnCYClIGF9SYCOrn/GHqm2gD0kJZ5a3oIyOu/bbnSTOQ9BdkjwaB+tzeu7yHDA8nFO0xDv2jGRTibuPdDM6ujFp5J89lNnhj4msVN0k3cW1BCaJU81QtVo/EVaYKb4fJ8/GsgDgfI5OlHn82bUYujDYrJvJJiD88k5UoqhYx4SkhUVEkgygClH6gvP+8FWZp5l60kHo7U4U5Q0jLOSTcSrElOYGIyWbIRLyWozZ9TQ0HHSKCoEdo35W8o4LaQ/NHg9rabA5PuPdUiUyWMdhYz/Jr1/Suyx5tqbZ0qFCjvpbNsvgy+tpZtdE0TAuSDYB4cgclb5GLqrPQShsTc2u7ZatlNDNJGL5F7PBow+SY8UzfN+wfsvezHgEljVRs+vaSPaiwAMCVjvloVKuQYPxTpFfcskMATLsv0u+LYazEOfX15lc/2C4gQelsWVbv3YxmVkBLuvaZtYmzkg2IafdmV9QeYV0RrdmFzIaEMDNM1qhI0kXx5G/+SBfvAGQC7301+7AxHjWmclrE2fXl/JzoyjZJFz70oVw5oxA6wUJd3EYZqT8pRKm8Osn48C2pDMNNJC2hMMok0Gzmh3z+lIA/i6uEcbdehFCmWwqXe4hXAZeZBR9flntoaKHrHzZL1MmYx/ljZOOg9Jxd0BZyLIwS2ZsUl4jjJz05Gadty6W1mk7026FIwzCOivfu0KEE/UbKlSKyNBAbSJsL1r+djrTfHPsubYtZAxMW11ZXZNRoUzjo3ec3AzGfK7zLq7VFzbnm2N12r+T84WNw6hK74qw7of2jTclqAm8vyZZtUYf2o0ODQsCp50+eZQJZ1ghb5SMvxuCele5YYNc1uoX91vQbvZEaJppOYg0WO/SihNQTgunbUPQOMlwtUeJb+5uIh+lT05GGZFl/mYWHdWQ4xpPsun3/qXforhnhjJysGHduDgSCL+QV2z6DpN3RpFObCVUONGVHiVkJv8Nrf/KOFVCWSvIR0dDqDVtuHFApl/Wl56ZGX1PtIv5wYYQLAYAULtcIbJTXCaafu1JOj+Cvit8CBU4moOERxg4TnCayCaEit2vgtVOOm8ysVye4W482N8Ejm+DjWcJvnF0vvQ9yYUX9a5hJaT8oNEU8KwvtmVxsmnRssyz37cQsmEQWJYlGygA+hAtO5YAy0ujlbDbHfD9IQpc2GwccLPAmfvSuyb/9aFQ2HJToYNXGw9sx7rU/MXJpvkk/FQzYuNUsLiLhCsAwNbDV8mtZv1Qggf03RAZjvtg45VQiWYxgH/6D4t7SKUFz/CotxF8mZ2FzkubM18ov1FdeHKHjXTLCtJ64+gkwex2kyWy8D+bCEGjudEbYcYKgxlXe0hn9AEzRZhDWI9HrzaEuQ2g7aNjVn2SlC7+IpLlOZu8ejXRk4iE1dodrxHBNIqP/lKBhtDGKx7LUQy4KLh/rQ94bi83IXTUazSBPI6dWw2il/bjrS9VIhhP/rCaEMj9mze95mov9/x+fDPT9Th53PCQd8yrDl5YPRGFnKVNzWg8TmJdn1P2fbUff/5MBaFoTEIIP/gFHPJ5DT7fhoQi50f2L//iYk2ysmH2b16ZqWBYZeZi0NHBm++9gReE3xyM5ucrPs/FsC4nfwALlZhtQul3u7tymhYu5WK2CcpjTPkEHhWVmE8TihOwymXegsRK5ttCF/NpLm65zBEKQ6PEjCF6Z+Ynk0XclM8YAsj6MmNIzedE/dADhK8TNq/Picq9hla01Kyvu0mMRjdmfWlLzmu7myTntU3PTQzAcjP37ibh+AjcmCp4p+Ym3paK5iY6KLhXsy+DG7MvtaZzr+aXOjfml97/GbT/D+YIq/doFvTp1fjs/ZznPWti+f2fyX7/5+rf/7sR7v/9FpLu9x0lkqx7f8/M/b8r6P7f93T/7+y6//euQcf+oe/Og4vvzlPBD33/obXw/kP13t9hqeb3kBZMsbj7VP4e0vt/l6yke34fsPr/4U7n+38v9/2/Wx1qXv3gVmUJ35DEOg/qXtHMxjkIkebCIVnuGptvTqZOhtC9MZdkPkIVaMBolC8G/q6kxw1DrHcGkhkIHdu2fDgekbDEtOrvSWJ9ZDSGvmXPaiObtYeCbA22krDCDL/vQZSESQsWVrAuRog0BF68nFexcgeIsJcvAJp1Bhcg1KClwQ6/02pRTl2BFyOVl0DoIEv1rY5k1Lt5FkPJoofAV615V23MQSipiYIOZ3f0LMrxKJ0AzW7KKYMwUBE4fBneTXeRhS8PAVILGnsqIFSDpg9flG8h+aZEkhfQby4AuBChKn3+1kiP7hqj0kgftcAcCVMeoWUhOI71W5e+rpYw1uOxjaYHwy2FEEFNgw0yc1DLdyE5n6YhFzZHEZZG6GjI9sHwgIclh2R+fTL1kB8MgW8jbdFlN6XOoSqrGGD9T16xleTrkUn4n3UIyl0EUw6hrbme+3R0V/jUHD0NPHeeMVodIdA0x9se3Y1NNEfbnqNpYJUIHSFvgnU4PMnyWza+l3okupzWl50M4TqCaOGFU1UQXlJwNGCMfbd6b3l9Lhu8K+gwXxlC13u9m5Xsxf8KJL45233tFUwRWxlCz1Hr+5x+J4cKh5Tv11Wt/RUROlAD6sNHcT5T9RvDo3oYP3qoAm3RnX23QigJwnqfK9/c9SdM4f06nBEyXClCx9XQxqTSHVErIT7ZQFrRcNtVIwTCltCQ04qiwlmcX4XEN0VRy5HjKUve93YbhJckJE4cKt/gOGKqhLGUMEvS0gg1UHs+iMpPC1iaGIsGz2tlPMEVI3yAfPBTL/v6lX5R1vsJ+OjBN0eooabmG41THhEs7/bTS8xVKk/ycfmNgRE/bRi+1rwxGuDrI7wgAGs7PNZpZOorDchRopsR1WO+U6suW1aK0HIQrB3FXF5MuEpbzhTPC3l8VIPIKecGfi2EqhV4wE1bu6PSg5XKIaTRaLeVusALbgnw1giRrQWBcK42+mdZJMdnY2ou7V3J6bJYDhiPsrP+hnCPgkArugbsmyK8JGGSv+4xLi80whVHg3wh+UE5KZCz3ut6Se9vMa0KIUIGgJutHpVjK6iyTGpVl1dHYE57rU0IDHTbvbukVSG0LMfxge2lD/cexUmVy2n/Qagn8aO9h6lnA99xSkRCy9HKuFReQ2KpMrpn1Vo7z0ZcaBCFKHKucR58kPc7CDbMSRi0F39EiLwaiOjif/noZKdVs2T0UrXEs5y7xqVXyPU8mG6u/fyKjUY87hKan0vdFFA/IxTA5MgfAZiSbsw5Vx7/vLaZQq+i+16KvgJCK7AcAAAK6rW1871nkUAQs1gqTGGpiO3SpSyipvgz8ZPo2d75uJY2xTEGjnVr1VBAXwGhnEMjrwOwoWG0bQtuNbbXnjzdeX4wOdklknZPJgfPd54+WdtubEHLbiPgQiRli3ujwHcF9H+I6RA9NDBeGwAAAABJRU5ErkJggg=="
                           />
                           <h5 class="font-semibold text-xl">Full-Stack WebDesigner 2021</h5>
                           <h5 class="font-semibold text-slate-500 mt-1">Publisher : BuildWithAngga</h5>
                        </div>
                     </div>
                  </div>
               </swiper-slide>
            </swiper>
         </div>

         <!-- Modal Content -->

         <!-- Certificate FullStack WebDesigner -->
         <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="certificateModal1" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
               <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                     <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body relative p-4">
                     <img src="../assets/certificate/fullstackwebdesigner.webp" alt="" />
                  </div>
               </div>
            </div>
         </div>

         <!-- Certificate Dasar Web -->
         <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="certificateModal2" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
               <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                     <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body relative p-4">
                     <img src="../assets/certificate/dasarweb.webp" alt="" />
                  </div>
               </div>
            </div>
         </div>

         <!-- Certificate Git -->
         <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="certificateModal3" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
               <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                     <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body relative p-4">
                     <img src="../assets/certificate/git.webp" alt="" />
                  </div>
               </div>
            </div>
         </div>

         <!-- Certificate Front End Pemula -->
         <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="certificateModal4" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-xl modal-dialog-centered relative w-auto pointer-events-none">
               <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                     <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div class="modal-body relative p-4">
                     <img src="../assets/certificate/frontendpemula.webp" alt="" />
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
                     <img
                        class="w-20 mx-auto p-4 border-2 border-slate-200 rounded-xl group-hover:-translate-y-2 group-hover:shadow-lg transition duration-300 ease-out"
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg"
                     />
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
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
   components: { Swiper, SwiperSlide },

   setup() {
      return {
         modules: [Pagination],
      };
   },

   data() {
      return {
         // Retourn the API Dates

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

               // 1440: {
               //    slidesPerView: 3,
               //    spaceBetween: 30
               // }
            },
         },
      };
   },
};
</script>
