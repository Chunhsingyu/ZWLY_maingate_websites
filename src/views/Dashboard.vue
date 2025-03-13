<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <p>这是仪表盘页面，您可以查看数据分析。</p>
    <router-link to="/">返回首页</router-link>
    <router-view></router-view> <!-- 嵌套路由出口 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return {};
  }
});
</script>

<style scoped>
.dashboard {
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