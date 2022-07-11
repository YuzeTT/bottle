<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'large'
  },
  fontSize: String,
})
</script>

<template>
  <n-tag :bordered="false" :size="props.size" :color="{ color: '#fff'}" :style="props.fontSize?{fontSize: props.fontSize}:''"><slot/></n-tag>
</template>

<style scoped>

</style>