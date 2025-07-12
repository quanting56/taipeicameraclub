<template>
  <div class="qapage">
    <section class="first-qapage"></section>
    <section class="second-qapage">
      <h1>社團Q&A</h1>

      <article
        class="qa-block"
        v-for="(block, index) in blocks"
        :key="index"
      >
        <h2
          @click="toggle(index)"
          class="qa-question"
          :class="{ open: showDetails[index] }"
        >
          <span class="arrow" :class="{ open: showDetails[index] }">▶</span>
          {{ block.question }}
        </h2>
        <transition name="collapse">
          <div v-if="showDetails[index]" class="qa-answer">
            <div
              v-for="(answer, idx) in block.answers"
              :key="idx"
            >
              <p v-if="!answer.details">{{ answer }}</p>
              <div v-else>
                <p>{{ answer.text || '' }}</p>
                <ul>
                  <li
                    v-for="(detail, idx) in answer.details"
                    :key="idx">{{ detail }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="block.buttons">
              <button
                v-for="(btn, idx) in block.buttons"
                :key="idx"
                @click="goTo(btn.link)">{{ btn.label }}
              </button>
            </div>
          </div>
        </transition>
      </article>

      <!-- Modal -->
      <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content">
          <button @click="closeModal" class="modal-close-btn">
            <i class="bi bi-x"></i>
          </button>
          <div class="modal-content-tcc-terms">
            <TCCTerms></TCCTerms>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TCCTerms from "../components/TCCTerms.vue";

import { ref } from "vue";

// 控制Modal開啟與關閉
const showModal = ref(false);
const openModal = () => {
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};

const blocks = [
  {
    question: "為什麼每次活動要收200元的參加費用？",
    answers: ["為了提供好玩和安全、安心的攝影外拍活動，以及維持活動品質與社團營運，我們每次活動將酌收新臺幣 100～300 元不等的參加費用。參加費的運用，一部分用於活動期間的旅遊平安保險，另一部分則會運用至官方網站維護、宣傳設計與社群經營相關支出，以維持社團長期的營運和成長。"],
    buttons: [
      { label: "TCC條款", link: openModal}
    ],
    alt: "Q&A圖1"
  },
  {
    question: "活動是利用什麼樣的保險？",
    answers: [
      {
        text: "為保障參加者權益，TCC 為每場外拍活動投保富邦產險「旅遊平安險」 的「國內旅遊計畫一」，其中保障包含：",
        details: [
        "旅平險：身故及失能保障：200 萬",
        "傷害醫療費用保險（最高）：20 萬",
        "緊急救援費用保險：10 萬",
        "個人責任（自負額 2500 元）（保期內最高）：25 萬"
        ]
      }
    ],
    buttons: [
      { label: "富邦旅平險內容", link: "https://c51e0a41-ff1d-4cb8-9e9a-1340dbb12123.filesusr.com/ugd/475b65_fb2f398b52dc466baef0745d9cf366f7.pdf"},
      { label: "富邦產險條款及詳細資訊", link: "https://c51e0a41-ff1d-4cb8-9e9a-1340dbb12123.filesusr.com/ugd/475b65_acfbdf1f3a4b4c709fb6aa04950f2f1f.pdf"}
    ],
    alt: "Q&A圖2"
  },
  {
    question: "為什麼需要身分證字號和地址等個人資訊？",
    answers: [
      "我們活動採用實名制，並且保險作業需要身分證字號和地址來進行投保，這部分還請見諒。",
      "所有個資僅供 TCC 幹部作保險與活動作業使用，非經同意絕不會使用於其他用途，請安心填寫。"
    ],
    alt: "Q&A圖3"
  },
  {
    question: "完全沒有攝影經驗也可以加入嗎？沒有相機有關係嗎？",
    answers: ["非常歡迎喔！沒有相機也沒問題！對於第一次接觸攝影或是想更了解攝影領域的人，只要你懷抱足夠熱情，我們都很樂於分享自己的經驗給你喔！"],
    alt: "Q&A圖4"
  },
  {
    question: "參加報名的流程？",
    answers: ["請先在網站上填寫資料，並填寫相關同意書，完成後我們將邀請您加入 BAND APP 的社群，所有活動預約、通知與照片分享皆透過 BAND 完成，詳細請參考以下網頁。"],
    buttons: [
      { label: "參加TCC會員表單", link: "https://docs.google.com/forms/d/e/1FAIpQLSdH8OYcQ6nxXlBrX_LzDaw0k9TNCm3F1aHedy4VCOZXtaV_Tg/viewform"},
      { label: "BAND APP連結", link: "https://www.band.us/home"}
    ],
    alt: "Q&A圖5"
  }
];

// 判斷是否要開啟答案區
const showDetails = ref(blocks.map(() => false));

const toggle = (index) => {
  showDetails.value[index] = !showDetails.value[index];
};

// 按鈕連結至超連結目標
const goTo = (link) => {
  if (typeof link === "function") {
    link();
  } else {
    window.open(link, "_blank");
  }
};
</script>

<style scoped>
.first-qapage {
  height: 70vh;
  background-image: url("/src/assets/SomeQuestionsBannerImg.avif");
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

.second-qapage {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-qapage h1 {
  text-align: center;
  font-size: 36px;
}

/* 主區塊 */
.qa-block {
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 960px;
  width: 100%;
}

.qa-question {
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  margin-bottom: 0px;
}

.qa-question:hover {
  color: #005f9e;
}

.qa-question.open {
  color: #99adff;
}

.qa-question .arrow {
  display: inline-block;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

.qa-question .arrow.open {
  transform: rotate(90deg);
}

.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.4s ease, opacity 0.3s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.qa-answer {
  width: 100%;
}

.qa-answer p {
  text-indent: 2em;
}

.qa-answer button {
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 48px;
  padding: 10px 18px;
  background-color: #007acc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.qa-answer button:hover {
  background-color: #005f9e;
}

/* 響應式for手機 */
@media (max-width: 768px) {
  .qa-block {
    flex-direction: column;
    align-items: start;
  }
  .qa-image {
    margin-bottom: 20px;
  }
}

/* TCC條款button的Modal */
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
  background-color: #3a3a3a;
  color: #fafafa;
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
  color: #cacaca;
  border: none;
  position: absolute;
  top: 12px;
  right: 18px;
}

.modal-close-btn:hover {
  color: #f0f0f0;
}

.modal-content-tcc-terms {
  padding: 36px;
  max-height: 90vh;
  overflow-y: auto;
}
</style>
