<template>
    <SectionHero />
    <div class="relative">
    <SectionAbout/>
   </div>
    <SectionService /> 
    <SectionCta />
</template>

<script setup lang="ts">
if (import.meta.server) {
  useSeoMeta({
    robots: 'index, follow',
    description: 'Static description that does not need reactivity',
    ogImage: 'https://example.com/image.png',
  })
}

const dynamicTitle = ref('4 Tech')
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
})
</script>