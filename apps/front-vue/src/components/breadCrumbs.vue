<script setup>
const props = defineProps({
    breadCrumbs: [{ text: String, to: String }]
})

</script>
<template>
    <div v-for="breadCrumb in breadCrumbs"></div>
</template>