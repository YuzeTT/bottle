<script setup>
import Card from '../../components/Card.vue';
</script>

<template>
  <div class="animate__fadeInDown container">
    <Card :title="'qwq'" :remarks="'1'">
      1
    </Card>
  </div>
</template>

<style scoped>
@import url(../../assets/css/animationCommon.css);

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
}
</style>