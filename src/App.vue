<template>
  <!-- 全局主题 -->
  <van-config-provider :theme-vars="themeVars">
    <!-- 开启顶部安全区适配 -->
    <van-nav-bar safe-area-inset-top />
    
    <!-- nav -->
    <header-tab />

    <!-- 路由视图 -->
    <router-view/>

    <!-- play -->
    <play />

    <!-- 开启底部安全区适配 -->
    <van-number-keyboard safe-area-inset-bottom />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 

import HeaderTab from './components/HeaderTab.vue';
import Play from './components/Play.vue';

export default defineComponent({
  components: { HeaderTab ,Play },
  setup() {
    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = {
    }

    return {
      themeVars
    };
  },
})
</script>

<style lang="less" scoped>
</style>
