<script setup>
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui'
import Card from '../../components/Card.vue';
import bottleConfig from '../../bottle.config';

const message = useMessage()
const print = (type,text) => {
  console.log(
    `%c ${type} %c ${text}`,
    'background:#35495e ; padding: 1px; border-radius: 3px;  color: #fff',
    'background:transparent'
  )
}

const router = useRouter();
const go = (path) => {
  router.push(path);
};

const id = localStorage.getItem('id')
const user_name = localStorage.getItem('user_name')
if(id===null) {
  print('DEBUG', '未登录，正在跳转 /login...')
  router.push('/login');
}else {
  print('DEBUG', `已登录 [${id}] `+user_name)
  message.success(`欢迎回来！${user_name}`,{ duration: 1000, placement: 'bottom' })
}
</script>

<template>
  <div class="container">
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
          @click="go(button.path)"
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