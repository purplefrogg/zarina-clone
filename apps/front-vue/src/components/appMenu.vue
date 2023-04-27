<script setup>
const menuOpen = useIsMenuOpen()

</script>

<template>
  <div :class="menuOpen ? 'translate-x-0' : '-translate-x-full'"
    class="pt-10 duration-500 w-full h-full fixed bg-modal-background backdrop-blur-sm bg-opacity-50">

  </div>
</template>
