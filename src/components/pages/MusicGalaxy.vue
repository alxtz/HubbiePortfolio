<template>
  <div class="main">

    <div class="bg"></div>

    <div class="payload">
      <div class="sideBar">
        <h2 class="sideLabel">Project Name</h2>

        <router-link to="Bump" class="pushLink">BUMP</router-link>
        <router-link to="PerfectPitchTrain" class="pushLink">Perfect Pitch Train</router-link>
        <router-link to="CloudReceipt" class="pushLink">雲端發票</router-link>
        <router-link to="MusicGalaxy" class="pushLink active">Music Galaxy</router-link>

        <div class="contactBox">
          <div class="link"><img src="~@/assets/cv.svg" alt="cv"></div>
          <div class="link"><img src="~@/assets/fb.svg" alt="fb"></div>
          <div class="link"><img src="~@/assets/mail.svg" alt="mail"></div>
        </div>
      </div>
      <div class="content">
        <div class="close"></div>
        <h1 class="projectTitle">Music Galaxy</h1>
        <div class="phoneDemo">
          <div class="screen">

          </div>
        </div>

        <p class="introText">
          Music Galaxy 是參加 UI Club 上的 UI challenge 所做的一個小課題，功能上是一個音樂播放應用程式，所含的功能頁面包括音樂庫、播放器、樂手資訊和瀏覽音樂的功能，因為是參加設計挑戰且不用把實作的可能考慮進去，因此設計上就比較大膽不拘小節，做了很多很有趣的嘗試、想讓這樣的介面能讓使用者在聆聽音樂的過程中有特別的體驗和感到新奇。
        </p>
        <p class="introText">
          一開始在決定設計方向時便不考慮整理音樂風格或好好排序的做法，而是打算讓應用程式可以隨機推薦使用者不同的音樂，故後來的發想便將風格設定為宇宙，使用者在首頁滑動頁面時會出現刻劃成星球的專輯，營造出在宇宙中探索巧遇不同星球的未知性和驚喜；順著這樣的風格往下思考其他功能，便將歌手包裝成太空人的形象，帶領使用者聆聽他們發現的專輯星球。
        </p>

        <!-- 再小要換行 -->
        <div class="snapshotBox-2">
          <img class="snapshot" src="~@/assets/MUSIC-GALAXY/snapshot-1.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/MUSIC-GALAXY/snapshot-2.jpg" alt="snapshot1" width="180px" height="320px">
        </div>

        <p class="introText">
          而播放器的頁面也做了很多巧思，像是將音軌的波形角度調整成如同航向軌跡，讓畫面隨著音軌捲動而像是旅程行進，播放中歌詞也會從畫面遠出飛入、或是讓使用者在喜歡的橋段按下星形 icon 在音軌中留下記號，都是為了讓星際間航行這個意境呈現出來讓使用者感受；設計過程中也使用了大量個工具如 sketch 和 principle ，嘗試在不實際做出成品的情況下利用 prototype 模擬出使用的情境和互動特色，方便溝通讓其他人能夠理解設計的理念；這樣的種種內容和挑戰都讓這次的 UI challenge 過程特別有趣和收穫豐富。
        </p>

        <div class="snapshotBox-2">
          <img class="snapshot" src="~@/assets/MUSIC-GALAXY/snapshot-3.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/MUSIC-GALAXY/snapshot-4.jpg" alt="snapshot1" width="180px" height="320px">
        </div>

      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'PerfectPitchTrain',
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>


<style scoped lang="scss">
  @import "~@/scss/components/Bump";
  @import "~@/scss/components/Page";
</style>
