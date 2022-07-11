<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useMessage } from 'naive-ui'

const router = useRouter();
const route = useRoute();
const message = useMessage()
const log = (type,text) => {
  console.log(
    `%c ${type} %c ${text}`,
    'background:#35495e ; padding: 1px; border-radius: 3px;  color: #fff',
    'background:transparent'
  )
}

onMounted(() => {
  const id = localStorage.getItem('id')
  const user_name = localStorage.getItem('user_name')
  if(id===null) {
    log('DEBUG', '未登录，正在跳转 /login...')
    router.push('/login');
  }else {
    log('DEBUG', `已登录 [${id}] `+user_name)
    route.path==='/'?message.success(`自动登陆成功！`,{ duration: 1500 }):null
  }
});

</script>

<template>
  
</template>

<style scoped>

</style>