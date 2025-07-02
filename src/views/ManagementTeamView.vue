<template>
  <div class="managementteampage">
    <section class="first-managementteampage"></section>
    <section class="second-managementteampage">
      <h1>營運團隊</h1>

      <div class="team-member-grid">
        <div
          class="team-member-card"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <div class="avatar-wrapper" @click="openModal(member)">
            <img
              :src="member.image"
              :alt="member.name"
              class="avatar" />
          </div>
          <h2 @click="openModal(member)">{{ member.name }}</h2>
          <p>{{ member.role }}</p>
          <div class="social-links">
            <a v-if="member.instagram" :href="member.instagram" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
            <a v-if="member.blog" :href="member.blog" target="_blank">
              <i class="bi bi-window"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content">
          <button @click="closeModal" class="modal-close-btn">
            <i class="bi bi-x"></i>
          </button>
          <div class="selected-member-card">
            <img
              :src="selectedMember.image"
              :alt="selectedMember.name"
              class="selected-member-image" />
            <div class="selected-member-text-info">
              <h2>{{ selectedMember.name }}</h2>
              <p v-for="(desc, index) in selectedMember.description" :key="index">
                {{ desc }}
              </p>
              <div class="modal-social-links">
                <a v-if="selectedMember.instagram" :href="selectedMember.instagram" target="_blank">
                  <i class="bi bi-instagram"></i>
                </a>
                <a v-if="selectedMember.blog" :href="selectedMember.blog" target="_blank">
                  <i class="bi bi-window"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import teamMembers from "../data/ManagementTeamMember.json";

const showModal = ref(false);
const selectedMember = ref({});

const openModal = (member) => {
  selectedMember.value = member;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.first-managementteampage {
  height: 70vh;
  background-image: url("/src/assets/ManagementTeamBannerImg.avif");
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

.second-managementteampage {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-managementteampage h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
}

.team-member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 960px;
}

.team-member-card {
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 12px;
  cursor: pointer;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1);
}

.team-member-card h2 {
  margin: 2px 0 0;
  font-size: 20px;
  color: #0a0a0a;
  cursor: pointer;
}

.team-member-card h2:hover {
  color: #3a3a3a;
}

.team-member-card p {
  margin: 8px 0 12px;
  font-size: 16px;
  color: #c0392b;
}

.social-links {
  font-size: 20px;
}

.social-links a {
  color: #222222;
  margin: 0 6px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #007acc;
}

.modal-backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fafafa;
  border-radius: 12px;
  padding: 0;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* 保證圓角遮住捲動內容 */
  color: #0a0a0a; /* 讓子元素的字有顏色 */
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
  right: 12px;
}

.modal-close-btn:hover {
  color: #0a0a0a;
}

.selected-member-card {
  padding: 24px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  gap: 24px;
}

@media (max-width: 768px) {
  .selected-member-card {
    flex-direction: column;
    gap: 6px;
  }
}

.selected-member-image {
  width: 200px;
  height: 200px;
}

/* 跟上面的（card之中）的social-link類似，只是為了排版而調整margin的部分 */
.modal-social-links {
  font-size: 20px;
}

.modal-social-links a {
  color: #222222;
  margin-right: 12px;
  transition: color 0.3s ease;
}

.modal-social-links a:hover {
  color: #007acc;
}
</style>
