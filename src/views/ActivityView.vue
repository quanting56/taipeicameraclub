<template>
  <div class="activitypage">
    <section class="first-activitypage"></section>
    <section class="second-activitypage">
      <h1>活動</h1>

      <div class="activity-cards">
        <article
          class="activity-card"
          v-for="item in posts"
          :key="item.id"
        >
          <router-link :to="`/activity/${item.id}`"><img :src="item.image" alt="活動主圖" class="activity-image" /></router-link>
          <div class="activity-content">
            <h2 class="activity-title">{{ item.date }}({{ item.weekday }}) {{ item.subtitle }} {{ item.title }}</h2>
            <p class="activity-text">
              {{ item.preview }}
              <router-link :to="`/activity/${item.id}`">閱讀更多</router-link>
            </p>
          </div>
        </article>
      </div>
    </section>
    <router-view v-if="$route.params.id"></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const posts = ref([]);

onMounted(async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/1v79jdc-uDdTTY6utmpRfF1AFxi4yK1OiHj0ZpeDqGNk/values/TCC_web_activities_data!A1:H51?key=AIzaSyDaYWQfUwStmkZp48GElCLiHLPhbsTarAY`;
  const { data } = await axios.get(url);

  posts.value = data.values.slice(1).map(row => {
    const content = row[6] || ""; // 保證content至少是空字串，而不是undefined（根本不存在這格）
    const textContent = content.replace(/<[^>]*>/g, ''); // 移除html標籤
    const preview = textContent.slice(0, 100) + (textContent.length > 60 ? '...' : '');

    return {
      id: row[0],
      subtitle: row[1],
      title: row[2],
      date: row[3],
      weekday: row[4],
      author: row[5],
      content, // 此為html格式
      image: row[7],
      preview
    };
  });
});
</script>

<style scoped>
.first-activitypage {
  height: 70vh;
  background-image: url("/src/assets/ActivityBannerImg.avif");
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
  flex-direction: column-reverse;
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

.activity-card:hover {
  background-color: #f0f0f0;
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
