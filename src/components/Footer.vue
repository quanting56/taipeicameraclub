<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <p>
          內文撰寫｜中山、冠穎<br>
          製&emsp;&emsp;圖｜中山<br>
          網&emsp;&emsp;頁｜冠穎<br>
          攝&emsp;&emsp;影｜中山<br>
        </p>
        <p>
          聯絡方式：Instagram私訊<br>
          資料最後更新時間：<time datetime="2025-06-14T17:14">2025/06/14 17:14</time>
        </p>
        <p>&copy; 2025 Taipei Camera Club. All Rights Reserved</p>
      </div>
      <div class="footer-right">
        <a href="https://www.instagram.com/taipeicameraclub" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="https://www.facebook.com/taipeicameraclub" target="_blank"><i class="bi bi-facebook"></i></a>
        <!-- <a href="" target="_blank"><i class="bi bi-line"></i></a> -->
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #1f1f35;
  padding: 25px 35px;
  font-size: 16px;
  font-weight: 400;
  color: #eeeeee;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
}

.footer-left {
  flex: 1 1 60%;
}

.footer-right {
  flex: 1 1 35%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 14px;
}

.footer-right a {
  font-size: 24px;
  color: #eeeeee;
  text-decoration: none;
}

.footer-right a:hover {
  transition: transform 0.2s ease-in-out;
  transform: translateY(-1.5px);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-right {
    justify-content: flex-start;
  }
}
</style>
