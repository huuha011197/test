<script setup lang="ts">

interface Nav {
  url: string;
  label: string;
}

type NavLink = Nav[];

import { useI18n } from 'vue-i18n';

const { tm, rt } = useI18n();
const nav = tm("navLink") as NavLink;

function navActive() {
  isActive.value = !isActive.value
}
const isActive = ref(false)

import { debounce } from '~/utils/debounce';
let debouncedHandleScroll: (() => void) | null = null;

const scrolledDown = ref<boolean>(false);
const scrollThresholdY: number = isActive ? 200 : 700;
const handleScroll = (): void => {
  scrolledDown.value = window.scrollY > scrollThresholdY;
};
onMounted(() => {
  debouncedHandleScroll = debounce(handleScroll, 100);
  window.addEventListener('scroll', debouncedHandleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  if (debouncedHandleScroll) {
    window.removeEventListener('scroll', debouncedHandleScroll);
  }
});

</script>

<template>
  <header class="header" :class="{
    'header--scrolled': scrolledDown,
    'header--not-scrolled': !scrolledDown
  }">

    <div class="header__content">
      <img class="header__logo" src="/images/White_logo.png" alt="">
      <div :class="isActive ? 'header__nav--hidden' : 'header__nav--visible'" class="header__nav">
        <NuxtLink class="nav-link group " v-for="link in nav" :to="rt(link.url)">
          <div class="nav-link__inner">
            <p class="nav-link__text-top">
              {{ rt(link.label) }}
            </p>
            <p class="nav-link__text-bottom">
              {{ rt(link.label) }}
            </p>
          </div>
        </NuxtLink>
        <DropdownLang />
      </div>
      <button @click="navActive" class="menu-toggle group">
        <img class="menu-toggle__icon" :src="isActive ? '/svg/ic-close.svg' : '/svg/ic-hamburger.svg'">
      </button>
    </div>
    <MobileMenu v-if="isActive" :isOpen="isActive" :onClose="navActive" />

  </header>
</template>

<style scoped>
.header {
  @apply min-h-[50px] md:min-h-[162px] px-[16px] md:px-[60px] mx-auto fixed inset-x-0 pt-[auto] z-50;
}

.header--scrolled {
  @apply bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 shadow-lg;
}

.header--not-scrolled {
  @apply text-gray-800;
}

.header__content {
  @apply flex items-center justify-between;
}

.header__logo {
  @apply w-[68px] md:w-[163px];
}

.header__nav {
  @apply absolute min-h-[162px] inset-x-4 lg:inset-0 lg:relative overflow-hidden flex flex-col lg:flex-row rounded-3xl gap-[42.5px] px-7 py-8 lg:py-[40px] transition-all duration-300;
}

.header__nav--hidden {
  @apply hidden;
}

.header__nav--visible {
  @apply opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100;
}


.nav-link {
  @apply text-white text-xl lg:text-base;
}

.nav-link__inner {
  @apply relative overflow-hidden;
}

.nav-link__text-top {
  @apply group-hover:-translate-y-7;
}

.nav-link__text-bottom {
  @apply absolute top-7 left-0 group-hover:top-0;
}

.menu-toggle {
  @apply lg:hidden py-2 rounded-full;
}

.menu-toggle__icon {
  @apply group-focus:scale-100 group-hover:scale-110 transition-all;
}
</style>


<i18n lang="json">{
  "vi": {
    "navLink": [
      {
        "label": "VỀ CHÚNG TÔI",
        "url": "#about"
      },
      {
        "label": "TRÒ CHƠI",
        "url": "#service"
      },
      {
        "label": "ĐỐI TÁC",
        "url": "#work"
      },
      {
        "label": "LIÊN HỆ",
        "url": "#footer"
      }
    ]
  },
  "en": {
    "navLink": [
      {
        "label": "ABOUT US",
        "url": "#about"
      },
      {
        "label": "GAMES",
        "url": "#service"
      },
      {
        "label": "PARTNERS",
        "url": "#work"
      },
      {
        "label": "CONTACT US",
        "url": "#footer"
      }
    ]
  }
}</i18n>
