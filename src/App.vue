<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <router-view/> -->
  <n-message-provider>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        name="slide-up"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </n-message-provider>
</template>

<style>
@font-face {
  font-family: "bom";
  src: url("./assets/fonts/bmo.ttf");
}

* {
  margin: 0;
  padding: 0;
  font-family: bom, Avenir, Helvetica, Arial, sans-serif;
}

html {
  /* background: #f5f5f5; */
  background: #fafafa;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.n-card {
  border-radius: 10px;
}
</style>
