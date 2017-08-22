<template>
  <div class="root">

    <div class="payload" :class="{active: transactionActive}">

      <h1 class="hubbie">HUBBIE</h1>

      <div class="animateBox">
        <input class="codeBox animateBox0" placeholder="Please Enter Your Code" type="text">
        <div class="animateBox1">Gathering Ideas</div>
        <div class="animateBox2"></div>
        <div class="animateBox3">Assembling Projects</div>
        <div class="animateBox4"></div>
        <div class="animateBox5">COMPLETE!</div>
        <div class="animateBox6"></div>
      </div>

      <ul class="skillList">
        <li class="skill">Product Design</li>
        <li class="skill">Motion Graphic</li>
        <li class="skill">UI</li>
        <li class="skill">Photography</li>
      </ul>

      <div class="enter" @click="startTransition()">ENTER</div>

    </div>

    <div class="background" v-bind:style="{backgroundImage:'url(' + backgroundUrl + ')'}" :class="{active: transactionActive}">

    </div>

  </div>
</template>

<script>
  import deployConfig from '@/../config/deployConfig.json'
  export default {
    name: 'Home',
    data () {
      return {
        transactionActive: false
      }
    },
    computed: {
      backgroundUrl () {
        let url = this.getBackgroundUrl()
        return url
      }
    },
    methods: {
      getBackgroundUrl () {
        if (deployConfig.mode === 'dev') {
          return require('@/assets/background.png')
        } else {
          return '/HubbiePortfolio/dist' + require('@/assets/background.png')
        }
      },
      startTransition () {
        this.transactionActive = true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/scss/components/Home";
</style>
