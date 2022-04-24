<template>
  <div>
    <div id="load-model-container"></div>
  </div>
</template>
<script>
  import * as THREE from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
  import { MapControls } from 'three/examples/jsm/controls/OrbitControls'

  export default {
    name: 'Loader',
    data () {
      return {
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
      }
    },
    methods: {
      init () {
        this.scene = new THREE.Scene()

        const container = document.getElementById('load-model-container')


        // render 配置
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(container.clientWidth, container.clientHeight)
        this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        this.renderer.shadowMap.enabled = true  // 允许在场景中使用阴影贴图
        container.appendChild(this.renderer.domElement)


        // camera 配置
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.25, 100000)//透视摄像机

        this.controls = new MapControls( this.camera, this.renderer.domElement )

        // 修改 camera 配置，controls.update() must be called after any manual changes to the camera's transform
        this.camera.position.set(5000, 500, -2000)  //设置相机位置，正面看建筑
        this.controls.update()


        // scene 配置
        this.load3D()

        this.loadLight()
      },
      load3D() {
        const loader = new GLTFLoader()
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/examples/js/libs/draco/')
        loader.setDRACOLoader(dracoLoader)

        let that = this
        loader.load('/static/test.glb', (gltf) => {
          gltf.scene.position.set(0, 0, 25)
          that.scene.add(gltf.scene)
        }, (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        }, (error) => {
          console.error(error)
        })
      },
      loadLight() {
        // 点光源
        // const point = new Three.PointLight(0xffffff)
        // point.position.set(4000, 4000, 4000) // 点光源位置
        // this.scene.add(point) // 点光源添加到场景中
        // 环境光
        const ambient = new THREE.AmbientLight(0xFFFFFF)
        this.scene.add(ambient)
      },
      animate() {
        // 每次刷新屏幕时都会重绘场景
        requestAnimationFrame( this.animate )
        this.controls.update()

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
#load-model-container {
  height: 100vh;
}
</style>