<!-- src/components/Header/Header.vue -->
<template>
  <header class="site-header">
    <div class="logo">
      <img :src="logoUrl" alt="Site Logo">
    </div>
    <nav class="main-nav">
      <ul>
        <li v-for="item in navItems" :key="item.text">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const logoUrl = '/images/logo.png'
const navItems = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' }
]
</script>

<style scoped lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}
</style>