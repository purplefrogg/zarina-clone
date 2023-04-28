<script setup>
const route = useRoute()
if (route.params.slug[0] !== ('woman' || 'man')) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}


</script>
<template>
    asd
</template>