<template>
  <div class="line-chart">
    <v-chart
        :options= "this.selectOption(type,unit)"
        autoresize="autoresize"
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import variables from "@/styles/variable.scss";
import { chartOptions, getAreaStyle } from '@/share/pages/chart/chartUtils'

export default {
  name: 'lineChart',
  components: {
    VChart: ECharts,
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      unit: this.chartData.unit,
      type: this.chartData.type,
      horizontalAxis: this.chartData.horizontalAxis,
      datalist: this.chartData.datalist,
    }
  },
  computed: {
    singleUnitGrid () {
      return {
        top: '25%',
        left: '12%',
        right: '7%',
        bottom: '30%',
      }
    },
    doubleUnitGrid () {
      return {
        ...this.singleUnitGrid,
        right: '12%',
      }
    },
    yAxisSingleUnitConfig(){
      return function(unit){
        return {
          ...chartOptions.yAxisConfig,
          name: unit,
        }
      }
    },
    yAxisDoubleUnitConfig () {
      return function(unitList){
        return unitList.map((item)=>({
          ...chartOptions.yAxisConfig,
          name: item,
        }));
      }
    },
  },
  methods: {
    selectOption(type, unit){
      let color = [];
      switch (type) {
        case 'singleUnit':
          color = ["#fff", variables['color-green'], variables['color-orange']]
          break;
        case 'doubleUnit':
          color = [variables['color-orange'],variables['color-green']]
          break;
        case 'doubleUnitWithBar':
          color = ["#9B9C9C", variables['color-green']]
          break;
        case 'trend':
          color = ["#FFFFFF", variables['color-orange'],variables['color-green']]
          break;
        default:
          break;
      }
      return {
        legend: {
          ...chartOptions.legend,
          data: Array.from(this.datalist,({name})=>name),
        },
        tooltip: {
          ...chartOptions.tooltip,
          formatter: function (params) {
            let htmlStr = `<span style="color: "white"">${params[0].axisValue}</span>`;
            for (let i = 0; i < params.length; i++) {
              let param = params[i];
              let { seriesName,value,color} = param
              htmlStr += `<div>
                            <span style="margin-right:5px; display:inline-block; width:10px; height:10px; border-radius:5px; background-color:${color}"></span>
                            <span style="color: "white"">${seriesName} : ${value}</span>
                          </div>`
            }
            return htmlStr;
          },
        },
        xAxis: {
          ...chartOptions.xAxisConfig,
          data: this.horizontalAxis,
          boundaryGap: false,
        },
        series: this.optionSeries(this.datalist,color,this.type),
        grid: type.indexOf("double") !== -1 ? this.doubleUnitGrid: this.singleUnitGrid,
        yAxis: type.indexOf("double") !== -1 ? this.yAxisDoubleUnitConfig(unit) : this.yAxisSingleUnitConfig(unit),
      }
    },
    optionSeries (params,color,type) {
      let newSeries = [];
      let circleSymbolConfig = {
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 3,
          color: '#FFFFFF'
        },
      }

      switch (type){
        case 'singleUnit':
          newSeries = params.map((item, index) => ({
            ...item,
            ...circleSymbolConfig,
            color: color[index],
          }))
          break;
        case 'doubleUnit':
          newSeries = params.map((item, index) => ({
            ...item,
            ...circleSymbolConfig,
            yAxisIndex: index,
            color: color[index],
          }))
          break;
        case 'doubleUnitWithBar':
          newSeries = params.map((item, index) => {
            if (index === 0) return ({
              ...item,
              yAxisIndex: index,
              color: color[index],
              barWidth: 8,
            })
            return ({
              ...item,
              ...circleSymbolConfig,
              yAxisIndex: index,
              color: color[index],
            })
          })
          break;
        case 'trend':
          newSeries = params.map((item, index) => ( {
            ...item,
            lineStyle: {
              width: 3,
            },
            symbol: "none",
            smooth: true,
            color: color[index],
            areaStyle: getAreaStyle(color[index]),
          }))
          break;
        default:
          break;
      }
      return newSeries
    },
  },
}
</script>

<style lang="scss" scoped>

.line-chart {
  width: 100%;
  height: 100%;
  .echarts{
    width: 100%;
    height: 100%;
  }
}
</style>
