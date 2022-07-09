<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'large'
  },
})
</script>

<template>
  <n-tag :bordered="false" :size="props.size" :color="{ color: '#fff'}"><slot/></n-tag>
</template>

<style scoped>

</style>