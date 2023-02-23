<template>
  <div>
    <div id="load-model-container" @click="toggleCount"></div>
    <div class="count" v-if="showCount">
      <div class="count-header">
        <span>已连接</span>
      </div>
      <div class="count-content">
        <div>
          <p class="count-content-title">工厂</p>
          <p>1<span>&nbsp;个</span></p>
        </div>
        <div>
          <p class="count-content-title">设备</p>
          <p>6<span>&nbsp;台</span></p>
        </div>
        <div>
          <p class="count-content-title">传感器</p>
          <p>15<span>&nbsp;个</span></p>
        </div>
      </div>
    </div>
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
        container: null,
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
        showCount: false,
      }
    },
    methods: {
      init () {
        this.scene = new THREE.Scene()

        this.container = document.getElementById('load-model-container')


        // render 配置
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
        this.renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        this.renderer.shadowMap.enabled = true  // 允许在场景中使用阴影贴图
        this.container.appendChild(this.renderer.domElement)


        // camera 配置
        this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 0.25, 100000)//透视摄像机


        // control 配置
        this.controls = new MapControls( this.camera, this.renderer.domElement )
        this.camera.position.set(5000, 500, -2000)  //设置相机位置，正面看建筑
        this.controls.update()  // controls.update() must be called after any manual changes to the camera's transform


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
      //鼠标双击触发的方法
      onMouseClick(event) {
        //获取raycaster和所有模型相交的数组，其中的元素按照距离排序，越近的越靠前
        let intersects = this.getIntersects(event);
        // console.log(intersects);
        // console.log(intersects[0].object);

        //获取选中最近的Mesh对象
        //instance坐标是对象，右边是类，判断对象是不是属于这个类的
        if (intersects.length !== 0 && intersects[0].object.type === 'Mesh') {
          console.log('selected', intersects)
          this.showCount = !this.showCount
          // selectObject = intersects[0].object;
          //changeMaterial(selectObject)
        } else {
          console.log('未选中 Mesh!');
        }
      },
      //获取与射线相交的对象数组
      getIntersects(event) {
        event.preventDefault();// 阻止默认的点击事件执行, https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
        //console.log("event.clientX:" + event.clientX);
        //console.log("event.clientY:" + event.clientY);

        //声明 rayCaster 和 mouse 变量
        let rayCaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();

        //通过鼠标点击位置，计算出raycaster所需点的位置，以屏幕为中心点，范围-1到1
        mouse.x = ((event.clientX - this.container.getBoundingClientRect().left) / this.container.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - this.container.getBoundingClientRect().top) / this.container.clientHeight) * 2 + 1; //这里为什么是-号，没有就无法点中

        //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
        rayCaster.setFromCamera(mouse, this.camera);

        //获取与射线相交的对象数组， 其中的元素按照距离排序，越近的越靠前。
        //+true，是对其后代进行查找，这个在这里必须加，因为模型是由很多部分组成的，后代非常多。
        let intersects = rayCaster.intersectObjects(this.scene.children, true);

        //返回选中的对象
        return intersects;
      },
      toggleCount() {
        this.showCount = !this.showCount
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
      // addEventListener('click', this.onMouseClick, false);
      this.animate()
    }
  }
</script>
<style lang="scss" scoped>
// 必须给定container的高度
#load-model-container {
  height: 100vh;
}
.count {
  background: linear-gradient(0deg, #000, transparent);
  color: #ebebeb;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  &-header {
    padding-left: 30px;
    font-size: 18px;
    font-weight: 500;
    opacity: .75;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &-title {
      font-size: 16px;
      font-weight: 600;
      position: relative;
      padding-left: 8px;
      color: rgba(200, 228, 255, .66);

      &::before {
        content: '';
        position: absolute;
        left: -6px;
        width: 6px;
        height: 20px;
        background: rgba(123, 214, 199, .83);
      }
    }

    p:last-child {
      font-size: 40px;
      opacity: .83;

      span {
        font-size: 14px;
        opacity: .41;
      }
    }
  }
}
</style>
