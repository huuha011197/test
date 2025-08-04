<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import type { LocaleObject } from '@nuxtjs/i18n';

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false, // Provide a default value
  },
});

// No need to destructure here and then reassign props values if they are used directly
// const { isMobile } = props; // This line is redundant if props.isMobile is used directly

const { locale, locales, setLocale } = useI18n();

const availableLocales = locales.value as LocaleObject[];

const selectedLanguage = ref<LocaleObject>(
  availableLocales.find(lang => lang.code === locale.value) || availableLocales[0]
);

const isOpen = ref<boolean>(false);

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (lang: LocaleObject): void => {
  selectedLanguage.value = lang;
  setLocale(lang.code);
  isOpen.value = false;
};

const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent): void => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const getFlagUrl = (code: string): string => {
  return `/locales/flag-${code}.png`;
};

watch(locale, (newLocale) => {
  const matchingLang = availableLocales.find(lang => lang.code === newLocale);
  if (matchingLang) {
    selectedLanguage.value = matchingLang;
  }
});
</script>

<template>
  <div class="language-dropdown" ref="dropdownRef">
    <button type="button" class="language-dropdown__button" id="menu-button" aria-expanded="true" aria-haspopup="true"
      @click="toggleDropdown">
      <img :src="getFlagUrl(selectedLanguage.code)" :alt="selectedLanguage.name + ' flag'"
        class="language-dropdown__flag-icon" />
      <svg class="language-dropdown__chevron-icon" :class="props.isMobile ? 'text-black' : 'text-white'"
        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.08z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-if="isOpen" :class="props.isMobile ? 'language-dropdown__menu--left' : 'language-dropdown__menu--right'"
        class="language-dropdown__menu" role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
        tabindex="-1">
        <div class="language-dropdown__menu-content" role="none">
          <button v-for="lang in availableLocales" :key="lang.code" @click="selectLanguage(lang)" :class="[
            'language-dropdown__menu-item',
            { 'language-dropdown__menu-item--selected': selectedLanguage.code === lang.code }
          ]" role="menuitem" tabindex="-1">
            <svg v-if="selectedLanguage.code === lang.code" class="language-dropdown__check-icon" fill="currentColor"
              viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            <div v-else class="language-dropdown__check-placeholder"></div>
            <img :src="getFlagUrl(lang.code)" :alt="lang.name + ' flag'" class="language-dropdown__menu-item-flag" />
            {{ lang.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.language-dropdown {
  @apply relative inline-block text-left;
}

.language-dropdown__button {
  @apply inline-flex justify-center items-center rounded-full bg-opacity-10 px-4 text-sm font-medium shadow-sm hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50;
}

.language-dropdown__flag-icon {
  @apply w-6 h-6 mr-2 shadow-sm;
}

.language-dropdown__chevron-icon {
  @apply -mr-1 h-5 w-5;
}

.language-dropdown__menu {
  @apply absolute z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none;
}

.language-dropdown__menu--left {
  @apply left-0;
}

.language-dropdown__menu--right {
  @apply right-0;
}

.language-dropdown__menu-content {
  @apply py-1;
}

.language-dropdown__menu-item {
  @apply flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900;
}

.language-dropdown__menu-item--selected {
  @apply bg-gray-100 text-gray-900;
}

.language-dropdown__check-icon {
  @apply w-5 h-5 mr-2 text-green-500;
}

.language-dropdown__check-placeholder {
  @apply w-5 h-5 mr-2;
}

.language-dropdown__menu-item-flag {
  @apply w-6 h-6 rounded-full mr-2 shadow-sm;
}
</style>