<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMessage } from 'naive-ui'
import axios from 'axios'
import { Code, Diamond, CheckmarkCircleSharp } from '@vicons/ionicons5';
import isLogin from '../../utils/IsLogin.vue';
import Navbar from '../../components/Navbar.vue';
import Card from '../../components/Card.vue';
import bottleConfig from '../../bottle.config';

const message = useMessage()

const hitokoto = ref('加载中...')

const router = useRouter();
const go = (path) => {
  router.push(path);
};

const id = localStorage.getItem('id')
const user_name = localStorage.getItem('user_name')
// if(id===null) {
//   print('DEBUG', '未登录，正在跳转 /login...')
//   router.push('/login');
// }else {
//   print('DEBUG', `已登录 [${id}] `+user_name)
//   message.success(`欢迎回来！${user_name}`,{ duration: 1000 })
// }

// 根据时间问好
const greet = () => {
  const now = new Date();
  const hour = now.getHours();
  if(hour<6) {
    return '凌晨好'
  }else if(hour<12) {
    return '上午好'
  }else if(hour<18) {
    return '下午好'
  }else {
    return '晚上好'
  }
}

axios.get('https://v1.hitokoto.cn/?c=d&encode=text')
  .then((data) => {
    console.log(data);
    hitokoto.value = data.data
  })
  .catch((err) => {
    console.log(err);
    hitokoto.value = '只要有想见面的人，自己就不再是孤单一人。'
  });
</script>

<template>
  <div>
    <isLogin/>
    <Navbar/>
    <div class="container">
      <Card class="cards" :title="`${user_name} ${greet()}！`">
        <!-- <div>今天是你使用 Bottle 的第 1 天</div> -->
        <div style="padding-bottom: 15px;" v-if="user_name==='YuzeTT'">
          <n-space>
            <n-tag :bordered="false" type="success">
              站长
              <template #icon>
                <n-icon :component="CheckmarkCircleSharp" />
              </template>
            </n-tag>
            <n-tag :bordered="false" type="info">
              开发者
              <template #icon>
                <n-icon :component="Code" />
              </template>
            </n-tag>
            <n-tag :bordered="false" type="warning">
              VIP
              <template #icon>
                <n-icon :component="Diamond" />
              </template>
            </n-tag>
          </n-space>
        </div>
        <div>{{ hitokoto }}</div>
      </Card>
      <Card class="cards" title="公告">
        <div style="display: flex;align-items: center">
          <n-tag :bordered="false" style="margin-right: 15px">
            类型
          </n-tag>
          <n-space style="align-items: center;">
            <div style="display: flex;align-items: center;">
              <n-badge dot type="error" />
              <span style="padding-left: 5px;">热门</span>
            </div>
            <div style="display: flex;align-items: center;">
              <n-badge dot type="info" />
              <span style="padding-left: 5px;">推荐</span>
            </div>
            <div style="display: flex;align-items: center;">
              <n-badge dot type="warning" />
              <span style="padding-left: 5px;">会员</span>
            </div>
            <div style="display: flex;align-items: center;">
              <n-badge dot color="purple" />
              <span style="padding-left: 5px;">维护</span>
            </div>
          </n-space>
        </div>
      </Card>
      <Card
        class="cards"
        v-for="(item,i) in bottleConfig.tools"
        :key="i"
        :title="item.title[0]"
        :remarks="item.title[1]"
      >
        <n-grid cols="2 s:3 m:4 l:4 xl:4 2xl:4" responsive="screen" :x-gap="12" :y-gap="8">
          <n-grid-item v-for="(button,i) in item.list"
              :key="i">
            <n-button
              size="large"
              strong
              tertiary
              style="width: 100%;"
              :type="button.state"
              @click="go(button.path)"
              :color="button.state==='coding'?'purple':''"
              :disabled="button.state==='coding'"
            >
              {{ button.title }}
            </n-button>
          </n-grid-item>
        </n-grid>
      </Card>
    </div>
  </div>
</template>

<style scoped>
@import url(../../assets/css/animationCommon.css);

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;
}

.cards {
  margin-bottom: 15px;
}
</style>