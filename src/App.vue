<template>
  <div id="app" style="height: 100%">
    <AkiBackGround1 style="height:100%;width: 100%;"
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
