<template>
  <div class="survey-data">
    <div class="factory-info board">
      <div class="title">
        工厂信息
      </div>
      <div class="factory-intro">
        <p v-for="item in factoryIntro">{{ item.title }} : {{ item.value }}</p>
      </div>
      <div class="factory-statistic">
        <div class="factory-statistic-item" v-for="item in factoryStatistic">
          <p><span>{{ item.statistics }}</span>{{ item.units }}</p>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="core-data board">
      <div class="title">
        当月核心指数
      </div>
      <div class="total-output">
        <img src="@/assets/img/totalOutput.png" alt="生产总值">
        <div class="total-product">
          <div>
            <span>{{ this.totalProduct.title }}</span>
            <span>
              <span class="total-product-data">{{ this.totalProduct.number }}</span>{{ this.totalProduct.units }}
            </span>
          </div>
          <div>
            <span>同比</span>
            <span>
              <span class="total-product-data">{{ this.totalProduct.compare }}</span>
              <i :class='this.totalProduct.compare.indexOf("+") !== -1 ? "webfonts-uparrow":"webfonts-downarrow"'></i>
            </span>
          </div>
        </div>
      </div>
      <div class="core-various-statistics">
        <div class="core-various-statistics-item" v-for="item in coreVariousStatistics">
          <div class="item-data">
            <i :class="item.icon"></i>
            <div class="various-data">
              <p><span>{{ item.data }}</span>{{ item.units }}</p>
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div class="compare">
            <span>同比</span>
            <span>
              <span>{{ item.compare }}</span>
              <i :class='item.compare.indexOf("+") !== -1 ? "webfonts-uparrow":"webfonts-downarrow"'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="real-time-survey board">
      <div class="title">
        环境实时监测
      </div>
      <div class="real-time-survey-container">
        <div class="real-time-survey-item" v-for="item in realTimeSurvey">
          <div class="survey-grade">{{ item.grade }}</div>
          <p class="survey-score">{{ item.score }}</p>
          <div class="survey-title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SurveyData',
    data(){
      return{
        factoryIntro:[{
          title:'工厂名称',
          value:'南京芯视元电子有限公司'
        },{
          title:'工厂位置',
          value:'南京市浦口区星火路14号'
        },{
          title:'建成时间',
          value:'2006-09-10'
        }],
        factoryStatistic:[{
          name: '注册资金',
          statistics: 3,
          units: '千万',
        },{
          name: '固定资产总值',
          statistics: 6,
          units: '千万',
        },{
          name: '年生产总值',
          statistics: 8,
          units: '千万',
        },{
          name: '年纳税额',
          statistics: 2.7,
          units: '千万',
        },{
          name: '解决就业人数',
          statistics: 1903,
          units: '人',
        },{
          name: '占地面积',
          statistics: 45,
          units: '万亩',
        }],
        totalProduct:{
          title: '生产总值',
          number: '1411',
          units: '万',
          compare: '+43%'
        },
        coreVariousStatistics:[{
          data: 94,
          units: '%',
          name: '生产完成率',
          compare: '+21%',
          icon: 'webfonts-complete',
        },{
          data: 92,
          units: '%',
          name: '生产合格率',
          compare: '+29%',
          icon: 'webfonts-eligible',
        },{
          data: 80,
          units: '万件',
          name: '计划生产量',
          compare: '+7%',
          icon: 'webfonts-planProduct',
        },{
          data: 92,
          units: '%',
          name: '实际生产量',
          compare: '+23%',
          icon: 'webfonts-realProduct',
        },{
          data: 94,
          units: '千瓦',
          name: '电能消耗',
          compare: '-27%',
          icon: 'webfonts-electricConsume',
        },{
          data: 91,
          units: '吨',
          name: '用水消耗',
          compare: '-18%',
          icon: 'webfonts-waterConsume',
        }],
        realTimeSurvey:[{
          grade: '良',
          score: 98,
          title: '空气污染',
          icon: 'webfonts-air'
        },{
          grade: '良',
          score: 38,
          title: '水质污染',
          icon: 'webfonts-water'
        },{
          grade: '良',
          score: 10,
          title: '土壤污染',
          icon: 'webfonts-soilContamination'
        },]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/variable.scss';

  .survey-data{
    position: absolute;
    left: 2.4vw;
    top: 3.5vw;
    width: calc(max(18.4vw,248px));
    font-size: 0.6vw;

    > div {
      margin-top: 0.3vw;
    }

    :first-child{
      margin-top: 0;
    }

    .board{
      background: $color-deep-background;
      padding: 0.5vw;
      .title{
        background: linear-gradient(-45deg, transparent 5px, #4b4b4b 0);
        line-height: 1.2vw;
        padding-left: 8px;
      }
    }

    .factory-info{
      width: 100%;
      .factory-intro{
        padding: 0.5vw;
        border-bottom: 2px dashed #5d5d5d;
        p{
          line-height: 1.6vw;
        }
      }
      .factory-statistic{
        padding: 0 0.5vw;
        display: flex;
        flex-wrap: wrap;
        .factory-statistic-item{
          flex: 0 0 33.3%;
          padding-top: 4%;
          span{
            color:  $color-orange;
            font-size: 1.4vw;
          }
        }
      }
    }

    .core-data{
      width: 100%;
      .total-output{
        margin-top: 2%;
        padding: 2% 14%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 26%;
          height: 26%;
        }
        .total-product{
          width: 62%;
          div:first-child {
            border-bottom: 1px solid #dbdbdb;
          }
          div{
            display: flex;
            justify-content: space-between;
            line-height: 2.5vw;

            .total-product-data{
              font-size: calc(min(1.4vw, 22px));
            }
            i{
              font-size: calc(min(1.4vw, 22px));
              position: relative;
              top: 3px;
            }
          }
        }
      }
      .core-various-statistics{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .core-various-statistics-item{
          flex: 0 0 47.5%;
          background-color: rgba(75,75,75,.5);
          border: 1px solid #8f8585;
          margin-bottom: 3%;
          .item-data{
            height: 2.4vw;
            padding: 0 8%;
            display: flex;
            align-items: center;
            i{
              font-size: 1.5vw;
              flex: 1;
            }
            .various-data{
              flex: 2;
              span{
                font-size: 1vw;
              }
            }
          }
          .compare{
            padding: 1% 8%;
            display: flex;
            justify-content: space-between;
            background-color: rgba(143,133,133,.5);
            i{
              position: relative;
              top: 8%;
            }
          }
        }

      }
    }

    .real-time-survey{
      width: 100%;
      .real-time-survey-container{
        display: flex;
        .real-time-survey-item{
          flex: 0 0 33.3%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3% 0;

          .survey-grade{
            width: 30%;
            border-radius: 12%;
            background-color: $color-green;
            text-align: center;
          }
          .survey-score{
            font-size: 1.3vw;
            line-height: 2.5vw;
          }
          .survey-title{
            font-size: 0.6vw;
            i{
              color: $color-icon-default;
              position: relative;
              top: 14%;
              margin-right: 3px;
            }
          }
        }
      }
    }
  }
</style>
