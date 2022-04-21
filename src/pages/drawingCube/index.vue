<template>
  <!-- 一定要在container外层加一个div -->
  <div>
    <div id="cube-container"></div>
  </div>
</template>
<script>
import * as THREE from 'three'

export default {
  name: 'DrawingCube',
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    }
  },
  methods: {
    init () {
      // 初始化三要素：场景scene、相机camera、渲染器renderer
      this.scene = new THREE.Scene()

      const container = document.getElementById('cube-container')
      this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      this.camera.position.z = 5  // 将相机与魔方分开，保留一点距离

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      // 初始化物料
      const geometry = new THREE.BoxGeometry()  // 创建一个箱型几何体
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )  // 创建mesh颜色
      this.mesh = new THREE.Mesh( geometry, material )  // 应用箱型几何体和颜色创建魔方

      // 将物料加入场景
      this.scene.add(this.mesh)
    },
    // 循环渲染
    animate() {
      // 每次刷新屏幕时都会重绘场景
      requestAnimationFrame( this.animate )

      // 动作，魔方旋转
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01

      // 调用渲染器
      this.renderer.render( this.scene, this.camera )
    },
  },
  mounted () {
    this.init()
    this.animate()
  }
}
</script>
<style lang="scss" scoped>
// 必须给定container的高度
#cube-container {
  height: 100vh;
}
</style>