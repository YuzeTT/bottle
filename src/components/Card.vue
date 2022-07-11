<script setup>
const props = defineProps({
  title: String,
  remarks: String,
  shadow: {
    type: Boolean,
    default: true
  },
})
</script>

<template>
  <n-card :bordered="false" :class="props.shadow?'boxShadow':''">
    <div style="padding-bottom: 15px" v-if="title||remarks">
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

.boxShadow {
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08),
  0 3px 6px 0 rgba(0, 0, 0, 0.06),
  0 5px 12px 4px rgba(0, 0, 0, 0.04);
}
</style>