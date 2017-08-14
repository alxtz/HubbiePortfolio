<template>
  <div class="root">

    <div class="payload">

      <h1 class="hubbie">HUBBIE</h1>

      <div class="animateBox">
        <input class="codeBox" placeholder="Please Enter Your Code" type="text">
      </div>

      <ul class="skillList">
        <li class="skill">Product Design</li>
        <li class="skill">Motion Graphic</li>
        <li class="skill">UI</li>
        <li class="skill">Photography</li>
      </ul>

      <div class="enter">ENTER</div>

    </div>

    <div class="background">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to the home page.'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/scss/components/Home";
</style>
