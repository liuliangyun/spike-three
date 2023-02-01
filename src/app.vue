<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App',
  }
</script>
<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  padding: 0;
}

.viewer-container div {
  position: absolute !important;
  left: 0px !important;
  opacity: 1 !important;
}

.viewer-canvas {
  width: 100%;
  height: 100%;
}
</style>
