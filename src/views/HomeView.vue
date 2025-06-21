<template>
  <div class="homepage">
    <section class="first-homepage">
      <div class="first-homepage-text">
        <h1>Enjoy Photo, From Taipei</h1>
        <h2>在台北，享受攝影</h2>
        <h3><small>with ~ </small>Taipei Camera Club</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com/taipeicameraclub" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/taipeicameraclub" target="_blank"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </section>
    <section class="second-homepage">
      <div class="section-block reverse">
        <div class="text-side">
          <h2>社團介紹</h2>
          <h3>About Us</h3>
          <button>更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="AboutImg" alt="about image" />
        </div>
      </div>

      <div class="section-block">
        <div class="text-side">
          <h2>活動</h2>
          <h3>Activities</h3>
          <button>更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="ActivityImg" alt="activity image" />
        </div>
      </div>

      <div class="section-block reverse">
        <div class="text-side">
          <h2>社團幹部</h2>
          <h3>Management Team</h3>
          <button>更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="ManagementTeamImg" alt="management team image" />
        </div>
      </div>

      <div class="section-block">
        <div class="text-side">
          <h2>加入TCC</h2>
          <h3>Join Us!</h3>
          <button>更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="JoinUsImg" alt="join us image" />
        </div>
      </div>

      <div class="section-block reverse">
        <div class="text-side">
          <h2>社團Q&A</h2>
          <h3>Questions</h3>
          <button>更多資訊</button>
        </div>
        <div class="image-side">
          <img :src="SomeQuestionsImg" alt="questions image" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AboutImg from "../assets/AboutBannerImg.avif";
import ActivityImg from "../assets/ActivityBannerImg.avif";
import ManagementTeamImg from "../assets/ManagementTeamBannerImg.avif";
import JoinUsImg from "../assets/JoinUsBannerImg.avif";
import SomeQuestionsImg from "../assets/SomeQuestionsBannerImg.avif";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 1.5s ease;
  position: relative;
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

.first-homepage-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
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
