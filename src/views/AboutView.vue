<template>
  <div class="aboutpage">
    <section class="first-aboutpage"></section>
    <section class="second-aboutpage">
      <h1>社團介紹</h1>

      <article class="article-block reverse" data-aos="fade-right">
        <div class="article-text">
          <h2>創立理念</h2>
          <p>Taipei Camera Club，簡寫作 TCC，秉持「Enjoy Photo, From Taipei」的理念，從臺北出發，致力於推廣人人都能輕鬆參與、自由享受的攝影文化。</p>
          <p>本社團成立於 2020 年 5 月 5 日，由一位來自日本、曾參與臺大攝影社的同好發起。我們的願景是打造臺北最有趣、最具包容力的攝影交流平臺，讓攝影新手與攝影資深玩家都能自在參與、彼此交流、一起成長。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg1" alt="創立理念圖片" />
        </div>
      </article>

      <article class="article-block" data-aos="fade-left">
        <div class="article-text">
          <h2>營運團隊與參與對象</h2>
          <p>TCC 目前由一群熱愛攝影的大學生所組成，成員主要來自臺北市區。我們歡迎所有對攝影有興趣的大學生、社會新鮮人及新手朋友加入，一起參與活動、交換想法、共同進步。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg2" alt="目標客群圖片" />
        </div>
      </article>

      <article class="article-block reverse" data-aos="fade-right">
        <div class="article-text">
          <h2>我們與其他攝影社團的不同</h2>
          <p>臺北現有的攝影活動多由專業講師開設，雖然內容專業扎實，對初學者或非職業攝影師而言，卻常因技術門檻或高額費用（常見為 1,000 元以上）而難以參與，尤其對學生族群來說更是困難。</p>
          <p>TCC 期望打破這樣的限制，以「臺北最好玩的攝影社團」為核心目標，打造一個輕鬆親切又具學習性的攝影交流環境。我們的活動設計以平易近人的費用、友善的氛圍為特色，讓參加者在拍攝、互動中都能獲得樂趣與成就感。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg3" alt="特色與區別圖片" />
        </div>
      </article>

      <article class="article-block" data-aos="fade-left">
        <div class="article-text">
          <h2>我們在做什麼？</h2>
          <p>TCC 目前以「實體外拍活動」及「Instagram / Facebook 分享攝影作品」為主要方向，未來也將持續開發更多有趣的攝影活動與企劃，敬請期待！</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg4" alt="外拍合照" />
        </div>
      </article>

      <article class="article-block reverse" data-aos="fade-right">
        <div class="article-text">
          <h2>外拍活動</h2>
          <p>為了讓平日忙碌的學生與上班族也能輕鬆參與，我們主要在週末安排外拍活動，地點遍及臺北地區的熱門與季節性景點。此外，也會在寒暑假期間的平日加辦活動！</p>
          <p>我們希望營造出如「長大後的校外教學」般的氣氛，讓每次外拍都能成為輕鬆愉快的攝影交流與創作時光。TCC 活動規模多以 15 至 30 人為主，適合喜歡拍照也想認識攝影同好的你。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg5" alt="外拍合照2" />
        </div>
      </article>

      <article class="article-block" data-aos="fade-left">
        <div class="article-text">
          <h2>Instagram & Facebook 上的照片分享</h2>
          <p>許多攝影平臺僅聚焦於「景點介紹」或「高人氣作品」，對初學者或剛開始經營 IG 攝影帳號的攝影師來說參與空間有限，甚至可能因按讚數與追蹤數壓力而喪失分享動力。</p>
          <p>Taipei Camera Club 想做出不同——我們希望透過 Featuring 分享企劃，讓更多用心拍出好照片、但尚未被看見的創作者，有機會在 Instagram 平臺上被欣賞、被鼓勵，建立一個支持與成長並重的攝影社群。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg6" alt="社群平臺分享" />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutpageImg1 from "../assets/AboutImg1.avif";
import aboutpageImg2 from "../assets/AboutImg2.avif";
import aboutpageImg3 from "../assets/AboutImg3.avif";
import aboutpageImg4 from "../assets/AboutImg4.avif";
import aboutpageImg5 from "../assets/AboutImg5.avif";
import aboutpageImg6 from "../assets/AboutImg6.avif";

onMounted(() => {
  AOS.init();
})
</script>

<style scoped>
.first-aboutpage {
  height: 70vh;
  background-image: url("/src/assets/AboutBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.second-aboutpage {
  padding: 60px 20px;
}

.second-aboutpage h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
}

/* 文章區塊 */
.article-block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 40px;
  flex-direction: row;
}

.article-block.reverse {
  flex-direction: row-reverse;
}

/* 文章區塊的文字部分 */
.article-text {
  max-width: 600px;
  text-align: left;
  font-size: 18px;
}

.article-text h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

/* 文章區塊的圖片部分 */
.article-image img {
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* 響應是設計for手機 */
@media (max-width: 768px) {
  .article-block,
  .article-block.reverse {
    flex-direction: column;
  }

  .article-image img {
    max-width: 100%;
  }
}
</style>
