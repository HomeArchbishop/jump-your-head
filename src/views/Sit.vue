<template>
  <div class="sit-container">
    <div class="main-box">
      <img class="person-block" src="../assets/img/person-sit-xyr.png" alt="person-sit" width="300">
      <div class="floor-block"></div>
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

@floor-height: 10%;

.sit-container {
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
      width: 60vw;
      max-height: 70vh;
      margin-bottom: @floor-height;
      animation: cao-yi-cao .5s infinite;
    }
  }
}

@keyframes cao-yi-cao {
  0%   {transform: skewX(0)}
  50%  {transform: skewX(-5deg)}
  100% {transform: skewX(0)}
}
</style>
