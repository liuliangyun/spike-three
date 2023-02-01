<!--<template>-->
<!--  <model-obj src="static/test2.obj" mtl="static/test2.mtl"></model-obj>-->
<!--  <model-collada src="static/elf/elf.dae"></model-collada>-->
<!--  <div class="vue-3d-model-container">-->
<!--    <model-gltf src="static/glTF/Duck.gltf"></model-gltf>-->
<!--    <model-obj src="static/tree.obj" @on-mousemove="onMouseMove"></model-obj>-->
<!--  </div>-->
<!--</template>-->
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
    <div class="left-container">
      <vue3dLoader
        :filePath="['static/house.obj']"
        :position="position"
        :rotation="rotation"
        :scale="scale"
        :backgroundColor="0x000102"
        :controlsOptions="{
          enableZoom,
          enableRotate,
        }"
      />
    </div>
    <div class="right-container">
      <vue3dLoader
        :filePath="['static/house.obj']"
        :position="position"
        :rotation="rotation"
        :scale="scale"
        :backgroundColor="0x000102"
        :controlsOptions="{
          enableZoom,
          enableRotate,
        }"
      />
    </div>
  </div>
</template>
<script>
import { ModelObj, ModelCollada, ModelGltf } from 'vue-3d-model'
import { vue3dLoader } from 'vue-3d-loader'

export default {
  name: 'TestVue3DModel',
  components: {
    ModelObj,
    ModelCollada,
    ModelGltf,
    vue3dLoader,
  },
  data () {
    return {
      intersected: null,
      position: {
        x: 600,
        y: 300,
        z: 0,
      },
      rotation: {
        x: -Math.PI / 3,
        y: 0,
        z: 0.8,
      },
      scale: {x:1.5, y:1, z:1},
      enableZoom: true,
      enableRotate: false,
    }
  },
  methods: {
    onMouseMove (event) {
      console.log(event)
      if (!event) {
        if (this.intersected) {
          this.intersected.material.color.setStyle('#fff')
        }
        this.intersected = null
        return
      }

      this.intersected = event.object
      this.intersected.material.color.setStyle('#13ce66')
    },
  }
}
</script>
<style lang="scss" scoped>
  .main {
    height: 100%;
    background-color: #000102;
  }
  .left-container {
    position: absolute;
    top: 75px;
    left: 0;
    width: 50%;
    height: calc(100% - 80px);
  }
  .right-container {
    position: absolute;
    top: 75px;
    right: 0;
    width: 50%;
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
