<template>
  <div class="main-header-container">
    <router-link
      :to="{ name: 'HomeView' }"
      custom
      v-slot="{ navigate }"
    >
      <div @click="navigate" class="title" role="link">/*跳你个头*/</div>
    </router-link>
    <router-link
      :to="{ name: item.toName }"
      custom
      v-slot="{ navigate }"
      v-for="(item, index) in [
        { toName: 'HomeView', content: '⛱ 首页' },
        { toName: 'AboutView', content: '📎 关于' }
      ]"
      :key="index"
    >
      <div @click="navigate" class="link" role="link">{{ item.content }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="less">
@import '../assets/less/themes';
@import '../assets/less/layout';

.main-header-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100vw;
  padding: 0 32px;
  height: @header-height;
  color: @color-anti-theme-10;
  position: absolute;
  z-index: 10;
  .title {
    display: flex;
    font-size: 20px;
    cursor: default;
    text-shadow: 0 0 1px @color-dark-4;
    border-radius: 6px;
    padding: 6px 10px;
    border-bottom: 1px solid @color-dark-4;
    background-color: @color-hover-bg;
  }
  .link {
    display: flex;
    font-size: 16px;
    cursor: pointer;
    transition-duration: 200ms;
    color: @color-dark-4;
    margin-left: 12px;
    border-radius: 6px;
    padding: 6px 10px;
    &:hover {
      text-shadow: 0 0 1px @color-dark-4;
      border-bottom: 1px solid @color-dark-4;
      background-color: @color-hover-bg;
    }
  }
}
</style>
