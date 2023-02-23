<template>
  <v-chart
      class="bar-chart"
      :options="barOptions"
      autoresize="autoresize"
  />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import variables from "@/styles/variable.scss";
import { chartOptions } from '@/share/pages/chart/chartUtils'

export default {
  name: 'barChart',
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
      horizontalAxis: this.chartData.horizontalAxis,
      datalist: this.chartData.datalist,
    }
  },
  computed: {
    barOptions () {
      return {
        grid: {
          left: "10%",
          top: "10%",
          right: "10%",
          bottom: "30%",
          containLabel: false
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
        legend: {
          ...chartOptions.legend,
          data: Array.from(this.datalist,({name})=>name),
        },
        color:[variables['color-orange'],'#9B9C9C'],
        xAxis: {
          ...chartOptions.xAxisConfig,
          data: this.horizontalAxis,
        },
        yAxis: {
          ...chartOptions.yAxisConfig,
        },
        series: this.getBarSeries(this.datalist)
      }
    }
  },
  methods: {
    getBarSeries(params){
      return params.map( item => ( {
        ...item,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        barWidth: 5
      }))
    }
  },
}
</script>

<style scoped>

.bar-chart {
  width: 100%;
  height: 100%;
}
</style>
