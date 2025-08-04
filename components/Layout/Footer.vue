<template>
  <footer id="footer" class="main-footer">
    <div class="main-footer__content">
      <div class="main-footer__logo-section">
        <div class="main-footer__logo-wrapper">
          <img width="163px" src="/images/White_logo.png" :alt="t('footer.logo_alt')">
          <div class="main-footer__social-links">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>{{ t('footer.social.twitter_alt') }}</title>
              <path
                d="M36.2508 9.93361C35.0555 10.4492 33.7547 10.8203 32.4149 10.9649C33.8059 10.1384 34.8477 8.83283 35.3446 7.29298C34.0392 8.0695 32.6092 8.61401 31.118 8.90236C30.4947 8.23606 29.7409 7.70525 28.9036 7.34301C28.0662 6.98078 27.1632 6.79488 26.2508 6.79689C22.5594 6.79689 19.5907 9.78908 19.5907 13.461C19.5907 13.9766 19.6532 14.4922 19.7547 14.9883C14.2274 14.6992 9.29769 12.0586 6.02035 8.01564C5.42318 9.03562 5.11025 10.197 5.1141 11.3789C5.1141 13.6914 6.28988 15.7305 8.08285 16.9297C7.02623 16.8881 5.99435 16.5977 5.07113 16.082V16.1641C5.07113 19.4024 7.3602 22.086 10.411 22.7031C9.83816 22.8519 9.24889 22.928 8.65707 22.9297C8.22348 22.9297 7.81332 22.8867 7.39926 22.8281C8.24301 25.4688 10.7 27.3867 13.6258 27.4492C11.3368 29.2422 8.46957 30.2969 5.35629 30.2969C4.7977 30.2969 4.28207 30.2774 3.74691 30.2149C6.70004 32.1094 10.2039 33.2031 13.9774 33.2031C26.2274 33.2031 32.9305 23.0547 32.9305 14.2461C32.9305 13.957 32.9305 13.668 32.911 13.3789C34.2078 12.4297 35.3446 11.2539 36.2508 9.93361Z"
                fill="white" />
            </svg>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>{{ t('footer.social.facebook_alt') }}</title>
              <path
                d="M34.3759 4.375H5.62585C4.93444 4.375 4.37585 4.93359 4.37585 5.625V34.375C4.37585 35.0664 4.93444 35.625 5.62585 35.625H34.3759C35.0673 35.625 35.6259 35.0664 35.6259 34.375V5.625C35.6259 4.93359 35.0673 4.375 34.3759 4.375ZM30.7665 13.4961H28.2704C26.3133 13.4961 25.9344 14.4258 25.9344 15.793V18.8047H30.6063L29.9969 23.5195H25.9344V35.625H21.0633V23.5234H16.9891V18.8047H21.0633V15.3281C21.0633 11.293 23.5282 9.09375 27.1298 9.09375C28.8563 9.09375 30.3368 9.22266 30.7704 9.28125V13.4961H30.7665Z"
                fill="white" />
            </svg>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>{{ t('footer.social.linkedin_alt') }}</title>
              <path
                d="M34.377 4.375H5.627C4.93559 4.375 4.377 4.93359 4.377 5.625V34.375C4.377 35.0664 4.93559 35.625 5.627 35.625H34.377C35.0684 35.625 35.627 35.0664 35.627 34.375V5.625C35.627 4.93359 35.0684 4.375 34.377 4.375ZM13.6465 31.0039H9.00981V16.0898H13.6465V31.0039ZM11.3301 14.0508C10.7986 14.0508 10.279 13.8932 9.83703 13.5979C9.39507 13.3025 9.05061 12.8828 8.8472 12.3917C8.64379 11.9007 8.59057 11.3603 8.69426 10.839C8.79796 10.3177 9.05392 9.83879 9.42977 9.46293C9.80563 9.08708 10.2845 8.83112 10.8058 8.72742C11.3271 8.62372 11.8675 8.67694 12.3586 8.88035C12.8497 9.08377 13.2694 9.42823 13.5647 9.87019C13.86 10.3121 14.0176 10.8317 14.0176 11.3633C14.0137 12.8477 12.8106 14.0508 11.3301 14.0508ZM31.0059 31.0039H26.3731V23.75C26.3731 22.0195 26.3418 19.7969 23.9629 19.7969C21.5528 19.7969 21.1817 21.6797 21.1817 23.625V31.0039H16.5528V16.0898H20.9981V18.1289H21.0606C21.6778 16.957 23.1895 15.7188 25.4473 15.7188C30.1426 15.7188 31.0059 18.8086 31.0059 22.8242V31.0039Z"
                fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div class="main-footer__address-section">
        <div class="main-footer__address-wrapper">
          <p class="main-footer__heading">{{ t('footer.address.heading') }}</p>
          <div class="main-footer__address-line">
            <div>
              <VsxIcon iconName="Location" :size="40" color="#FFFFFF" type="bold" />
            </div>
            <div>
              <p>{{ t('footer.address.line1') }}</p>
              <p class="main-footer__second-address">{{ t('footer.address.line2') }}</p>
            </div>
          </div>
          <div class="main-footer__phone-line">
            <VsxIcon iconName="Mobile" :size="40" color="#FFFFFF" type="bold" />
            <p>{{ t('footer.phone_numbers') }}</p>
          </div>
        </div>
      </div>
      <div class="main-footer__newsletter-section">
        <p class="main-footer__heading">{{ t('footer.newsletter.heading') }}</p>
        <p class="main-footer__newsletter-text">{{ t('footer.newsletter.text') }}</p>
        <div class="main-footer__email-input-wrapper">
          <input type="text" :placeholder="t('footer.newsletter.placeholder')"
            class="main-footer__email-input">
          <span class="main-footer__email-icon-wrapper">
            <VsxIcon iconName="ArrowRight" :size="24" color="#FFFFFF" type="outline" />
          </span>
        </div>
      </div>
    </div>
    <div class="main-footer__bottom-bar">
      <p>{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<style scoped>
.main-footer {
  @apply flex flex-col text-white;
}

.main-footer__content {
  @apply flex flex-col gap-[35px] md:flex-row pt-[42px] pb-[50px] px-[16px] lg:py-[100px] lg:px-[230px] md:py-[39px] md:px-[20px] bg-footer-texture bg-cover bg-center md:gap-[20px];
}

.main-footer__logo-section {
  @apply basis-1/2;
}

.main-footer__logo-wrapper {
  @apply flex flex-col items-center md:items-start;
}

.main-footer__social-links {
  @apply flex mt-[40px] gap-[12px];
}

.main-footer__address-section {
}

.main-footer__address-wrapper {
  @apply flex flex-col gap-[20px];
}

.main-footer__heading {
  @apply font-bold text-2xl;
}

.main-footer__address-line {
  @apply flex gap-[4px];
}

.main-footer__second-address {
  @apply mt-[12px];
}

.main-footer__phone-line {
  @apply flex items-center gap-[4px];
}

.main-footer__newsletter-section {
  /* No direct Tailwind classes on this wrapper */
}

.main-footer__newsletter-text {
  @apply mb-[12px];
}

.main-footer__email-input-wrapper {
  @apply relative;
}

.main-footer__email-input {
  @apply block w-full bg-transparent rounded-[8px] border py-1.5 pl-[13px] pr-3 text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}

.main-footer__email-icon-wrapper {
  @apply absolute inset-y-0 right-[8px] flex items-center pl-3;
}

.main-footer__bottom-bar {
  @apply p-[30px] text-center font-normal bg-black;
}
</style>

<i18n lang="json">
{
  "vi": {
    "footer": {
      "logo_alt": "Logo công ty",
      "social": {
        "twitter_alt": "Biểu tượng Twitter",
        "facebook_alt": "Biểu tượng Facebook",
        "linkedin_alt": "Biểu tượng LinkedIn"
      },
      "address": {
        "heading": "Địa chỉ",
        "line1": "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ",
        "line2": "Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Hội An, Quảng Nam, Việt Nam"
      },
      "phone_numbers": "(+1) 555-0108-000 hoặc (+236) 555-0108",
      "newsletter": {
        "heading": "Theo dõi",
        "text": "Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi",
        "placeholder": "Email của bạn..."
      },
      "copyright": "2017 Bản quyền. Chính sách."
    }
  },
  "en": {
    "footer": {
      "logo_alt": "Company Logo",
      "social": {
        "twitter_alt": "Twitter icon",
        "facebook_alt": "Facebook icon",
        "linkedin_alt": "LinkedIn icon"
      },
      "address": {
        "heading": "Address",
        "line1": "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, USA",
        "line2": "No. 20 Phan Dang Luu Street, Hai Chau District, Da Nang City, Hoi An, Quang Nam, Vietnam"
      },
      "phone_numbers": "(+1) 555-0108-000 or (+236) 555-0108",
      "newsletter": {
        "heading": "Follow Us",
        "text": "Subscribe to our newsletter and be the first to know about our updates",
        "placeholder": "Enter your email"
      },
      "copyright": "2017 Copyright. Policy."
    }
  }
}
</i18n>