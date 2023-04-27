<script setup>
const isMenuOpen = useIsMenuOpen()
</script>

<template>
  <div class="flex w-full justify-between bg-transparent fixed">
    <button @click="isMenuOpen = !isMenuOpen">
      <Icon v-if="isMenuOpen" size="30" name="ic:round-close" />
      <Icon v-else size="30" name="icon-park-outline:hamburger-button" />

    </button>
    <a class="text-4xl" href="/">ZARINA</a>
    <menu></menu>
  </div>
</template>
