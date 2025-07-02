<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }" class="logo">
      <img :src="logo" alt="TCC Logo" class="logo-img" />
      <span class="title">Taipei Camera Club</span>
    </router-link>

    <ul :class="{ open: menuOpen }" class="nav-links">
      <li>
        <router-link :to="{ name: 'about' }" class="navbar-item">社團介紹</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'activity' }" class="navbar-item">活動 Blog</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'management_team' }" class="navbar-item">營運團隊</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'join_us' }" class="navbar-item">加入 TCC</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'some_questions' }" class="navbar-item">社團 Q&A</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'tcc_terms' }" class="navbar-item">TCC 條款</router-link>
      </li>
    </ul>

    <div class="hamburger" @click="menuOpen = !menuOpen">
      <div :class="{ 'bar': true, 'open': menuOpen }"></div>
      <div :class="{ 'bar': true, 'open': menuOpen }"></div>
      <div :class="{ 'bar': true, 'open': menuOpen }"></div>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/NavBarImg.avif";
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style scoped>
.navbar {
  /* width: 100vw; */
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  animation: fadeSlideDown 0.6s ease-in-out;
}

@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  height: 40px;
  border-radius: 4px;
}

.title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333333;
  transition: color 0.3s;
}

.logo:hover .title {
  color: #0077cc;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
  list-style: none;
  transition: all 0.4s ease;
}

.navbar-item {
  color: #444444;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.navbar-item:hover {
  color: #0077cc;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #333333;
  transition: transform 0.3s ease;
}

.hamburger .bar + .bar {
  margin-top: 5px;
}

.bar.open {
  transform: rotate(90deg);
}

/* --- Mobile styles --- */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    max-width: 260px;
    padding: 1rem 1.5rem;
    border-left: 1px solid #eeeeee;
    box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.05);
    display: none;
    opacity: 0;
    transform: translateX(20px);
  }

  .nav-links.open {
    display: flex;
    animation: slideIn 0.3s forwards;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .hamburger {
    display: block;
  }
}
</style>
