<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconSvg',
  props:{
    iconClass: {
      type: String,
      required: true
    }
  },
  computed:{
    iconName(){
      return `#i-${this.iconClass}`
    }
  }
});
</script>

<style lang="less" scoped>
.icon {
  width: 36px;
  height: 36px;
  // vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>