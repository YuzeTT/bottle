<script setup>
import ToolsNavbar from '../../components/ToolsNavbar.vue';
import IsLogin from '../../utils/IsLogin.vue';
</script>

<template>
  <div class="container">
    <IsLogin/>
    <ToolsNavbar/>
    <router-view/>
  </div>
</template>

<style scoped>
.container {
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
}
</style>