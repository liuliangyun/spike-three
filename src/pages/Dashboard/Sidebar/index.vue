<template>
  <div class="sidebar">
    <div class="menu-item" v-for="item in menuList">
      <el-tooltip effect="light" :content="item.title" placement="left">
        <div class="tooltip" >
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
        </div>
      </el-tooltip>
      <div class="space-line"></div>
    </div>
  </div>
</template>

<script>
  import { Tooltip } from "element-ui";

  export default {
    name: 'Sidebar',

    components: {
      ElTooltip: Tooltip
    },

    data() {
      return {
        menuList:[{
          title: '厂区',
          icon: 'webfonts-factory'
        },{
          title: '车间',
          icon: 'webfonts-workshop'
        },{
          title: '仓库',
          icon: 'webfonts-warehouse'
        },{
          title: '机房',
          icon: 'webfonts-machineroom'
        },{
          title: '办公',
          icon: 'webfonts-office'
        },]
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '@/styles/variable.scss';

.sidebar{
  position: absolute;
  left: 0;
  top: 3.5vw;
  width: 2.1vw;
  background: $color-deep-background;
  border-radius: 0 0.625vw 0.625vw 0;

  :first-child > .tooltip > .icon{
      background-color: $color-icon-activated-bg;
  }

  .menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;

    .tooltip{
      margin: 3.5vw 0;
      display: flex;
      justify-content: center;

      .icon{
        width: 1.5vw;
        height: 1.5vw;
        border: solid 1px $color-icon-default;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-icon-default;
        font-size: 1vw;
      }
    }

    :global(.el-tooltip__popper){
      border: 0 !important;
      background: $color-deep-background !important;
    }

    :global(.el-tooltip__popper[x-placement^=right] .popper__arrow){
      border: 0 !important;
    }

    :global(.el-tooltip__popper[x-placement^=right] .popper__arrow:after){
      border-right-color: $color-deep-background !important;
    }

    .space-line{
      background-color: $color-deep-shadow;
      width: 60%;
      height: 2px;
    }
  }
}
</style>
