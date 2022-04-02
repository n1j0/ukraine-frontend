<script>
export default {
  name: 'Activities'
}
</script>

<template>
  <div class="px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <div class="font-bold text-900 text-5xl mb-5 text-center">Mögliche Aktivitäten</div>
      <div class="u-grid">
        <div class="grid-item shadow-2 p-4 surface-card">
          <img src="~assets/svg/jogging.svg" class="mb-3">
          <div class="text-center">
            <div class="text-xl text-900 font-medium mb-2">Laufen</div>
          </div>
        </div>
        <div class="grid-item shadow-2 p-4 surface-card">
          <img src="~assets/svg/walking.svg" class="mb-3">
          <div class="text-center">
            <div class="text-xl text-900 font-medium mb-2">Spazieren</div>
          </div>
        </div>
        <div class="grid-item shadow-2 p-4 surface-card">
          <img src="~assets/svg/cycling.svg" class="mb-3">
          <div class="text-center">
            <div class="text-xl text-900 font-medium mb-2">Rad fahren</div>
          </div>
        </div>
        <div class="grid-item shadow-2 p-4 surface-card">
          <img src="~assets/svg/surfer.svg" class="mb-3">
          <div class="text-center">
            <div class="text-xl text-900 font-medium mb-2">Anderes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.u-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
}

@media (min-width: 768px) {
  .u-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .u-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-item img {
  max-width: 100%;
}
</style>
