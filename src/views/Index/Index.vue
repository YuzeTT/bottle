<script setup>
import Card from '../../components/Card.vue';
import bottleConfig from '../../bottle.config';
</script>

<template>
  <div class="animate__bounceIn container">
    <Card
      class="boxShadow"
      v-for="(item,i) in bottleConfig.tools"
      :key="i"
      :title="item.title[0]"
      :remarks="item.title[1]"
    >
      <n-space>
        <n-button
          size="large"
          strong
          tertiary
          v-for="(button,i) in item.list"
          :key="i"
          :type="button.state"
        >
          {{ button.title }}
        </n-button>
      </n-space>
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

.boxShadow {
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08),
  0 3px 6px 0 rgba(0, 0, 0, 0.06),
  0 5px 12px 4px rgba(0, 0, 0, 0.04);
}
</style>