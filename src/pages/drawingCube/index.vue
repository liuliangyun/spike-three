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
      this.camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 1000)
      this.camera.position.z = 5  // 将相机与魔方分开，保留一点距离

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      // 初始化物料
      const geometry = new THREE.BoxGeometry()  // 创建一个箱型几何体
      const material = [
          new THREE.MeshBasicMaterial( { color: 'blue' }),    // right
          new THREE.MeshBasicMaterial( { color: 'yellow' }),  // left
          new THREE.MeshBasicMaterial( { map: new THREE.CanvasTexture(this.getTextCanvas()) }),  // top
          new THREE.MeshBasicMaterial( { color: 'black' }),   // bottom
          new THREE.MeshBasicMaterial( { color: 'green' }),  // back
          new THREE.MeshBasicMaterial( { color: 'red' }),  // front
      ]  // 创建mesh颜色
      this.mesh = new THREE.Mesh( geometry, material )  // 应用箱型几何体和颜色创建魔方

      // 将物料加入场景
      this.scene.add(this.mesh)
    },
    getTextCanvas () {
      let texts = [{
        name: '北京',
        value: 323,
      }, {
        name: '杭州',
        value: 121,
      }, {
        name: '南京',
        value: 56,
      }]
      let width=512, height=256
      let canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.fillStyle = '#C3C3C3'
      ctx.fillRect(0, 0, width, height)
      ctx.font = 32+'px " bold'
      ctx.fillStyle = '#2891FF'
      texts.forEach((text, index) => {
        ctx.fillText(`${text.name}:${text.value}`, 10, 32 * index + 30)
      })
      return canvas
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