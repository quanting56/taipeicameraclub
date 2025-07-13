<template>
  <div class="homepage">
    <section class="first-homepage">
      <div class="first-homepage-text" :style="{ opacity: textOpacity }">
        <h1>Enjoy Photo, From Taipei</h1>
        <h2>在臺北，享受攝影</h2>
        <h3><small>with ~ </small>Taipei Camera Club</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com/taipeicameraclub" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/taipeicameraclub" target="_blank"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </section>

    <section class="second-homepage">
      <div
        class="section-block"
        :class="{ reverse: index % 2 === 0 }"
        v-for="(block, index) in blocks"
        :key="index"
        data-aos="fade-up"
      >
        <div class="text-side">
          <h2>{{ block.title }}</h2>
          <h3>{{ block.subtitle }}</h3>
          <button @click="goTo(block.path)">更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="block.img" :alt="block.alt" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutImg from "../assets/AboutBannerImg.avif";
import ActivityImg from "../assets/ActivityBannerImg.avif";
import ManagementTeamImg from "../assets/ManagementTeamBannerImg.avif";
import JoinUsImg from "../assets/JoinUsBannerImg.avif";
import SomeQuestionsImg from "../assets/SomeQuestionsBannerImg.avif";

const blocks = [
  {
    title: "社團介紹",
    subtitle: "About Us",
    img: AboutImg,
    alt: "about image",
    path: "/about"
  },
  {
    title: "活動",
    subtitle: "Activities",
    img: ActivityImg,
    alt: "activity image",
    path: "/activity"
  },
  {
    title: "社團幹部",
    subtitle: "Management Team",
    img: ManagementTeamImg,
    alt: "management team image",
    path: "/management_team"
  },
  {
    title: "加入TCC",
    subtitle: "Join Us!",
    img: JoinUsImg,
    alt: "join us image",
    path: "/join_us"
  },
  {
    title: "社團Q&A",
    subtitle: "Questions",
    img: SomeQuestionsImg,
    alt: "questions image",
    path: "/some_questions"
  }
];

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};

// .first-homepage-text文字捲動效果
const textOpacity = ref(1);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const fadeStart = window.innerHeight * 1.4;
  const fadeEnd = window.innerHeight * 1.5;
  // 用Math.min()和Math.max()確保 0 <= progress <= 1
  const progress = Math.min(1, Math.max(0, ( scrollY - fadeStart ) / ( fadeEnd - fadeStart )));
  textOpacity.value = 1 - progress;
}

onMounted(() => {
  AOS.init();
  window.addEventListener("scroll", handleScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.first-homepage {
  height: 200vh;
  background-image: url("/src/assets/HomeBannerImg.avif");
  background-position: right top;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fafafa;
  text-align: center;
  position: relative;
  
}

.first-homepage-text {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  animation: fadeIn 1s ease;
  transition: opacity 0.5s ease; /* 讓 opacity 更平滑 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.social-icons {
  justify-content: center;
  display: flex;
  font-size: 28px;
  gap: 12px;
}

.social-icons a {
  color: #fafafa;
  text-decoration: none;
}

.social-icons a:hover {
  transition: color 0.15s ease;
  color: #dadada;
}

.second-homepage {
  background-color: #f2f2f2;
  padding: 60px 20px;
}

.section-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  background-color: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-block.reverse {
  flex-direction: row-reverse;
}

.image-side,
.text-side {
  flex: 1;
  padding: 40px;
}

.image-side img {
  max-width: 600px;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.text-side {
  text-align: center;
  color: #0a0a0a;
}

.text-side button {
  padding: 10px 20px;
  background-color: #4159e1;
  color: #fafafa;
  border: none;
  cursor: pointer;
}

.text-side button:hover {
  background-color: #2e4bb8;
}

/* 響應式調整，顯示於手機 */
@media (max-width: 768px) {
  .section-block,
  .section-block.reverse {
    flex-direction: column !important;
  }

  .image-side,
  .text-side {
    padding: 20px;
  }

  .image-side img {
    max-width: 100%;
    height: auto;
  }

  .text-side {
    text-align: center;
  }
}
</style>
