<script setup>
const props = defineProps({
  title: String,
  remarks: String,
})
</script>

<template>
  <n-card :bordered="false">
  {{props.remarks}}
    <slot/>
  </n-card>
</template>

<style scoped>

</style>