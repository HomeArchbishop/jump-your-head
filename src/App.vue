<template>
  <div class="wrap">
    <MainHeader></MainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="less">
@import 'assets/less/themes';

@font-face {
  font-family: 'juZhenJF';
  src: url('./assets/font/FZJuZXFJF.ttf');
}
@font-face {
  font-family: 'ZillaSlab';
  src: url('./assets/font/ZillaSlab.ttf');
}
@font-face {
  font-family: 'Braggadocio';
  src: url('./assets/font/Braggadocio.ttf');
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  &, * {
    font-family: ZillaSlab, juZhenJF, Apple Color Emoji, Segoe UI Emoji, system-ui, sans-serif;
    box-sizing: border-box!important;
  }
}
.wrap {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: @color-theme-10;
}
</style>
