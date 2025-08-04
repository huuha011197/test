<script setup lang="ts">
defineProps<{
  label: string;
  to: string;
  variant?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="animated-link"
    :class="variant ? 'animated-link--dark' : 'animated-link--primary'"
  >
    <div
      class="animated-link__hover-effect"
    ></div>
    <div class="animated-link__text-wrapper">
      <p
        class="animated-link__text-top"
      >
        {{ label }}
      </p>
      <p
        class="animated-link__text-bottom"
      >
        {{ label }}
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.animated-link {
  @apply group relative overflow-hidden inline-flex;
}

.animated-link--primary {
}

.animated-link--dark {
}

.animated-link__hover-effect {
  @apply w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500;
}

.animated-link__text-wrapper {
  @apply relative overflow-hidden;
}

.animated-link__text-top {
  @apply group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)];
}

.animated-link__text-bottom {
  @apply absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)];
}
</style>