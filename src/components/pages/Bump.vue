<template>
  <div class="main">

    <div class="bg"></div>

    <div class="payload">
      <div class="sideBar">
        <h2 class="sideLabel">Project Name</h2>

        <router-link to="Bump" class="pushLink active">BUMP</router-link>
        <router-link to="PerfectPitchTrain" class="pushLink">Perfect Pitch Train</router-link>
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
        <h1 class="projectTitle">BUMP</h1>
        <div class="phoneDemo">

          <!-- <div class="screen">
            <div class="scrollClips">
              <img class="scroll" src="~@/assets/BUMP/scroll-1.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-2.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-3.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-4.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-5.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-6.png" alt="snapshot1"><img class="scroll" src="~@/assets/BUMP/scroll-7.jpg" alt="snapshot1">
            </div>
          </div> -->

        </div>
        <p class="introText">BUMP是一款以獨立音樂為主題的應用程式，開發前後歷時兩個多月，功能從一開始的資訊查詢、揪團，到後來慢慢發展為獨立音樂平台；開發方式是直接和工程師們組成團隊，直接的進行溝通討論，而我負責的任務從資訊架構、介面設計、使用者體驗，到後期也開始進行產品設計來開發新功能和協助行銷等等，過程中學習了不只關於設計、還有種種關於任務規劃和合作的經驗。</p>
        <p class="introText">會做這款應用程式的緣由是因為有一群工程師想參加Opendata的競賽，而他們團隊需要一名設計師，因緣際會下就這樣開始了這個計畫。一開始的方向是工程師自己的點子，他想做出一款可以讓人揪團一起去聽獨立音樂的應用程式，算是工程師自身經歷過的痛點，不過一開始能提供我的想法也就只有這些，包括程式架構、可能會有的功能都很不明確，所以這時候設計師進場，就得從這些初期的想法開始著手。</p>
        <img class="snapshot" src="~@/assets/BUMP/snapshot-1.jpg" alt="snapshot1" width="360px" height="360px">
        <p class="introText">在製作Functional map和功能開發時，團隊遇到了一些瓶頸：各功能在架構上的重要性、活動應該要包含哪些資訊、揪團方面應該要讓使用者掌握彼此多少資訊，為了找出合適的答案，團隊找了高雄的一個展演空間老闆和他有在聽獨立樂團的朋友們，舉行了約莫十幾個人的Focus group訪查，以求更明確的瞭解使用者的各面向，藉著這些訪查所獲得的需求和團隊討論的結果，製作出了Functional map。</p>
        <p class="introText">Focus group 訪查事前準備：https://goo.gl/mcXu7g</p>
        <img class="snapshot" src="~@/assets/BUMP/snapshot-2.jpg" alt="snapshot1" width="480px" height="360px">
        <p class="introText">在應用程式的架構和流程明確後，便著手進行設計UI的部分，一開始參考了許多知名獨立樂團的風格，以求設計出會讓獨立樂團粉絲們容易有共鳴的介面；考慮到這類的應用程式和功能架構並不算常見，設計上主要是以易用性和容易了解爲目標，但也得兼顧時程和工程端，比方說在搜尋功能上，團隊開發出能以時間、地點、關鍵字作為搜尋條件，一開始便花了點心思在方便使用者輸入資訊，接著考慮到使用者會需要利用地點和時間範圍來做綜合搜尋，而這樣的搜尋條件欄位配置上又須要與關鍵字做區隔，以防使用者混淆，以及搜尋結果該如何呈現、或是沒有符合結果時要以什麼提示使用者，都是在設計面上處處考慮使用者的呈現。</p>
        <div class="snapshotBox-2">
          <img class="snapshot" src="~@/assets/BUMP/snapshot-3.jpg" alt="snapshot1" width="180px" height="320px">
          <img class="snapshot" src="~@/assets/BUMP/snapshot-4.jpg" alt="snapshot1" width="180px" height="320px">
        </div>
        <p class="introText">雖然會想在各面向上都盡力去下功夫，但這次的計畫有著時程上的限制因此得在部分地方做取捨，其一是團隊決議在元件使用先以原生的為主，但是可以在配色上去做情境的營造、測試的方式也先以Mirror搭配流程圖的方式做評估；儘管有諸多的讓步，但也是在團隊理解到任務的優先程度後去決定的，最後能在時程內開發出功能完善的版本並上架，也的確是在取捨下得出的好結果。</p>
        <p class="introText">完成上架後團隊便直接以這樣的成品去進行測試，規劃找出接下來要再完善或開發的功能，比較大的部分像是發現opendata的展演資訊其實不夠完善，目前的解決辦法是先以google表單的方式讓可信的來源直接從後端新增資料，但也在著手開發網站或是應用程式來讓各團體或單位能夠更方便的新增展演活動。種種過程跟細節都是我們花了很多心思去構想跟開發的，而目前的成果也得到了opendata競賽 開發資料應用組 優等，這樣的成績也算是對團隊大大的鼓勵，支持我們接著BUMP下去。</p>
        <img class="snapshot" src="~@/assets/BUMP/snapshot-5.jpg" alt="snapshot1" width="320px" height="320px">
        <p class="introText">App Store 下載 Bump: <span class="link">https://goo.gl/ekkfeL</span></p>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'Bump',
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
