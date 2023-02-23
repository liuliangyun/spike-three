<template>
  <div class="annular-chart" v-if="chartData.type === 'annular'">
    <v-chart
      v-for="item in chartData.data"
      :options="annularOptions(item)"
      autoresize="autoresize"
    />
  </div>
  <div class="panel-chart" v-else>
    <v-chart
      id="panel-options"
      :options="panelOptions"
      autoresize="autoresize"
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import * as echarts from "echarts"
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import variables from "@/styles/variable.scss";

export default {
  name: 'pieChart',
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
      annularColors:[variables['color-orange'], 'rgba(155,156,156,0.3)','#fff'],
      panelColors:['#9e9f9e', '#cbcbcb',variables['color-orange'], '#ff9d58'],
    }
  },
  mounted() {
    let myChart = echarts.init(document.getElementById('panel-options'));

    let defaultIndex = 1;
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: defaultIndex,
    });
    myChart.on('mouseover', function(e){
      if (e.dataIndex != defaultIndex) {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: defaultIndex,
        });
      }
    })
    myChart.on('mouseout', function(e){
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex,
      });
      defaultIndex = e.dataIndex
    })
  },
  methods:{
  },
  computed: {
    annularOptions () {
      return function (item) {
        return {
          title: {
            text: item.text,
            subtext: item.subtext,
            right: '4%',
            top: '18%',
            textAlign: 'left',
            textStyle: {
              fontWeight: 'normal',
              fontSize: '120%',
              color: this.annularColors[2],
            },
            subtextStyle:{
              fontWeight: 'normal',
              fontSize: '110%',
              color: this.annularColors[2],
            }
          },
          series: {
            name: item.text,
            type: 'pie',
            clockWise: false,
            radius: ['53%', '60%'],
            center: ['18%', '52%'],
            itemStyle:  {
              normal: {
                color: this.annularColors[0],
                shadowColor: this.annularColors[0],
                shadowBlur: 0,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
              }
            },
            hoverAnimation: false,
            data: [{
              value: item.value,
              label: {
                normal: {
                  formatter: function(params){
                    return params.value+'%';
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '100%',
                    color: this.annularColors[2]
                  }
                }
              },
            }, {
              value: 100-item.value,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: this.annularColors[1]
                },
                emphasis: {
                  color: this.annularColors[1]
                }
              }
            }]
          }
        }
      }
    },
    panelData(){
      let sum = 0;
      let newPanelData = this.chartData.data.map((item,index)=>{
        sum += item.value;
        return ({ ...item, name:item.text, itemStyle:{color:this.panelColors[index]}})
      })
      newPanelData.push({
        value: sum,
        itemStyle: {
          color: 'transparent'
        }
      });
      return newPanelData
    },
    panelOptions(){
      return {
        legend: {
          bottom: '2%',
          left: 'center',
          itemWidth: 10,
          itemHeight: 5,
          itemGap: 10,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 10,
          }
        },
        series: [
          {
            type: 'pie',
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 12,
                formatter:"{d}%\n{b}",
                color: '#FFFFFF'
              },
            },
            center: ['50%', '60%'],
            radius: ['82%', '95%'],
            startAngle: 180,
            data: this.panelData
          }
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>

  .annular-chart {
    width: 100%;
    padding: 5% 0;
    display: flex;
    flex-wrap: wrap;

    .echarts{
      flex: 0 0 49% !important;
      width: 100%;
      height: 50%;
    }
  }

  .panel-chart{
    width: 100%;
    padding: 5% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .echarts{
      width: 100%;
      height: 100%;
    }
  }

</style>
