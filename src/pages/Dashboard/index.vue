<template>
  <div>
    DashBoard
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
  
<script>
  import Header from "./Header"
  import SurveyData from "./SurveyData"
  import GeneralCharts from "./GeneralCharts"
  import Sidebar from "./Sidebar"

  export default {
    name: 'DashBoard',
    components: {
      Header,
      SurveyData,
      GeneralCharts,
      Sidebar
    },
  }
</script>
  
<style lang="scss" scoped>
  
</style>
  