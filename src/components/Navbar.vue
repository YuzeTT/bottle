<script setup>
import { ref } from 'vue';
import { nanoid } from 'nanoid'

const coding = ref(false)
const id = nanoid(10)
</script>

<template>
  <div class="navbar">
    <div class="left">
      <div><svg t="1657272777599" class="logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11999" width="200" height="200"><path d="M682.666667 426.666667V298.666667a85.333333 85.333333 0 0 0-85.333334-85.333334h-170.666666a85.333333 85.333333 0 0 0-85.333334 85.333334v128a42.666667 42.666667 0 0 0 42.666667 42.666666v82.773334a42.666667 42.666667 0 0 0-42.666667 42.666666V938.666667a42.666667 42.666667 0 0 0 42.666667 42.666666h256a42.666667 42.666667 0 0 0 42.666667-42.666666v-343.893334a42.666667 42.666667 0 0 0-42.666667-42.666666V469.333333a42.666667 42.666667 0 0 0 42.666667-42.666666zM448 128h128a21.333333 21.333333 0 0 0 21.333333-21.333333V85.333333a42.666667 42.666667 0 0 0-42.666666-42.666666h-85.333334a42.666667 42.666667 0 0 0-42.666666 42.666666v21.333334a21.333333 21.333333 0 0 0 21.333333 21.333333z" p-id="12000" data-spm-anchor-id="a313x.7781069.0.i8" class="selected" fill="#1da1f2"></path></svg></div>
      <div class="title">
        <span style="color: #1da1f2;">B</span>
        <span>ottle</span>
      </div>
    </div>
    <div class="right">
      <n-button strong secondary :type="coding?'warning':'tertiary'" @click="coding=!coding">
        开发模式 {{ coding?'ON':'OFF' }}
      </n-button>
    </div>
  </div>
  <n-watermark
    v-if="coding"
    :content="id"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
  
</template>

<style scoped>
.navbar {
  padding: 15px 15px;
  max-width: 500px;
  margin: 0 auto;
  font-size: 30px;
  color: #504847;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;
}

.left {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  align-items: center;
}

.logo {
  width: 35px;
  height: 35px;
  vertical-align: -10%;
}
</style>