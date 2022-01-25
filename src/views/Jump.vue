<template>
  <div class="jump-container">
    <div class="main-box">
      <img class="person-block" src="../assets/img/person-stand-xyr.png" alt="person-stand" width="300">
      <div class="floor-block"></div>
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

@floor-height: 60px;
@jump-height: @floor-height + 130px;

.jump-container {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: scroll;
  .main-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 80%;
    position: relative;
    .title {
      font-size: 20px;
      position: absolute;
      left: 20px;
      top: @header-height;
      color: @color-dark-6;
      &::before {
        content: '#';
        margin-right: .2em;
      }
    }
    .person-block {
      display: flex;
      width: 250px;
      animation: jump .15s infinite;
    }
    .floor-block {
      display: flex;
      width: 100%;
      height: @floor-height;
      position: absolute;
      bottom: 0; left: 0;
      background-color: @color-dark-8;
    }
  }
}

@keyframes jump {
  0%   {margin-bottom: @jump-height;}
  50%  {margin-bottom: @floor-height - 10px;}
  100% {margin-bottom: @jump-height;}
}
</style>
