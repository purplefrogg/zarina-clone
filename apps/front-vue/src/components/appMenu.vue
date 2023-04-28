<script lang="ts" setup>
const isMenuOpen = useIsMenuOpen()
type Category = { title: string, slug: string, childCat?: Category[], }
const catalog: Category[] = [
  {
    title: "новинки", slug: "new", childCat: [
      { title: "брюки", slug: "new/trousers" },
      { title: "рубашки", slug: "new/shirts" }
    ],

  }, {
    title: "одежда", slug: "clothes", childCat: [
      { title: "брюки", slug: "clothes/trousers" },
      { title: "рубашки", slug: "clothes/shirts" }
    ],

  }
]
let sex = ref<'woman' | 'man'>('woman')
</script>


<template>
  <div :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    class="pt-10 text-white duration-500 w-full h-full fixed bg-modal-background backdrop-blur-sm bg-opacity-50">
    <div class="justify-center flex  divide-x-2 divide-white">
      <button @click="sex = 'man'" class="px-2">Man</button>
      <button @click="sex = 'woman'" class="px-2">Woman</button>
    </div>
    <div class="flex flex-col gap-2">
      <Accordion :header="item.title" v-for="item in catalog">

        <NuxtLink @click="isMenuOpen = false" :to="`/${sex}/${item.slug}`">Смотреть всё</NuxtLink>
        <ul v-for="category in item.childCat">
          <NuxtLink @click="isMenuOpen = false" :to="`/${sex}/${category.slug}`">{{ category.title }}</NuxtLink>
        </ul>

      </Accordion>

    </div>
  </div>
</template>
