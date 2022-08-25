<template>
  <div>
    <input type="checkbox" class="hidden peer" id="active" />
    <label for="active" class="menu-btn z-40"
      ><svg class="" width="33" height="25" viewBox="0 0 33 25" xmlns="http://www.w3.org/2000/svg">
        <rect class="fill-[#202020]" x="0.571411" width="32" height="3.55556" rx="1.77778" />
        <rect class="fill-[#202020]" x="5.90466" y="10.6667" width="26.6667" height="3.55556" rx="1.77778" />
        <rect class="fill-[#202020]" x="16.5713" y="21.3333" width="16" height="3.55556" rx="1.77778" />
      </svg>
    </label>
    <div class="wrapper z-30">
      <ul>
        <li><router-link to="/" class="text-2xl md:text-4xl" href="#">Home</router-link></li>
        <li><router-link to="/404" class="text-2xl md:text-4xl" href="#">About me</router-link></li>
        <li><router-link to="/404" class="text-2xl md:text-4xl" href="#">Resume</router-link></li>
        <li><router-link to="/404" class="text-2xl md:text-4xl" href="#">Skills</router-link></li>
        <li><router-link to="/404" class="text-2xl md:text-4xl" href="#">Projects</router-link></li>
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
  </div>
</template>
