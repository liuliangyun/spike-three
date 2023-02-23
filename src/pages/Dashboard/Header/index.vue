<template>
  <div class="header-container">
  <div class="header">
    <div class="logo">
      <img src="static/logo.png" />
    </div>
    <div class="title">
      <span title="热烈欢迎市领导莅临我厂考察指导工作~~"> 热烈欢迎市领导莅临我厂考察指导工作~~</span>
    </div>
    <div class="date">
      <span>2022年04月25日 星期一 20:42&nbsp;&nbsp;|&nbsp;&nbsp;30℃ 晴天</span>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>

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
