<template>
  <div
    class="modal-backdrop"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <button @click="closeModal" class="modal-close-btn">
        <i class="bi bi-x"></i>
      </button>
      <div v-if="isLoading" class="loading-container">
        <div class="spinner"></div>
        <p>資料載入中，請稍後...</p>
      </div>
      <div v-else class="activity-post">
        <h1>{{ post.date }}({{ post.weekday }}) {{ post.subtitle }} {{ post.title }}</h1>
        <p>活動籌辦｜TaipeiCameraClub - {{ post.author }}</p>
        <hr />
        <div v-html="post.content"></div>
        <img :src="post.image" alt="活動主圖" class="post-image"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const isLoading = ref(true); // 一開始載入網頁的時候默認是載入中
const post = ref({
  subtitle: '',
  title: '',
  date: '',
  weekday: '',
  author: '',
  content: '',
  image: ''
});

onMounted(async () => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1v79jdc-uDdTTY6utmpRfF1AFxi4yK1OiHj0ZpeDqGNk/values/TCC_web_activities_data!A1:H51?key=AIzaSyDaYWQfUwStmkZp48GElCLiHLPhbsTarAY`;
    const { data } = await axios.get(url);
  
    const id = route.params.id;
    const matched = data.values.find(row => row[0] === id);
    if (matched) {
      post.value = {
        subtitle: matched[1],
        title: matched[2],
        date: matched[3],
        weekday: matched[4],
        author: matched[5], 
        content: matched[6], // html格式
        image: matched[7]
      }
    }
  } catch (error) {
    console.error("資料載入失敗：", error);
  } finally {
    isLoading.value = false;
  }
});

const closeModal = () => {
  router.push("/activity");
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fafafa;
  color: #0a0a0a;
  padding: 0;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  overflow: hidden; /* 保證圓角遮住捲動內容 */
  position: relative; /* 讓close button定位在右上 */
}

.modal-close-btn {
  cursor: pointer;
  padding: 6px 6px;
  font-size: 36px;
  background-color: rgba(250, 250, 250, 0);
  color: #3a3a3a;
  border: none;
  position: absolute;
  top: 12px;
  right: 18px;
}

.modal-close-btn:hover {
  color: #0a0a0a;
}

/* 新增loading spinner樣式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 300px;
}

.spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 5px solid #cccccc;
  border-top: 5px solid #3b82f6;
  animation: spin 1s linear infinite;
  margin-top: 12px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.activity-post {
  padding: 24px;
  max-height: 90vh;
  overflow-y: auto;
}

.activity-post hr {
  margin-bottom: 30px;
}

.post-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-top: 30px;
}
</style>
