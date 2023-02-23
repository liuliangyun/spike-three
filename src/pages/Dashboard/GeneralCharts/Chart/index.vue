<template>
  <div class="chart">
    <component
      :is="type+'-chart'"
      :chartData="this.data"
    />
  </div>
</template>

<script>
import lineChart from './LineChart.vue'
import barChart from './BarChart.vue'
import pieChart from './PieChart.vue'

export default {
  name: 'Chart',
  components: {
    lineChart,
    barChart,
    pieChart,
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({}),
    },
  },
  data () {
    return {
      type: this.chartData.type,
      data: this.chartData.chart,
    }
  },
}
</script>

<style scoped>

  .chart {
    width: 100%;
    height: calc(max(100vh , 102px));
    min-height:122px;
    display: flex;
    justify-content: center;
  }
</style>
