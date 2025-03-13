<template>
  <div class="analytics-panel">
    <h2>数据分析面板</h2>
    <p>这里是数据分析的内容。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AnalyticsPanel',
  setup() {
    return {};
  }
});
</script>

<style scoped>
.analytics-panel {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

h2 {
  font-size: 1.5rem;
  color: #2c3e50;
}

p {
  font-size: 1rem;
  color: #666;
}
</style>