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
        <div class="qa-text">
          <h2 class="qa-question">{{ block.question }}</h2>
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
        <div class="qa-image">
          <img :src="block.img" :alt="block.alt" />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
// 圖片
import qapageImg1 from "../assets/SomeQuestionsImg1.avif";
// import qapageImg2 from "../assets/SomeQuestionsImg2.avif";
import qapageImg3 from "../assets/SomeQuestionsImg3.avif";
import qapageImg4 from "../assets/SomeQuestionsImg4.avif";
// import qapageImg5 from "../assets/SomeQuestionsImg5.avif";

const blocks = [
  {
    question: "為什麼每次活動要收200元的參加費用？",
    answers: ["為了提供好玩和安全、安心的攝影外拍活動，我們每次的活動將從每個參加者徵收200元現金作為參加費用。 參加費的資金，一部分屬於參加者的意外保險，另一部分會注入到我們網站經營的費用與其他經營事務等等為主，以維護社團長期的營運和成長。"],
    buttons: [
      { label: "TCC條款", link: "#"}
    ],
    img: qapageImg1,
    alt: "Q&A圖1"
  },
  {
    question: "活動是利用什麼樣的保險？",
    answers: [
      {
        text: "為了確保會員的安全和權益 Taipei Camera Club 的活動將投保富邦產險的「旅遊平安險」 的「國內旅遊計畫一」的產品，其中保障包含：",
        details: [
        "旅平險：身故及失能保障：200 萬",
        "傷害醫療費用保險（最高）：20 萬",
        "緊急救援費用保險：10 萬",
        "個人責任（自負額 2500 元）（保期內最高）：25 萬"
        ]
      }
    ],
    buttons: [
      { label: "富邦旅平險內容", link: "#"},
      { label: "富邦產險條款及詳細資訊", link: "#"}
    ],
    // img: qapageImg2,
    alt: "Q&A圖2"
  },
  {
    question: "為什麼需要身分證字號和地址等個人情報？",
    answers: [
      "我們活動採用實名制，並且保險部分需要身分證字號和地址來進行投保，這部分還請您見諒。",
      "個資部分，依會員條款僅供 TCC 幹部管理成員使用，非經同意絕不會使用於其他用途。"
    ],
    img: qapageImg3,
    alt: "Q&A圖3"
  },
  {
    question: "我沒有跳過舞，真的可以加國標社嗎？（沒有玩過攝影可以加入嗎？）",
    answers: ["非常歡迎喔！沒吃過金針菇也看過金針菇走路吧，對於第一次接觸攝影或是想更了解這一塊區域的人， 我們都很樂於分享自己的經驗給你們喔！"],
    img: qapageImg4,
    alt: "Q&A圖4"
  },
  {
    question: "參加報名的流程？",
    answers: ["請先在網站上填寫資料，並填寫相關同意書，完成後我們將邀請您參加 BAND 的 APP，詳細請參考以下網頁。"],
    buttons: [
      { label: "參加TCC會員表單", link: "#"},
      { label: "BAND APP連結", link: "#"}
    ],
    // img: qapageImg5,
    alt: "Q&A圖5"
  }
];

const goTo = (link) => {
  window.open(link, "_blank");
};
</script>

<style scoped>
.first-qapage {
  height: 70vh;
  background-image: url("/src/assets/JoinUsBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
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
  gap: 30px;
  margin-bottom: 60px;
  align-items: center;
  max-width: 960px;
}

.qa-question::before {
  content: "- ";
}

.qa-text {
  flex: 1;
}

.qa-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.qa-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}

.qa-text button {
  margin-right: 12px;
  margin-top: 12px;
  padding: 10px 18px;
  background-color: #007acc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.qa-text button:hover {
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
</style>
