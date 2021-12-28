/**
 * 全局自定义组件 大写 例如 NodeData
 */

// 暂无数据
export const NoData = {
  template: `<div class="t-c t-gray" style="padding:100px 0;">
              <el-image :src="src" fit="cover" style="width:400px;"></el-image> 
              <p>暂无数据</p>
            </div>`,
  props: {},
  data () {
    return {
      src: require('@/assets/img/common/noData.png')
    }
  }

}

export default {
  NoData
}