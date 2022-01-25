<template>
  <div class="jack-container">
    <div class="main-box">
      <div class="person-block"></div>
    </div>
  </div>
</template>

<style lang="less" scope>
@import '../assets/less/themes';
@import '../assets/less/layout';

@floor-height: 60px;
@jump-height: @floor-height + 100px;

.jack-container {
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
      width: 100%;
      height: 100%;
      animation: jack .2s infinite;
      background: center no-repeat;
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

@keyframes jack {
  0% {
    background-image: url('../assets/img/person-jump-1-xyr.png');
  }
  49% {
    background-image: url('../assets/img/person-jump-1-xyr.png');
  }
  50% {
    background-image: url('../assets/img/person-jump-2-xyr.png');
  }
  99% {
    background-image: url('../assets/img/person-jump-2-xyr.png');
  }
}
</style>
