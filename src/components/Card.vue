<script setup>
const props = defineProps({
  title: String,
  remarks: String,
})
</script>

<template>
  <n-card :bordered="false">
    <div style="padding-bottom: 15px">
      <div class="title">{{props.title}}</div>
      <div class="remarks">{{props.remarks}}</div>
    </div>
    <slot/>
  </n-card>
</template>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 500;
  color: #14171a;
  /* padding-bottom: 5px; */
}

.remarks {
  font-size: 15px;
  font-weight: normal;
  color: #657786;
}
</style>