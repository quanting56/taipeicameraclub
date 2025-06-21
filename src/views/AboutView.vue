<template>
  <div class="aboutpage">
    <section class="first-aboutpage"></section>
    <section class="second-aboutpage">
      <h1>社團介紹</h1>

      <article class="article-block reverse">
        <div class="article-text">
          <h2>創立理念</h2>
          <p>TCC是Taipei Camera Club的簡寫，在 "Enjoy Photo, From Taipei" 的理念中，我們從台北開始，目標是推廣誰都可以享受的攝影樂趣到全台灣， 甚至擴展到全世界。TCC是2020年5月5日由一位參加台大攝影社的日本人社員成立。 我們期盼創立「台北最大」和「台北最好玩」的攝影社團， 創造出能讓攝影新手到攝影老手都能輕鬆參加＆加倍享受攝影樂趣的環境和平台。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg1" alt="創立理念圖片" />
        </div>
      </article>

      <article class="article-block">
        <div class="article-text">
          <h2>主要的參加目標層呢？</h2>
          <p>現在營運團隊主要由台北市內的大學生所組成，我們非常歡迎大學生和社會新鮮人等等攝影愛好者的加入！！</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg2" alt="目標客群圖片" />
        </div>
      </article>

      <article class="article-block reverse">
        <div class="article-text">
          <h2>與其他攝影社團的不同</h2>
          <p>在台北，現階段多數的攝影社團是由職業攝影大師所創辦的攝影教學或外拍，雖然從活動中，攝影的技術上和興致上有很大的收穫，然而會有一部分的活動專門性門檻太高， 不便於新手參加，又或者活動的參加費用太高昂（多數為1,000元以上），導致部分的攝影愛好者（尤其是學生族群）不便參加。</p>
          <p>TCC以創立「台北最好玩的攝影社團」為核心目標，希冀創造出輕鬆參加＆加倍享受攝影樂趣的環境和平台， 以「一頓好吃的飯同等級」的「良心價位」提供活動，在營運團隊的帶領之中、在外拍活動的過程之中，參加者可以互相交流、一起成長。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg3" alt="特色與區別圖片" />
        </div>
      </article>

      <article class="article-block">
        <div class="article-text">
          <h2>我們在做什麼？</h2>
          <p>我們的大學生團隊現在以「外拍活動」的舉辦和「Instagram & Facebook上的照片介紹」為主軸， 將來會開拓並啟發具有樂趣的攝影活動和事業，敬請各位期待。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg4" alt="外拍合照" />
        </div>
      </article>

      <article class="article-block reverse">
        <div class="article-text">
          <h2>外拍活動</h2>
          <p>為了平日在努力的學生和社會人士以便出去參加並享受攝影的樂趣，我們團隊會以週末為主在台北的攝影景點和季節景點舉辦外拍活動。 同時我們會在學生們從平常的課業等的壓力解放的「暑假」和「寒假」等的長期假期的平日舉辦外拍活動。 就像是「長大後的校外教學」讓大家出去玩的感覺，TCC 的活動規模主要會以 20~30 人規模。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg5" alt="外拍合照2" />
        </div>
      </article>

      <article class="article-block">
        <div class="article-text">
          <h2>Instagram & Facebook 上的照片分享</h2>
          <p>另外，Instagram 上多數僅有景點介紹和主題為準的平台，唯有超級厲害的攝影師作品會被介紹，對新手來講沒有特別大的樂趣，亦沒有提高拍攝者自信的機會。 針對新手提供攝影樂趣、純粹分享的新興平台幾乎不存在。於是 Taipei Camera Club 想做出全新的開拓。 我們認為攝影者不應該被「點讚數」和「粉絲人數」給評價與牽制。明明努力照出好的照片，卻因為這些數字就沒辦法分享給更多人欣賞，讓攝影者逐漸失去自己的自信， 這是非常可惜的事。因此，Taipei Camera Club 想經過照片的 Featuring 之分享企劃，在 IG 上創設「拍出好照片、但沒有被好好欣賞」的攝影者社群平台。</p>
        </div>
        <div class="article-image">
          <img :src="aboutpageImg6" alt="社群平臺分享" />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import aboutpageImg1 from "../assets/AboutImg1.avif";
import aboutpageImg2 from "../assets/AboutImg2.avif";
import aboutpageImg3 from "../assets/AboutImg3.avif";
import aboutpageImg4 from "../assets/AboutImg4.avif";
import aboutpageImg5 from "../assets/AboutImg5.avif";
import aboutpageImg6 from "../assets/AboutImg6.avif";
</script>

<style scoped>
.first-aboutpage {
  height: 70vh;
  background-image: url("/src/assets/AboutBannerImg.avif");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
}

.second-aboutpage {
  padding: 60px 20px;
}

.second-aboutpage h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
}

/* 文章區塊 */
.article-block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 40px;
  flex-direction: row;
}

.article-block.reverse {
  flex-direction: row-reverse;
}

/* 文章區塊的文字部分 */
.article-text {
  max-width: 600px;
  text-align: left;
  font-size: 18px;
}

.article-text h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

/* 文章區塊的圖片部分 */
.article-image img {
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* 響應是設計for手機 */
@media (max-width: 768px) {
  .article-block,
  .article-block.reverse {
    flex-direction: column;
  }

  .article-image img {
    max-width: 100%;
  }
}
</style>
