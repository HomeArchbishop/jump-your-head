<template>
  <div class="home-container">
    <div class="main-box">
      <div class="nav-list">
        <router-link
          :to="{ name: item.toName }"
          custom
          v-slot="{ navigate }"
          v-for="(item, index) in [
            { toName: 'JumpView', content: '跳绳' },
            { toName: 'RunView', content: '跑步' },
            { toName: 'SitView', content: '坐位体前屈' },
            { toName: 'JackView', content: '开合跳' },
            { toName: 'PlankView', content: '平板支撑' },
            { toName: 'SideView', content: '左右横跳' },
          ]"
          :key="index"
        >
          <div @click="navigate" class="nav-option-btn" role="button">{{ item.content }}</div>
        </router-link>
      </div>
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
  margin-top: @header-height;
  width: 100%;
  overflow: scroll;
  .main-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    .nav-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 40px;
      .nav-option-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        height: 40px;
        width: 60%;
        max-width: 440px;
        min-width: 10em;
        padding: 1.3em 1.7em;
        border-radius: @radius-default;
        box-shadow: 0 0 10px 0 @color-dark-2;
        cursor: pointer;
        user-select: none;
        transition-duration: 200ms;
        &:hover {
          box-shadow: 0 0 10px 0 @color-dark-4;
        }
        &:not(:nth-child(1)) {
          margin-top: 24px;
        }
        &:nth-last-child(1) {
          margin-bottom: 36px;
        }
      }
    }
  }
}
</style>
