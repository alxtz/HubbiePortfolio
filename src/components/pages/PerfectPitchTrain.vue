<template>
  <div class="main">

    <div class="bg"></div>

    <div class="payload">
      <div class="sideBar">
        <h2 class="sideLabel">Project Name</h2>

        <router-link to="Bump" class="pushLink">BUMP</router-link>
        <router-link to="PerfectPitchTrain" class="pushLink active">Perfect Pitch Train</router-link>
        <router-link to="CloudReceipt" class="pushLink">雲端發票</router-link>
        <router-link to="MusicGalaxy" class="pushLink">Music Galaxy</router-link>

        <div class="contactBox">
          <div class="link"><img src="~@/assets/cv.svg" alt="cv"></div>
          <div class="link"><img src="~@/assets/fb.svg" alt="fb"></div>
          <div class="link"><img src="~@/assets/mail.svg" alt="mail"></div>
        </div>
      </div>
      <div class="content">
        <div class="close"></div>
        <h1 class="projectTitle">Perfect Pitch Train</h1>
        <div class="phoneDemo">
          <div class="screen">

          </div>
        </div>

        <p class="introText">
          Perfect Pitch Train 是一款訓練絕對音感的遊戲，以介面和配色營造音樂廳的情境，讓使用者在愉悅的氛圍下進行遊戲。我在這個案子中擔任 UI 的改良，重新設計出有趣又易用易懂的介面，過程中和工程師大量溝通技術可行性和出圖規格方式，是一個規模較簡單、但限制較少的作品。
        </p>
        <p class="introText">
          嚴格來說這應該算是一個 redesign 的計畫，工程師一開始已經完成了整個應用程式和介面，但是在覺得介面有點過於陽春的想法下請我幫他重新製作介面；設計方向在初期就選定了想營造音樂廳的情境，因此在首頁背景的設計、整體配色、抑或是選擇遊玩模式的互動方式都以實際的音樂廳作為風格參考。
        </p>

        <!-- 再小要換行 -->
        <div class="snapshotBox-4">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-1.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-2.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-3.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-4.jpg" alt="snapshot1" width="180px" height="320px">
        </div>

        <p class="introText">
          過程中遇到的比較大的困難是在和工程師溝通出圖規格上，例如首頁出圖的方式、維互動應該怎麼呈現，而最花心力的地方應該是在遊玩畫面的配置和觸控範圍的座標註記上，解決的過程中除了和工程師大量的溝通外、也請教了工程前輩和設計的同伴們，藉由得到的回饋建議去修正方法和方向，才讓介面順利完成。
        </p>

        <div class="snapshotBox-4">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-5.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-6.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-7.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-8.jpg" alt="snapshot1" width="180px" height="320px">
        </div>

        <p class="introText">
          個人其實蠻滿意這次的介面設計，尤其是在資訊的呈現上做到了易讀又不失有趣，比較可惜的是沒有機會再去做流程上的優化，有些使用者體驗的部分其實還想去多下功夫，讓使用者可以藉由一些互動跟反饋更明確的瞭解遊戲的遊玩方式和目前的進度，可能等工程師有空了再跟他多建議吧！
        </p>

        <img class="snapshot" src="~@/assets/PERFECT-PITCH-TRAIN/snapshot-9.jpg" alt="snapshot1" width="320px" height="320px">
        <p class="introText">App Store 下載 Perfect Pitch Train: <span class="link">https://goo.gl/BwNeqd</span></p>

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
