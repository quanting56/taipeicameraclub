# Taipei Camera Club 官方網站（重建版）

這是 **Taipei Camera Club 官方網站** 的重建專案。

**Taipei Camera Club**（以下簡稱 **TCC**）原為一個由我與朋友共同創立的攝影戶外交流社團，於 COVID-19 疫情前活躍運作，然在疫情影響下而中止營運。

本網站係以 TCC 早期使用 Wix 架設的原始網站為藍本，使用 **Vue 3** + Vite 重新實作，並改善整體 UI/UX 與行動裝置體驗。

## 專案特色

- 使用 **Vue 3 Composition API** 開發。
- 使用 **Vite** 作為建構工具，啟動快速、熱重載流暢。
- 使用 **Vue Router 4** 自行規劃多頁路由。
- 串接 **Google Sheets API** 作為每筆活動資料的小型後台。
- 實作 **RWD 響應式設計**，手機、平板、桌機皆可順暢瀏覽。
- 精簡、易維護的專案結構。
- 網站部署於 GitHub Pages，可由 **[TaipeiCameraClub官方網站（新）](https://quanting56.github.io/taipeicameraclub/)** 瀏覽效果。

## 網站架構（Router）

以下是目前網站的頁面與路由結構：

|路由位置           |對應頁面檔案           |說明      |
|-----------------|---------------------|----------|
|`/`              |`HomeView.vue`       |首頁      |
|`/about`         |`AboutView.vue`      |關於我們   |
|`/activity`      |`ActivityView.vue`   |活動總覽頁 |
|`/activity/:id`  |`ActivityPostView.vue`|每次活動詳細頁（由 Google Sheet 匯入）|
|`/management_team`|`ManagementTeamView.vue`|團隊成員介紹頁面|
|`/join_us`       |`JoinUsView.vue`     |加入我們頁面|
|`/some_questions`|`SomeQuestionsView.vue`|常見問題（QA頁面）|
|`/tcc_terms`     |`TccTermsView.vue`   |條款與聲明頁面|

其中 `activity` 與 `activity/:id` 為巢狀路由。在路由切換時，特別處理了 **scrollBehavior**，避免使用者在活動總覽頁閱讀翻閱不同單筆活動文時會跳回到頁面最頂部，以提高使用體驗（其餘網頁切換時，均會回到網頁最頂處）。

```js
scrollBehavior(to, from, savePosition) {
  const isActivityPost = (route) =>
    route.name === "activity" || route.name === "activity_post";

  if (isActivityPost(to) && isActivityPost(from)) {
    return false;
  }

  return { top: 0 };
}
```

## 技術使用

- **框架**：Vue 3 Composition API  
- **打包工具**：Vite  
- **路由**：Vue Router（history 模式，base 為 `/taipeicameraclub/`）  
- **狀態管理**：<s>Pinia</s>（本專案暫未使用，未來預計）  
- **資料來源**：Google Sheets API  
- **樣式**：純 CSS + Flexbox/Grid + Media Queries  
- **部署**：GitHub Pages  

## 安裝與本地開發

```bash
# Clone 專案
git clone git@github.com:quanting56/taipeicameraclub.git
cd taipeicameraclub

# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev
```

## 部署

網站部署於 GitHub Pages，下列為建置與部署流程摘要：

```js
// 確保 base 設定正確
// vite.config.js 中設為：
base: '/taipeicameraclub/'
```

```bash
# 建置專案
npm run build

# 推送 dist 內容到 GitHub Pages
# 網站部署於 gh-pages branch
```

## 開發者

本案由 **[quanting56](https://github.com/quanting56)** 開發與維護。

## 專案結構

```cs
taipeicameraclub/
├─ public/                 # 靜態資源 (如 favicon)
├─ src/
│  ├─ assets/              # 網頁圖片
│  ├─ components/          # 可重用元件（Navbar, Footer, TCC條款）
│  ├─ data/                # 資料（如團隊成員資料）
│  ├─ router/
│  │   └─ index.js         # 路由設定檔
│  ├─ store/               # Pinia 狀態管理（預留）
│  ├─ views/               # 各頁面 SFC (HomeView.vue, ActivityView.vue…)
│  ├─ style.css            # 全域樣式
│  └─ App.vue, main.js     # 入口
├─ index.html
├─ package.json
├─ README.md
└─ vite.config.js
```