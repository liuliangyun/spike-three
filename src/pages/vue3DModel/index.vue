<template>
  <model-obj src="static/house13.obj" mtl="static/house13.mtl"></model-obj>
<!--  <model-collada src="static/elf/elf.dae"></model-collada>-->
<!--  <div class="vue-3d-model-container">-->
<!--    <model-gltf src="static/glTF/Duck.gltf"></model-gltf>-->
<!--    <model-obj src="static/tree.obj" @on-mousemove="onMouseMove"></model-obj>-->
<!--  </div>-->
</template>
<!--<template>-->
<!--  <div class="main">-->
<!--    <div class="header-container">-->
<!--      <div class="header">-->
<!--        <div class="logo">-->
<!--          <img src="static/logo.png" />-->
<!--        </div>-->
<!--        <div class="title">-->
<!--          <span title="热烈欢迎市领导莅临我厂考察指导工作~~"> 热烈欢迎市领导莅临我厂考察指导工作~~</span>-->
<!--        </div>-->
<!--        <div class="date">-->
<!--          <span>2022年04月25日 星期一 20:42&nbsp;&nbsp;|&nbsp;&nbsp;30℃ 晴天</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="model-container">-->
<!--      <div v-for="(house, index) in houses">-->
<!--        <span class="name" :id="`start${index}`">-->
<!--          {{house.name}}-->
<!--        </span>-->
<!--        <statistics-chart v-show="house.showStatisticsData" :data="house.data" class="statistics-chart" :id="`end${index}`" />-->
<!--        <model-obj-->
<!--          :src="house.src"-->
<!--          :position="position"-->
<!--          :rotation="rotation"-->
<!--          :scale="scale"-->
<!--          :backgroundColor="0x000102"-->
<!--          :controlsOptions="{-->
<!--            enableZoom,-->
<!--            enableRotate,-->
<!--            maxDistance: 1500,-->
<!--          }"-->
<!--          @on-mousemove="(event) => onMouseMove(event, index)"-->
<!--          @on-click="(event) => onClick(event, index)"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<script>
import { ModelObj, ModelCollada, ModelGltf } from 'vue-3d-model'
import { vue3dLoader } from 'vue-3d-loader'
import StatisticsChart from './statisticsChart'
import LeaderLine from '../../utils/leader-line.min'

export default {
  name: 'TestVue3DModel',
  components: {
    ModelObj,
    ModelCollada,
    ModelGltf,
    vue3dLoader,
    StatisticsChart,
  },
  data () {
    return {
      houses: [{
        name: '一号厂房',
        src: 'static/house.obj',
        showStatisticsData: false,
        lineContainer: null,
        data: {
          name: '一号厂房',
          options: {
            series: [
              {
                name: '一号厂房',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: [[0.53, '#FFAB91'], [1, '#e7ebf7']],
                    width: 10,
                  },
                },
                splitLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                title: {
                  show: true,
                  offsetCenter: [0, '-5%'],
                  color: '#ebebeb',
                },
                detail: {
                  show: true,
                  formatter: '{value}%',
                  fontSize: 20,
                },
                data: [
                  {
                    value: 53,
                    name: '占用面积'
                  }
                ]
              }
            ],
          },
          area: 23,
          usage: '生产',
        },
      }, {
        name: '二号厂房',
        src: 'static/house.obj',
        showStatisticsData: false,
        lineContainer: null,
        data: {
          name: '二号厂房',
          options: {
            series: [
              {
                name: '二号厂房',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: [[0.53, '#FFAB91'], [1, '#e7ebf7']],
                    width: 10,
                  },
                },
                splitLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                title: {
                  show: true,
                  offsetCenter: [0, '-5%'],
                  color: '#ebebeb',
                },
                detail: {
                  show: true,
                  formatter: '{value}%',
                  fontSize: 20,
                },
                data: [
                  {
                    value: 53,
                    name: '占用面积'
                  }
                ]
              }
            ],
          },
          area: 23,
          usage: '生产',
        },
      }, {
        name: '三号厂房',
        src: 'static/house.obj',
        showStatisticsData: false,
        lineContainer: null,
        data: {
          name: '三号厂房',
          options: {
            series: [
              {
                name: '三号厂房',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: [[0.53, '#FFAB91'], [1, '#e7ebf7']],
                    width: 10,
                  },
                },
                splitLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                title: {
                  show: true,
                  offsetCenter: [0, '-5%'],
                  color: '#ebebeb',
                },
                detail: {
                  show: true,
                  formatter: '{value}%',
                  fontSize: 20,
                },
                data: [
                  {
                    value: 53,
                    name: '占用面积'
                  }
                ]
              }
            ],
          },
          area: 23,
          usage: '生产',
        },
      }, {
        name: '四号厂房',
        src: 'static/house.obj',
        showStatisticsData: false,
        lineContainer: null,
        data: {
          name: '四号厂房',
          options: {
            series: [
              {
                name: '四号厂房',
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: [[0.53, '#FFAB91'], [1, '#e7ebf7']],
                    width: 10,
                  },
                },
                splitLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                title: {
                  show: true,
                  offsetCenter: [0, '-5%'],
                  color: '#ebebeb',
                },
                detail: {
                  show: true,
                  formatter: '{value}%',
                  fontSize: 20,
                },
                data: [
                  {
                    value: 53,
                    name: '占用面积'
                  }
                ]
              }
            ],
          },
          area: 23,
          usage: '生产',
        },
      }],
      position: {
        x: 400,
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
    onMouseMove (event, index) {
      // console.log(event)
      // this.houses[index].showStatisticsData = !!event
      // if (!event) {
      //   if (this.intersected) {
      //     this.intersected.material.color.setStyle('#fff')
      //   }
      //   this.intersected = null
      //   return
      // }
      //
      // this.intersected = event.object
      // this.intersected.material.color.setStyle('#13ce66')
    },
    onClick (event, index) {
      this.houses[index].showStatisticsData = !!event
      if (this.houses[index].showStatisticsData) {
        this.$nextTick(() => {
          if (!this.houses[index].lineContainer) {
            let startEle = document.getElementById(`start${index}`)
            let endEle = document.getElementById(`end${index}`)
            this.houses[index].lineContainer = new LeaderLine(startEle,endEle,{ hide: true, dash: true, path: 'straight' })
          }
          this.houses[index].lineContainer.show('fade')
        })
      } else {
        this.houses[index].lineContainer.hide()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .main {
    height: 100%;
    background-color: #000102;
  }
  .model-container {
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 49%;
      height: 49%;
      position: relative;
      .name {
        position: absolute;
        left: 350px;
        top: 130px;
        color: #FFAB91;
        font-size: 20px;
        font-weight: bold;
        width: 100px;
      }
      .statistics-chart {
        position: absolute;
        left: 500px;
        top: 120px;
        z-index: 1;
      }
    }
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
