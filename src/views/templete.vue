<template>
  <div class="home-container">
    <div class="main-box">
      <div class="title"></div>
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

.home-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: scroll;
  .main-box {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
}
</style>
