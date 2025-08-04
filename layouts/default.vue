<script setup lang='ts'>
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis'
import ScrollTrigger from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)


})
</script>

<template>
  <div class="relative">
    <LayoutNavbar />
  </div>
  <main class="overflow-hidden relative">
    <slot />
  </main>
  <LayoutFooter />
</template>
