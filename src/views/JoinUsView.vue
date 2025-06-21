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
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// 圖片
import joinuspageImg1 from "../assets/JoinUsImg1.avif";
import joinuspageImg2 from "../assets/JoinUsImg2.avif";
import joinuspageImg3 from "../assets/JoinUsImg3.avif";
import joinuspageImg4 from "../assets/JoinUsImg4.avif";
import joinuspageImg5 from "../assets/JoinUsImg5.avif";

const blocks = [
  {
    title: "如何參加報名 TCC 的活動？",
    paragraphs: [
      "為了確保活動的品質和安全性，TCC 是以實名會員制的方式舉辦活動。 TCC 的會員可以在 BAND 的手機或電腦版 APP 上自由參加 TCC 團隊舉辦的外拍活動， 並在會員間分享與交流活動中拍攝的攝影作品。",
      "APP 的使用者體驗跟 LINE 等的社群軟體很相似，相信是會很好上手的！"
    ],
    buttons: [
      { label: "參加TCC會員表單", link: "#"},
      { label: "BAND APP連結", link: "#"}
    ],
    img: joinuspageImg1,
    alt: "如何報名圖"
  },
  {
    title: "如何註冊成為TCC的會員？",
    paragraphs: ["在本網站內的報名表上，填寫相關的個人資料、同意條款和切結書類...就可以了！"],
    buttons: [
      { label: "參加TCC會員表單", link: "#"}
    ],
    img: joinuspageImg2,
    alt: "會員註冊圖"
  },
  {
    title: "從BAND參加活動吧！",
    paragraphs: ["參加會員、加入 BAND 上的 TCC 社群之後，點進「月曆按鍵」即可預覽 TCC 目前的活動情報，其中包括日期、流程等等內容。 如果您看到想參加的活動，可點擊頁面上的「參加」按鈕表示參加就可，很簡單對不對！！然而如果參加的按鈕變灰， 無法點進去的話，代表名額已滿，這時候就不好意思，請等下次了！BAND 上的活動參加名額是以即時勾選、先搶先贏的方式， 因此預想參加者的手腳要快喔！ 另外通知大家一個好消息！其實 BAND 上有備取功能得以補救！！活動名額已滿的狀態中，BAND 會自動出現「備取」按鈕登錄。如果有人取消參加的話，BAND 就會自動從備取名單上面備上！"],
    img: joinuspageImg3,
    alt: "BAND操作"
  },
  {
    title: "當天參加活動",
    paragraphs: ["從 BAND APP 頁面上點擊「參加」按鈕表示參加後，活動當天我們主要會在車站的出入口等的地標前集合。我們團隊人員會拿有 TCC 標誌的白色旗子等待大家的參加。參加會員請到團隊人員點名，並現金繳交 200 元參加費。我們活動開始前「一定」會有「自我介紹」的時間讓大家互相認識，解消緊張。"],
    img: joinuspageImg4,
    alt: "當天活動圖"
  },
  {
    title: "活動中拍的作品分享",
    paragraphs: ["TCC 是以出去玩和交流為主攝影社團，在活動中想必希望拍出很多好玩的回憶和精彩作品。但為了保護參加者的肖像權， 請不要隨意地公開照片。參與過外拍活動的會員，將會提供另外的「TCC 相簿」於 BAND 社團，參加者可以在相簿中自由分享自己在活動中拍的作品， 互相交流。會員在參加前會知悉同意條款，包括照片的個人使用和公開的規範，因此 TCC 團隊若發現規約數次違反者， 將會以退出社團帳號作為處分。而我們團隊在退會處分的對應範圍之外，從照片或活動相關的紛爭或不便之處，TCC 將不負任何責任。"],
    buttons: [
      { label: "TCC條款", link: "#"}
    ],
    img: joinuspageImg5,
    alt: "作品分享"
  }
];

const goTo = (link) => {
  window.open(link, "_blank");
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
}

.step:hover {
  background-color: #e0f2ff;
}

.arrow {
  font-size: 24px;
  margin: 0 6px;
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
</style>
