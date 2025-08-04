<script setup lang="ts">

interface Section {
  icon: string;
  title: string;
  des: string
}

type SectionData = Section[];

import { useI18n } from 'vue-i18n';

const { t, tm, rt } = useI18n();
const section = tm("about.section") as SectionData;
</script>

<template>
  <LayoutScrollSmooth>
    <section id="about" class="about-section">
      <div class="about-grid">
        <div class="about-content">
          <h2 class="section-title about-title">
            {{ t("about.label") }}
          </h2>

          <p class="paragraph about-description">
            {{ t("about.introduce") }}
          </p>
          <div class="about-stats-wrapper">
            <div class="about-stat-item">
              <span class="about-stat-number"><span>600</span><span
                  class="about-stat-unit">M</span><span>+</span></span>
              <p class="about-stat-label">{{ t("about.user") }}</p>
            </div>
            <div class="about-stat-item">
              <span class="about-stat-number"><span>135</span><span>+</span></span>
              <p class="about-stat-label">{{ t("about.game") }}</p>
            </div>
          </div>
        </div>

        <div class="about-info-section">
          <div v-for="data in section" :key="rt(data.title)" class="about-info-item">
            <div class="about-info-icon-wrapper">
              <div class="about-info-icon-bg">
                <VsxIcon :iconName="rt(data.icon)" :size="24" color="#000000" type="bold" />
              </div>
            </div>
            <div class="about-info-text">
              <h2 class="about-info-title">
                {{ rt(data.title) }}
              </h2>
              <p class="about-info-description">
                {{ rt(data.des) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-image-cta">
        <img class="about-illustrator-img" src='/images/Illustrator.png' alt="Illustrator Image" />
        <img class="about-pin-map-img" src='/images/Pin-map.png' alt="Pin Map Image" />
      </div>
    </section>
  </LayoutScrollSmooth>
</template>

<style scoped>
/* Main Section & Grid */
.about-section {
  @apply mt-[220px]  md:mt-[0px] container;
}

.about-grid {
  @apply grid items-center grid-cols-1 lg:grid-cols-2 gap-8;
}

.about-content {}

.about-title {
  @apply font-black;
}

.about-description {
  @apply mt-4 font-normal;
}

.about-stats-wrapper {
  @apply flex md:flex-col mt-[40px] md:mt-[60px] justify-evenly gap-[20px];
}

.about-stat-item {}

.about-stat-number {
  @apply font-bold text-[44px] md:text-[80px] text-[#079BEE];
}

.about-stat-unit {
  @apply text-[40px];
}

.about-stat-label {
  @apply font-bold text-2xl;
}

/* Image / Section Data Column */
.about-info-section {
  @apply bg-[#EEEEEE]/40 py-[40px] md:py-[113px] px-[16px] md:px-[75px] flex flex-col items-center gap-16 rounded-3xl;
}

.about-info-item {
  @apply flex items-center;
}

.about-info-icon-wrapper {}

.about-info-icon-bg {
  @apply bg-[#E3FCFF] w-[50px] h-[50px] mr-[24px] flex items-center justify-center rounded-full;
}

.about-info-text {}

.about-info-title {
  @apply text-2xl lg:text-2xl font-black;
}

.about-info-description {
  @apply mt-[2px] font-normal;
}

.about-image-cta {
  @apply mt-[68px] flex flex-col items-center;
}

.about-illustrator-img {
  @apply w-[533px] animate-pulse;
}

.about-pin-map-img {
  @apply -translate-y-1/4;
}
</style>

<i18n lang="json">{
  "vi": {
    "about": {
      "label": "Về chúng tôi",
      "introduce": "Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.",
      "user": "Người chơi",
      "game": "Trờ chơi",
      "section": [
        {
          "icon": "CalendarTick",
          "title": "Truy Cập 24/7",
          "des": "Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm. "
        },
        {
          "icon": "PenTool2",
          "title": "Thiết Kế",
          "des": "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo. "
        },
        {
          "icon": "People",
          "title": "Đội Ngũ",
          "des": "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử."
        }
      ]
    }
  },
  "en": {
    "about": {
      "label": "About Us",
      "introduce": "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.",
      "user": "Users",
      "game": "Games",
      "section": [
        {
          "icon": "CalendarTick",
          "title": "24 - Hour",
          "des": "24/7 access ensures operators' businesses runs smoothly all year long."
        },
        {
          "icon": "PenTool2",
          "title": "Design",
          "des": "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay."
        },
        {
          "icon": "People",
          "title": "Team",
          "des": "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. "
        }
      ]
    }
  }
}</i18n>