<template>
<!--  <model-obj src="static/test2.obj" mtl="static/test2.mtl"></model-obj>-->
<!--  <model-collada src="static/elf/elf.dae"></model-collada>-->
  <div class="vue-3d-model-container">
    <model-gltf src="static/glTF/Duck.gltf"></model-gltf>
    <model-obj src="static/tree.obj" @on-mousemove="onMouseMove"></model-obj>
  </div>
</template>
<script>
import { ModelObj, ModelCollada, ModelGltf } from 'vue-3d-model'

export default {
  name: 'TestVue3DModel',
  components: {
    ModelObj,
    ModelCollada,
    ModelGltf,
  },
  data () {
    return {
      intersected: null,
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .vue-3d-model-container {
    display: flex;
    align-items: center;
  }
</style>
