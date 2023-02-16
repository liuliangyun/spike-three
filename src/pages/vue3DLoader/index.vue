<template>
  <div class="main">
    <div class="header-container">
      <div class="header">
        <div class="logo">
          <img src="static/logo.png" />
        </div>
        <div class="title">
          <span title="热烈欢迎市领导莅临我厂考察指导工作~~"> 热烈欢迎市领导莅临我厂考察指导工作~~</span>
        </div>
        <div class="date">
          <span>2022年04月25日 星期一 20:42&nbsp;&nbsp;|&nbsp;&nbsp;30℃ 晴天</span>
        </div>
      </div>
    </div>
    <div class="container">
      <vue3dLoader
        :filePath="['static/factory6-2.obj']"
        :mtlPath="['static/factory6-2.mtl']"
        :backgroundColor="0x000102"
        :position="position"
        :rotation="rotation"
        :scale="scale"
        :controlsOptions="{
          enablePan: true,
          enableZoom: true,
          enableRotate: true,
        }"
      />
    </div>
  </div>
</template>
<script>
import { vue3dLoader } from 'vue-3d-loader'

export default {
  name: 'TestVue3DLoader',
  components: {
    vue3dLoader,
  },
  data () {
    return {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0.7,
        y: -0.15,
        z: 0,
      },
      scale: {x:1.5, y:1.5, z:1.5},
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  background-color: #000102;
}
.container {
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
}
.header-container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.header {
  color: #ebebeb;
  height: 75px;
  background: linear-gradient(180deg, #000, transparent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;

  .logo {
    width: 327px;
    img {
      width: 100%;
    }
  }
  .title {
    width: calc(100% - 327px - 355px);
    padding: 0 20px;
  }
  .date {
    width: 355px;
  }
}
</style>
