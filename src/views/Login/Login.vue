<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { nanoid } from 'nanoid'
import { Flash, ShieldCheckmark } from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'
import TagText from '../../components/TagText.vue'

const router = useRouter();
const message = useMessage()
const user_name = ref(null)
const id = nanoid(10)
const loading = ref(false)

const submit = () => {
  console.log('开始认证')
  loading.value = true
  // 写入localStorage
  localStorage.setItem('id', id)
  localStorage.setItem('user_name', user_name.value?user_name.value:'匿名用户')
  loading.value = false
  message.success(
    `${user_name.value?user_name.value:'匿名用户'}认证成功！正在跳转...`
  )
  router.push('/')
}
</script>

<template>
  <div class="container">
    <n-card :bordered="false" class="boxShadow">
      <!-- <div class="title">统一身份认证系统</div> -->
      <!-- <div class="title">单点登录</div>
      <div class="remarks">Single Sign On</div> -->
      <div style="padding-bottom: 25px;">
        <div class="title">统一身份认证系统</div>
        <div class="remarks">Unified identity certification system</div>
        <div class="tags">
          <n-space style="align-items: center;justify-content: center;">
            <n-tag :bordered="false" type="success">
              无感认证 v2.0
              <template #icon>
                <n-icon :component="Flash" />
              </template>
            </n-tag>
            <!-- <n-tag :bordered="false" type="info">
              硬件随机
            </n-tag> -->
          </n-space>
        </div>
      </div>
      <!-- <div>
        <n-card
          embedded
        >
          <div>认证用于登陆 Bottle</div>
          <div class="app_info">
            <n-avatar :style="{
                color: 'yellow',
                backgroundColor: '#1da1f2',
                marginRight: '10px'
              }">
              <svg t="1657272777599" class="logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11999" width="200" height="200" data-v-41458b80=""><path d="M682.666667 426.666667V298.666667a85.333333 85.333333 0 0 0-85.333334-85.333334h-170.666666a85.333333 85.333333 0 0 0-85.333334 85.333334v128a42.666667 42.666667 0 0 0 42.666667 42.666666v82.773334a42.666667 42.666667 0 0 0-42.666667 42.666666V938.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h256a42.666667 42.666667 0 0 0 42.666667-42.666666v-343.893334a42.666667 42.666667 0 0 0-42.666667-42.666666V469.333333a42.666667 42.666667 0 0 0 42.666667-42.666666zM448 128h128a21.333333 21.333333 0 0 0 21.333333-21.333333V85.333333a42.666667 42.666667 0 0 0-42.666666-42.666666h-85.333334a42.666667 42.666667 0 0 0-42.666666 42.666666v21.333334a21.333333 21.333333 0 0 0 21.333333 21.333333z" p-id="12000" data-spm-anchor-id="a313x.7781069.0.i8" class="selected" fill="#fff" data-v-41458b80=""></path></svg>
            </n-avatar>
            <div>
              <div style="font-size: 15px;">Bottle</div>
              <div style="font-size: 10px;color: #657786;">获取用户名</div>
            </div>
          </div>
        </n-card>
      </div>
      <n-divider /> -->
      <div>
        <n-space vertical>
          <div class="input">
            <TagText style="padding-right: 15px;">识别码</TagText>
            <n-tag :bordered="false" type="info">
              {{ id }}
            </n-tag>
          </div>
          <div class="input">
            <TagText style="padding-right: 15px;">用户名</TagText>
            <n-input v-model:value="user_name" type="text" placeholder="希望怎么样称呼你？" />
          </div>
        </n-space>
      </div>
      <div class="button">
        <n-button type="primary" :loading="loading" style="width: 100%;" @click="submit()">
          认证
          <template #icon>
            <n-icon>
              <ShieldCheckmark />
            </n-icon>
          </template>
        </n-button>
      </div>
    </n-card>
  </div>
</template>

<style scoped>
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

.title {
  font-size: 25px;
  text-align: center;
  color: #504847;
}

.tags {
  text-align: center;
  padding-top: 10px;
 
}

.input {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}

.remarks {
  text-align: center;
  color: #657786;
}

.button {
  padding-top: 20px;
}

.app_info {
  display: flex;
  align-items: center;
}
</style>