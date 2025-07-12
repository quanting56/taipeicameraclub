<template>
  <div class="joinuspage">
    <section class="first-joinuspage"></section>
    <section class="second-joinuspage">
      <h1>加入TCC</h1>

      <!-- 流程圖視覺導引 -->
      <div class="flow-guide">
        <h2>參加活動流程</h2>
        <div class="flow-steps">
          <div class="step">📝 填表加入</div>
          <span class="arrow">➡</span>
          <div class="step">📱 加入 BAND</div>
          <span class="arrow">➡</span>
          <div class="step">📅 點活動參加</div>
          <span class="arrow">➡</span>
          <div class="step">📷 現場集合拍照</div>
        </div>
      </div>

      <article
        class="article-block"
        v-for="(block, index) in blocks"
        :key="index"
        data-aos="fade-up"
      >
        <div class="article-text">
          <h2>
            <span class="article-title-step">Step {{ index + 1 }} /</span><br />
            <span class="article-title">{{ block.title }}</span>
          </h2>
          <p
            v-for="(paragraph, idx) in block.paragraphs"
            :key="idx"
          >{{ paragraph }}</p>
          <div v-if="block.buttons">
            <button
              v-for="(btn, idx) in block.buttons"
              :key="idx"
              @click="goTo(btn.link)">{{ btn.label }}</button>
          </div>
        </div>
        <div class="article-image">
          <img :src="block.img" :alt="block.alt" />
        </div>
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

import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// 圖片
import joinuspageImg1 from "../assets/JoinUsImg1.avif";
import joinuspageImg2 from "../assets/JoinUsImg2.avif";
import joinuspageImg3 from "../assets/JoinUsImg3.avif";
import joinuspageImg4 from "../assets/JoinUsImg4.avif";
import joinuspageImg5 from "../assets/JoinUsImg5.avif";

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
    title: "如何參加報名 TCC 的活動？",
    paragraphs: [
      "為了確保活動的品質和安全性，TCC 是以實名會員制的方式舉辦活動。TCC 的會員可以在 BAND 的 APP 上自由參加 TCC 團隊舉辦的外拍活動，並在會員間分享與交流活動中拍攝的攝影作品。",
      "BAND 的使用者體驗跟 LINE 等的社群軟體很類似，相信是會很好上手的！"
    ],
    buttons: [
      { label: "參加TCC會員表單", link: "https://docs.google.com/forms/d/e/1FAIpQLSdH8OYcQ6nxXlBrX_LzDaw0k9TNCm3F1aHedy4VCOZXtaV_Tg/viewform"},
      { label: "BAND APP連結", link: "https://www.band.us/home"}
    ],
    img: joinuspageImg1,
    alt: "如何報名圖"
  },
  {
    title: "如何註冊成為 TCC 的會員？",
    paragraphs: ["在本網站內的報名表上，填寫相關的個人資料、同意條款和切結書等等，即可成為我們的會員！"],
    buttons: [
      { label: "參加TCC會員表單", link: "https://docs.google.com/forms/d/e/1FAIpQLSdH8OYcQ6nxXlBrX_LzDaw0k9TNCm3F1aHedy4VCOZXtaV_Tg/viewform"}
    ],
    img: joinuspageImg2,
    alt: "會員註冊圖"
  },
  {
    title: "從 BAND 參加活動吧！",
    paragraphs: [
      "成為 TCC 會員並加入 BAND 社群後，即可透過「月曆」功能預覽所有即將舉辦的活動，包含活動日期、流程與地點等詳細資訊。",
      "若您看到有興趣參加的活動，只需點擊該活動頁面上的「參加」按鈕即可完成報名。請留意，若按鈕呈現灰色且無法點擊，代表該場次已額滿，敬請見諒！",
      "TCC 活動採即時報名、名額有限、先搶先贏的方式，因此請把握時機手刀報名喔！好消息是——BAND 提供「備取登記」機制。當活動額滿時，系統將自動開放「備取」按鈕供候補；若有名額釋出，將依登記順序自動遞補上線，不需額外操作。"
    ],
    img: joinuspageImg3,
    alt: "BAND操作"
  },
  {
    title: "活動當天",
    paragraphs: ["完成報名後，活動當天我們會有人手持印有 TCC 標誌的白色旗子，站在指定車站的出入口或其他明顯地標前。",
    "參加者向工作人員報到完成點名，並以現金繳交活動費用後，我們於活動開始前會安排簡單的自我介紹時間，讓大家彼此認識、放鬆心情，為接下來的交流與攝影活動打下友善的基礎！"],
    img: joinuspageImg4,
    alt: "當天活動圖"
  },
  {
    title: "活動中拍的作品分享",
    paragraphs: [
      "TCC 是一個以「同好交流」與「快樂出遊」為宗旨的攝影社團，我們鼓勵大家在每一次活動中，用鏡頭紀錄美好時光，也留下彼此互動的回憶。但為了保護所有參加者的肖像與隱私權，請勿在未經當事人同意的情況下，將活動照片任意公開發佈（例如社群平臺、公開展出等）。TCC 提供 BAND 社群中專屬的「TCC 相簿」，讓所有參加 TCC 外拍活動的會員，可在相簿中自由上傳與瀏覽彼此在活動中拍攝的影像作品，自由交流拍攝心得，並欣賞不同視角下的風景。",
      "成為 TCC 會員前，將會閱讀並同意相關參加條款，包含照片之個人使用與公開發佈的規定。若多次違反規定，TCC 團隊保有終止會員身份的權利，以維護全體成員的權益。而除了社團規範範圍內的管理外，TCC 團隊對活動參加者之間的私人糾紛或因照片使用所產生的爭議，恕不負責，敬請理解。"
    ],
    buttons: [
      { label: "TCC條款", link: openModal }
    ],
    img: joinuspageImg5,
    alt: "作品分享"
  }
];

const goTo = (link) => {
  if (typeof link === "function") {
    link();
  } else {
    window.open(link, "_blank");
  }
};

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.first-joinuspage {
  height: 70vh;
  background-image: url("/src/assets/JoinUsBannerImg.avif");
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

.second-joinuspage {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-joinuspage h1 {
  text-align: center;
  font-size: 36px;
}

/* 流程圖區塊 */
.flow-guide {
  text-align: center;
  margin-bottom: 60px;
}

.flow-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.step {
  background-color: #d0e2ef;
  color: #1a1a1a;
  padding: 10px 20px;
  margin: 6px;
  border-radius: 8px;
  font-weight: bold;
  cursor: default;
}

.step:hover {
  background-color: #e0f2ff;
}

.arrow {
  font-size: 24px;
  margin: 0 6px;
  cursor: default;
}

/* 主區塊 */
.article-block {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
  align-items: center;
  max-width: 960px;
}

.article-title-step {
  font-family: cursive;
  font-size: 44px;
}

.article-title::before {
  content: "- ";
}

.article-text {
  flex: 1;
}

.article-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.article-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
}

.article-text button {
  margin-right: 12px;
  margin-top: 12px;
  padding: 10px 18px;
  background-color: #007acc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.article-text button:hover {
  background-color: #005f9e;
}

/* 響應式for手機 */
@media (max-width: 768px) {
  .article-block {
    flex-direction: column;
    align-items: start;
  }
  .article-image {
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
