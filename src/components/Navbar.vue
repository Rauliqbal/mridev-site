<template>
   <nav>
      <input type="checkbox" class="hidden peer" id="active" />
      <label for="active" class="menu-btn z-40"><i class="text-white bx bx-grid-alt text-3xl"></i> </label>
      <div class="wrapper z-30">
         <ul>
            <li><router-link @click="reloadPage" to="/" class="text-2xl md:text-4xl" href="#">Home</router-link></li>
            <li><router-link @click="reloadPage" to="/about" class="text-2xl md:text-4xl" href="#">About me</router-link></li>
            <li><router-link @click="reloadPage" to="/project" class="text-2xl md:text-4xl" href="#">Projects</router-link></li>
            <li><router-link @click="reloadPage" to="/product" class="text-2xl md:text-4xl" href="#">Product</router-link></li>
            <li><router-link @click="reloadPage" to="/contact" class="text-2xl md:text-4xl" href="#">Contact</router-link></li>
         </ul>
         <div class="flex gap-4 md:gap-8 absolute bottom-20 left-1/2 -translate-x-1/2">
            <a href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center text-sm md:text-lg gap-2 text-white hover:text-slate-700 transition duration-200">
               <i class="bx bxl-dribbble"></i>
               <span>Dribble</span>
            </a>
            <a href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank" class="flex items-center text-sm md:text-lg gap-2 text-white hover:text-slate-700 transition duration-200">
               <i class="bx bxl-linkedin"></i>
               <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/raul.iqbl_/" target="_blank" class="flex items-center text-sm md:text-lg gap-2 text-white hover:text-slate-700 transition duration-200">
               <i class="bx bxl-instagram"></i>
               <span>Instagram</span>
            </a>
         </div>
      </div>

      <header class="flex items-center gap-14 top-5 left-[1.4rem] absolute">
         <router-link to="/" @click="reloadPage"><img src="../assets/images/logo.png" alt="im Rauliqbal a front end developer" /></router-link>
         <div class="md:flex gap-8 hidden">
            <a href="https://dribbble.com/Rauliqbal" target="_blank" class="flex items-center gap-2 text-slate-500 hover:text-primary transition duration-200">
               <i class="bx bxl-dribbble text-lg"></i> <span class="text-lg">Dribble</span>
            </a>
            <a href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank" class="flex items-center gap-2 text-slate-500 hover:text-primary transition duration-200">
               <i class="bx bxl-linkedin text-lg"></i>
               <span class="text-lg">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/raul.iqbl_/" target="_blank" class="flex items-center gap-2 text-slate-500 hover:text-primary transition duration-200">
               <i class="bx bxl-instagram text-lg"></i> <span class="text-lg">Instagram</span>
            </a>
         </div>
      </header>
   </nav>
</template>

<script>
export default {
   methods: {
      reloadPage() {
         window.setTimeout(function () {
            location.reload();
         }, 100);
      },
   },
};
</script>
