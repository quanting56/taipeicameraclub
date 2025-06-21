<template>
  <div class="activitypage">
    <section class="first-activitypage"></section>
    <section class="second-activitypage">
      <h1>活動</h1>

      <div class="activity-cards">
        <article class="activity-card">
          <img :src="Activity01" alt="9月份活動預告圖" class="activity-image" />
          <div class="activity-content">
            <h2 class="activity-title">Taipei Camera Club 9月份活動行程，我們回來了！</h2>
            <p class="activity-text">
              [Taipei Camera Club 9月份活動行程，我們回來了！] ・ 經過漫長的疫情生活，暑假也結束準備返校，大家久等了！我們TCC也迫不期待跟大家見面舉辦攝影活動！我們...
              <a href="#">查看更多</a>
            </p>
          </div>
        </article>

        <article class="activity-card">
          <img :src="Activity02" alt="9/4 40th活動圖" class="activity-image" />
          <div class="activity-content">
            <h2 class="activity-title">9/4 (Sat.) 40th 台北後站 街區探索</h2>
            <p class="activity-text">
              睽違許久，TCC即將再次舉辦實體外拍！本週的外拍將來到台北車站後站地區，途經捷運中山站、長安西路與太原路一帶，在都會區找到不一樣的風景！ 仔細走在街道上，...
              <a href="#">查看更多</a>
            </p>
          </div>
        </article>

        <article class="activity-card">
          <img :src="Activity03" alt="8/14 38th活動圖" class="activity-image" />
          <div class="activity-content">
            <h2 class="activity-title">8/14 (Sat) TCC38th 「Lightroom修圖有什麼魅力？修圖操作入門」</h2>
            <p class="activity-text">
              買了相機，出去拍照捕捉美景和回憶，但有時可能會覺得拍出來的照片還差一些味道。修圖是可以讓照片更傑出的方式之一，例如在IG上傳照片前會有提供調整照片的亮暗，顏色，濾鏡等來調整。 除了在IG之外，很多攝影愛...
              <a href="#">查看更多</a>
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import Activity01 from "../assets/ActivityImg01.avif";
import Activity02 from "../assets/ActivityImg02.avif";
import Activity03 from "../assets/ActivityImg03.avif";
</script>

<style scoped>
.first-activitypage {
  height: 70vh;
  background-image: url("/src/assets/ActivityBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
}

.second-activitypage {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-activitypage h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
}

.activity-cards {
  background-color: #fafafa;
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.activity-card {
  display: flex;
  flex-direction: row;
  gap: 30px;
  background-color: #fafafa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.activity-image {
  width: 320px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.activity-image:hover {
  transition: scale 0.3s ease;
  scale: 1.02;
}

.activity-content {
  color: #0a0a0a;
}

.activity-title {
  font-size: 22px;
  margin-bottom: 12px;
}

.activity-text {
  font-size: 16px;
  color: #4a4a4a;
}

.activity-text a {
  color: #007acc;
  text-decoration: none;
  font-weight: 600;
}

.activity-text a:hover {
  color: #008bee;
}

/* 響應式設計for手機 */
@media (max-width: 768px) {
  .activity-cards {
    gap: 36px;
  }

  .activity-card {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .activity-image {
    max-width: 360px;
    width: 100%;
  }
}
</style>
