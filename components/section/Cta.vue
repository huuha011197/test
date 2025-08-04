<template>
  <LayoutScrollSmooth>
    <section class="image-gallery-section" id="work">
      <div class="image-gallery-wrapper">
        <div class="image-gallery-content">
          <h2 class="image-gallery-title section-title">{{ label }}</h2>
          <Carousel v-bind="config" class="image-gallery-carousel">
            <Slide v-for="image in images" :key="image.id">
              <img :src="image.url" alt="image" />
            </Slide>
            <template #addons>
              <CarouselNavigation>
                <template #prev>
                  <img src="/images/arrow-square-left.png" alt="Previous">
                </template>
                <template #next>
                  <img src="/images/arrow-square-right.png" alt="Next">
                </template>
              </CarouselNavigation>
            </template>
          </Carousel>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>

<script setup>
import { Navigation as CarouselNavigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const { t } = useI18n();

const label = t('label');

const images = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  url: `images/Rectangle ${index + 1}.png`,
}))

const config = {
  height: 200,
  itemsToShow: 5,
  autoplay: 1000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}
</script>

<style scoped>
.image-gallery-section {
}

.image-gallery-wrapper {
  @apply items-center flex-col rounded-3xl bg-[#F6F6F6];
}

.image-gallery-content {
  @apply flex flex-col items-center;
}

.image-gallery-title {

  @apply text-center mt-[109px] mb-[69px];
}

.image-gallery-carousel {
  @apply max-w-6xl;
}
</style>

<i18n lang="json">{
  "vi": {
    "label": "Đối tác"
  },
  "en": {
    "label": "Our Partners"
  }
}</i18n>