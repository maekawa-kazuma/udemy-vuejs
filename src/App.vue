<template>
<div>
  <LikeHeader>
      <h2>はじめまして</h2>
  </LikeHeader>
  <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <!-- <About v-if="currentComponent === 'About'"></About>
  <Home v-if="currentComponent === 'Home'"></Home> -->
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 20,
      currentComponent: Home
    };
  },
  components: {
    LikeHeader,
    About,
    Home
  }
}
</script>

<style scoped>

</style>