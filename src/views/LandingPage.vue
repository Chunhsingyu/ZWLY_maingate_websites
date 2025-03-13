<template>
  <div class="landing-page">
    <h1>欢迎来到我们的网站</h1>
    <p>这是我们的首页内容。</p>
    <router-link to="/dashboard">前往仪表盘</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
  setup() {
    return {};
  }
});
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
  color: #42b983;
}

router-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>