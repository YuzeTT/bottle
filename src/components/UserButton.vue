<script setup>
import { PersonCircle } from '@vicons/ionicons5'
const user_name = localStorage.getItem('user_name')
</script>

<template>
  <n-button secondary type="success" round v-if="user_name">
    <template #icon>
      <n-icon>
        <PersonCircle />
        <!-- <IdCard /> -->
      </n-icon>
    </template>
    {{ user_name }}
  </n-button>
</template>

<style scoped>

</style>