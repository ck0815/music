<template>
  <div>
    <van-sticky>
      <van-row class="header-con t-white p-l-30 p-r-30">
        <van-col span="2">
          <icon-svg icon-class="menu" class="icon-top"></icon-svg>
        </van-col>
        
        <van-col span="20">
          <div class="nav-con f36">
            <div>
              <router-link to="/">首页</router-link>
            </div>

            <div class="t-c">
              <router-link to="/recommend">推荐</router-link>
            </div>

            <div class="t-r">
              <router-link to="/find">发现</router-link>
            </div>
          </div>
        </van-col>

        <van-col span="2" class="t-r">
          <icon-svg icon-class="search" class="icon-top"></icon-svg>
        </van-col>
      </van-row>

    </van-sticky>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderTab',
  components: {
  },
});
</script>

<style lang="less" scoped>
.header-con{
  height: 88px;
  background: rebeccapurple;

  .nav-con{
    height: 88px;
    line-height: 88px;
    width: 421px;
    margin: 0 auto;
    > div{
      width: 140.333px;
      float: left;
      > a{
        color: #FEE2CE;
        &.router-link-active{
          color: white;
        }
      }
    }
  }

  .icon-top{
    width: 39px;
    height: 39px;
    margin: 24px 0;
  }
}
</style>