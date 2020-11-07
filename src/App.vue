<template>
  <div id="app" style="height: 100%">
    <div style="  height: 50%">
      <div>我是一堆文字</div>
      <div>我是一堆文字</div>
      <div>我是一堆文字</div>
      <div>我是一堆文字</div>
    </div>
    <AkiBackGround1 style="height:100%;width: 100%;
    position: fixed;top: 0;left: 0;z-index: -999"
    column="4" row="3" rotate="45" scale="2" saturation="100" light="50"></AkiBackGround1>
  </div>
</template>

<script>
  import AkiBackGround1 from "./components/AkiBackGround1";

  export default {
    name: 'app',
    components: {
      AkiBackGround1
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      showMsg(msg){
        alert(msg)
      }
    }
  }
</script>

<style>
</style>
