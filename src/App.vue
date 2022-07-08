<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <router-view/> -->
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition name="router_animate">
      <component :is="Component" />
    </transition>
  </router-view>
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
  background: #f5f5f5;
}

.router_animate-enter-active {
  animation: rollIn 1s;
}
.router_animate-leave-active {
  animation: rollOut 0.6s;
}
</style>
