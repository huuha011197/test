<template>
  <LayoutScrollSmooth>
    <div class="image-gallery-section" id="work">
      <div class="image-gallery-wrapper">
        <div class="image-gallery-content">
          <h2 class="image-gallery-title section-title">{{ label }}</h2>
          <div class="relative">
              <div class="absolute flex justify-between top-[0] w-full h-[100px] z-10">
              <button @click="prev" class="">
                <img class="max-w-[40px]" src="/images/arrow-square-left.png" alt="Previous">
              </button>
              <button @click="next" class="">
                <img class="max-w-[40px]" src="/images/arrow-square-right.png" alt="Next">
              </button>
            </div>
            <Carousel ref="carouselRef" class="image-gallery-carousel" :items-to-show="1" breakpoint-mode="carousel" wrap-around="true"
              :breakpoints="{
                400: {
                  itemsToShow: 3,
                  snapAlign: 'start',
                },
                700: {
                  itemsToShow: 3,
                  snapAlign: 'start',
                },
                1000: {
                  itemsToShow: 5,
                  snapAlign: 'start',
                }
              }">
              <Slide v-for="image in images" :key="image.id">
                <img :src="image.url" alt="image" />
              </Slide>
            </Carousel>
          
          </div>
        </div>
      </div>
    </div>
  </LayoutScrollSmooth>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

const carouselRef = ref(null) // Explicitly initialize with null

const next = () => {
  console.log("-");
  
  if (carouselRef.value) { // Add a check to ensure the ref is available
    carouselRef.value.next()
  } else {
    console.warn('Carousel ref not available yet for next()');
  }
}
const prev = () => {
  if (carouselRef.value) { // Add a check to ensure the ref is available
    carouselRef.value.prev()
  } else {
    console.warn('Carousel ref not available yet for prev()');
  }
}


const { t } = useI18n();

const label = t('label');

const images = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  url: `images/Rectangle ${index + 1}.png`,
}))
</script>

<style scoped>
.image-gallery-wrapper {
  @apply mt-[40px] md:mt-[40px] items-center flex-col rounded-3xl bg-[#F6F6F6];
}

.image-gallery-content {
  @apply flex flex-col items-center relative;
}

.image-gallery-title {
  @apply text-center mt-[40px] mb-[40px] md:mt-[109px] md:mb-[69px];
}

.image-gallery-carousel {
  @apply max-w-6xl items-center;
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