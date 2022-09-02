<template>
  <transition name="modal-animation">
    <div class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50" v-show="modalActive">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" @click="close" class="flex items-start justify-center min-h-screen pt-24 text-center">
          <!-- modal content -->
          <slot/>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, {emit}) {
    const close = () => {
      emit('close')
    }

    return {close}
  }
}
</script>

<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity .3s cubic-bezier(.52, .02, .19, 1.02);
  
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity:0;

}


.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all .3s cubic-bezier(.52, .02, .19, 1.02) .15s;
}

.modal-animation-inner-leave-active {
  transition: all .3s cubic-bezier(.52, .02, .19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(.8)
}

.modal-animation-inner-leave-to {
  transform: scale(.8)
}


</style>