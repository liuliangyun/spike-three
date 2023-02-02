<template>
  <div class="chart-container">
    <div class="title">使用状态</div>
    <div class="content">
      <v-chart :options="data.options" class="chart" />
      <div class="statistics">
        <div class="item">{{data.name}}</div>
        <div class="item">
          <span>面积</span>
          <span>{{data.area}}</span>
        </div>
        <div class="item">
          <span>用途</span>
          <span>{{data.usage}}</span>
        </div>
        <div class="operations"><button>查看室内</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/gauge'

export default {
  name: 'StatisticsChart',
  components: {
    VChart: ECharts,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  }
}
</script>
<style lang="scss" scoped>
.chart-container {
  padding: 0.52083vw 0.625vw;
  background: rgba(30,30,30,.76);
  color: #ebebeb;
  width: 300px;
  .title {
    background: #4b4b4b;
    padding: 0 5px;
  }
  .content {
    display: flex;
    align-items: center;
    .chart {
      width: 150px;
      height: 140px;
    }
    .statistics {
      flex: 1;
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .operations {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
