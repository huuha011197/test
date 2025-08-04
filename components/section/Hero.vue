<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '#imports';

const { t } = useI18n();

const targetDate: Date = new Date();
targetDate.setDate(targetDate.getDate() + 30);
targetDate.setHours(targetDate.getHours() + 18);
targetDate.setMinutes(targetDate.getMinutes() + 20);
targetDate.setSeconds(targetDate.getSeconds() + 11);

const days = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);

let timerInterval: number | null = null;

const calculateTimeLeft = (): void => {
 const now: Date = new Date();
 const difference: number = targetDate.getTime() - now.getTime();

 if (difference <= 0) {
  days.value = 0;
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  if (timerInterval !== null) {
   clearInterval(timerInterval);
  }
  return;
 }

 days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
 hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
 seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
};

onMounted(() => {
 calculateTimeLeft();
 timerInterval = setInterval(calculateTimeLeft, 1000) as unknown as number;
});

onUnmounted(() => {
 if (timerInterval !== null) {
  clearInterval(timerInterval);
 }
});
</script>

<template>
 <section class="countdown-section-container">
  <div class="countdown-background-wrapper">
   <div class="countdown-overlay"></div>

   <div class="countdown-content">
    <h1 class="countdown-title-mobile" v-html="t('countdown.title.mobile')"></h1>
    <h1 class="countdown-title-desktop">
     {{ t('countdown.title.desktop') }}
    </h1>

    <div class="countdown-timer-card">
     <div class="countdown-timer-grid">
      <div class="countdown-timer-item">
       <span class="countdown-timer-value">{{ days.toString().padStart(2, '0') }}</span>
       <span class="countdown-timer-label">{{ t('countdown.units.day') }}</span>
      </div>
      <span class="countdown-timer-separator">:</span>
      <div class="countdown-timer-item">
       <span class="countdown-timer-value">{{ hours.toString().padStart(2, '0') }}</span>
       <span class="countdown-timer-label">{{ t('countdown.units.hour') }}</span>
      </div>
      <span class="countdown-timer-separator">:</span>
      <div class="countdown-timer-item">
       <span class="countdown-timer-value">{{ minutes.toString().padStart(2, '0') }}</span>
       <span class="countdown-timer-label">{{ t('countdown.units.minute') }}</span>
      </div>
      <span class="countdown-timer-separator">:</span>
      <div class="countdown-timer-item">
       <span class="countdown-timer-value">{{ seconds.toString().padStart(2, '0') }}</span>
       <span class="countdown-timer-label">{{ t('countdown.units.second') }}</span>
      </div>
     </div>
    </div>

    <div class="countdown-cta-text-wrapper">
     <p class="countdown-cta-text">
      {{ t('countdown.cta_text') }}
     </p>

     <div class="countdown-email-input-wrapper">
      <input
       type="text"
       :placeholder="t('countdown.email_placeholder')"
       class="countdown-email-input"
      >
      <span class="countdown-email-icon-wrapper">
       <VsxIcon iconName="ArrowRight" :size="24" color="#000000" type="outline" />
      </span>
     </div>
    </div>
   </div>
  </div>
  <img src="/images/ong tien 1.png" width="938px" height="938px" :alt="t('countdown.wizard_alt')"
   class="countdown-wizard-image">
 </section>
</template>

<style scoped>
.countdown-section-container {
 @apply relative;
}

.countdown-background-wrapper {
 @apply w-full min-h-[988px] bg-starry-galaxy bg-cover bg-center overflow-hidden rounded-b-[50%_30px] md:rounded-b-[50%_200px] flex flex-col justify-center items-center;
}

.countdown-overlay {
 @apply absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10;
}

.countdown-content {
 @apply relative flex flex-col items-center z-20 text-center text-white py-16 max-w-[738px] mx-auto space-y-6;
}

.countdown-title-mobile {
 @apply block sm:hidden text-[40px] md:text-[80px] font-black leading-tight font-playfair;
}

.countdown-title-desktop {
 @apply hidden sm:block text-[40px] md:text-[80px] font-black leading-tight font-playfair;
}

.countdown-timer-card {
 @apply relative z-20 bg-white rounded-3xl p-6 md:p-10 shadow-lg max-w-2xl w-11/12 mt-[21px];
}

.countdown-timer-grid {
 @apply flex justify-around items-center text-center text-gray-800 font-bold tracking-tight;
}

.countdown-timer-item {
 @apply flex flex-col items-center;
}

.countdown-timer-value {
 @apply text-4xl md:text-6xl font-playfair;
}

.countdown-timer-label {
 @apply text-sm md:text-base font-bold mt-2;
}

.countdown-timer-separator {
 @apply text-5xl md:text-6xl leading-none px-2;
}

.countdown-cta-text-wrapper {
 @apply px-[16px] pt-0 md:px-[98px] md:pt-[91px];
}

.countdown-cta-text {
 @apply text-lg md:text-xl font-normal;
}

.countdown-email-input-wrapper {
 @apply relative mt-[32px];
}

.countdown-email-input {
 @apply block w-full bg-white rounded-[8px] border-[2px] py-[16px] pl-[13px] pr-[40px] text-[#545454] border-gray-300 focus:border-blue-400 focus:outline-none placeholder:text-[#545454] sm:text-sm sm:leading-6;
}

.countdown-email-icon-wrapper {
 @apply absolute inset-y-0 right-[10px] flex items-center pl-3;
}

.countdown-wizard-image {
 @apply absolute bottom-[-250px] left-[20%] md:top-10 md:left-0 object-contain;
}
</style>

<i18n lang="json">
{
  "vi": {
    "countdown": {
      "title": {
        "mobile": "Trò chơi sắp ra mắt",
        "desktop": "Trò chơi sắp ra mắt"
      },
      "units": {
        "day": "Ngày",
        "hour": "Giờ",
        "minute": "Phút",
        "second": "Giây"
      },
      "cta_text": "Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.",
      "email_placeholder": "Địa chỉ email của bạn",
      "wizard_alt": "Phù thủy"
    }
  },
  "en": {
    "countdown": {
      "title": {
        "mobile": "We're Getting Ready",
        "desktop": "We're Getting Ready"
      },
      "units": {
        "day": "Days",
        "hour": "Hours",
        "minute": "Minutes",
        "second": "Second"
      },
      "cta_text": "We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.",
      "email_placeholder": "Your email address",
      "wizard_alt": "Wizard Character"
    }
  }
}
</i18n>