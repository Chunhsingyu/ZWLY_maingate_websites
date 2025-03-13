<!-- src/components/DataCard.vue -->
<style lang="scss" scoped>
.card-wrapper {
  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  :deep(.third-party-class) {
    color: var(--text-color);
  }
}
</style>