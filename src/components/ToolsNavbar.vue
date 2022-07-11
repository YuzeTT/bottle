<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import UserButton from './UserButton.vue';

const route = useRoute();
const handleBack = () => {
  window.history.back();
}

const user_name = localStorage.getItem('user_name')
const title = ref(route.name);
</script>

<template>
  <div style="margin-bottom: 15px">
    <n-page-header subtitle="Bottle" @back="handleBack">
      <template #title>
        <span
          style="text-decoration: none; color: inherit"
        >{{ title }}</span>
      </template>
      <!-- <template #header>
        <n-breadcrumb>
          <n-breadcrumb-item>播客</n-breadcrumb-item>
          <n-breadcrumb-item>精选</n-breadcrumb-item>
        </n-breadcrumb>
      </template> -->
      <!-- <template #avatar>
        <n-avatar
          src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
        />
      </template> -->
      <template #extra v-if="user_name">
        <n-space>
          <UserButton/>
        </n-space>
      </template>
      <!-- <template #footer>
        
      </template> -->
    </n-page-header>
  </div>
</template>

<style scoped>

</style>