<template>
  <div class="dashboard-wrapper">
    <sidebar/>
  </div>
</template>
  
<script>
  import SurveyData from "./SurveyData"
  import GeneralCharts from "./GeneralCharts"
  import Sidebar from "./Sidebar"

  export default {
    name: 'DashBoard',
    components: {
      SurveyData,
      GeneralCharts,
      Sidebar
    },
  }
</script>
  
<style lang="scss" scoped>
  
</style>
  