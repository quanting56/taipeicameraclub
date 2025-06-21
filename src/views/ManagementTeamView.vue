<template>
  <div class="managementteampage">
    <section class="first-managementteampage"></section>
    <section class="second-managementteampage">
      <h1>營運團隊</h1>

      <div class="team-member-grid">
        <div class="team-member-card" v-for="member in teamMembers" :key="member.name">
          <img :src="member.image" :alt="member.name" class="avatar" />
          <h2>{{ member.name }}</h2>
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
    </section>
  </div>
</template>

<script setup>
import teamMembers from "../data/ManagementTeamMenber.json";
</script>

<style scoped>
.first-managementteampage {
  height: 70vh;
  background-image: url("/src/assets/ManagementTeamBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 960px;
}

.team-member-card {
  background-color: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 20px;
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
}

.team-member-card h2 {
  margin: 2px 0 0;
  font-size: 20px;
  color: #0a0a0a;
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
</style>
