<template>
  <div>
  <h1>大家好 我是能引入第三方非模块化js的组件</h1>
  <button type="button" @click="showLogist('RR12345678')">我要显示物流</button>
  <div id="logist">
  </div>
  <remote-js :js-url="'//www.17track.net/externalcall.js'" :js-load-call-back="loadRongJs"></remote-js>
  </div>
</template>
<script>

import remoteJs from '@/components/remoteJs'
export default {
  name: 'remotejs',
  props: {
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  components: {remoteJs},
  methods: {
    loadRongJs () {
    },
    // 查看物流
    showLogist (logNum) {
      /* eslint-disable */
      YQV5.trackSingle({
          // 必须，指定承载内容的容器ID。
          YQ_ContainerId: 'logist',
          // 可选，指定查询结果高度，最大为800px，默认为560px。
          YQ_Height: 560,
          // 可选，指定运输商，默认为自动识别。
          YQ_Fc: '0',
          // 可选，指定UI语言，默认根据浏览器自动识别。
          YQ_Lang: 'en',
          // 必须，指定要查询的单号。
          YQ_Num: logNum
      })
    }
  }
}
</script>
<style lang='css'>
</style>
