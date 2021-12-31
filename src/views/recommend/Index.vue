<template>
  <div class="">
    <van-tabs v-model:active="active" sticky>
      <van-tab v-for="(index) in 4" :title="'选项 ' + index" :key="index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

    <!-- 路由视图 -->
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
  data() {
    return {
       navList: [
         {}
       ]
    }
  }
  
});
</script>

<style lang="less" scoped>
</style>