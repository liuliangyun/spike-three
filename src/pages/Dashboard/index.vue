<template>
  <div class="dashboard-wrapper">
    <Header/>
    <sidebar/>
    <survey-data/>
    <router-view></router-view>
    <charts/>
  </div>
</template>

<script>
  import Header from "./Header"
  import SurveyData from "./SurveyData"
  import Charts from "./Charts"
  import Sidebar from "./Sidebar"

  export default {
    name: 'DashBoard',
    components: {
      Header,
      SurveyData,
      Charts,
      Sidebar
    },
  }
</script>

<style lang="scss" scoped>

</style>
