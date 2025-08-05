<template>
    <div class="mobile-menu-container">
        <div v-if="isOpen" @click="onClose" class="mobile-menu-overlay"
            :class="{ 'opacity-100': isOpen, 'opacity-0': !isOpen }"></div>

        <div class="mobile-menu-panel" :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
            <div class="mobile-menu-header">
                <div class="mobile-menu-lang-dropdown-wrapper">
                    <DropdownLang :is-mobile="true" />
                </div>
                <button @click="onClose" class="mobile-menu-close-button">
                    <svg class="mobile-menu-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>

            <nav class="mobile-menu-nav">
                <NuxtLink v-for="link in nav" :to="rt(link.url)" class="item">
                    {{ rt(link.label) }}</NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isOpen: Boolean,
    onClose: Function
})
interface Nav {
    url: string;
    label: string;
}

type NavLink = Nav[];
const { tm, rt } = useI18n();
const nav = tm("navLink") as NavLink;

</script>

<style scoped>
.mobile-menu-container {
    @apply relative;
}

.mobile-menu-overlay {
    @apply fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out;
}

.mobile-menu-panel {
    @apply fixed top-0 right-0 w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out;
}

.mobile-menu-header {
    @apply flex justify-between items-center p-4 border-b border-gray-200;
}

.mobile-menu-lang-dropdown-wrapper {
    @apply relative inline-block text-left;
}

.mobile-menu-close-button {
    @apply text-gray-500 hover:text-gray-700 focus:outline-none;
}

.mobile-menu-close-icon {
    @apply w-8 h-8;
}

.mobile-menu-nav {
    @apply mt-[40px] mx-[16px] flex flex-col items-center;
}

.item {
    @apply block px-4 py-3 text-black hover:bg-gray-100 hover:text-gray-900 uppercase tracking-wide text-sm font-bold w-full text-center;

    border-bottom: 1px solid theme('colors.gray.200');
}

.item:not(:last-child) {
    @apply border-b border-gray-200;

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