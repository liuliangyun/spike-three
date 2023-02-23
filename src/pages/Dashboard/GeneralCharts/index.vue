<template>
  <div class="general-charts">
    <div class="show-charts-icon" @click="alterChartsVisible()">
      <i :class="this.showCharts? 'webfonts-unfold':'webfonts-hidden'"></i>
    </div>
    <el-drawer
      :visible.sync="this.showCharts"
      class="charts"
      :with-header="false"
      :modal="false"
      size="100%"
    >
      <div class="row" v-for="chartsListItem in chartsList">
        <div class="board" v-for="chartItem in chartsListItem" :key="chartItem.id">
          <div class="title">
            {{ chartItem.title }}
          </div>
          <chart :chartData="chartItem.data"/>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { Drawer } from 'element-ui'
import Chart from "./Chart/index.vue";
  export default {
    name: 'GeneralCharts',
    components:{
      ElDrawer: Drawer,
      Chart
    },
    data(){
      return{
        showCharts: false,
        lineCharts: [{
          id: 1,
          title: '当月能量消耗',
          data: {
            type: 'line',
            chart: {
              type: 'doubleUnit',
              horizontalAxis: ['2.1','2.5','2.10','2.15','2.20','2.28'],
              unit: ["千瓦","吨"],
              datalist: [{
                type: 'line',
                name: '用水',
                data: [14.17, 14.03, 16.04, 14.78, 13.9, 13.28]
              },{
                type: 'line',
                name: '用电',
                data: [7, 7.25, 7.99, 7.42, 7.75, 5.67]
              }],
            }
          }
        },{
          id: 2,
          title: '当月销售额趋势',
          data: {
            type: 'line',
            chart: {
              type: 'singleUnit',
              horizontalAxis: ['2.1','2.5','2.10','2.15','2.20','2.28'],
              unit: "百万",
              datalist: [{
                type: 'line',
                name: '产品A',
                data: [7, 7.25, 7.99, 7.42, 7.75, 5.67]
              },{
                type: 'line',
                name: '产品B',
                data: [14.17, 14.03, 16.04, 14.78, 13.9, 13.28]
              },{
                type: 'line',
                name: '产品C',
                data: [14.78, 13.9, 13.28, 14.17, 14.03, 16.04]
              }],
            }
          }
        },{
          id: 3,
          title: '当月生产总值趋势',
          data: {
            type: 'line',
            chart: {
              type: 'doubleUnitWithBar',
              horizontalAxis: ['2.1','2.5','2.10','2.15','2.20','2.28'],
              unit: ["百万",""],
              datalist: [{
                type: 'bar',
                name: '生产总值',
                data: [7, 7.25, 7.99, 7.42, 7.75, 5.67]
              },{
                type: 'line',
                name: '增长率',
                data: [14.17, 14.03, 16.04, 14.78, 13.9, 13.28]
              }],
            }
          }
        }],
        pieCharts: [{
          id: 11,
          title: '当月销售占比',
          data: {
            type: 'pie',
            chart: {
              type: 'annular',
              data:[{
                text: '产品A',
                value: 67,
                subtext: '销量 840',
              },{
                text: '产品B',
                value: 60,
                subtext: '销量 849',
              },{
                text: '产品C',
                value: 66,
                subtext: '销量 808',
              },{
                text: '产品D',
                value: 95,
                subtext: '销量 829',
              }]
            }
          }
        },{
          id: 22,
          title: '当月生产总值占比',
          data: {
            type: 'pie',
            chart: {
              type: 'panel',
              data:[{
                text: '产品A',
                value: 67,
                subtext: '销量 840',
              },{
                text: '产品B',
                value: 60,
                subtext: '销量 849',
              },{
                text: '产品C',
                value: 66,
                subtext: '销量 808',
              },{
                text: '产品D',
                value: 95,
                subtext: '销量 829',
              }]
            }
          }
        }],
        barCharts: [{
          id: 111,
          title: '生产总值同期对比',
          data: {
            type: 'bar',
            chart:{
              horizontalAxis: ['1月', '2月'],
              datalist:[{
                name: '去年',
                data: [120, 200],
              },{
                name: '今年',
                data: [70, 30],
              }]

            }
          }
        }],
        curveCharts: [
          {
            id: 1111,
            title: '当月能量趋势图',
            data: {
              type: 'line',
              chart: {
                type: 'trend',
                horizontalAxis: ['1月', '2月', '3月', '4月', '5月', '6月'],
                unit: "万件",
                datalist: [{
                  type: 'line',
                  name: "产品A",
                  data: [20, 30, 40, 35, 34, 15,]
                },{
                  type: 'line',
                  name: "产品B",
                  data: [40, 35, 34, 15, 56, 15]
                },{
                  type: 'line',
                  name: "产品C",
                  data: [12, 25, 34, 42, 20, 30]
                }],
              }
            }
          }],
      }
    },
    computed:{
      chartsList() {
        return [this.lineCharts, this.pieCharts, this.barCharts, this.curveCharts]
      },
    },
    methods:{
      alterChartsVisible(){
        this.showCharts = !this.showCharts;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";

  .general-charts {
    position: absolute;
    right: 0;
    top: 3.5vw;
    font-size: 0.6vw;
    display: flex;

    .show-charts-icon{
      height: fit-content;
      padding: 5px;
      margin-right: 3px;
      background: $color-deep-background;
      color: $color-icon-default;
    }

    .charts{
      position: static !important;
      width: calc(max(40vw,544px));
      .row{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 0.5%;
        margin-bottom: 0.2vw;
        .board{
          flex: 0 0 33%;
          background: $color-deep-background;
          padding: 0.5vw;
          .title{
            background: linear-gradient(-45deg, transparent 5px, #4b4b4b 0);
            line-height: 1.2vw;
            padding-left: 8px;
          }
          .chart{
            height: 8vw;
          }
        }
      }
    }
  }
</style>
