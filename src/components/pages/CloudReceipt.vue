<template>
  <div class="main">

    <div class="bg"></div>

    <div class="payload">
      <div class="sideBar">
        <h2 class="sideLabel">Project Name</h2>

        <router-link to="Bump" class="pushLink">BUMP</router-link>
        <router-link to="PerfectPitchTrain" class="pushLink">Perfect Pitch Train</router-link>
        <router-link to="CloudReceipt" class="pushLink active">雲端發票</router-link>
        <router-link to="MusicGalaxy" class="pushLink">Music Galaxy</router-link>

        <div class="contactBox">
          <div class="link"><img src="~@/assets/cv.svg" alt="cv"></div>
          <div class="link"><img src="~@/assets/fb.svg" alt="fb"></div>
          <div class="link"><img src="~@/assets/mail.svg" alt="mail"></div>
        </div>
      </div>
      <div class="content">
        <div class="close"></div>
        <h1 class="projectTitle">雲端發票</h1>
        <div class="phoneDemo">
          <div class="screen">

          </div>
        </div>

        <p class="introText">
          此UI 設計是對 Play store 中架上的應用程式「雲端發票」去進行 redesign，也是我第一個嘗試獨自設計作業的應用程式；設計方向主要是整理架構中的功能，再以使用者的位子去思考，拿掉許多不會用到、卻會干擾資訊閱讀的功能，再重新設計操作流程，讓使用者能以最少的步驟找到想要的資訊或功能，而配色上也以乾淨明亮為主，捨棄過重的配色版面不用，避免讓使用者在大量資訊下容易感到疲累。
        </p>

        <p class="introText">
          這個作品的設計準則主要是參考 material design，所使用的元件、版面也是先以原生 UI 為主，但 UI 設計上很仔細的考量資訊呈現的方式和介面對使用者的引導，主要是想讓使用者在操作流程上感覺順暢而不煩瑣，對於電子發票中提供的大量資訊也以層級的方式作呈現，讓在找尋資訊的過程中能夠一目瞭然而不感到困惑或是花很多力氣在尋找上；而在之後利用 prototype 進行的使用者測試上也得到良好的回饋，受試者都能順暢的操作並找到想要的資訊，是一個相當完整的練習課題。
        </p>

        <div class="snapshotBox-4">
          <img class="snapshot" src="~@/assets/CLOUD-RECEIPT/snapshot-1.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/CLOUD-RECEIPT/snapshot-2.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/CLOUD-RECEIPT/snapshot-3.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/CLOUD-RECEIPT/snapshot-4.jpg" alt="snapshot1" width="180px" height="320px">
        </div>

      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'CloudReceipt',
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
