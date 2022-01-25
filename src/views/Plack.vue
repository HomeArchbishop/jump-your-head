<template>
  <div class="plank-container">
    <div class="main-box">
      <img class="person-block" src="../assets/img/person-plank-xyr.png" alt="person-sit" width="300">
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

@floor-height: 10%;

.plank-container {
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
      width: 80vw;
      max-height: 70vh;
      margin-bottom: @floor-height;
      animation: plank .5s infinite;
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

@keyframes plank {
  0%   {transform: translateY(0)}
  50%  {transform: translateY(10px)}
  100% {transform: translateY(0)}
}
</style>
