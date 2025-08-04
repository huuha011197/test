<script setup lang="ts">
import { useI18n } from '#imports';

interface Service {
  name: string;
  description: string;
  thumbnails: string;
}

type ServiceList = Service[];

const { t, tm, rt } = useI18n();

const servicesData = tm('service.services') as ServiceList;
</script>

<template>
  <LayoutScrollSmooth>
    <section id="service" class="service-section">
      <!-- Header -->
      <div class="service-header">
        <div class="service-header__text-wrapper">
          <h2 class="service-header__headline section-title">
            {{ t('service.headline') }}
          </h2>
          <p class="service-header__subline">
            {{ t('service.subline') }}
          </p>
        </div>
      </div>

      <!-- Services List -->
      <div class="service-list">
        <div v-for="(item, index) in servicesData" :key="index" class="service-card"
          :class="{ 'service-card--offset': index % 2 !== 0 }"
          :style="{ backgroundImage: 'url(' + rt(item.thumbnails) + ')' }">
          <div class="service-card__content">
            <h4 class="service-card__title">{{ rt(item.name) }}</h4>
            <p class="service-card__description">{{ rt(item.description) }}</p>
          </div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>
</template>

<style scoped>
.service-section {
  @apply px-[16px] md:px-[80px];
}

.service-header {
  @apply flex flex-col items-center container;
}

.service-header__text-wrapper {
  @apply md:max-w-[860px];
}

.service-header__headline {
  @apply  font-playfair text-dark font-black text-center;
}

.service-header__subline {
  @apply font-normal text-center leading-[20px] text-sm mt-[14px];
}

.service-list {
  @apply grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-[7.5px] md:gap-6 mt-16;
}

.service-card {
  @apply relative bg-cover bg-center rounded-lg overflow-hidden flex flex-col justify-end p-4 min-h-[200px];
}

.service-card--offset {
  @apply -translate-y-[-71px] md:-translate-y-[-88px];
}

.service-card__content {
  @apply z-10;
}

.service-card__title {
  @apply text-2xl md:text-5xl text-white font-bold;
}

.service-card__description {
  @apply text-[12px] leading-[15px] md:leading-[140%] md:text-sm text-white font-normal md:mt-[15px];
}

.service-card::before {
  content: '';
  @apply absolute inset-0 bg-black bg-opacity-30;
}

.service-card__content {
  @apply relative;
}
</style>

<i18n lang="json">{
  "vi": {
    "service": {
      "headline": "Our Games",
      "subline": "As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.",
      "services": [
        {
          "name": "E-Space",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/1.png"
        },
        {
          "name": "Kingland",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/2.png"
        },
        {
          "name": "The Last Game",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/3.png"
        },
        {
          "name": "G-Dragon",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/4.png"
        },
        {
          "name": "Pirates",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/5.png"
        },
        {
          "name": "Witch Party",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/6.png"
        },
        {
          "name": "Rocky",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/7.png"
        },
        {
          "name": "Blue Fire",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/8.png"
        },
        {
          "name": "Trau Vang",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/9.png"
        },
        {
          "name": "Aborigines",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/10.png"
        },
        {
          "name": "Cinderella",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/11.png"
        },
        {
          "name": "Egypt Game",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/12.png"
        }
      ]
    }
  },
  "en": {
      "service": {
      "headline": "Trò chơi",
      "subline": "Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.",
      "services": [
        {
          "name": "E-Space",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/1.png"
        },
        {
          "name": "Kingland",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/2.png"
        },
        {
          "name": "The Last Game",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/3.png"
        },
        {
          "name": "G-Dragon",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/4.png"
        },
        {
          "name": "Pirates",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/5.png"
        },
        {
          "name": "Witch Party",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/6.png"
        },
        {
          "name": "Rocky",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/7.png"
        },
        {
          "name": "Blue Fire",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/8.png"
        },
        {
          "name": "Trau Vang",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/9.png"
        },
        {
          "name": "Aborigines",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/10.png"
        },
        {
          "name": "Cinderella",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/11.png"
        },
        {
          "name": "Egypt Game",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "thumbnails": "images/12.png"
        }
      ]
    }
  }
}</i18n>
