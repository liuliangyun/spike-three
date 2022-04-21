<template>
  <div>
    <div id="lines-container"></div>
    <div id="info">Description</div>
  </div>
</template>
<script>
  import * as THREE from 'three'

  export default {
    name: 'DrawingLines',
    data () {
      return {
        scene: null,
        camera: null,
        renderer: null,
        line: null,
      }
    },
    methods: {
      init () {
        // 初始化三要素：场景scene、相机camera、渲染器renderer
        this.scene = new THREE.Scene()

        const container = document.getElementById('lines-container')
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 500)
        this.camera.position.set(0, 0, 100)
        this.camera.lookAt(0, 0, 0)

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(container.clientWidth, container.clientHeight)
        container.appendChild(this.renderer.domElement)

        // 初始化物料
        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } )  // 创建line颜色
        const points = []
        points.push(new THREE.Vector3(-10, 0, 0))
        points.push(new THREE.Vector3(0, 10, 0))
        points.push(new THREE.Vector3(10, 0, 0))
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        this.line = new THREE.Line(geometry, material)  // 应用点集和颜色创建线

        // 将物料加入场景
        this.scene.add(this.line)
      },
    },
    mounted () {
      this.init()
      this.renderer.render( this.scene, this.camera )
    }
  }
</script>
<style>
#lines-container {
  height: 100vh;
}
#info {
  color: white;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display:block;
}
</style>